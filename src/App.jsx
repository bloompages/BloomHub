import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
});

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const services = [
    {
      title: "Presença digital estratégica",
      description:
        "Sites pensados para transmitir confiança, fortalecer sua marca e transformar visitantes em clientes.",
    },
    {
      title: "Tecnologia com propósito",
      description:
        "Soluções modernas com React, Vite e Tailwind para criar uma experiência rápida, bonita e profissional.",
    },
    {
      title: "Mais vendas, mais clareza",
      description:
        "Páginas organizadas para destacar sua proposta, valorizar sua autoridade e incentivar a ação certa.",
    },
  ];

  const highlights = [
    "🌸 Seu negócio merece florescer online",
    "💻 Estratégia + tecnologia para mulheres",
    "🚀 Mais vendas, mais presença, mais confiança",
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-white selection:bg-pink-500/40 selection:text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pink-500/40 bg-gradient-to-br from-pink-500/20 to-blue-500/20 text-lg shadow-lg shadow-pink-500/10">
              🌸
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
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:scale-[1.02] dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
            </button>

            <a
              href="#contato"
              className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
            >
              Comece aqui
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-pink-400/30 bg-pink-500/5 px-4 py-1 text-sm text-pink-600 dark:bg-white/5 dark:text-pink-200">
              Sites estratégicos para mulheres que querem crescer
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Seu negócio merece
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
                {" "}florescer online
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70">
              A Bloom Pages cria experiências digitais que unem beleza,
              estratégia e tecnologia para fortalecer sua presença online,
              aumentar a confiança da sua marca e abrir espaço para mais
              vendas.
            </p>

            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-white/90"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 text-center font-medium text-white shadow-xl shadow-pink-500/20 transition hover:scale-[1.02]"
              >
                Comece aqui
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-black/10 px-6 py-3 text-center font-medium text-zinc-700 transition hover:border-pink-400/40 hover:text-black dark:border-white/15 dark:text-white/80 dark:hover:text-white"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-4 dark:border-white/10">
                <span className="h-3 w-3 rounded-full bg-pink-400" />
                <span className="h-3 w-3 rounded-full bg-fuchsia-300" />
                <span className="h-3 w-3 rounded-full bg-blue-400" />
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-white/80 p-6 dark:border-white/10 dark:bg-black/70">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-200/70">
                      Bloom Pages
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-white">
                      Marca bonita. Presença forte.
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 text-2xl">
                    ✨
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-pink-500/20 bg-pink-500/10 p-4">
                    <p className="text-sm text-pink-600 dark:text-pink-200">Posicionamento</p>
                    <p className="mt-2 text-xl font-semibold">Mais confiança</p>
                  </div>
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                    <p className="text-sm text-blue-600 dark:text-blue-200">Conversão</p>
                    <p className="mt-2 text-xl font-semibold">Mais vendas</p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm text-zinc-500 dark:text-white/60">Foco</p>
                    <p className="mt-2 text-lg text-zinc-800 dark:text-white/90">
                      Estratégia + tecnologia para mulheres que desejam crescer
                      com presença e autenticidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-blue-500/80 dark:text-blue-300/80">
                Sobre a Bloom Pages
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Uma presença digital que transmite segurança e valor
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/70">
                A proposta da Bloom Pages é ajudar mulheres empreendedoras a se
                destacarem online com páginas que unem estética, clareza e
                performance. Cada detalhe existe para tornar sua marca mais
                memorável e profissional.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Design alinhado à sua identidade",
                "Estrutura pensada para conversão",
                "Experiência moderna, rápida e responsiva",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-black/10 bg-white/80 p-5 text-zinc-800 shadow-lg dark:border-white/10 dark:bg-black/50 dark:text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-300/80">
              Serviços
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Soluções para quem quer crescer com mais clareza e presença
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-black/10 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-pink-400/30 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 text-xl">
                  ✦
                </div>
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-white/65">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-pink-500/10 via-white to-blue-500/10 p-8 shadow-2xl shadow-pink-500/5 sm:p-10 dark:border-white/10 dark:via-black">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 dark:text-white/60">
                  Resultado
                </p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Mais presença, mais confiança, mais espaço para vender
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/70">
                  Seu site não precisa ser apenas bonito. Ele pode ser sua vitrine,
                  seu posicionamento e sua ferramenta de crescimento ao mesmo
                  tempo.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: "100%", label: "responsivo" },
                  { value: "360°", label: "visão estratégica" },
                  { value: "+ confiança", label: "na sua marca" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-black/10 bg-white/70 p-5 text-center dark:border-white/10 dark:bg-black/50"
                  >
                    <p className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-2xl font-semibold text-transparent">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-white/55">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      
      </main>
      <ContactForm />

      <footer className="border-t border-black/10 px-6 py-8 dark:border-white/10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-white/50">
          <p>© 2026 Bloom Pages. Todos os direitos reservados.</p>
          <p>Feito com estratégia, sensibilidade e tecnologia.</p>
        </div>
      </footer>
    </div>
  );
}