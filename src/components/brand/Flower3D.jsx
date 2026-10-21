import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  BufferAttribute,
  Color,
  CubicBezierCurve3,
  CurvePath,
  LineCurve3,
  MathUtils,
  TubeGeometry,
  Vector3,
} from "three";

import {
  centerStep,
  dotStep,
  petalStep,
  popAt,
  progressAt,
  stemStep,
} from "./bloomTimeline";

/*
 * Flor da BloomHub em 3D (WebGL).
 * Mesmo desenho e mesma ordem do reels: o miolo aparece, cada pétala é
 * contornada por um tubo neon, a bolinha da ponta "estoura" e, no automático,
 * a flor se apaga e se redesenha. O mouse inclina a flor para mostrar o volume.
 */

const STOPS = [
  [0, new Color("#ff3fa4")],
  [0.55, new Color("#a855f7")],
  [1, new Color("#5b6cff")],
];

const PETAL_ANGLES = [0, 1, 2, 3, 4].map((i) => (i * 2 * Math.PI) / 5);
const PETAL_BASE = 1; // distância do centro até a base da pétala
const CUP = -0.18; // leve concavidade das pétalas, para dar volume

const PETAL_SEGMENTS = 120;
const PETAL_RADIAL = 16;
const HALO_SEGMENTS = 60;
const HALO_RADIAL = 10;
const STEM_SEGMENTS = 8;
const STEM_RADIAL = 12;

// Mesmo degradê diagonal do logo SVG (cima/esquerda → baixo/direita).
// Recebe coordenadas no "espaço do SVG" (0 a 100).
function brandColorAt(svgX, svgY, target = new Color()) {
  const t = MathUtils.clamp(
    ((svgX - 10) * 80 + (svgY - 15) * 75) / (80 * 80 + 75 * 75),
    0,
    1,
  );

  for (let i = 1; i < STOPS.length; i += 1) {
    const [end, endColor] = STOPS[i];
    const [start, startColor] = STOPS[i - 1];

    if (t <= end) {
      return target.copy(startColor).lerp(endColor, (t - start) / (end - start));
    }
  }

  return target.copy(STOPS[STOPS.length - 1][1]);
}

// Ponto local da pétala → posição na flor → cor do degradê.
function petalPointColor(x, y, angle, target) {
  const theta = -angle;
  const fy = y + PETAL_BASE;
  const px = x * Math.cos(theta) - fy * Math.sin(theta);
  const py = x * Math.sin(theta) + fy * Math.cos(theta);

  return brandColorAt(50 + px * 10, 50 - py * 10, target);
}

function colorize(geometry, angle) {
  const positions = geometry.attributes.position;
  const colors = new Float32Array(positions.count * 3);
  const color = new Color();

  for (let i = 0; i < positions.count; i += 1) {
    petalPointColor(positions.getX(i), positions.getY(i), angle, color);
    colors.set([color.r, color.g, color.b], i * 3);
  }

  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  return geometry;
}

// O traço sai da base, sobe pela esquerda, contorna a ponta e desce pela direita.
function petalCurve() {
  const v = (x, y) => new Vector3(x, y, 0);
  const path = new CurvePath();

  path.add(new CubicBezierCurve3(v(0, 0), v(-0.9, 0.6), v(-0.9, 1.8), v(0, 2.5)));
  path.add(new CubicBezierCurve3(v(0, 2.5), v(0.9, 1.8), v(0.9, 0.6), v(0, 0)));

  return path;
}

// Faz o brilho (emissive) seguir a cor de cada vértice, como um neon.
function neonVertexColors(shader) {
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <emissivemap_fragment>",
    "#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vColor.rgb;",
  );
}

/** Revela os primeiros `progress` (0 a 1) de um tubo, segmento a segmento. */
function reveal(geometry, progress, segments, radial) {
  geometry.setDrawRange(0, Math.floor(progress * segments) * radial * 6);
}

function Petal({ angle, index, clockRef }) {
  const head = useRef(null);
  const headMaterial = useRef(null);
  const tail = useRef(null);
  const dot = useRef(null);
  const pivot = useRef(null);

  const curve = useMemo(() => petalCurve(), []);
  const geometries = useMemo(
    () => ({
      petal: colorize(
        new TubeGeometry(curve, PETAL_SEGMENTS, 0.2, PETAL_RADIAL, true),
        angle,
      ),
      halo: colorize(
        new TubeGeometry(curve, HALO_SEGMENTS, 0.5, HALO_RADIAL, true),
        angle,
      ),
      stem: colorize(
        new TubeGeometry(
          new LineCurve3(new Vector3(0, 2.5, 0), new Vector3(0, 3, 0)),
          STEM_SEGMENTS,
          0.2,
          STEM_RADIAL,
          false,
        ),
        angle,
      ),
    }),
    [curve, angle],
  );

  useEffect(
    () => () => Object.values(geometries).forEach((geometry) => geometry.dispose()),
    [geometries],
  );

  const tipColor = useMemo(() => petalPointColor(0, 3.35, angle, new Color()), [angle]);
  const baseColor = useMemo(() => petalPointColor(0, 0, angle, new Color()), [angle]);
  const headPoint = useMemo(() => new Vector3(), []);
  const headColor = useMemo(() => new Color(), []);

  useFrame(({ clock }) => {
    const t = clockRef.current(clock);
    const drawn = progressAt(t, petalStep(index));

    reveal(geometries.petal, drawn, PETAL_SEGMENTS, PETAL_RADIAL);
    reveal(geometries.halo, drawn, HALO_SEGMENTS, HALO_RADIAL);
    reveal(geometries.stem, progressAt(t, stemStep(index)), STEM_SEGMENTS, STEM_RADIAL);

    // Pontas arredondadas do traço enquanto ele está sendo desenhado.
    tail.current.visible = drawn > 0;
    head.current.visible = drawn > 0 && drawn < 1;

    if (head.current.visible) {
      curve.getPointAt(drawn, headPoint);
      head.current.position.copy(headPoint);
      petalPointColor(headPoint.x, headPoint.y, angle, headColor);
      headMaterial.current.color.copy(headColor);
      headMaterial.current.emissive.copy(headColor);
    }

    dot.current.scale.setScalar(Math.max(popAt(t, dotStep(index)), 0.0001));

    // Respiração sutil quando a pétala está completa.
    pivot.current.rotation.x = CUP + Math.sin(clock.elapsedTime * 1.1 + index) * 0.04 * drawn;
  });

  const neon = (color) => ({
    color,
    emissive: color,
    emissiveIntensity: 1,
    roughness: 0.25,
    metalness: 0.35,
    toneMapped: false,
  });

  return (
    // Cada pétala aponta para o seu ângulo (sentido horário, como no SVG).
    <group rotation={[0, 0, -angle]}>
      <group ref={pivot} position={[0, PETAL_BASE, 0]} rotation={[CUP, 0, 0]}>
        <mesh geometry={geometries.petal}>
          <meshStandardMaterial
            vertexColors
            emissive="#ffffff"
            emissiveIntensity={0.85}
            roughness={0.25}
            metalness={0.35}
            toneMapped={false}
            onBeforeCompile={neonVertexColors}
          />
        </mesh>

        {/* Halo neon */}
        <mesh geometry={geometries.halo}>
          <meshBasicMaterial
            vertexColors
            transparent
            opacity={0.13}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        <mesh geometry={geometries.stem}>
          <meshStandardMaterial
            vertexColors
            emissive="#ffffff"
            emissiveIntensity={0.85}
            toneMapped={false}
            onBeforeCompile={neonVertexColors}
          />
        </mesh>

        <mesh ref={tail} visible={false}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial {...neon(baseColor)} />
        </mesh>

        <mesh ref={head} visible={false}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial ref={headMaterial} {...neon(tipColor)} />
        </mesh>

        <mesh ref={dot} position={[0, 3.35, 0]} scale={0.0001}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial {...neon(tipColor)} emissiveIntensity={1.15} />
        </mesh>
      </group>
    </group>
  );
}

function Flower({ reduceMotion, tilt }) {
  const group = useRef(null);
  const center = useRef(null);
  const centerColor = useMemo(() => brandColorAt(50, 50), []);
  const startedAt = useRef(null);

  // Relógio da animação: começa em zero quando a flor monta.
  // Com "reduzir movimento", a flor já aparece desenhada e parada.
  const clockRef = useRef((clock) => {
    if (reduceMotion) return 5;
    if (startedAt.current === null) startedAt.current = clock.elapsedTime;
    return clock.elapsedTime - startedAt.current;
  });

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clockRef.current(clock);
    center.current.scale.setScalar(Math.max(popAt(t, centerStep), 0.0001));

    if (!reduceMotion) {
      group.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.15;
    }

    // Inclina na direção do mouse (valores de -0.5 a 0.5) e balança de leve.
    const tx = tilt?.x.get() ?? 0;
    const ty = tilt?.y.get() ?? 0;
    const sway = reduceMotion ? 0 : Math.sin(clock.elapsedTime * 0.5) * 0.12;
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, ty * 0.9, 0.06);
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, tx * 1.1 + sway, 0.06);
  });

  return (
    <group ref={group}>
      {PETAL_ANGLES.map((angle, index) => (
        <Petal key={angle} angle={angle} index={index} clockRef={clockRef} />
      ))}

      <group ref={center} scale={0.0001}>
        <mesh>
          <sphereGeometry args={[0.62, 48, 48]} />
          <meshStandardMaterial
            color={centerColor}
            emissive={centerColor}
            emissiveIntensity={1.2}
            roughness={0.15}
            metalness={0.5}
            toneMapped={false}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshBasicMaterial
            color={centerColor}
            transparent
            opacity={0.15}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}

/** `tilt`: { x, y } — MotionValues do framer com a posição do mouse na cena. */
export default function Flower3D({ active = true, tilt, className = "" }) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      className={className}
      frameloop={active ? "always" : "never"}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 14.5], fov: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[-6, 5, 8]} intensity={80} color="#ff5fb4" />
      <pointLight position={[6, -5, 8]} intensity={80} color="#6b7cff" />
      <directionalLight position={[0, 0, 10]} intensity={0.6} />

      <Flower reduceMotion={reduceMotion} tilt={tilt} />
    </Canvas>
  );
}
