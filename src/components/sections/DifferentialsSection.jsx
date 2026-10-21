import { motion } from "framer-motion";

import BloomLogo from "../brand/BloomLogo";
import SectionHeading from "../ui/SectionHeading";

export default function DifferentialsSection({ items }) {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    >
      {/* Flor gigante se desenhando ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 opacity-10"
      >
        <BloomLogo auto glow={false} className="h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Por que a BloomHub"
            title="Um parceiro de tecnologia,"
            highlight="não só um fornecedor."
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70"
          >
            A BloomHub nasceu para ajudar negócios a atenderem melhor, venderem
            mais e cuidarem de cada cliente, juntando atendimento inteligente,
            páginas que convertem e organização em um só lugar.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40, rotateX: 55 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, rotateX: 8 }}
                style={{ transformPerspective: 900, originY: 1 }}
                className="group rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/10 sm:odd:translate-y-6 dark:border-white/10 dark:bg-[#0e0b1c]/70"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20"
                >
                  <Icon
                    className="text-xl text-purple-500 dark:text-purple-300"
                    aria-hidden="true"
                  />
                </motion.div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-[15px] leading-6 text-zinc-600 dark:text-white/65">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
