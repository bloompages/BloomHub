import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaClock, FaHandshake } from "react-icons/fa";

import ContactForm from "../ui/ContactForm";
import SectionHeading from "../ui/SectionHeading";
import { INSTAGRAM_URL, whatsappLink } from "../../utils/links";

const promises = [
  { icon: FaClock, text: "Retorno rápido pelo WhatsApp" },
  { icon: FaHandshake, text: "Orçamento gratuito e sem compromisso" },
];

export default function ContactSection({ interestOptions }) {
  const contactLink = whatsappLink(
    "Olá! Vim pelo site da BloomHub e quero solicitar um orçamento.",
  );

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    >
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-indigo-500/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Solicite seu orçamento"
            title="Pronto para colocar seu negócio"
            highlight="no piloto automático?"
            description="Conte o que você precisa pelo formulário ou chame no WhatsApp. Retornamos com escopo, prazo e investimento da solução ideal para você."
          />

          <ul className="mt-8 space-y-3">
            {promises.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-zinc-700 dark:text-white/80"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 dark:text-purple-300">
                    <Icon aria-hidden="true" />
                  </span>
                  {item.text}
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href={contactLink}
              target={contactLink.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label="Falar com a BloomHub pelo WhatsApp"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="flex min-h-12 items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/25 transition-shadow hover:shadow-xl"
            >
              <FaWhatsapp aria-hidden="true" className="text-xl" />
              WhatsApp
            </motion.a>

            {INSTAGRAM_URL && (
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver depoimentos e projetos da BloomHub no Instagram"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="flex min-h-12 items-center gap-2 rounded-full border border-black/10 px-5 py-3 font-medium text-zinc-700 transition-colors hover:border-pink-400/50 hover:text-pink-600 dark:border-white/15 dark:text-white/85 dark:hover:text-pink-200"
              >
                <FaInstagram aria-hidden="true" className="text-xl" />
                @bloomhub.io
              </motion.a>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactForm interestOptions={interestOptions} />
        </motion.div>
      </div>
    </section>
  );
}
