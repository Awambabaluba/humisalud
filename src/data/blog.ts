export interface BlogPostImagen {
  src: string;
  alt: string;
  credito?: string;
}

export interface BlogPostAfiliado {
  comercio: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  titulo: string;
  fecha: string;
  resumen: string;
  categoria: string;
  contenido: string[];
  /** false mientras es un borrador pendiente de revisión humana — no aparece en /blog, sitemap ni rutas públicas */
  publicado?: boolean;
  imagenPortada?: BlogPostImagen;
  imagenes?: BlogPostImagen[];
  afiliados?: BlogPostAfiliado[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "humedad-ideal-en-casa-2026",
    titulo: "¿Cuál es la humedad ideal en casa? Lo que dicen RITE y la OMS",
    fecha: "2026-06-08",
    categoria: "Salud",
    resumen:
      "Repasamos qué rango de humedad relativa recomiendan las normativas de referencia y qué pasa si te sales de él, por arriba o por abajo.",
    contenido: [
      "El Reglamento de Instalaciones Térmicas en los Edificios (RITE) sitúa el confort higrotérmico en interiores entre el 40% y el 60% de humedad relativa. Por debajo del 30% empiezan las mucosas secas, la piel tirante y más facilidad para resfriarte; por encima del 65% aparecen condensaciones, ácaros y moho en cuestión de semanas.",
      "En invierno, con la calefacción puesta, es habitual que el ambiente caiga por debajo del 30% sin que lo notes hasta que te despiertas con la garganta seca. Ahí es donde un humidificador bien dimensionado (revisa la calculadora si no sabes cuántos litros/hora necesitas) compensa lo que el aire caliente reseca.",
      "En verano con aire acondicionado pasa lo mismo a la inversa: el aparato deshumidifica al enfriar, y si el ambiente ya era seco de por sí, te puedes quedar corto de humedad igualmente.",
      "La recomendación práctica: usa un higrómetro (muchos humidificadores con app ya lo traen integrado) y no fíes la decisión a la sensación térmica. El cuerpo se acostumbra a la sequedad mucho antes de que sea saludable.",
    ],
  },
  {
    slug: "evaporativo-vs-ultrasonico-cual-elegir",
    titulo: "Evaporativo vs. ultrasónico: la pregunta que más nos hacéis",
    fecha: "2026-06-15",
    categoria: "Guías",
    resumen:
      "Las dos tecnologías más vendidas resuelven el mismo problema de formas muy distintas. Aquí la diferencia real, no la de la ficha de marketing.",
    contenido: [
      "El ultrasónico vaporiza el agua con una membrana piezoeléctrica a alta frecuencia. Es silencioso, barato de producir y por eso domina el mercado de menos de 60€. El problema: si usas agua del grifo con cal, expulsa esos minerales como un polvo blanco que se posa sobre los muebles y, peor, sobre tus pulmones.",
      "El evaporativo, en cambio, empapa un filtro y un ventilador empuja aire a través de él. No expulsa minerales (se quedan en el filtro) y tiene una ventaja poco conocida: se autorregula — cuanto más seco está el ambiente, más rápido evapora, así que es casi imposible pasarse de humedad.",
      "La contrapartida del evaporativo es el mantenimiento: el filtro hay que cambiarlo (normalmente cada 1-6 meses según uso) y si no lo limpias con regularidad acumula bacterias, justo lo que querías evitar.",
      "Nuestra recomendación rápida: ultrasónico con agua destilada para dormitorio o cuarto del bebé (silencio + control de humedad manual). Evaporativo si tienes alergias o vives en zona de agua muy dura y no quieres lidiar con el polvo blanco.",
    ],
  },
  {
    slug: "fiebre-del-humidificador-prevencion",
    titulo: "Qué es la 'fiebre del humidificador' y cómo evitarla con 3 hábitos",
    fecha: "2026-06-18",
    categoria: "Salud",
    resumen:
      "Es un caso real y documentado de neumonitis por hipersensibilidad. No es alarmismo: con limpieza regular el riesgo es prácticamente nulo.",
    contenido: [
      "La 'fiebre del humidificador' (humidifier fever) es una neumonitis por hipersensibilidad causada por inhalar bacterias y endotoxinas que crecen en el agua estancada del depósito. Está documentada en literatura médica desde los años 80, sobre todo en humidificadores industriales y domésticos mal mantenidos.",
      "La buena noticia es que se previene con tres hábitos simples: cambiar el agua todos los días (nunca rellenar sobre agua vieja), vaciar y secar el depósito cada 2-3 días, y limpiar con una mezcla de agua y vinagre blanco una vez por semana para eliminar el biofilm que no se ve a simple vista.",
      "Si usas agua del grifo en zona de cal, añade un cuarto hábito: descalcificar el depósito cada 2 semanas con un ciclo de vinagre diluido, porque la cal acumulada es el sitio perfecto para que las bacterias se asienten.",
      "Con estos hábitos, el riesgo real para un uso doméstico normal es muy bajo. El problema aparece casi siempre por dejadez: agua de hace una semana en un depósito que nunca se ha abierto.",
    ],
  },
];

export function getBlogPost(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug);
  return post && post.publicado !== false ? post : undefined;
}

export const blogPostsPublicados = blogPosts.filter((p) => p.publicado !== false);

export const blogPostsOrdenados = [...blogPostsPublicados].sort(
  (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
);
