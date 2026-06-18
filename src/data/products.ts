// Catálogo desacoplado. Los precios son OBSERVADOS según el estudio de mercado
// (14–17 jun 2026, fuentes citadas) y deben re-verificarse antes de publicar.
// Donde el estudio no aporta datos concretos usamos {{DATO_PENDIENTE}}.

export type Tecnologia =
  | "Ultrasónico"
  | "Evaporativo"
  | "Vapor caliente"
  | "Híbrido"
  | "UV-C";

export type RangoPrecio = "Económico" | "Medio" | "Alto" | "Premium";

type TriBool = boolean | "DATO_PENDIENTE";
type AsistenteVoz = "Alexa" | "Google" | "Siri";

export interface AtributosProducto {
  control: {
    higrostato: TriBool;            // sensor de humedad integrado
    modoAuto: TriBool;              // ajusta vapor según humedad
    wifiApp: TriBool;
    asistentesVoz: AsistenteVoz[] | "DATO_PENDIENTE";
    temporizador: TriBool;
    apagadoAutoSinAgua: TriBool;
  };
  confort: {
    modoNoche: TriBool;             // velocidad silenciosa
    luzApagable: TriBool;
    boquilla360: TriBool;
    indicadorAgua: TriBool;
    topFill: TriBool;               // rellenado superior
  };
  mantenimiento: {
    filtroRequerido: TriBool;
    filtroCosteAnualEur?: number | "DATO_PENDIENTE";
    bocaAncha: TriBool;             // facilita limpiar el depósito
    cartuchoAntical: TriBool;
    autolimpieza: TriBool;
    uvc: TriBool;                   // lámpara UV-C interna
  };
  extras: {
    aromaterapia: TriBool;
    vaporCaliente: TriBool;         // opción de vapor templado/caliente
    ionizador: TriBool;
    consumoW?: number | "DATO_PENDIENTE";
  };
}

export interface Producto {
  slug: string;
  nombre: string;
  marca: string;
  modelo: string;
  imagen?: string; // dejar vacío hasta tener imagen oficial
  precioOrientativo: string; // string para reflejar rangos / multi-tienda
  precioMin?: number;
  rango: RangoPrecio;
  tecnologia: Tecnologia;
  capacidadL: number | "DATO_PENDIENTE";
  coberturaM2?: number | "DATO_PENDIENTE";
  ruidoDb?: number | "DATO_PENDIENTE";
  autonomiaH?: number | "DATO_PENDIENTE";
  valoracionEditorial: number; // 0–100, según metodología sección 6 del estudio
  idealPara: string[];
  noRecomendadoPara: string[];
  ventajas: string[];
  inconvenientes: string[];
  caracteristicas: string[];
  atributos?: AtributosProducto;
  resumen: string;
  enlaceAfiliado: string; // {{ENLACE_AFILIADO}} — placeholder hasta dar de alta tracking
  comercio: "Amazon" | "PcComponentes" | "El Corte Inglés" | "Cecotec" | "MediaMarkt";
  fechaActualizacion: string;
  fuentes: string[];
  datosPendientes?: string[];
}

const HOY = "2026-06-17";
const PEND = "DATO_PENDIENTE" as const;

export const productos: Producto[] = [
  {
    slug: "cecotec-pure-aroma-300-yang",
    nombre: "Cecotec Pure Aroma 300 Yang",
    marca: "Cecotec",
    modelo: "Pure Aroma 300 Yang",
    precioOrientativo: "23,90 €–24,90 €",
    precioMin: 23.9,
    rango: "Económico",
    tecnologia: "Ultrasónico",
    capacidadL: 0.3,
    coberturaM2: 15,
    ruidoDb: PEND, // Cecotec no publica dB oficiales
    autonomiaH: 6, // estimado por temporizador máx. 6 h (manual técnico)
    valoracionEditorial: 72,
    idealPara: ["Dormitorios pequeños", "Aromaterapia ocasional", "Regalo bajo presupuesto"],
    noRecomendadoPara: ["Salones", "Uso continuo nocturno largo", "Bebés (capacidad insuficiente)"],
    ventajas: [
      "Precio de entrada muy competitivo",
      "Tamaño compacto, fácil de ubicar",
      "Función difusor de aromas",
    ],
    inconvenientes: [
      "Depósito de solo 300 ml: autonomía limitada",
      "Polvo blanco si se usa agua del grifo",
      "Cobertura reducida (~15 m²)",
    ],
    caracteristicas: [
      "Tecnología ultrasónica de vapor frío",
      "Depósito 300 ml",
      "Disponible en Cecotec, PcComponentes y Amazon",
    ],
    atributos: {
      control: {
        higrostato: false, modoAuto: false, wifiApp: false,
        asistentesVoz: [], temporizador: PEND, apagadoAutoSinAgua: true,
      },
      confort: {
        modoNoche: false, luzApagable: PEND, boquilla360: true,
        indicadorAgua: true, topFill: false,
      },
      mantenimiento: {
        filtroRequerido: false, bocaAncha: false, cartuchoAntical: false,
        autolimpieza: false, uvc: false,
      },
      extras: {
        aromaterapia: true, vaporCaliente: false, ionizador: false,
        consumoW: 24,
      },
    },
    resumen:
      "Difusor ultrasónico de entrada que cumple para habitaciones pequeñas y para perfumar el aire de vez en cuando. No le pidas hacer de humidificador en un salón ni tenerlo encendido toda la noche en el cuarto del bebé.",
    enlaceAfiliado: "https://www.amazon.es/Cecotec-Humidificador-Temporizador-aromaterapia-Ultrasilencioso/dp/B07MSJDB8M",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Cecotec.es (17/06/2026)", "PcComponentes (17/06/2026)", "Amazon.es (17/06/2026)"],
    datosPendientes: ["dB de funcionamiento (Cecotec no lo publica)"],
  },
  {
    slug: "levoit-dual-200s",
    nombre: "Levoit Dual 200S",
    marca: "Levoit",
    modelo: "Dual 200S",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Medio",
    tecnologia: "Ultrasónico",
    capacidadL: 3,
    coberturaM2: 25,
    ruidoDb: 28, // ≤28 dB modo bajo (ficha Levoit)
    autonomiaH: 25, // a velocidad mínima (levoit.com)
    valoracionEditorial: 84,
    idealPara: ["Dormitorios medianos", "Habitaciones infantiles", "Uso nocturno"],
    noRecomendadoPara: ["Salones grandes", "Quienes buscan vapor caliente esterilizado"],
    ventajas: [
      "Top-fill: rellenado y limpieza sencillos",
      "Control por app y voz",
      "Modo silencioso adecuado para dormitorio",
    ],
    inconvenientes: [
      "Como ultrasónico, exige agua destilada para evitar polvo blanco",
      "Filtro/cartucho antical requiere mantenimiento",
    ],
    caracteristicas: [
      "Ultrasónico vapor frío",
      "Conectado (VeSync)",
      "Top-fill 3 L",
    ],
    atributos: {
      control: {
        higrostato: true, modoAuto: true, wifiApp: true,
        asistentesVoz: ["Alexa", "Google"], temporizador: true, apagadoAutoSinAgua: true,
      },
      confort: {
        modoNoche: true, luzApagable: true, boquilla360: true,
        indicadorAgua: true, topFill: true,
      },
      mantenimiento: {
        filtroRequerido: false, bocaAncha: true, cartuchoAntical: true,
        autolimpieza: false, uvc: false,
      },
      extras: {
        aromaterapia: true, vaporCaliente: false, ionizador: false,
        consumoW: 25,
      },
    },
    resumen:
      "Un conectado de gama media que en las reseñas verificadas siempre sale bien parado: silencioso, con capacidad suficiente y muy fácil de limpiar. Es la apuesta más segura para un dormitorio o la habitación del bebé.",
    enlaceAfiliado: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Estudio interno HumiSalud (jun 2026)", "levoit.com ficha Dual 200S"],
    datosPendientes: ["Precio observado"],
  },
  {
    slug: "philips-hu2716-nanocloud",
    nombre: "Philips HU2716 NanoCloud",
    marca: "Philips",
    modelo: "HU2716",
    precioOrientativo: "~80 €–141 € según tienda/fecha",
    rango: "Alto",
    tecnologia: "Evaporativo",
    capacidadL: 2,
    coberturaM2: 32,
    ruidoDb: 34, // ficha técnica Philips (topten.eu)
    autonomiaH: 10, // 2 L ÷ 200 mL/h a máximo
    valoracionEditorial: 86,
    idealPara: ["Alergias", "Familias con bebés", "Hogares que rechazan polvo blanco"],
    noRecomendadoPara: ["Presupuesto ajustado", "Usuarios que no quieren cambiar filtro"],
    ventajas: [
      "Tecnología NanoCloud: no genera polvo blanco mineral",
      "Higiene superior frente a ultrasónicos",
      "Datos de marca: hasta 99% menos bacterias en el aire (fabricante)",
    ],
    inconvenientes: [
      "Filtro FY3446 con coste recurrente (vida útil recomendada hasta 6 meses)",
      "Precio fluctúa mucho entre tiendas",
    ],
    caracteristicas: [
      "Evaporativo con filtro NanoCloud",
      "Cobertura hasta ~32 m²",
      "Sin emisión visible de vapor",
    ],
    atributos: {
      control: {
        higrostato: true, modoAuto: true, wifiApp: false,
        asistentesVoz: [], temporizador: true, apagadoAutoSinAgua: true,
      },
      confort: {
        modoNoche: true, luzApagable: true, boquilla360: false,
        indicadorAgua: true, topFill: false,
      },
      mantenimiento: {
        filtroRequerido: true, filtroCosteAnualEur: 40,
        bocaAncha: true, cartuchoAntical: false,
        autolimpieza: false, uvc: false,
      },
      extras: {
        aromaterapia: false, vaporCaliente: false, ionizador: false,
        consumoW: 15,
      },
    },
    resumen:
      "Si lo tuyo es la higiene del aire y el precio te da igual, este es el que te recomendaríamos. Eso sí, las cifras antibacterianas que aparecen en su caja son del fabricante, y así te las contamos: como datos de marca, no como comprobación independiente.",
    enlaceAfiliado: "https://www.amazon.es/Philips-Serie-2000-HU2716-Humidificador/dp/B08LW4K16N",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Philips.es (17/06/2026)", "idealo.es histórico"],
    datosPendientes: ["Autonomía oficial a velocidad mínima"],
  },
  {
    slug: "rowenta-aqua-perfect",
    nombre: "Rowenta Aqua Perfect",
    marca: "Rowenta",
    modelo: "Aqua Perfect",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Alto",
    tecnologia: "Híbrido",
    capacidadL: 4.5,
    coberturaM2: 40,
    ruidoDb: 40, // ficha distribuidor (Rowenta no publica en web ES)
    autonomiaH: 12, // temporizador máx. en display
    valoracionEditorial: 82,
    idealPara: ["Salones medianos-grandes", "Invierno con calefacción intensa"],
    noRecomendadoPara: ["Dormitorios pequeños", "Quien busca lo más barato"],
    ventajas: [
      "Modo auto con sensor de humedad",
      "Vapor frío y caliente",
      "Datos de marca: 99,9% de eliminación bacteriana (fabricante)",
    ],
    inconvenientes: ["Precio medio-alto", "Mayor tamaño"],
    caracteristicas: ["Híbrido frío/caliente", "Sensor de humedad", "Depósito 4,5 L"],
    atributos: {
      control: {
        higrostato: true, modoAuto: true, wifiApp: false,
        asistentesVoz: [], temporizador: true, apagadoAutoSinAgua: true,
      },
      confort: {
        modoNoche: true, luzApagable: true, boquilla360: true,
        indicadorAgua: true, topFill: true,
      },
      mantenimiento: {
        filtroRequerido: false, bocaAncha: true, cartuchoAntical: true,
        autolimpieza: PEND, uvc: false,
      },
      extras: {
        aromaterapia: PEND, vaporCaliente: true, ionizador: false,
        consumoW: PEND,
      },
    },
    resumen:
      "Buena opción para un salón con la calefacción a tope todo el invierno. El 99,9% de eliminación bacteriana lo dice Rowenta, no nosotros.",
    enlaceAfiliado: "https://www.amazon.es/Rowenta-HU5220-HU5220F0-Humidificador/dp/B074QTR8DS",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Rowenta.es (17/06/2026)"],
    datosPendientes: ["Precio observado actual"],
  },
  {
    slug: "xiaomi-smart-humidifier-2",
    nombre: "Xiaomi Smart Humidifier 2",
    marca: "Xiaomi",
    modelo: "Smart Humidifier 2",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Medio",
    tecnologia: "UV-C",
    capacidadL: 4.5,
    coberturaM2: 32,
    ruidoDb: 38, // ≤38 dB(A) ficha oficial (32 dB en modo silencio)
    autonomiaH: 13, // 4,5 L ÷ 350 mL/h a máximo (mi.com)
    valoracionEditorial: 80,
    idealPara: ["Usuarios de domótica Xiaomi", "Salones medianos"],
    noRecomendadoPara: ["Quien no usa apps", "Dormitorio infantil sin supervisión"],
    ventajas: [
      "Lámpara UV-C: dato de marca de 99,9% de eliminación bacteriana",
      "Integración Mi Home / Google / Alexa",
      "Precio competitivo dentro de los conectados",
    ],
    inconvenientes: ["Requiere app", "Mantenimiento estricto para que la UV-C tenga efecto"],
    caracteristicas: ["Ultrasónico con UV-C", "Conectado", "4,5 L"],
    atributos: {
      control: {
        higrostato: true, modoAuto: true, wifiApp: true,
        asistentesVoz: ["Alexa", "Google"], temporizador: true, apagadoAutoSinAgua: true,
      },
      confort: {
        modoNoche: true, luzApagable: true, boquilla360: true,
        indicadorAgua: true, topFill: true,
      },
      mantenimiento: {
        filtroRequerido: false, bocaAncha: true, cartuchoAntical: false,
        autolimpieza: false, uvc: true,
      },
      extras: {
        aromaterapia: false, vaporCaliente: false, ionizador: false,
        consumoW: 32,
      },
    },
    resumen:
      "Un conectado con buena relación calidad-precio, sobre todo si ya tienes cacharros Xiaomi por casa. La eficacia de la luz UV-C es un dato de fabricante y, sobre todo, depende de que limpies el depósito como toca.",
    enlaceAfiliado: "https://www.amazon.es/Xiaomi-Smart-Humidifier-Capacidad-autom%C3%A1tico/dp/B0BC9SDP8Z",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Mi.com (17/06/2026)"],
    datosPendientes: ["Precio observado"],
  },
  {
    slug: "winix-l500",
    nombre: "Winix L500",
    marca: "Winix",
    modelo: "L500",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Alto",
    tecnologia: "Híbrido",
    capacidadL: 7.5,
    coberturaM2: 55,
    ruidoDb: 30, // ≤30 dB nivel máx. (specs Winix)
    autonomiaH: 18, // 7,5 L ÷ 400 mL/h a máximo
    valoracionEditorial: 81,
    idealPara: ["Estancias grandes", "Lofts", "Familias numerosas"],
    noRecomendadoPara: ["Dormitorios pequeños", "Espacios reducidos"],
    ventajas: ["Depósito 7,5 L de gran autonomía", "Vapor frío y caliente"],
    inconvenientes: ["Tamaño considerable", "Precio a verificar"],
    caracteristicas: ["Ultrasónico frío + caliente", "7,5 L", "Cobertura amplia"],
    atributos: {
      control: {
        higrostato: true, modoAuto: true, wifiApp: false,
        asistentesVoz: [], temporizador: true, apagadoAutoSinAgua: true,
      },
      confort: {
        modoNoche: true, luzApagable: true, boquilla360: true,
        indicadorAgua: true, topFill: true,
      },
      mantenimiento: {
        filtroRequerido: false, bocaAncha: true, cartuchoAntical: PEND,
        autolimpieza: PEND, uvc: false,
      },
      extras: {
        aromaterapia: PEND, vaporCaliente: true, ionizador: false,
        consumoW: PEND,
      },
    },
    resumen:
      "Para espacios grandes en los que la mayoría de modelos se quedan cortos. Antes de publicarlo definitivamente nos falta confirmar el PVP actual.",
    enlaceAfiliado: "https://www.amazon.es/Winix-Humidificador-Ultras%C3%B3nico-silencioso-humidificaci%C3%B3n/dp/B08PBZ9KH3",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Estudio HumiSalud jun 2026"],
    datosPendientes: ["PVP actual"],
  },
];

export const getProducto = (slug: string) => productos.find((p) => p.slug === slug);

export const mejoresPorCategoria = {
  general: "levoit-dual-200s",
  calidadPrecio: "xiaomi-smart-humidifier-2",
  economico: "cecotec-pure-aroma-300-yang",
  bebe: "philips-hu2716-nanocloud",
  dormitorioSilencioso: "levoit-dual-200s",
  alergias: "philips-hu2716-nanocloud",
  salon: "rowenta-aqua-perfect",
  inteligente: "xiaomi-smart-humidifier-2",
  estanciasGrandes: "winix-l500",
} as const;
