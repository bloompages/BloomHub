import { motion } from "framer-motion";

export default function DifferentialsSection({ items }) {
  return (
    <section id="diferenciais" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-300/80">
            Por que a Bloom Pages
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Um parceiro de tecnologia,
            <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
              não só quem entrega o arquivo.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70">
            A Bloom Pages nasceu para ajudar negócios a se apresentarem bem no
            digital e a organizarem o que acontece depois do clique: o
            atendimento, o processo e a rotina de quem trabalha na empresa.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    className="text-xl text-[var(--color-primary)]"
                    aria-hidden="true"
                  />
                </div>

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
