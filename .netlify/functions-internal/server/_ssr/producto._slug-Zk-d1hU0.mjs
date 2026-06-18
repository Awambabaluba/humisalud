import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$3, p as productos, B as Breadcrumbs } from "./router-jwYzSgWf.mjs";
import { R as RatingBar, A as AffiliateButton, a as PRODUCT_IMAGES, b as PRODUCT_IMAGE_CREDITS, P as ProductCard } from "./ProductCard-8u9rwUHT.mjs";
import { A as AffiliateDisclosure } from "./AffiliateDisclosure-BhJTOazH.mjs";
import { F as FAQ } from "./FAQ-BEg86sQJ.mjs";
import { c as CalendarDays, a as Droplet, R as Ruler, V as Volume2, b as Gauge, d as Check, X, e as Settings2, f as Moon, W as Wrench, S as Sparkles, H as HeartPulse, I as Info, g as CircleQuestionMark, B as Baby, h as ShieldAlert } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function ProsCons({ ventajas, inconvenientes }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display text-base font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-sage/30 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
        "Ventajas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: ventajas.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mt-0.5 shrink-0 text-primary" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v })
      ] }, v)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display text-base font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-destructive/15 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) }),
        "Inconvenientes"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: inconvenientes.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 mt-0.5 shrink-0 text-destructive" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v })
      ] }, v)) })
    ] })
  ] });
}
function HealthInsights({ tecnologia, idealPara }) {
  const dolores = buildDolores(tecnologia, idealPara);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Qué problema te resuelve (y cuál no)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-2xl", children: "Información práctica orientada a lo que de verdad incomoda en casa cuando el aire está seco. No sustituye a un consejo médico: si los síntomas persisten, habla con tu profesional sanitario." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: dolores.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sage/30 text-foreground", children: d.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold", children: d.titulo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: d.texto })
      ] })
    ] }) }, d.titulo)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Rango de humedad recomendado en interiores: 40–60 %." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Es el rango con el que coinciden la guía de vivienda y salud de la OMS (2018), la EPA estadounidense y el estándar ASHRAE 55. Por debajo del 30 % aparecen molestias en mucosas, ojos y piel; por encima del 60 % crece el riesgo de ácaros y moho. Un higrómetro barato (5–10 €) es la mejor compra complementaria a cualquier humidificador." })
      ] })
    ] }) })
  ] });
}
function buildDolores(tec, idealPara) {
  const para = idealPara.join(" ").toLowerCase();
  const items = [];
  items.push({
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5" }),
    titulo: "Te despiertas con la garganta seca",
    texto: "Con calefacción la humedad cae por debajo del 30 %. Mantenerla entre 40–60 % reduce la sequedad de garganta y nariz al despertar. Coloca el humidificador a 1–2 m de la cama, nunca apuntando directamente, y úsalo en modo nocturno si tienes uno con sensor."
  });
  if (/bebé|infantil|niñ/.test(para)) {
    items.push({
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-5 w-5" }),
      titulo: "Bebés con mocos y tos nocturna",
      texto: "La AEPap (Asociación Española de Pediatría de Atención Primaria) recomienda ambientes húmedos para aliviar la congestión en lactantes. Usa agua limpia, vacía el depósito a diario y mantén el aparato fuera del alcance del bebé. Evita los modelos de vapor caliente cerca de la cuna por riesgo de quemadura."
    });
  }
  if (/alergi|asma|polen/.test(para)) {
    items.push({
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }),
      titulo: "Alergias y vías respiratorias sensibles",
      texto: "Por encima del 60 % de humedad proliferan ácaros y moho, dos de los alérgenos más comunes en interior según la SEAIC. Un humidificador es útil contra el aire seco, pero no sustituye a la limpieza ni a un purificador. Mide siempre con higrómetro."
    });
  }
  if (tec === "Ultrasónico") {
    items.push({
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
      titulo: "Polvo blanco sobre los muebles",
      texto: "Los ultrasónicos atomizan los minerales del agua y los depositan en forma de polvo blanco. Usa agua destilada o desmineralizada, o un cartucho antical. Estudios de la EPA alertan de que ese polvo puede irritar las vías respiratorias en personas sensibles."
    });
  }
  if (tec === "Evaporativo") {
    items.push({
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
      titulo: "Sin polvo blanco, pero con filtro",
      texto: "Los evaporativos no emiten minerales al aire, así que son los preferidos en habitaciones de bebés y personas alérgicas. A cambio, el filtro absorbente debe cambiarse cada 1–3 meses; si lo descuidas, puede oler a humedad estancada."
    });
  }
  if (tec === "Vapor caliente" || tec === "Híbrido") {
    items.push({
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }),
      titulo: "Vapor caliente: ojo con los niños",
      texto: "El vapor caliente esteriliza el agua al hervirla, lo que reduce bacterias. Pero la boquilla y el agua interior alcanzan temperaturas elevadas: los CDC desaconsejan los modelos de vapor en habitaciones infantiles sin supervisión."
    });
  }
  if (tec === "UV-C") {
    items.push({
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }),
      titulo: "Luz UV-C: útil solo con limpieza regular",
      texto: "La luz UV-C reduce la carga microbiana del depósito, pero solo si el agua se cambia y el aparato se limpia con regularidad. Las cifras de eliminación bacteriana del fabricante asumen un mantenimiento perfecto que pocas casas mantienen."
    });
  }
  items.push({
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
    titulo: "Piel y labios cuarteados",
    texto: "La American Academy of Dermatology recomienda usar humidificador en invierno para frenar la pérdida transepidérmica de agua, especialmente útil si tienes dermatitis atópica o psoriasis. El efecto se nota a los pocos días, sobre todo en manos y labios."
  });
  return items.slice(0, 4);
}
function AtributosClave({ atributos }) {
  if (!atributos) return null;
  const grupos = [
    {
      title: "Inteligencia y control",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-4 w-4" }),
      rows: [
        { label: "Higrostato (sensor de humedad)", value: atributos.control.higrostato },
        { label: "Modo automático", value: atributos.control.modoAuto },
        { label: "WiFi y app móvil", value: atributos.control.wifiApp },
        { label: "Asistentes de voz", value: atributos.control.asistentesVoz },
        { label: "Temporizador", value: atributos.control.temporizador },
        { label: "Apagado auto sin agua", value: atributos.control.apagadoAutoSinAgua }
      ]
    },
    {
      title: "Confort de uso",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }),
      rows: [
        { label: "Modo noche / silencioso", value: atributos.confort.modoNoche },
        { label: "Luces LED apagables", value: atributos.confort.luzApagable },
        { label: "Boquilla giratoria 360°", value: atributos.confort.boquilla360 },
        { label: "Indicador nivel de agua", value: atributos.confort.indicadorAgua },
        { label: "Rellenado superior (top-fill)", value: atributos.confort.topFill }
      ]
    },
    {
      title: "Mantenimiento e higiene",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-4 w-4" }),
      rows: [
        { label: "Necesita filtro", value: atributos.mantenimiento.filtroRequerido },
        atributos.mantenimiento.filtroRequerido === true ? { label: "Coste anual del filtro", value: atributos.mantenimiento.filtroCosteAnualEur, suffix: "€/año" } : null,
        { label: "Boca ancha (limpieza fácil)", value: atributos.mantenimiento.bocaAncha },
        { label: "Cartucho antical", value: atributos.mantenimiento.cartuchoAntical },
        { label: "Función auto-limpieza", value: atributos.mantenimiento.autolimpieza },
        { label: "Lámpara UV-C", value: atributos.mantenimiento.uvc }
      ].filter(Boolean)
    },
    {
      title: "Extras",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
      rows: [
        { label: "Difusor de aromas", value: atributos.extras.aromaterapia },
        { label: "Vapor caliente/templado", value: atributos.extras.vaporCaliente },
        { label: "Ionizador", value: atributos.extras.ionizador },
        { label: "Consumo eléctrico", value: atributos.extras.consumoW, suffix: "W" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Lo que de verdad importa al elegirlo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: 'Estos son los detalles que marcan la diferencia entre un humidificador que usas a diario y uno que acaba en un armario. Donde aparece "—" es que no hay dato oficial verificado.' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: grupos.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-base font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: g.icon }),
        g.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm", children: g.rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: r.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-right", children: renderValue(r) })
      ] }, r.label)) })
    ] }, g.title)) })
  ] });
}
function renderValue(r) {
  const v = r.value;
  if (v === "DATO_PENDIENTE" || v === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "inline h-4 w-4 text-muted-foreground", "aria-label": "dato pendiente" });
  }
  if (v === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "inline h-4 w-4 text-primary", "aria-label": "sí" });
  if (v === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "inline h-4 w-4 text-muted-foreground/60", "aria-label": "no" });
  if (Array.isArray(v)) {
    if (v.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "inline h-4 w-4 text-muted-foreground/60", "aria-label": "no" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: v.join(" · ") });
  }
  if (typeof v === "number") return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
    v,
    r.suffix ? ` ${r.suffix}` : ""
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "—" });
}
function ProductoPage() {
  const {
    producto: p
  } = Route$3.useLoaderData();
  const alternativas = productos.filter((x) => x.slug !== p.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-4xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      to: "/",
      label: "Inicio"
    }, {
      to: "/mejores-humidificadores",
      label: "Mejores humidificadores"
    }, {
      label: p.nombre
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: p.marca }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: p.nombre }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground leading-relaxed", children: p.resumen }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Valoración editorial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl font-semibold", children: [
              p.valoracionEditorial,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground", children: "/100" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block w-px h-10 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[180px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RatingBar, { value: p.valoracionEditorial }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Sobre nuestra rúbrica" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateButton, { href: p.enlaceAfiliado, comercio: p.comercio, size: "lg", producto: p.slug, nombre: p.nombre, marca: p.marca, posicion: "ficha-hero" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Rango de precio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: p.rango })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
          " Actualizado el ",
          new Date(p.fechaActualizacion).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-3xl border border-border bg-card p-6 shadow-soft", children: [
        PRODUCT_IMAGES[p.slug] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-6 -mt-6 mb-5 aspect-square rounded-t-3xl bg-gradient-to-br from-mist via-card to-background border-b border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PRODUCT_IMAGES[p.slug], alt: `${p.nombre} — imagen oficial ${PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca}`, className: "h-full w-full object-contain p-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold", children: "Ficha rápida" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 grid grid-cols-2 gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, {}), label: "Capacidad", value: fmt(p.capacidadL, "L") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, {}), label: "Cobertura", value: fmt(p.coberturaM2, "m²") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, {}), label: "Ruido", value: fmt(p.ruidoDb, "dB") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, {}), label: "Autonomía", value: fmt(p.autonomiaH, "h") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
          "Tecnología: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: p.tecnologia })
        ] }),
        PRODUCT_IMAGE_CREDITS[p.slug] && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[11px] text-muted-foreground", children: [
          "Imagen: cortesía de ",
          PRODUCT_IMAGE_CREDITS[p.slug],
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateDisclosure, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Ventajas e inconvenientes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProsCons, { ventajas: p.ventajas, inconvenientes: p.inconvenientes }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AtributosClave, { atributos: p.atributos }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HealthInsights, { tecnologia: p.tecnologia, idealPara: p.idealPara }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 grid gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "A quién le encaja", items: p.idealPara, tone: "positive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "A quién no", items: p.noRecomendadoPara, tone: "negative" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Características técnicas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid gap-2 sm:grid-cols-2 text-sm", children: p.caracteristicas.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-xl border border-border bg-card px-4 py-3", children: c }, c)) })
    ] }),
    p.datosPendientes && p.datosPendientes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "mt-10 rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium", children: "Aún sin confirmar:" }),
      " ",
      p.datosPendientes.join(", "),
      ". Lo dejamos pendiente antes que ponerte un número que no podamos respaldar."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Alternativas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: alternativas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: a }, a.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-14 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Nuestra opinión" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-relaxed", children: p.resumen }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
        "Este humidificador no lo hemos tenido en casa. La valoración sale de la ficha oficial, del precio que hemos visto y de cruzar reseñas verificadas. Si quieres saber cómo lo puntuamos exactamente, mira nuestra",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/metodologia", className: "underline underline-offset-4", children: "página de metodología" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateButton, { href: p.enlaceAfiliado, comercio: p.comercio, size: "lg", producto: p.slug, nombre: p.nombre, marca: p.marca, posicion: "ficha-cta" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: [{
      q: "¿Lo habéis probado en casa?",
      a: "No. Lo analizamos con la ficha técnica oficial y las reseñas verificadas de quien sí lo ha comprado."
    }, {
      q: "¿El precio que ponéis es el definitivo?",
      a: "Es lo que vimos en la tienda el día de la última actualización. En electrónica los precios bailan, así que compruébalo antes de pasar por caja."
    }, {
      q: "¿Por qué este y no otro?",
      a: "Porque al pasarlo por nuestra rúbrica (rendimiento, calidad-precio, limpieza, ruido) sale por delante de las alternativas comparables de su gama."
    }] }) })
  ] });
}
function Spec({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/60 px-3 py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary [&_svg]:h-3.5 [&_svg]:w-3.5", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display font-semibold tabular-nums", children: value })
  ] });
}
function Block({
  title,
  items,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display text-base font-semibold ${tone === "positive" ? "text-foreground" : "text-foreground"}`, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: i }, i)) })
  ] });
}
function fmt(v, unit) {
  if (v === void 0 || v === "DATO_PENDIENTE") return "—";
  return `${v} ${unit}`;
}
export {
  ProductoPage as component
};
