import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-r from-pink-500/10 via-white to-blue-500/10 p-10 text-center shadow-xl dark:border-white/10 dark:via-black"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80">
          Portfólio
        </p>

        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Conheça alguns dos projetos que desenvolvemos
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/70">
          Cada projeto é desenvolvido com estratégia, design e tecnologia para
          fortalecer marcas, transmitir credibilidade e gerar resultados.
          Explore nosso portfólio e veja como transformamos ideias em soluções
          digitais.
        </p>

        <motion.a
          href="/portfolio"
          whileHover={{
            scale: 1.04,
            y: -3,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
          }}
          className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-8 py-4 font-medium text-white shadow-xl shadow-pink-500/20 hover:shadow-2xl hover:shadow-pink-500/30"
        >
          Conhecer portfólio

          <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
    </section>
  );
}