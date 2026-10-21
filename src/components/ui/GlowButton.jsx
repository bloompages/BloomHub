import { motion } from "framer-motion";

/**
 * CTA principal: degradê da marca com um reflexo que atravessa o botão.
 * Links externos (WhatsApp) abrem em nova aba automaticamente.
 */
export default function GlowButton({
  href,
  children,
  className = "",
  ariaLabel,
}) {
  const isExternal = href && !href.startsWith("#");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-xl shadow-purple-500/25 transition-shadow hover:shadow-2xl hover:shadow-pink-500/35 ${className}`}
    >
      <motion.span
        aria-hidden="true"
        initial={{ x: "-120%" }}
        animate={{ x: "220%" }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 2.8,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
