export const SITE = {
  name: "HumiSalud",
  tagline: "Humidificadores, sin marearte",
  description:
    "Comparativas, calculadora por m² y análisis de cada modelo. Te decimos qué humidificador comprar y por qué, sin fingir que los hemos probado en casa.",
  url: "",
  email: "hola@humisalud.example",
} as const;

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/mejores-humidificadores", label: "Mejores 2026" },
  { to: "/selector", label: "Selector" },
  { to: "/calculadora", label: "Calculadora" },
  { to: "/coste-de-uso", label: "Coste de uso" },
  { to: "/guia-de-compra", label: "Guía" },
  { to: "/blog", label: "Blog" },
  { to: "/metodologia", label: "Cómo trabajamos" },
] as const;

export const NAV_EN = [
  { to: "/en", label: "Home" },
  { to: "/en/calculator", label: "Calculator" },
  { to: "/en/running-cost", label: "Running cost" },
] as const;

export const CATEGORIAS = [
  { slug: "bebe", titulo: "Para el bebé", desc: "Silencio, vapor frío y rellenado seguro.", icon: "baby" },
  { slug: "dormitorio", titulo: "Para dormir", desc: "Por debajo de 35 dB, sin despertarte.", icon: "moon" },
  { slug: "salon", titulo: "Salón y espacios grandes", desc: "Caudal y depósito de sobra.", icon: "sofa" },
  { slug: "alergias", titulo: "Alergias", desc: "Evaporativos, sin polvo blanco.", icon: "leaf" },
  { slug: "inteligente", titulo: "Con app", desc: "Control desde el móvil o por voz.", icon: "wifi" },
  { slug: "economico", titulo: "Barato", desc: "Por menos de 35 €.", icon: "wallet" },
] as const;
