export default function HeroSection({ highlights }) {
  return (
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
  );
}