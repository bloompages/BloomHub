import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

const fieldClass =
  "w-full rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-purple-400/60 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30";

const labelClass = "mb-2 block text-sm text-zinc-600 dark:text-white/70";

const fields = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const field = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ContactForm({ interestOptions }) {
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState([]);

  const toggleInterest = (option) => {
    setInterests((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const number = formData.get("number");
    const email = import.meta.env.VITE_EMAIL;

    if (number.length < 10 || number.length > 11) {
      alert("Digite um telefone válido com DDD.");
      return;
    }

    if (!email) {
      alert("Configure a variável VITE_EMAIL no arquivo .env");
      return;
    }

    formData.set(
      "interesse",
      interests.length ? interests.join(", ") : "Não informado",
    );

    setSending(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Falha no envio");

      setSuccess(true);
      setPhone("");
      setInterests([]);
      form.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      alert("Erro ao enviar o formulário. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fields}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-black/10 bg-white/85 p-6 shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-[#0e0b1c]/80"
    >
      <div className="grid gap-5">
        <motion.fieldset variants={field}>
          <legend className={labelClass}>Tenho interesse em</legend>

          <div className="flex flex-wrap gap-2">
            {interestOptions.map((option) => {
              const active = interests.includes(option);

              return (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => toggleInterest(option)}
                  aria-pressed={active}
                  whileTap={{ scale: 0.94 }}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25"
                      : "border-black/10 text-zinc-600 hover:border-purple-400/50 hover:text-purple-600 dark:border-white/15 dark:text-white/70 dark:hover:text-purple-200"
                  }`}
                >
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <FaCheck aria-hidden="true" className="text-[10px]" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {option}
                </motion.button>
              );
            })}
          </div>
        </motion.fieldset>

        <motion.div variants={field} className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Nome
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-number" className={labelClass}>
              WhatsApp
            </label>
            <input
              id="contact-number"
              type="tel"
              name="number"
              placeholder="11999999999"
              required
              inputMode="numeric"
              maxLength={11}
              value={phone}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, "");
                setPhone(onlyNumbers.slice(0, 11));
              }}
              className={fieldClass}
            />
          </div>
        </motion.div>

        <motion.div variants={field}>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="voce@email.com"
            required
            className={fieldClass}
          />
        </motion.div>

        <motion.div variants={field}>
          <label htmlFor="contact-message" className={labelClass}>
            Conte um pouco sobre o seu negócio
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="Qual é o seu negócio e o que você quer melhorar no atendimento ou nas vendas?"
            required
            className={fieldClass}
          />
        </motion.div>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="Novo pedido de orçamento - BloomHub"
        />

        <motion.div variants={field} className="min-h-12">
          <AnimatePresence mode="wait" initial={false}>
            {!success ? (
              <motion.button
                key="submit"
                type="submit"
                disabled={sending}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/25 disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane aria-hidden="true" />
                    Solicitar orçamento
                  </>
                )}
              </motion.button>
            ) : (
              <motion.p
                key="success"
                role="status"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <FaCheck aria-hidden="true" className="text-xs" />
                </span>
                Pedido enviado! Em breve entraremos em contato com seu orçamento.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.form>
  );
}
