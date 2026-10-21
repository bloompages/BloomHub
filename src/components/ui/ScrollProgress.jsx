import { motion, useScroll, useSpring } from "framer-motion";

/** Barra fina no topo que acompanha o quanto da página já foi lido. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
    />
  );
}
