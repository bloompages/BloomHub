import { useEffect, useState } from "react";
import WhatsAppIcon from "../icon/WhatsIcon";
import { WHATSAPP_URL, whatsappLink } from "../../utils/links";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const link = whatsappLink(
    "Olá! Vim pelo site da Bloom Pages e quero conversar sobre um projeto.",
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
      {showTooltip && (
        <div className="relative max-w-[260px] rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-3 text-sm text-[var(--color-text)] shadow-lg backdrop-blur-xl animate-fadeIn dark:border-[var(--color-border-dark)] dark:bg-black/70 dark:text-[var(--color-text-dark)]">
          
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute right-2 top-1 text-sm opacity-60 hover:opacity-100"
          >
            ✕
          </button>

          <p className="font-medium">Dúvidas?</p>
          <p className="text-xs opacity-80 mt-1">
            Fale conosco no WhatsApp 💬
          </p>
        </div>
      )}

      {/* BOTÃO */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow-xl shadow-pink-500/30 transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}