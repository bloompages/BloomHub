export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-6 py-8 dark:border-white/10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-white/50">
        <p>© {year} Bloom Pages. Todos os direitos reservados.</p>
        <p>Feito com estratégia, sensibilidade e tecnologia.</p>
      </div>
    </footer>
  );
}