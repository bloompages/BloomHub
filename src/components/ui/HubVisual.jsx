import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaRobot, FaWindowMaximize, FaFilter, FaBell } from "react-icons/fa";

import BloomLogo from "../brand/BloomLogo";

// O Three.js só é baixado quando o hero monta, sem pesar o carregamento inicial.
const Flower3D = lazy(() => import("../brand/Flower3D"));

// Posições em % do quadrado; `depth` é a distância (em px) na direção da tela.
const nodes = [
  {
    icon: FaRobot,
    title: "Agente de IA",
    status: "Respondendo agora",
    x: 26,
    y: 20,
    depth: 45,
    typing: true,
  },
  {
    icon: FaWindowMaximize,
    title: "Landing Page",
    status: "+1 novo contato",
    x: 76,
    y: 70,
    depth: 70,
  },
  {
    icon: FaFilter,
    title: "CRM",
    status: "Follow-up agendado",
    x: 30,
    y: 78,
    depth: 30,
  },
];

const notifications = [
  "Novo contato pela landing page",
  "Agente respondeu em segundos",
  "Lead movido para “Proposta”",
  "Follow-up enviado automaticamente",
  "Horário agendado para amanhã",
];

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function TypingDots() {
  return (
    <span className="ml-1 inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.18 }}
          className="h-1 w-1 rounded-full bg-current"
        />
      ))}
    </span>
  );
}

function HubNode({ node, index }) {
  const Icon = node.icon;

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%`, z: node.depth }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 16,
          delay: 1.1 + index * 0.18,
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.06 }}
          className="flex w-40 items-center gap-2.5 rounded-2xl border border-white/10 bg-[#120f22]/85 p-3 shadow-2xl shadow-purple-900/40 backdrop-blur-xl sm:w-56"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30 sm:h-10 sm:w-10">
            <Icon aria-hidden="true" />
          </span>

          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white">
              {node.title}
            </span>

            <span className="flex items-center gap-1.5 text-[11px] text-white/60 sm:text-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="truncate">{node.status}</span>
              {node.typing && <TypingDots />}
            </span>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function HubVisual() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { margin: "100px" });
  const [notice, setNotice] = useState(0);
  const [webgl] = useState(supportsWebGL);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 80, damping: 18 });
  const mouseY = useSpring(rawY, { stiffness: 80, damping: 18 });
  const rotateY = useTransform(mouseX, (value) => value * 22);
  const rotateX = useTransform(mouseY, (value) => value * -22);

  useEffect(() => {
    const timer = setInterval(
      () => setNotice((current) => (current + 1) % notifications.length),
      2800,
    );

    return () => clearInterval(timer);
  }, []);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const fallbackFlower = (
    <div className="absolute inset-[18%]">
      <BloomLogo auto className="h-full w-full" />
    </div>
  );

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative mx-auto aspect-square w-full max-w-[540px]"
      style={{ perspective: 1100 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        {/* Anéis em camadas de profundidade, girando em sentidos opostos */}
        <motion.div
          aria-hidden="true"
          style={{ z: -120 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[4%] rounded-full border border-dashed border-purple-500/25"
        />
        <motion.div
          aria-hidden="true"
          style={{ z: -60 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[18%] rounded-full border border-pink-500/20"
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-400 shadow-[0_0_12px_#f472b6]" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          style={{ z: -20 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[30%] rounded-full border border-indigo-500/25"
        >
          <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
        </motion.div>

        {/* Conexões do centro até cada solução, com "pacotes" de dados */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="hub-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ec4899" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {nodes.map((node, index) => (
            <g key={node.title}>
              <motion.line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke="url(#hub-line)"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8, strokeDashoffset: [0, -14] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 + index * 0.15 },
                  strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
                }}
              />

              <motion.circle
                r="0.9"
                fill="#f0abfc"
                initial={{ cx: 50, cy: 50, opacity: 0 }}
                animate={{
                  cx: [50, node.x],
                  cy: [50, node.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  delay: 1.6 + index * 0.6,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}
        </svg>

        {/* Núcleo: a flor da BloomHub em 3D */}
        <motion.div
          style={{ z: 30 }}
          className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 1].map((ring) => (
            <motion.span
              key={ring}
              aria-hidden="true"
              animate={{ scale: [0.55, 1.25], opacity: [0.45, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: ring * 1.4,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border border-fuchsia-400/60"
            />
          ))}

          <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-pink-500/35 via-purple-500/25 to-indigo-500/35 blur-2xl" />

          {webgl ? (
            <Suspense fallback={fallbackFlower}>
              <Flower3D
                active={inView}
                tilt={{ x: mouseX, y: mouseY }}
              />
            </Suspense>
          ) : (
            fallbackFlower
          )}
        </motion.div>

        {nodes.map((node, index) => (
          <HubNode key={node.title} node={node} index={index} />
        ))}

        {/* Notificações em loop */}
        <motion.div
          style={{ z: 55 }}
          className="absolute bottom-[3%] right-[2%] flex h-10 items-center sm:right-[6%]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={notice}
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-[#120f22]/90 px-3 py-2 text-xs font-medium text-white/80 shadow-lg backdrop-blur-xl"
            >
              <FaBell aria-hidden="true" className="text-pink-500" />
              {notifications[notice]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
