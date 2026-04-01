export default function AboutSection({ items }) {
  return (
    <section
      id="sobre"
      className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
    >
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

        <div className="grid gap-6 sm:grid-cols-3 ">
          {items.map((item) => (
            <div
              key={item}
              className="group flex flex-col items-center text-center rounded-3xl border border-[var(--color-border)] bg-white/70 p-6 transition hover:-translate-y-1 hover:border-[var(--color-primary)]/30 dark:border-[var(--color-border-dark)] dark:bg-white/5"
            >
            
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 text-lg">
                ✦
              </div>

              <p className="text-[15px] leading-6 text-[var(--color-text-soft)] dark:text-[var(--color-text-soft-dark)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
