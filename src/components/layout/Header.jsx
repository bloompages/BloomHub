import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logobloompages.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-blue-500/10 shadow-lg shadow-pink-500/10">
            <img
              src={logo}
              alt="Bloom Pages"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-semibold tracking-wide">Bloom Pages</p>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-white/50">
              estratégia + tecnologia
            </p>
          </div>
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

              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:border-pink-400/40 hover:text-pink-500 lg:hidden dark:border-white/15 dark:text-white/80"
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
              className="border-b border-black/10 bg-white/95 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-black/95 dark:shadow-black/40"
            >
              <ul className="mx-auto flex max-w-7xl flex-col px-6 py-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-3 py-3 text-[15px] text-zinc-700 transition-colors hover:bg-pink-500/5 hover:text-pink-600 dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-pink-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
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
    </header>
  );
}
