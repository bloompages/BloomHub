import { motion } from "framer-motion";

import { FaPalette, FaBullseye, FaMobileAlt } from "react-icons/fa";

export default function AboutSection({ items }) {
  const icons = [FaPalette, FaBullseye, FaMobileAlt];
  return (
    <section
      id="sobre"
      className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-blue-500/80 dark:text-blue-300/80">
            Sobre a Bloom Pages
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Uma presença digital que transmite{" "}
            <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
              personalidade e valor
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/70">
            A Bloom Pages nasceu para ajudar marcas, profissionais e negócios a
            se destacarem no digital por meio de páginas que unem estética,
            estratégia, clareza e performance. Cada projeto é desenvolvido com
            cuidado para transmitir a essência da marca, fortalecer sua presença
            online e gerar novas oportunidades.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="group cursor-default rounded-3xl border border-[var(--color-border)] bg-white/70 p-6 text-center shadow-sm transition dark:border-[var(--color-border-dark)] dark:bg-white/5"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="text-2xl text-[var(--color-primary)]" />
                </div>

                <p className="text-[15px] leading-6 text-[var(--color-text-soft)] dark:text-[var(--color-text-soft-dark)]">
                  {item}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
