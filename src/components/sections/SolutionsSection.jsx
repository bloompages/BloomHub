import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";

import SectionHeading from "../ui/SectionHeading";
import { whatsappLink } from "../../utils/links";

const toneStyles = {
  pink: {
    icon: "from-pink-500 to-fuchsia-500 shadow-pink-500/30",
    tagline: "text-pink-500 dark:text-pink-300",
    check: "bg-pink-500/15 text-pink-500 dark:text-pink-300",
    spot: "rgba(236, 72, 153, 0.18)",
  },
  purple: {
    icon: "from-fuchsia-500 to-purple-600 shadow-purple-500/30",
    tagline: "text-purple-500 dark:text-purple-300",
    check: "bg-purple-500/15 text-purple-500 dark:text-purple-300",
    spot: "rgba(168, 85, 247, 0.2)",
  },
  indigo: {
    icon: "from-purple-500 to-indigo-500 shadow-indigo-500/30",
    tagline: "text-indigo-500 dark:text-indigo-300",
    check: "bg-indigo-500/15 text-indigo-500 dark:text-indigo-300",
    spot: "rgba(99, 102, 241, 0.2)",
  },
};

function SolutionCard({ item, index }) {
  const Icon = item.icon;
  const styles = toneStyles[item.tone] ?? toneStyles.purple;
  const ctaLink = whatsappLink(item.whatsappMessage);
  const isExternal = !ctaLink.startsWith("#");

  // Posição do mouse dentro do card (0 a 1), usada para o tilt e o brilho.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 160, damping: 18 });
  const springY = useSpring(py, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(springX, [0, 1], [-7, 7]);
  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const spotX = useTransform(px, (value) => `${value * 100}%`);
  const spotY = useTransform(py, (value) => `${value * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotX} ${spotY}, ${styles.spot}, transparent 70%)`;

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const resetPointer = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.article
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{ rotateX, rotateY, "--bloom-delay": `${index * 0.5}s` }}
        className="bloom-border group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-xl shadow-purple-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0e0b1c]/80 dark:shadow-black/40"
      >
        <motion.div
          aria-hidden="true"
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative flex items-start justify-between gap-3">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 14 }}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-lg ${styles.icon}`}
          >
            <Icon aria-hidden="true" />
          </motion.div>

          {item.badge && (
            <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-500/15 dark:text-purple-200">
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="relative mt-6 text-2xl font-semibold">{item.name}</h3>

        <p className={`relative mt-1 text-sm font-medium ${styles.tagline}`}>
          {item.tagline}
        </p>

        <p className="relative mt-4 text-[15px] leading-7 text-zinc-600 dark:text-white/65">
          {item.description}
        </p>

        <ul className="relative mt-6 space-y-3">
          {item.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.35 + index * 0.15 + featureIndex * 0.08,
              }}
              className="flex items-start gap-3 text-sm leading-6 text-zinc-700 dark:text-white/80"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${styles.check}`}
              >
                <FaCheck aria-hidden="true" />
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>

        <div aria-hidden="true" className="flex-1" />

        <div className="relative mt-8 border-t border-black/10 pt-6 dark:border-white/10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
            Investimento
          </p>
          <p className="mt-1 text-lg font-semibold">Sob orçamento personalizado</p>

          <motion.a
            href={ctaLink}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={`${item.cta} — falar com a BloomHub`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group/cta mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full border border-purple-500/30 px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white dark:text-white/90"
          >
            {item.cta}
            <FaArrowRight
              aria-hidden="true"
              className="text-xs transition duration-300 group-hover/cta:translate-x-1"
            />
          </motion.a>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function SolutionsSection({ solutions }) {
  const bundleLink = whatsappLink(
    "Olá! Vim pelo site da BloomHub e quero um orçamento do pacote completo (Agente de IA + Landing Page + CRM).",
  );
  const bundleIsExternal = !bundleLink.startsWith("#");

  return (
    <section id="solucoes" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Soluções"
        title="Três soluções para você"
        highlight="vender mais e perder menos clientes"
        description="Escolha uma ou combine as três. Cada projeto é feito sob medida e orçado de acordo com a necessidade do seu negócio."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {solutions.map((item, index) => (
          <SolutionCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 p-px"
      >
        <div className="relative flex flex-col items-start gap-6 rounded-[calc(2rem-1px)] bg-white px-7 py-8 sm:flex-row sm:items-center sm:justify-between dark:bg-[#0e0b1c]">
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-30%", "130%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          />

          <div className="relative">
            <p className="text-xl font-semibold">
              Quer as três trabalhando juntas?
            </p>
            <p className="mt-1 text-[15px] text-zinc-600 dark:text-white/65">
              Montamos um pacote completo, conectado e sob medida para o seu
              negócio.
            </p>
          </div>

          <motion.a
            href={bundleLink}
            target={bundleIsExternal ? "_blank" : undefined}
            rel={bundleIsExternal ? "noreferrer" : undefined}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="relative flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/25"
          >
            <FaWhatsapp aria-hidden="true" className="text-lg" />
            Orçar pacote completo
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
