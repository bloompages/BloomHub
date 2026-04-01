import ContactForm from "../ui/ContactForm";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="border-t border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-500/80 dark:text-blue-300/80">
            Comece aqui
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Vamos criar uma presença digital que faça sentido para sua marca
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-white/70">
            A Bloom Pages cria landing pages e oferece consultoria em tecnologia
            para mulheres que querem mais clareza, presença e crescimento no
            digital.
          </p>
          <br />

          <div className="flex gap-4 cursor-pointer flex-wrap">
            <a
              href={import.meta.env.VITE_WHATSAPP_URL}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:scale-105 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href={import.meta.env.VITE_INSTAGRAM}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:scale-105 transition"
            >
              <FaInstagram /> 
            </a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
