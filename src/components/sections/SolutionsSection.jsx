import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";

import { whatsappLink } from "../../utils/links";

/* Cards em destaque (Landing Page e Landing Page 3D) --------------------- */

const featuredVariants = {
  pink: {
    article:
      "border-pink-500/20 bg-white shadow-xl shadow-pink-500/10 dark:bg-zinc-950",
    glow: "from-pink-500/20 to-blue-500/10",
    icon: "from-pink-500/25 to-pink-500/5 text-pink-500",
    badge: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/15 dark:text-pink-200",
    eyebrow: "text-zinc-400 dark:text-white/40",
    tagline: "text-pink-500 dark:text-pink-300",
    description: "text-zinc-600 dark:text-white/65",
    benefit: "border-pink-400/40 text-zinc-500 dark:text-white/55",
    item: "text-zinc-700 dark:text-white/75",
    check: "bg-pink-500/15 text-pink-500",
    panel: "border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/5",
    panelLabel: "text-zinc-400 dark:text-white/40",
    price: "text-zinc-900 dark:text-white",
    priceNote: "text-zinc-500 dark:text-white/55",
    priceAlt: "bg-pink-500/10 text-pink-700 dark:text-pink-200",
    button:
      "bg-gradient-to-r from-pink-500 to-blue-500 shadow-pink-500/20 hover:shadow-pink-500/30",
    footnote: "text-zinc-400 dark:text-white/40",
  },
  immersive: {
    article:
      "border-transparent bg-gradient-to-br from-indigo-950 via-zinc-900 to-black text-white shadow-2xl shadow-fuchsia-500/20",
    glow: "from-fuchsia-500/25 to-indigo-500/15",
    icon: "from-fuchsia-500/30 to-indigo-500/10 text-fuchsia-200",
    badge: "bg-white/10 text-fuchsia-200",
    eyebrow: "text-white/40",
    tagline: "text-fuchsia-200",
    description: "text-white/70",
    benefit: "border-fuchsia-400/40 text-white/60",
    item: "text-white/75",
    check: "bg-fuchsia-500/20 text-fuchsia-200",
    panel: "border-white/10 bg-white/5",
    panelLabel: "text-white/40",
    price: "text-white",
    priceNote: "text-white/60",
    priceAlt: "bg-fuchsia-500/15 text-fuchsia-100",
    button:
      "bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow-fuchsia-500/25 hover:shadow-fuchsia-500/35",
    footnote: "text-white/45",
  },
};

/* Cards orçados sob consulta -------------------------------------------- */

const accentStyles = {
  neutral: {
    tagline: "text-pink-500 dark:text-pink-300",
    benefit: "border-pink-400/40 text-zinc-500 dark:text-white/55",
    card: "border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950",
    badge: "",
    icon: "from-pink-500/15 to-blue-500/15 text-blue-500",
    price: "text-zinc-900 dark:text-white",
    button:
      "border border-black/10 text-zinc-800 hover:border-pink-400/50 hover:bg-pink-500/5 hover:text-pink-600 dark:border-white/15 dark:text-white/85 dark:hover:border-pink-400/40 dark:hover:bg-white/5 dark:hover:text-pink-200",
  },
  premium: {
    dark: true,
    tagline: "text-blue-200",
    benefit: "border-blue-400/40 text-white/60",
    card: "border-transparent bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-white shadow-2xl shadow-blue-500/20 dark:from-zinc-900 dark:via-black dark:to-black",
    badge: "bg-white/10 text-blue-200",
    icon: "from-blue-400/30 to-fuchsia-400/20 text-blue-200",
    price: "text-white",
    button:
      "bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35",
  },
};

function FeaturedCard({ item, index }) {
  const Icon = item.icon;
  const styles = featuredVariants[item.variant] ?? featuredVariants.pink;
  const ctaLink = whatsappLink(item.whatsappMessage);
  const isExternal = !ctaLink.startsWith("#");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      style={{ "--bloom-delay": `${index * 0.45}s` }}
      className={`bloom-border bloom-border-strong relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 ${styles.article}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl ${styles.glow}`}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-xl ${styles.icon}`}
            >
              <Icon aria-hidden="true" />
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
            >
              {item.badge}
            </span>

            <span
              className={`text-xs uppercase tracking-[0.3em] ${styles.eyebrow}`}
            >
              {item.eyebrow}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
            {item.name}
          </h3>

          <p className={`mt-1 text-sm font-medium ${styles.tagline}`}>
            {item.tagline}
          </p>

          <p
            className={`mt-4 max-w-2xl text-[15px] leading-7 ${styles.description}`}
          >
            {item.description}
          </p>

          <p
            className={`mt-4 border-l-2 pl-3 text-sm leading-6 ${styles.benefit}`}
          >
            {item.benefit}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.includes.map((entry) => (
              <li
                key={entry}
                className={`flex items-start gap-3 text-sm leading-6 ${styles.item}`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${styles.check}`}
                >
                  <FaCheck aria-hidden="true" />
                </span>

                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`rounded-[1.5rem] border p-6 ${styles.panel}`}>
          <p
            className={`text-xs uppercase tracking-[0.3em] ${styles.panelLabel}`}
          >
            Investimento
          </p>

          <p className={`mt-3 text-4xl font-semibold ${styles.price}`}>
            {item.price}
          </p>

          <p className={`mt-1 text-sm ${styles.priceNote}`}>{item.priceNote}</p>

          {item.priceAlt && (
            <p
              className={`mt-4 rounded-xl px-3 py-2 text-sm leading-5 ${styles.priceAlt}`}
            >
              {item.priceAlt}
            </p>
          )}

          <motion.a
            href={ctaLink}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={`${item.cta} — falar com a Bloom Pages`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-medium text-white shadow-lg transition-shadow hover:shadow-xl ${styles.button}`}
          >
            {item.cta}

            <FaArrowRight
              aria-hidden="true"
              className="text-xs transition duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          {item.footnote && (
            <p className={`mt-4 text-xs leading-5 ${styles.footnote}`}>
              {item.footnote}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function SolutionsSection({ featured, solutions }) {
  const helpLink = whatsappLink(
    "Olá! Vi as soluções no site da Bloom Pages e quero mais informações.",
  );
  const helpIsExternal = !helpLink.startsWith("#");

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
          As Landing Pages são o nosso principal serviço, com preço fechado e
          tudo incluso — na versão tradicional ou na versão 3D. Os demais
          projetos são orçados sob consulta, com escopo, prazo e valor definidos
          antes de começar.
        </p>
      </motion.div>

      {/* Produtos em destaque ------------------------------------------- */}

      <div className="mt-12 space-y-8">
        {featured.map((item, index) => (
          <FeaturedCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Demais serviços ------------------------------------------------ */}

      <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const styles = accentStyles[solution.accent] ?? accentStyles.neutral;
          const isDark = Boolean(styles.dark);
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
              className={`bloom-border relative flex h-full flex-col rounded-[1.5rem] border p-5 transition-shadow duration-300 hover:shadow-xl ${styles.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${styles.icon}`}
                >
                  <Icon className="text-lg" aria-hidden="true" />
                </div>

                {solution.badge && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                  >
                    {solution.badge}
                  </span>
                )}
              </div>

              <h4 className="mt-4 text-lg font-semibold">{solution.name}</h4>

              <p className={`mt-1 text-sm font-medium ${styles.tagline}`}>
                {solution.tagline}
              </p>

              <p
                className={`mt-3 text-sm leading-6 ${
                  isDark ? "text-white/70" : "text-zinc-600 dark:text-white/65"
                }`}
              >
                {solution.description}
              </p>

              <p
                className={`mt-3 border-l-2 pl-3 text-[13px] leading-5 ${styles.benefit}`}
              >
                {solution.benefit}
              </p>

              <div aria-hidden="true" className="mt-5 flex-1" />

              <div
                className={`border-t pt-5 ${
                  isDark ? "border-white/10" : "border-black/10 dark:border-white/10"
                }`}
              >
                <p className={`text-xl font-semibold ${styles.price}`}>
                  {solution.price}
                </p>

                <p
                  className={`mt-1 text-[13px] leading-5 ${
                    isDark ? "text-white/60" : "text-zinc-500 dark:text-white/55"
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
                className={`group mt-5 flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-sm font-medium transition-shadow ${styles.button}`}
              >
                {solution.cta}

                <FaArrowRight
                  aria-hidden="true"
                  className="text-xs transition duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {solution.footnote && (
                <p
                  className={`mt-3 text-[11px] leading-4 ${
                    isDark ? "text-white/45" : "text-zinc-400 dark:text-white/40"
                  }`}
                >
                  {solution.footnote}
                </p>
              )}
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-10 flex flex-col items-center gap-4 rounded-[1.5rem] border border-black/10 bg-black/[0.02] px-6 py-8 text-center dark:border-white/10 dark:bg-white/5"
      >
        <p className="max-w-2xl text-[15px] leading-7 text-zinc-600 dark:text-white/70">
          Quer saber mais sobre qualquer uma dessas soluções? Chame no WhatsApp:
          a gente tira suas dúvidas, entende o seu caso e monta um orçamento sem
          compromisso.
        </p>

        <motion.a
          href={helpLink}
          target={helpIsExternal ? "_blank" : undefined}
          rel={helpIsExternal ? "noreferrer" : undefined}
          aria-label="Pedir mais informações no WhatsApp da Bloom Pages"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-shadow hover:shadow-xl hover:shadow-pink-500/30"
        >
          <FaWhatsapp aria-hidden="true" className="text-lg" />
          Pedir mais informações no WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
