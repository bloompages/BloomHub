import { motion } from "framer-motion";

export default function ServicesSection({ services }) {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-300/80">
          Serviços
        </p>

        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Soluções para quem quer crescer com mais clareza e presença
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 text-center md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[1.8rem] p-[1px]"
            >
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,#ec4899_70deg,#d946ef_140deg,#3b82f6_210deg,transparent_280deg)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/15 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <article className="relative flex h-full flex-col items-center rounded-[calc(1.8rem-1px)] bg-white p-6 text-center shadow-md transition-shadow duration-300 group-hover:shadow-xl dark:bg-zinc-950">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-2xl text-[var(--color-primary)]" />
                </div>

                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-pink-500">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600 dark:text-white/65">
                  {service.description}
                </p>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}