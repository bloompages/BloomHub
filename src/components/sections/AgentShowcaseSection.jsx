import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import BloomLogo from "../brand/BloomLogo";
import GlowButton from "../ui/GlowButton";
import SectionHeading from "../ui/SectionHeading";
import { whatsappLink } from "../../utils/links";

// Profundidade (px) e posição de cada selo flutuando em volta do celular.
const badgePlacement = [
  { className: "-left-6 top-[22%] sm:-left-16", z: 90 },
  { className: "-right-4 top-[50%] sm:-right-20", z: 130 },
  { className: "-left-4 bottom-[14%] sm:-left-14", z: 70 },
];

/** Conversa que se escreve sozinha, em loop, enquanto está na tela. */
function useChatPlayback(messages, active) {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!active) return undefined;

    let timer;
    const next = messages[count];

    if (!next) {
      timer = setTimeout(() => setCount(0), 5000);
    } else if (next.from === "agent" && !typing) {
      timer = setTimeout(() => setTyping(true), 600);
    } else if (typing) {
      timer = setTimeout(() => {
        setTyping(false);
        setCount((current) => current + 1);
      }, 1500);
    } else {
      timer = setTimeout(() => setCount((current) => current + 1), 1100);
    }

    return () => clearTimeout(timer);
  }, [messages, count, typing, active]);

  return { count, typing };
}

function Phone({ demo, active }) {
  const { count, typing } = useChatPlayback(demo.messages, active);
  const visible = demo.messages.slice(0, count);

  return (
    <div className="relative" style={{ transformStyle: "preserve-3d" }}>
      {/* Traseira/espessura do aparelho, visível quando ele gira */}
      <div
        aria-hidden="true"
        style={{ transform: "translateZ(-18px)" }}
        className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-700"
      />
      <div
        aria-hidden="true"
        style={{ transform: "translateZ(-9px)" }}
        className="absolute inset-0 rounded-[2.8rem] bg-[#1b1530]"
      />

      <div className="relative h-[540px] w-[270px] overflow-hidden rounded-[2.8rem] border-[6px] border-[#1b1530] bg-[#0b0916] shadow-[0_40px_80px_-20px_rgba(168,85,247,0.45)] sm:h-[580px] sm:w-[290px]">
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        {/* Cabeçalho do chat */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#120f22] px-4 pb-3 pt-11">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d0a1a] ring-1 ring-purple-500/40">
            <BloomLogo auto className="h-7 w-7" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">
              Agente BloomHub
            </span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              online agora
            </span>
          </span>
        </div>

        {/* Mensagens */}
        <div className="flex h-[calc(100%-5.5rem)] flex-col justify-end gap-2.5 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.12),transparent_60%)] p-4">
          <AnimatePresence initial={false}>
            {visible.map((message, index) => {
              const isClient = message.from === "client";

              return (
                <motion.p
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  style={{ originX: isClient ? 1 : 0 }}
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-5 ${
                    isClient
                      ? "self-end rounded-br-md bg-gradient-to-br from-pink-500 to-purple-600 text-white"
                      : "self-start rounded-bl-md bg-white/10 text-white/90"
                  }`}
                >
                  {message.text}
                </motion.p>
              );
            })}

            {typing && (
              <motion.span
                key="typing"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex gap-1 self-start rounded-2xl rounded-bl-md bg-white/10 px-4 py-3"
              >
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
                    className="h-1.5 w-1.5 rounded-full bg-white/70"
                  />
                ))}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Selos flutuando à frente do celular */}
      {demo.badges.map((badge, index) => {
        const Icon = badge.icon;
        const place = badgePlacement[index];
        const shown = count >= badge.after;

        return (
          <div
            key={badge.text}
            className={`absolute ${place.className}`}
            style={{ transform: `translateZ(${place.z}px)` }}
          >
            <AnimatePresence>
              {shown && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: index === 2 ? 0.6 : 0,
                  }}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#120f22]/90 px-3.5 py-2 text-xs font-medium text-white shadow-2xl shadow-purple-900/50 backdrop-blur-xl"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-[10px]">
                    <Icon aria-hidden="true" />
                  </span>
                  {badge.text}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function AgentShowcaseSection({ demo }) {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const inView = useInView(phoneRef, { amount: 0.4 });

  // O celular gira conforme a seção atravessa a tela.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });
  const rotateY = useTransform(progress, [0, 0.5, 1], [-38, -14, 18]);
  const rotateX = useTransform(progress, [0, 0.5, 1], [18, 6, -10]);
  const y = useTransform(progress, [0, 1], [80, -80]);

  const ctaLink = whatsappLink(
    "Olá! Vi a simulação no site da BloomHub e quero um orçamento de Agente de IA.",
  );

  return (
    <section
      ref={sectionRef}
      id="agente"
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Agente de IA em ação"
            title="Veja como o agente"
            highlight="conversa com seus clientes"
            description="Uma simulação de atendimento: o agente responde na hora, agenda o horário e já registra o contato no CRM, sem ninguém da sua equipe precisar estar online."
          />

          <ul className="mt-8 space-y-4">
            {demo.bullets.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                    <Icon aria-hidden="true" />
                  </span>
                  {item.text}
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <GlowButton href={ctaLink}>
              Quero um agente assim
              <FaArrowRight aria-hidden="true" className="transition duration-300 group-hover:translate-x-1" />
            </GlowButton>
          </motion.div>
        </div>

        <div
          ref={phoneRef}
          className="relative flex justify-center py-6"
          style={{ perspective: 1400 }}
        >
          {/* Sombra no "chão" */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-10 w-64 -translate-x-1/2 rounded-full bg-purple-600/40 blur-2xl"
          />

          <motion.div
            style={{ rotateY, rotateX, y, transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Phone demo={demo} active={inView} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
