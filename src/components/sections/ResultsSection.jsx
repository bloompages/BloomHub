export default function ResultsSection({ items }) {
  return (
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
            {items.map((item) => (
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
  );
}