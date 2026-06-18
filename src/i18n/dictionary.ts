// Diccionario centralizado. Si una clave falta en inglés, se cae al español.
export type Locale = "es" | "en";

export const SLUG_MAP: Record<string, { es: string; en: string }> = {
  home: { es: "/", en: "/en" },
  best: { es: "/mejores-humidificadores", en: "/mejores-humidificadores" },
  selector: { es: "/selector", en: "/selector" },
  guide: { es: "/guia-de-compra", en: "/guia-de-compra" },
  methodology: { es: "/metodologia", en: "/metodologia" },
  calculator: { es: "/calculadora", en: "/en/calculator" },
  cost: { es: "/coste-de-uso", en: "/en/running-cost" },
};

export const equivalentPath = (path: string, target: Locale): string => {
  for (const k of Object.keys(SLUG_MAP)) {
    const { es, en } = SLUG_MAP[k];
    if (path === es || path === en) return target === "es" ? es : en;
  }
  // si no hay traducción equivalente, mantenemos la home del idioma
  return target === "es" ? "/" : "/en";
};

export const DICT = {
  es: {
    "nav.home": "Inicio",
    "nav.best": "Mejores 2026",
    "nav.selector": "Selector",
    "nav.guide": "Guía de compra",
    "nav.methodology": "Metodología",
    "nav.calculator": "Calculadora",
    "nav.cost": "Coste de uso",
    "cta.find": "Encuentra el tuyo",
    "cta.open_selector": "Abrir el selector",
    "lang.toggle": "EN",
    "lang.toggle_aria": "Cambiar a inglés",
    "footer.rights": "Todos los derechos reservados.",
    // Calculadora
    "calc.title": "Calculadora de humidificador",
    "calc.subtitle":
      "Estima el caudal (g/h) y la capacidad de depósito que necesitas según el volumen de tu habitación y la humedad objetivo. Sin inventar datos: el cálculo se basa en la ecuación de humedad absoluta a 20 °C.",
    "calc.area": "Superficie de la estancia (m²)",
    "calc.height": "Altura del techo (m)",
    "calc.current": "Humedad actual (%)",
    "calc.target": "Humedad objetivo (%)",
    "calc.hours": "Horas de uso al día",
    "calc.ach": "Renovaciones de aire por hora",
    "calc.results": "Resultados",
    "calc.flow": "Caudal recomendado",
    "calc.tank": "Depósito mínimo para tu uso diario",
    "calc.matches": "Modelos del catálogo que cubren tu m²",
    "calc.no_matches":
      "Ningún modelo del catálogo cubre tu superficie con datos verificados. Revisa el ranking grande o reduce el m².",
    "calc.disclaimer":
      "Estimación orientativa. Los humidificadores no compensan ventilación insuficiente ni filtraciones; ajusta el resultado al uso real.",
    // Coste de uso
    "cost.title": "Coste real de uso por tecnología",
    "cost.subtitle":
      "Cálculo €/mes y €/año a partir del consumo aproximado de cada tecnología. Los rangos son orientativos: el consumo real depende del modo, la humedad objetivo y el tiempo de funcionamiento.",
    "cost.tech": "Tecnología",
    "cost.power": "Consumo medio",
    "cost.month": "€ / mes",
    "cost.year": "€ / año",
    "cost.hours": "Horas/día",
    "cost.price": "Precio kWh (€)",
    "cost.note":
      "Datos de potencia agregados a partir del estudio de mercado interno (rango medio por tecnología). Verifica la potencia exacta en la ficha del fabricante antes de decidir.",
  },
  en: {
    "nav.home": "Home",
    "nav.best": "Best of 2026",
    "nav.selector": "Selector",
    "nav.guide": "Buying guide",
    "nav.methodology": "Methodology",
    "nav.calculator": "Calculator",
    "nav.cost": "Running cost",
    "cta.find": "Find yours",
    "cta.open_selector": "Open the selector",
    "lang.toggle": "ES",
    "lang.toggle_aria": "Switch to Spanish",
    "footer.rights": "All rights reserved.",
    "calc.title": "Humidifier calculator",
    "calc.subtitle":
      "Estimate the output (g/h) and tank capacity you need based on your room volume and target humidity. No invented figures: the math uses absolute humidity at 20°C.",
    "calc.area": "Room area (m²)",
    "calc.height": "Ceiling height (m)",
    "calc.current": "Current humidity (%)",
    "calc.target": "Target humidity (%)",
    "calc.hours": "Hours per day",
    "calc.ach": "Air changes per hour",
    "calc.results": "Results",
    "calc.flow": "Recommended output",
    "calc.tank": "Minimum tank for your daily use",
    "calc.matches": "Catalogue models covering your m²",
    "calc.no_matches":
      "No catalogue model covers your area with verified data. Check the full ranking or reduce the m².",
    "calc.disclaimer":
      "Indicative estimate. Humidifiers don't compensate for poor ventilation or air leaks; adjust to your real use.",
    "cost.title": "Real running cost by technology",
    "cost.subtitle":
      "Monthly and yearly cost based on each technology's approximate power draw. Ranges are indicative — real consumption depends on mode, target humidity and runtime.",
    "cost.tech": "Technology",
    "cost.power": "Average draw",
    "cost.month": "€ / month",
    "cost.year": "€ / year",
    "cost.hours": "Hours/day",
    "cost.price": "kWh price (€)",
    "cost.note":
      "Power figures aggregated from our internal market study (mid-range per technology). Always verify the exact wattage on the manufacturer's spec sheet.",
  },
} as const;

export type DictKey = keyof typeof DICT["es"];

export const t = (key: DictKey, locale: Locale): string => {
  const en = (DICT.en as Record<string, string>)[key];
  if (locale === "en" && en) return en;
  return (DICT.es as Record<string, string>)[key] ?? key;
};
