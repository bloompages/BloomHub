import BloomLogo from "../brand/BloomLogo";
import Wordmark from "../brand/Wordmark";
import { INSTAGRAM_URL } from "../../utils/links";

const footerLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Agente em ação", href: "#agente" },
  { label: "O hub", href: "#ecossistema" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-6 py-8 dark:border-white/10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-500 dark:text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#inicio" className="flex items-center gap-2">
            <BloomLogo auto className="h-8 w-8" />
            <Wordmark className="text-xl" />
          </a>
          <p className="mt-2 text-xs uppercase tracking-[0.25em]">
            Agentes de IA · Landing Pages · CRM
          </p>
          <p className="mt-4">© {year} BloomHub. Todos os direitos reservados.</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-purple-500 dark:hover:text-purple-300"
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
                  className="transition-colors hover:text-purple-500 dark:hover:text-purple-300"
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
