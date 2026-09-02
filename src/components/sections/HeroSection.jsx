import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaClock,
  FaRocket,
  FaTag,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

import { whatsappLink } from "../../utils/links";

const panelItems = [
  {
    icon: FaClock,
    label: "Soluções que funcionam 24/7",
    note: "Seu site e seu agente de IA atendendo mesmo quando você está offline.",
    tone: "pink",
  },
  {
    icon: FaRocket,
    label: "No ar em poucos dias",
    note: "Landing page publicada rápido e pronta para receber anúncios.",
    tone: "blue",
  },
  {
    icon: FaTag,
    label: "Preço fechado, sem surpresa",
    note: "Na landing page, domínio por 1 ano e manutenção já estão inclusos.",
    tone: "blue",
  },
  {
    icon: FaMobileAlt,
    label: "Perfeito no celular",
    note: "Testamos em celular, tablet e desktop antes de entrar no ar.",
    tone: "blue",
  },
  {
    icon: FaHeadset,
    label: "Você fala direto com quem desenvolve",
    note: "Sem intermediário: do orçamento à publicação e aos ajustes.",
    tone: "premium",
  },
];

const toneStyles = {
  pink: {
    card: "border-pink-500/25 bg-pink-500/10",
    icon: "bg-pink-500/15 text-pink-500 dark:text-pink-300",
  },
  blue: {
    card: "border-blue-500/20 bg-blue-500/10",
    icon: "bg-blue-500/15 text-blue-500 dark:text-blue-300",
  },
  premium: {
    card: "border-fuchsia-500/25 bg-gradient-to-r from-fuchsia-500/15 to-blue-500/15",
    icon: "bg-fuchsia-500/15 text-fuchsia-500 dark:text-fuchsia-300",
  },
};

export default function HeroSection({ highlights }) {
  const contactLink = whatsappLink(
    "Olá! Vim pelo site da Bloom Pages e quero conversar sobre um projeto.",
  );

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="inline-flex rounded-full border border-pink-400/30 bg-pink-500/5 px-4 py-1 text-sm text-pink-600 dark:bg-white/5 dark:text-pink-200"
        >
          Landing Pages • Sites • Sistemas • Automações • Agentes de IA
        </motion.span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Seu negócio, mais
          <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
            profissional no digital.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70">
          A Bloom Pages une estratégia, design e tecnologia para colocar sua
          empresa no digital — de uma landing page que gera contatos a sistemas
          e agentes de IA que organizam o dia a dia.
        </p>

        <div className="mt-8 space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-[15px] text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-white/90"
            >
              <FaCheckCircle
                aria-hidden="true"
                className="shrink-0 text-lg text-pink-500"
              />

              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="#solucoes"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="group flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 font-medium text-white shadow-xl shadow-pink-500/20 transition-shadow hover:shadow-2xl hover:shadow-pink-500/30"
          >
            Ver soluções e preços
            <FaArrowRight
              aria-hidden="true"
              className="transition duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          <motion.a
            href={contactLink}
            target={contactLink.startsWith("#") ? undefined : "_blank"}
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium text-zinc-700 transition-all hover:border-pink-400/40 hover:bg-pink-500/5 hover:text-pink-500 dark:border-white/15 dark:text-white/80 dark:hover:border-pink-400/40 dark:hover:bg-white/5 dark:hover:text-pink-300"
          >
            <FaWhatsapp aria-hidden="true" className="text-lg" />
            Falar no WhatsApp
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.04, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-2xl"
        />

        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-4 dark:border-white/10">
            <span className="h-3 w-3 rounded-full bg-pink-400" />
            <span className="h-3 w-3 rounded-full bg-fuchsia-300" />
            <span className="h-3 w-3 rounded-full bg-blue-400" />
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-white/80 p-6 dark:border-white/10 dark:bg-black/70">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-200/70">
              Bloom Pages
            </p>

            <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">
              Por que contratar a Bloom Pages?
            </p>

            <ul className="mt-6 space-y-3">
              {panelItems.map((item, index) => {
                const ItemIcon = item.icon;
                const tone = toneStyles[item.tone];

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${tone.card}`}
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}
                    >
                      <ItemIcon aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-medium text-zinc-900 dark:text-white">
                        {item.label}
                      </span>

                      <span className="mt-0.5 block text-sm leading-5 text-zinc-600 dark:text-white/65">
                        {item.note}
                      </span>
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
