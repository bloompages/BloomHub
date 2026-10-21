import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import SectionHeading from "../ui/SectionHeading";

export default function FaqSection({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Dúvidas frequentes"
          title="Perguntas que quase"
          highlight="todo cliente faz"
        />

        <div className="mt-12 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className={`overflow-hidden rounded-2xl border bg-white/75 backdrop-blur transition-colors duration-300 dark:bg-white/[0.04] ${
                  isOpen
                    ? "border-purple-500/40 shadow-lg shadow-purple-500/10"
                    : "border-black/10 dark:border-white/10"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium transition-colors hover:text-purple-600 sm:text-base dark:hover:text-purple-300"
                  >
                    {item.question}

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-xs text-purple-500 dark:text-purple-300"
                    >
                      <FaChevronDown aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.p
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-[15px] leading-7 text-zinc-600 dark:text-white/65">
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
