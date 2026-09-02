import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Brilhos de fundo que acompanham a rolagem da página.
 * Cada camada se move em uma velocidade diferente, criando profundidade.
 */
export default function ScrollGlow() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Suaviza o acompanhamento para o brilho "deslizar" atrás do conteúdo.
  const progress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    mass: 0.5,
  });

  const pinkY = useTransform(progress, [0, 1], ["-14vh", "78vh"]);
  const pinkX = useTransform(progress, [0, 0.5, 1], ["-8vw", "8vw", "-4vw"]);
  const pinkScale = useTransform(progress, [0, 0.5, 1], [1, 1.25, 1.05]);

  const blueY = useTransform(progress, [0, 1], ["58vh", "-18vh"]);
  const blueX = useTransform(progress, [0, 1], ["6vw", "-6vw"]);

  const fuchsiaY = useTransform(progress, [0, 1], ["95vh", "10vh"]);
  const fuchsiaOpacity = useTransform(progress, [0, 0.3, 1], [0.35, 0.8, 0.55]);

  if (reduceMotion) {
    return (
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ y: pinkY, x: pinkX, scale: pinkScale }}
        className="absolute left-[-140px] top-0 h-[26rem] w-[26rem] rounded-full bg-pink-500/25 blur-3xl dark:bg-pink-500/20"
      />

      <motion.div
        style={{ y: blueY, x: blueX }}
        className="absolute right-[-140px] top-0 h-[24rem] w-[24rem] rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        style={{ y: fuchsiaY, opacity: fuchsiaOpacity }}
        className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl"
      />
    </div>
  );
}
