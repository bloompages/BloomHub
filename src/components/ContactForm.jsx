import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const number = formData.get("number");

    if (number.length < 10 || number.length > 11) {
      alert("Digite um telefone válido com DDD.");
      return;
    }

    const email = import.meta.env.VITE_EMAIL;

    if (!email) {
      alert("Configure a variável VITE_EMAIL no arquivo .env.");
      return;
    }

    const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      setPhone("");
      form.reset();
      setTimeout(() => setSuccess(false), 4000);
    } else {
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/50"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm text-zinc-600 dark:text-white/70">
            Nome
          </label>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-pink-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-600 dark:text-white/70">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="voce@email.com"
            required
            className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-600 dark:text-white/70">
            Telefone
          </label>
          <input
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
            className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-pink-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-600 dark:text-white/70">
            Mensagem
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Me conte sobre o seu negócio"
            required
            className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-pink-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
          />
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Novo contato - Bloom Pages" />

        {!success ? (
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01]"
          >
            Enviar mensagem
          </button>
        ) : (
          <p className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">
            Formulário enviado com sucesso! Entraremos em contato em breve.
          </p>
        )}
      </div>
    </form>
  );
}