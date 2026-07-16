import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

export default function HeroSection({ highlights }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex rounded-full border border-pink-400/30 bg-pink-500/5 px-4 py-1 text-sm text-pink-600 dark:bg-white/5 dark:text-pink-200"
        >
          Sites estratégicos para marcas que querem crescer
        </motion.span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Sua presença digital
          <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
            começa aqui.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70">
          A Bloom Pages cria experiências digitais que unem design, estratégia
          e tecnologia para fortalecer sua presença online, aumentar a
          credibilidade da sua marca e gerar novas oportunidades de crescimento.
        </p>

        <div className="mt-8 space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.35 + index * 0.12,
              }}
              whileHover={{
                x: 6,
                scale: 1.01,
              }}
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-white/90"
            >
              <FaCheckCircle className="shrink-0 text-lg text-pink-500" />

              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="#contato"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
            }}
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 font-medium text-white shadow-xl shadow-pink-500/20 transition-shadow hover:shadow-2xl hover:shadow-pink-500/30"
          >
            Solicite seu projeto

            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#servicos"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
            }}
            className="group flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium text-zinc-700 transition-all hover:border-pink-400/40 hover:bg-pink-500/5 hover:text-pink-500 dark:border-white/15 dark:text-white/80 dark:hover:border-pink-400/40 dark:hover:bg-white/5 dark:hover:text-pink-300"
          >
            Ver serviços

            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-2xl"
        />

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 20,
          }}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-4 dark:border-white/10">
            <span className="h-3 w-3 rounded-full bg-pink-400" />
            <span className="h-3 w-3 rounded-full bg-fuchsia-300" />
            <span className="h-3 w-3 rounded-full bg-blue-400" />
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-white/80 p-6 dark:border-white/10 dark:bg-black/70">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-200/70">
                  Bloom Pages
                </p>

                <h2 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-white">
                  Marca autêntica.<br/> Presença forte.
                </h2>
              </div>

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20"
              >
                <FaRocket className="text-2xl text-pink-500" />
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="rounded-2xl border border-pink-500/20 bg-pink-500/10 p-4"
              >
                <p className="text-sm text-pink-600 dark:text-pink-200">
                  Posicionamento
                </p>

                <p className="mt-2 text-xl font-semibold">
                  Mais confiança
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4"
              >
                <p className="text-sm text-blue-600 dark:text-blue-200">
                  Conversão
                </p>

                <p className="mt-2 text-xl font-semibold">
                  Mais oportunidades
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm text-zinc-500 dark:text-white/60">
                  Nosso foco
                </p>

                <p className="mt-2 text-lg text-zinc-800 dark:text-white/90">
                  Estratégia, design e tecnologia para transformar ideias em uma
                  presença digital profissional, autêntica e preparada para
                  gerar resultados.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}