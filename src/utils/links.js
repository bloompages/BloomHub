export const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL?.trim();

export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM?.trim();

/**
 * Monta o link do WhatsApp.
 *
 * Links curtos (wa.me/message/XXXX) nao aceitam mensagem pre-preenchida,
 * entao o texto so e adicionado quando a URL e do formato wa.me/<numero>.
 * Sem a variavel de ambiente, o CTA cai para a secao de contato.
 */
export function whatsappLink(message) {
  if (!WHATSAPP_URL) return "#contato";

  if (!message || WHATSAPP_URL.includes("/message/")) return WHATSAPP_URL;

  const separator = WHATSAPP_URL.includes("?") ? "&" : "?";

  return `${WHATSAPP_URL}${separator}text=${encodeURIComponent(message)}`;
}
