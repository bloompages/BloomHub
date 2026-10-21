import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import BloomLogo from "../brand/BloomLogo";
import Wordmark from "../brand/Wordmark";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Agente em ação", href: "#agente" },
  { label: "O hub", href: "#ecossistema" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Depois de rolar um pouco, o header ganha fundo mais sólido e sombra.
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  // Menu aberto: trava a rolagem do fundo e fecha no Esc.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-black/10 bg-white/80 shadow-lg shadow-purple-500/5 dark:border-white/10 dark:bg-ink/80 dark:shadow-black/30"
          : "border-transparent bg-white/40 dark:bg-ink/40"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-[padding] duration-300 lg:px-8 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a href="#inicio" aria-label="BloomHub — início" className="group flex items-center gap-2.5">
          <span className="block h-10 w-10">
            <BloomLogo animated auto className="h-full w-full" />
          </span>

          <span className="leading-none">
            <Wordmark className="text-2xl" />
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:block dark:text-white/50">
              IA · Landing Pages · CRM
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 text-sm text-zinc-600 lg:flex dark:text-white/70"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group relative py-2 transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden min-h-10 items-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-5 text-sm font-medium text-white shadow-lg shadow-purple-500/25 sm:flex"
          >
            Solicitar orçamento
          </motion.a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:border-purple-400/40 hover:text-purple-500 lg:hidden dark:border-white/15 dark:text-white/80"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full lg:hidden"
          >
            <motion.nav
              id="menu-mobile"
              aria-label="Navegação principal (mobile)"
              initial={{ y: -14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-b border-black/10 bg-white/95 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-ink/95 dark:shadow-black/40"
            >
              <ul className="mx-auto flex max-w-7xl flex-col px-6 py-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-3 py-3 text-[15px] text-zinc-700 transition-colors hover:bg-purple-500/5 hover:text-purple-600 dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-purple-200"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + navLinks.length * 0.05 }}
                  className="pb-2 pt-3"
                >
                  <a
                    href="#contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-medium text-white shadow-lg shadow-purple-500/25"
                  >
                    Solicitar orçamento
                  </a>
                </motion.li>
              </ul>
            </motion.nav>

            <button
              type="button"
              tabIndex={-1}
              aria-label="Fechar menu"
              onClick={() => setIsMenuOpen(false)}
              className="h-screen w-full cursor-default bg-black/30 backdrop-blur-[2px]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
