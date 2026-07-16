import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logobloompages.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Header({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-blue-500/10 shadow-lg shadow-pink-500/10">
            <img
              src={logo}
              alt="Bloom Pages logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-semibold tracking-wide">Bloom Pages</p>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-white/50">
              estratégia + tecnologia
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex dark:text-white/70">
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
        </div>
      </div>
    </header>
  );
}