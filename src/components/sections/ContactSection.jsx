import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="border-t border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-blue-500/80 dark:text-blue-300/80">
            Comece seu projeto
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Vamos transformar sua ideia em uma solução digital
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70">
            A Bloom Pages desenvolve landing pages, sites institucionais,
            sistemas web, automações e agentes de IA para fortalecer sua marca,
            otimizar processos e gerar novas oportunidades para o seu negócio.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href={import.meta.env.VITE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar com a Bloom Pages pelo WhatsApp"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
              className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </motion.a>

            <motion.a
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Acessar o Instagram da Bloom Pages"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-3 font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <FaInstagram className="text-xl" />
              Instagram
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}