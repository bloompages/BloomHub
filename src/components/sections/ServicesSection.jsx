export default function ServicesSection({ services }) {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-300/80">
          Serviços
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Soluções para quem quer crescer com mais clareza e presença
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 text-center">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col items-center text-center rounded-[1.75rem] border border-black/10 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-pink-400/30 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/[0.07]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 text-xl">
              ✦
            </div>

            <h3 className="text-xl font-semibold">{service.title}</h3>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-white/65">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
