import { motion } from "framer-motion";

export default function ProcessSection({ steps }) {
  return (
    <section
      id="como-funciona"
      className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-blue-500/80 dark:text-blue-300/80">
            Como funciona
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Do primeiro contato ao projeto no ar
          </h2>
        </motion.div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                {item.step}
              </span>

              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-[15px] leading-6 text-zinc-600 dark:text-white/65">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
