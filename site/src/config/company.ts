/**
 * Dados centrais da empresa. Edite apenas este arquivo para atualizar
 * telefone, WhatsApp, redes sociais, avaliações e cidades atendidas
 * em todo o site.
 */

export const company = {
  name: "Roma Ar Condicionado e Eletricidade",
  shortName: "Roma",
  tagline: "Instalação e manutenção de ar-condicionado em Piracicaba e região",

  // Telefone/WhatsApp — PLACEHOLDER: substitua pelo número real da empresa.
  // Formato do whatsappNumber: código do país + DDD + número, apenas dígitos.
  phoneDisplay: "(19) 00000-0000",
  whatsappNumber: "5519000000000",
  whatsappDefaultMessage:
    "Olá! Vi o site da Roma Ar Condicionado e gostaria de solicitar um orçamento.",

  // PLACEHOLDER: endereço não informado — ajuste quando disponível.
  city: "Piracicaba",
  state: "SP",
  addressLine: "Piracicaba/SP",

  instagramHandle: "@romaarcondicionado",
  instagramUrl: "https://www.instagram.com/romaarcondicionado/",

  // PLACEHOLDER: nota e quantidade de avaliações — atualize com os valores reais do Google.
  googleRating: 5.0,
  googleReviewCount: 100,
  googleReviewCountLabel: "+100 avaliações",

  // Cidades atendidas — fácil de editar/expandir.
  citiesServed: [
    "Piracicaba",
    "Americana",
    "Limeira",
    "Rio das Pedras",
    "Saltinho",
    "Charqueada",
    "São Pedro",
    "Capivari",
  ],
} as const;

export function buildWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? company.whatsappDefaultMessage);
  return `https://wa.me/${company.whatsappNumber}?text=${text}`;
}
