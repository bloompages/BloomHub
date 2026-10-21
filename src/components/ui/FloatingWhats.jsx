import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppIcon from "../icon/WhatsIcon";
import { WHATSAPP_URL, whatsappLink } from "../../utils/links";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const link = whatsappLink(
    "Olá! Vim pelo site da BloomHub e quero solicitar um orçamento.",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!WHATSAPP_URL) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setShowTooltip(true)}
    >
      {/* TOOLTIP */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative max-w-[260px] origin-bottom-right rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-3 pr-8 text-sm text-[var(--color-text)] shadow-lg backdrop-blur-xl dark:border-[var(--color-border-dark)] dark:bg-[#120f22]/90 dark:text-[var(--color-text-dark)]"
          >
            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={() => setShowTooltip(false)}
              className="absolute right-2 top-1 cursor-pointer text-sm opacity-60 hover:opacity-100"
            >
              ✕
            </button>

            <p className="font-medium">Quer um orçamento?</p>
            <p className="mt-1 text-xs opacity-80">
              Fale com a BloomHub no WhatsApp 💬
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÃO */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 14, delay: 1.5 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-xl shadow-purple-500/40"
        aria-label="Falar com a BloomHub no WhatsApp"
      >
        <motion.span
          aria-hidden="true"
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-purple-500"
        />
        <WhatsAppIcon className="relative h-7 w-7 text-white" />
      </motion.a>
    </div>
  );
}