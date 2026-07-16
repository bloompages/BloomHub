import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

function AnimatedCounter({ end, prefix = "", suffix = "" }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("pt-BR"),
  );

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, end, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, end, isInView]);

  return (
    <span ref={counterRef}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ResultsSection({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-pink-500/10 via-white to-blue-500/10 p-8 shadow-2xl shadow-pink-500/5 dark:border-white/10 dark:via-black sm:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 dark:text-white/60">
              Impacto
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Soluções digitais que fortalecem e impulsionam seu negócio
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-white/70">
              Mais do que entregar um projeto visualmente atrativo, criamos
              soluções pensadas para fortalecer sua marca, otimizar processos e
              gerar novas oportunidades de crescimento.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="group rounded-3xl border border-black/10 bg-white/70 p-5 text-center shadow-sm transition-all duration-300 hover:border-pink-400/30 hover:shadow-xl dark:border-white/10 dark:bg-black/50"
              >
                <div className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                  <AnimatedCounter
                    end={item.end}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </div>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-white/55">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}