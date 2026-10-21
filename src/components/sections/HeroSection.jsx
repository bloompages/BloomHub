import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import BloomLogo from "../brand/BloomLogo";
import GlowButton from "../ui/GlowButton";
import HubVisual from "../ui/HubVisual";
import { whatsappLink } from "../../utils/links";

const headline = "Sua empresa atendendo, vendendo e organizando".split(" ");

const words = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const word = {
  hidden: { opacity: 0, y: "60%", filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection({ highlights }) {
  const contactLink = whatsappLink(
    "Olá! Vim pelo site da BloomHub e quero solicitar um orçamento.",
  );

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/5 py-1 pl-1.5 pr-4 text-xs font-medium uppercase tracking-[0.2em] text-purple-700 sm:text-sm dark:bg-white/5 dark:text-purple-200"
          >
            <BloomLogo auto glow={false} className="h-6 w-6" />
            Agentes de IA · Landing Pages · CRM
          </motion.span>

          <motion.h1
            variants={words}
            initial="hidden"
            animate="visible"
            className="mt-7 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]"
          >
            {headline.map((text, index) => (
              <motion.span
                key={`${text}-${index}`}
                variants={word}
                className="mr-[0.25em] inline-block"
              >
                {text}
              </motion.span>
            ))}

            <motion.span
              variants={word}
              className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text pb-2 text-transparent"
            >
              24 horas por dia.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70"
          >
            A BloomHub cria agentes de IA que atendem seus clientes, landing
            pages que transformam visitas em contatos e um CRM automático para
            nenhum cliente ser esquecido. Tudo conectado, em um só lugar.
          </motion.p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 1.05 + index * 0.12 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-zinc-800 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/85"
                >
                  <Icon aria-hidden="true" className="shrink-0 text-purple-500 dark:text-purple-300" />
                  {item.text}
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <GlowButton href="#contato">
              Solicitar orçamento
              <FaArrowRight
                aria-hidden="true"
                className="transition duration-300 group-hover:translate-x-1"
              />
            </GlowButton>

            <motion.a
              href={contactLink}
              target={contactLink.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium text-zinc-700 transition-colors hover:border-purple-400/50 hover:bg-purple-500/5 hover:text-purple-600 dark:border-white/15 dark:text-white/85 dark:hover:bg-white/5 dark:hover:text-purple-200"
            >
              <FaWhatsapp aria-hidden="true" className="text-lg" />
              Falar no WhatsApp
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-4 text-sm text-zinc-500 dark:text-white/50"
          >
            Orçamento sem compromisso · Resposta rápida
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HubVisual />
        </motion.div>
      </div>
    </section>
  );
}
