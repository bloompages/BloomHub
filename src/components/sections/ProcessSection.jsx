import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";

export default function ProcessSection({ steps }) {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Como funciona"
        title="Do primeiro contato"
        highlight="à solução no ar"
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, index) => (
          <motion.li
            key={item.step}
            initial={{ opacity: 0, rotateY: -75, x: -40 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
            style={{ transformPerspective: 1000, originX: 0 }}
            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-white/10 dark:bg-white/[0.04]"
          >
            {/* Número gigante ao fundo */}
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
              className="pointer-events-none absolute -right-2 -top-6 select-none bg-gradient-to-b from-purple-500/15 to-transparent bg-clip-text text-[7rem] font-bold leading-none text-transparent"
            >
              {item.step}
            </motion.span>

            <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-bold text-transparent">
              {item.step}
            </span>

            <h3 className="relative mt-4 text-lg font-semibold">{item.title}</h3>

            <p className="relative mt-2 text-[15px] leading-6 text-zinc-600 dark:text-white/65">
              {item.description}
            </p>

            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100"
            />
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
