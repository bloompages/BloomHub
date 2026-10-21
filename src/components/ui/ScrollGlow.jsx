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
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const pinkY = useTransform(progress, [0, 1], ["-28vh", "96vh"]);
  const pinkX = useTransform(progress, [0, 0.5, 1], ["-14vw", "16vw", "-8vw"]);
  const pinkScale = useTransform(progress, [0, 0.5, 1], [1, 1.45, 1.15]);
  const pinkOpacity = useTransform(progress, [0, 0.35, 1], [0.75, 1, 0.7]);

  const blueY = useTransform(progress, [0, 1], ["76vh", "-30vh"]);
  const blueX = useTransform(progress, [0, 0.5, 1], ["12vw", "-14vw", "10vw"]);
  const blueScale = useTransform(progress, [0, 0.6, 1], [1.1, 1.35, 1]);

  const fuchsiaY = useTransform(progress, [0, 1], ["110vh", "-12vh"]);
  const fuchsiaX = useTransform(progress, [0, 1], ["-10vw", "10vw"]);
  const fuchsiaOpacity = useTransform(progress, [0, 0.3, 1], [0.5, 1, 0.75]);
  const fuchsiaRotate = useTransform(progress, [0, 1], [0, 90]);

  const violetY = useTransform(progress, [0, 1], ["40vh", "62vh"]);
  const violetX = useTransform(progress, [0, 0.5, 1], ["24vw", "-20vw", "22vw"]);
  const violetScale = useTransform(progress, [0, 0.5, 1], [0.9, 1.3, 0.95]);

  if (reduceMotion) {
    return (
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ y: pinkY, x: pinkX, scale: pinkScale, opacity: pinkOpacity }}
        className="absolute left-[-160px] top-0 h-[34rem] w-[34rem] rounded-full bg-pink-500/25 blur-[110px] dark:bg-pink-600/30"
      />

      <motion.div
        style={{ y: blueY, x: blueX, scale: blueScale }}
        className="absolute right-[-160px] top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-500/25 blur-[110px] dark:bg-indigo-600/30"
      />

      <motion.div
        style={{
          y: fuchsiaY,
          x: fuchsiaX,
          opacity: fuchsiaOpacity,
          rotate: fuchsiaRotate,
        }}
        className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[110px] dark:bg-purple-600/25"
      />

      <motion.div
        style={{ y: violetY, x: violetX, scale: violetScale }}
        className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[110px] dark:bg-blue-700/25"
      />
    </div>
  );
}
