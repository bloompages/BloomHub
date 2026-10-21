import { motion } from "framer-motion";

import BloomLogo from "../brand/BloomLogo";

/** Faixa com as palavras-chave da BloomHub rolando sem parar. */
export default function MarqueeStrip({ items }) {
  // Duplicamos a lista para o loop não ter "buraco" ao reiniciar.
  const loop = [...items, ...items];

  return (
    <div className="relative border-y border-black/10 bg-white/50 py-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
      <div className="fade-x overflow-hidden">
        <motion.ul
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center"
        >
          {loop.map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= items.length}
              className="flex items-center gap-8 pr-8 text-lg font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:text-xl dark:text-white/40"
            >
              <BloomLogo glow={false} className="h-5 w-5 opacity-80" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
