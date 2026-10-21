import { useId } from "react";
import { motion } from "framer-motion";

import {
  CYCLE,
  ERASE,
  centerStep,
  dotStep,
  petalStep,
  popKeyframes,
  stemStep,
  strokeKeyframes,
} from "./bloomTimeline";

// Pétala apontando para cima; as outras quatro são rotações de 72°.
// As coordenadas são rotacionadas aqui (e não com transform) para que o
// degradê atravesse a flor inteira, do rosa ao azul, como no logo oficial.
function rotate([x, y], angle) {
  const rad = (angle * Math.PI) / 180;
  const dx = x - 50;
  const dy = y - 50;

  return [
    +(50 + dx * Math.cos(rad) - dy * Math.sin(rad)).toFixed(2),
    +(50 + dx * Math.sin(rad) + dy * Math.cos(rad)).toFixed(2),
  ];
}

// O traço sai da base, sobe pelo lado esquerdo, contorna a ponta e desce
// pelo lado direito — a mesma ordem do desenho no reels.
const PETALS = [0, 72, 144, 216, 288].map((angle) => {
  const p = (point) => rotate(point, angle).join(" ");

  return {
    angle,
    petal: `M${p([50, 40])} C${p([41, 34])} ${p([41, 22])} ${p([50, 15])} C${p([59, 22])} ${p([59, 34])} ${p([50, 40])} Z`,
    stem: `M${p([50, 15])} L${p([50, 10])}`,
    dot: rotate([50, 7], angle),
  };
});

/** Desenha uma única vez: o traço cresce do início ao fim. */
function drawOnce({ start, dur }) {
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration: dur, delay: start, ease: "easeInOut" },
      opacity: { duration: 0.05, delay: start },
    },
  };
}

/** Desenha, segura, apaga e redesenha, para sempre. */
function drawLoop(step) {
  const { values, times } = strokeKeyframes(step);
  const fadeTimes = [0, step.start, step.start + 0.05, ERASE.start, ERASE.start + ERASE.dur, CYCLE].map(
    (seconds) => seconds / CYCLE,
  );

  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: values, opacity: [0, 0, 1, 1, 0, 0] },
    transition: {
      pathLength: { duration: CYCLE, times, ease: "easeInOut", repeat: Infinity },
      opacity: { duration: CYCLE, times: fadeTimes, repeat: Infinity },
    },
  };
}

function popOnce({ start }) {
  return {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 320, damping: 12, delay: start },
  };
}

function popLoop(step) {
  const { values, times } = popKeyframes(step);

  return {
    initial: { scale: 0 },
    animate: { scale: values },
    transition: { duration: CYCLE, times, ease: "easeInOut", repeat: Infinity },
  };
}

/**
 * Flor da BloomHub em SVG.
 * `animated` desenha a flor uma vez ao montar; `auto` desenha em loop
 * (desenha, segura, apaga e redesenha); `glow` adiciona o brilho neon.
 */
export default function BloomLogo({
  className,
  animated = false,
  glow = true,
  auto = false,
}) {
  // useId gera caracteres especiais; limpamos para usar dentro de url(#...).
  const gradientId = `bloom-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  const stroke = `url(#${gradientId})`;

  const draw = (step) => (auto ? drawLoop(step) : animated ? drawOnce(step) : {});
  const pop = (step) => (auto ? popLoop(step) : animated ? popOnce(step) : {});

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={
        glow
          ? { filter: "drop-shadow(0 0 6px rgba(217, 70, 239, 0.55))" }
          : undefined
      }
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="10"
          y1="15"
          x2="90"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff3fa4" />
          <stop offset="0.55" stopColor="#a855f7" />
          <stop offset="1" stopColor="#5b6cff" />
        </linearGradient>
      </defs>

      <motion.circle
        cx="50"
        cy="50"
        r="5.5"
        fill={stroke}
        style={{ transformOrigin: "50px 50px" }}
        {...pop(centerStep)}
      />

      {PETALS.map(({ angle, petal, stem, dot }, index) => (
        <g key={angle}>
          <motion.path
            d={petal}
            stroke={stroke}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...draw(petalStep(index))}
          />
          <motion.path
            d={stem}
            stroke={stroke}
            strokeWidth="4.5"
            strokeLinecap="round"
            {...draw(stemStep(index))}
          />
          <motion.circle
            cx={dot[0]}
            cy={dot[1]}
            r="4"
            fill={stroke}
            style={{ transformOrigin: `${dot[0]}px ${dot[1]}px` }}
            {...pop(dotStep(index))}
          />
        </g>
      ))}
    </svg>
  );
}
