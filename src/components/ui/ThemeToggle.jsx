export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:scale-[1.02] dark:border-white/15 dark:bg-white/5 dark:text-white"
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}