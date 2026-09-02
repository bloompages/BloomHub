import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import { whatsappLink } from "../../utils/links";

const accentStyles = {
  neutral: {
    card: "border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950",
    badge: "",
    icon: "from-pink-500/15 to-blue-500/15 text-blue-500",
    price: "text-zinc-900 dark:text-white",
    button:
      "border border-black/10 text-zinc-800 hover:border-pink-400/50 hover:bg-pink-500/5 hover:text-pink-600 dark:border-white/15 dark:text-white/85 dark:hover:border-pink-400/40 dark:hover:bg-white/5 dark:hover:text-pink-200",
  },
  premium: {
    card: "border-transparent bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-white shadow-2xl shadow-blue-500/20 dark:from-zinc-900 dark:via-black dark:to-black",
    badge: "bg-white/10 text-blue-200",
    icon: "from-blue-400/30 to-fuchsia-400/20 text-blue-200",
    price: "text-white",
    button:
      "bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35",
  },
};

export default function SolutionsSection({ featured, solutions }) {
  const FeaturedIcon = featured.icon;
  const featuredLink = whatsappLink(featured.whatsappMessage);
  const featuredIsExternal = !featuredLink.startsWith("#");

  return (
    <section id="solucoes" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-pink-500/80 dark:text-pink-300/80">
          Soluções
        </p>

        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Tudo o que seu negócio precisa para
          <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
            crescer no digital
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-white/70">
          A Landing Page é o nosso principal serviço — o único com preço fechado
          e tudo incluso. Os demais projetos são orçados sob consulta, com
          escopo, prazo e valor definidos antes de começar.
        </p>
      </motion.div>

      {/* Produto principal --------------------------------------------- */}

      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bloom-border bloom-border-strong relative mt-12 overflow-hidden rounded-[2rem] border border-pink-500/20 bg-white p-6 shadow-xl shadow-pink-500/10 dark:bg-zinc-950 sm:p-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/10 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/25 to-pink-500/5 text-xl text-pink-500">
                <FeaturedIcon aria-hidden="true" />
              </div>

              <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-600 dark:bg-pink-500/15 dark:text-pink-200">
                {featured.badge}
              </span>

              <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
                {featured.eyebrow}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
              {featured.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-pink-500 dark:text-pink-300">
              {featured.tagline}
            </p>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-600 dark:text-white/65">
              {featured.description}
            </p>

            <p className="mt-4 border-l-2 border-pink-400/40 pl-3 text-sm leading-6 text-zinc-500 dark:text-white/55">
              {featured.benefit}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {featured.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-700 dark:text-white/75"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-[10px] text-pink-500">
                    <FaCheck aria-hidden="true" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
              Investimento
            </p>

            <p className="mt-3 text-4xl font-semibold text-zinc-900 dark:text-white">
              {featured.price}
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-white/55">
              {featured.priceNote}
            </p>

            {featured.priceAlt && (
              <p className="mt-4 rounded-xl bg-pink-500/10 px-3 py-2 text-sm leading-5 text-pink-700 dark:text-pink-200">
                {featured.priceAlt}
              </p>
            )}

            <motion.a
              href={featuredLink}
              target={featuredIsExternal ? "_blank" : undefined}
              rel={featuredIsExternal ? "noreferrer" : undefined}
              aria-label={`${featured.cta} — falar com a Bloom Pages`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-shadow hover:shadow-xl hover:shadow-pink-500/30"
            >
              {featured.cta}

              <FaArrowRight
                aria-hidden="true"
                className="text-xs transition duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {featured.footnote && (
              <p className="mt-4 text-xs leading-5 text-zinc-400 dark:text-white/40">
                {featured.footnote}
              </p>
            )}
          </div>
        </div>
      </motion.article>

      {/* Demais serviços ------------------------------------------------ */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mt-16 max-w-3xl"
      >
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Outros serviços, orçados sob consulta
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-white/65">
          Esses projetos variam demais de um cliente para outro, então o valor
          só é fechado depois de entender o que você precisa. A conversa e o
          orçamento são gratuitos.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const styles = accentStyles[solution.accent] ?? accentStyles.neutral;
          const isPremium = solution.accent === "premium";
          const ctaLink = whatsappLink(solution.whatsappMessage);
          const isExternal = !ctaLink.startsWith("#");

          return (
            <motion.article
              key={solution.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              style={{ "--bloom-delay": `${index * 0.45}s` }}
              className={`bloom-border relative flex h-full flex-col rounded-[1.8rem] border p-6 transition-shadow duration-300 hover:shadow-xl ${styles.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.icon}`}
                >
                  <Icon className="text-xl" aria-hidden="true" />
                </div>

                {solution.badge && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                  >
                    {solution.badge}
                  </span>
                )}
              </div>

              <h4 className="mt-5 text-xl font-semibold">{solution.name}</h4>

              <p
                className={`mt-1 text-sm font-medium ${
                  isPremium ? "text-blue-200" : "text-pink-500 dark:text-pink-300"
                }`}
              >
                {solution.tagline}
              </p>

              <p
                className={`mt-4 text-[15px] leading-6 ${
                  isPremium ? "text-white/70" : "text-zinc-600 dark:text-white/65"
                }`}
              >
                {solution.description}
              </p>

              <p
                className={`mt-4 border-l-2 pl-3 text-sm leading-6 ${
                  isPremium
                    ? "border-blue-400/40 text-white/60"
                    : "border-pink-400/40 text-zinc-500 dark:text-white/55"
                }`}
              >
                {solution.benefit}
              </p>

              <div
                className={`mt-6 border-t pt-5 ${
                  isPremium ? "border-white/10" : "border-black/10 dark:border-white/10"
                }`}
              >
                <p className={`text-2xl font-semibold ${styles.price}`}>
                  {solution.price}
                </p>

                <p
                  className={`mt-1 text-sm ${
                    isPremium ? "text-white/60" : "text-zinc-500 dark:text-white/55"
                  }`}
                >
                  {solution.priceNote}
                </p>
              </div>

              <motion.a
                href={ctaLink}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={`${solution.cta} — falar com a Bloom Pages`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-medium transition-shadow ${styles.button}`}
              >
                {solution.cta}

                <FaArrowRight
                  aria-hidden="true"
                  className="text-xs transition duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {solution.footnote && (
                <p
                  className={`mt-4 text-xs leading-5 ${
                    isPremium ? "text-white/45" : "text-zinc-400 dark:text-white/40"
                  }`}
                >
                  {solution.footnote}
                </p>
              )}
            </motion.article>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-center text-sm text-zinc-500 dark:text-white/50"
      >
        Não sabe qual serviço resolve o seu caso? Chame no WhatsApp: a gente
        entende o cenário e indica o caminho mais barato primeiro.
      </motion.p>
    </section>
  );
}
