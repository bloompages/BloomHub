import { INSTAGRAM_URL } from "../../utils/links";

const footerLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-6 py-8 dark:border-white/10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-500 dark:text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Bloom Pages. Todos os direitos reservados.</p>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-pink-500 dark:hover:text-pink-300"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {INSTAGRAM_URL && (
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-pink-500 dark:hover:text-pink-300"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
