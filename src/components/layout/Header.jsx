import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logobloompages.png";

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
          <a href="#sobre" className="transition hover:text-pink-400">
            Sobre
          </a>
          <a href="#servicos" className="transition hover:text-pink-400">
            Serviços
          </a>
          <a href="#contato" className="transition hover:text-pink-400">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}
