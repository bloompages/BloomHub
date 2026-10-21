import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Cabeçalho padrão das seções: rótulo, título (com trecho em degradê)
 * e descrição opcional, revelados em sequência ao entrar na tela.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}) {
  const centered = align === "center";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <motion.p
        variants={item}
        className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-pink-500/90 dark:text-pink-300/90`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-pink-500 to-purple-500" />
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={item}
        className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
      >
        {title}
        {highlight && (
          <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text pb-1 text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={item}
          className={`mt-5 text-lg leading-8 text-zinc-600 dark:text-white/70 ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
