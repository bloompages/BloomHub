import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";

function FlowStep({ item, index, total, progress }) {
  const Icon = item.icon;

  // A etapa "acende" quando a linha de progresso chega até ela.
  const start = index / total;
  const lit = useTransform(progress, [start, start + 0.12], [0, 1]);
  const scale = useTransform(lit, [0, 1], [0.85, 1]);

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
    >
      <motion.div style={{ scale }} className="relative z-10 shrink-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-white text-2xl text-zinc-400 dark:border-white/10 dark:bg-[#0e0b1c] dark:text-white/40">
          <Icon aria-hidden="true" />
        </div>

        <motion.div
          aria-hidden="true"
          style={{ opacity: lit }}
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-2xl text-white shadow-xl shadow-purple-500/40"
        >
          <Icon />
        </motion.div>
      </motion.div>

      <div className="pt-1 lg:pt-6">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-500 dark:text-purple-300">
          Passo {index + 1}
        </span>
        <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-[15px] leading-6 text-zinc-600 dark:text-white/65 lg:mx-auto lg:max-w-[16rem]">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}

export default function HubFlowSection({ steps }) {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section
      id="ecossistema"
      className="relative overflow-hidden border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="O hub"
          title="Tudo conectado,"
          highlight="do primeiro clique à venda"
          description="O nome não é por acaso: a BloomHub junta as três soluções em um só fluxo, para nenhum contato se perder no caminho."
        />

        <div ref={listRef} className="relative mt-16">
          {/* Trilho + linha que se desenha com a rolagem */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-8 top-8 w-px bg-black/10 lg:inset-x-[12.5%] lg:bottom-auto lg:top-8 lg:h-px lg:w-auto dark:bg-white/10"
          >
            <motion.div
              style={{ scaleY: progress }}
              className="h-full w-full origin-top bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 lg:hidden"
            />
            <motion.div
              style={{ scaleX: progress }}
              className="hidden h-full w-full origin-left bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:block"
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((item, index) => (
              <FlowStep
                key={item.title}
                item={item}
                index={index}
                total={steps.length}
                progress={progress}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
