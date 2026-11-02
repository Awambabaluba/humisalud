import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ProductCard } from "@/components/site/ProductCard";
import { PriceTag } from "@/components/site/PriceTag";
import { AffiliateButton } from "@/components/site/AffiliateButton";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { FAQ } from "@/components/site/FAQ";
import { productos, isDisponible, type Producto } from "@/data/products";

const URL = "https://humisalud.com/black-friday-humidificadores";
const TITLE = "Black Friday humidificador 2026: cuál compensa — HumiSalud";
const DESC =
  "Qué humidificador compensa en el Black Friday 2026 según tu habitación, con el precio que hemos comprobado y cómo saber si una rebaja es real.";

/**
 * Página de temporada. Todo lo que es precio sale de `products.ts` (PriceTag y
 * `precioReferencia`), que refresca la rutina semanal; aquí no se escribe ni
 * un euro a mano. Si un modelo se agota (`isDisponible`), desaparece solo.
 */
interface Grupo {
  id: string;
  titulo: string;
  texto: string;
  slugs: string[];
}

const GRUPOS: Grupo[] = [
  {
    id: "dormitorio",
    titulo: "Dormitorio o cuarto del bebé",
    texto:
      "Aquí manda el silencio y que el aparato se pare solo cuando la habitación ya tiene la humedad que toca. Los tres llevan higrostato y modo automático y son de vapor frío. El NeoClassic 450S es el más silencioso que tenemos fichado; el Dual 200S es el que más rodaje de opiniones acumula; el BreezeCare 2900 Smart es la puerta de entrada barata con depósito de 4,5 L, aunque Cecotec no publica los decibelios y su objetivo de humedad no baja del 45 %.",
    slugs: ["levoit-neoclassic-450s", "levoit-dual-200s", "cecotec-breezecare-2900-smart"],
  },
  {
    id: "salon",
    titulo: "Salón o estancia grande, de 30 a 50 m²",
    texto:
      "En un salón un aparato pequeño se pasa el día al máximo sin llegar nunca. Hace falta caudal y depósito. El NeoClassic 650S cubre casi 50 m² en vapor frío y con app. El Dreo 713S y el Winix L500 añaden vapor caliente, que sube bastante el consumo cuando lo usas.",
    slugs: ["levoit-neoclassic-650s", "dreo-713s", "winix-l500"],
  },
  {
    id: "agua-dura",
    titulo: "Agua dura, alergias o nada de polvo blanco",
    texto:
      "Un ultrasónico con agua del grifo dura suelta los minerales al aire en forma de polvo blanco. Un evaporativo no, porque la cal se queda en el filtro. A cambio, el filtro hay que cambiarlo y eso es un gasto que conviene sumar al precio.",
    slugs: ["philips-hu2716-nanocloud"],
  },
  {
    id: "vapor-templado",
    titulo: "Quieres vapor templado en invierno",
    texto:
      "Los híbridos calientan el agua antes de nebulizarla. El OasisMist 450S lo hace con app y modo automático; el Rowenta Aqua Boost, sin app. Ninguno de los dos es para el cuarto de un niño pequeño con el modo caliente puesto, por riesgo de quemaduras.",
    slugs: ["levoit-oasismist-450s", "rowenta-aqua-perfect"],
  },
];

function formatEuro(n: number): string {
  return (
    n.toLocaleString("es-ES", {
      minimumFractionDigits: n % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}

const FAQS = [
  {
    q: "¿Cuándo es el Black Friday de 2026?",
    a: "El viernes 27 de noviembre de 2026, y el Cyber Monday cae el lunes 30. Muchas tiendas abren descuentos los días anteriores, pero las fechas de cada campaña las anuncia cada tienda; no las damos por sabidas.",
  },
  {
    q: "¿Merece la pena esperar al Black Friday para comprar un humidificador?",
    a: "Depende de cómo estés ahora. Si ya mides menos del 40 % de humedad con la calefacción puesta y en casa hay molestias, tres semanas de aire seco pesan más que unos euros de descuento. Si todavía no lo necesitas, apunta el precio que tenemos comprobado y compáralo el día 27.",
  },
  {
    q: "¿Cómo sé si el precio anterior que enseña la tienda es de verdad?",
    a: "En España, el artículo 20 de la Ley de Ordenación del Comercio Minorista (reformado por el Real Decreto-ley 24/2021) obliga a que el precio anterior de una rebaja sea el más bajo que la tienda aplicó en los 30 días previos. Aun así, compara con un histórico de precios y con el precio que publicamos en cada ficha.",
  },
  {
    q: "¿Vais a publicar las ofertas del Black Friday?",
    a: "Revisamos los precios del catálogo de forma periódica. Cuando un modelo baja respecto al precio más alto que tenemos registrado aparece en la página de ofertas con el porcentaje real, sin descuentos inventados.",
  },
  {
    q: "¿Qué tipo de humidificador sale más barato de mantener?",
    a: "Un ultrasónico de vapor frío gasta poca luz, pero con agua dura necesita agua destilada si no quieres polvo blanco. Un evaporativo gasta poco y acepta agua del grifo, pero pide filtro nuevo cada pocos meses. El vapor caliente es el que más consume con diferencia.",
  },
];

export const Route = createFileRoute("/black-friday-humidificadores")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: BlackFridayPage,
});

function BlackFridayPage() {
  const porSlug = new Map(productos.map((p) => [p.slug, p]));
  const disponibles = productos.filter(isDisponible);
  const grupos = GRUPOS.map((g) => ({
    ...g,
    productos: g.slugs
      .map((s) => porSlug.get(s))
      .filter((p): p is Producto => Boolean(p) && isDisponible(p as Producto)),
  })).filter((g) => g.productos.length > 0);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { to: "/", label: "Inicio" },
          { to: "/ofertas", label: "Ofertas" },
          { label: "Black Friday 2026" },
        ]}
      />

      <header className="mt-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
          Black Friday · viernes 27 de noviembre de 2026
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Humidificadores en Black Friday 2026: cuál compensa y cómo saber si la rebaja es real
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          El Black Friday cae justo cuando la calefacción ya lleva unas semanas secando las casas,
          así que es la época del año en que más humidificadores se compran. Esta página no es un
          escaparate de descuentos. Te decimos qué modelo encaja en cada habitación, qué precio
          tenemos comprobado de cada uno y con qué fecha, y cómo distinguir una rebaja de verdad de
          un precio inflado la semana anterior.
        </p>
      </header>

      <div className="mt-8">
        <AffiliateDisclosure />
      </div>

      <nav aria-label="En esta página" className="mt-8 flex flex-wrap gap-2 text-sm">
        {grupos.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground hover:text-foreground"
          >
            {g.titulo}
          </a>
        ))}
        <a
          href="#precios"
          className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground hover:text-foreground"
        >
          Precios comprobados
        </a>
        <a
          href="#oferta-real"
          className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground hover:text-foreground"
        >
          Cómo saber si la oferta es real
        </a>
      </nav>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
          Antes de mirar precios, mira la habitación
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          El error más caro no es pagar diez euros de más, es comprar un aparato que no da para tu
          habitación. Uno pensado para 20 m² en un salón de 40 va a estar siempre al máximo y nunca
          va a llegar a la humedad que buscas. Si no lo tienes claro, mete los metros en la{" "}
          <Link to="/calculadora" className="underline underline-offset-4">
            calculadora
          </Link>{" "}
          y te dirá el caudal que necesitas. Y si dudas entre tecnologías, el{" "}
          <Link to="/coste-de-uso" className="underline underline-offset-4">
            coste de uso
          </Link>{" "}
          cambia mucho entre un vapor frío y uno caliente.
        </p>
      </section>

      {grupos.map((g) => (
        <section key={g.id} id={g.id} className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            {g.titulo}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {g.texto}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.productos.map((p) => (
              <ProductCard key={p.slug} producto={p} />
            ))}
          </div>
        </section>
      ))}

      <section id="precios" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
          El precio que tenemos comprobado de cada uno
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Esta es la referencia para el día 27. La primera columna es el último precio que vimos en
          la tienda, con la fecha en que lo comprobamos. La segunda es el precio más alto que
          tenemos registrado de ese modelo. Si el Black Friday te enseña un «antes» muy por encima
          de ambos, desconfía.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Modelo</th>
                <th className="p-3 font-medium">Último precio comprobado</th>
                <th className="p-3 font-medium">Más alto registrado</th>
                <th className="p-3 font-medium sr-only sm:not-sr-only">Tienda</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {disponibles.map((p) => (
                <tr key={p.slug}>
                  <td className="p-3">
                    <Link
                      to="/producto/$slug"
                      params={{ slug: p.slug }}
                      className="font-medium hover:underline underline-offset-4"
                    >
                      {p.nombre}
                    </Link>
                    <span className="block text-xs text-muted-foreground">{p.tecnologia}</span>
                  </td>
                  <td className="p-3">
                    <PriceTag producto={p} size="sm" />
                  </td>
                  <td className="p-3 tabular-nums text-muted-foreground">
                    {typeof p.precioReferencia === "number"
                      ? formatEuro(p.precioReferencia)
                      : "Sin dato"}
                  </td>
                  <td className="p-3">
                    <AffiliateButton
                      href={p.enlaceAfiliado}
                      comercio={p.comercio}
                      size="sm"
                      producto={p.slug}
                      nombre={p.nombre}
                      marca={p.marca}
                      posicion="black-friday-tabla"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Los precios cambian a menudo, y más en noviembre. Lo que cuenta es el que veas en la
          tienda al pagar.
        </p>
      </section>

      <section id="oferta-real" className="mt-16 max-w-3xl scroll-mt-24">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
          <ShieldCheck className="h-7 w-7 text-primary" aria-hidden />
          Cómo saber si una oferta es real
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Lo primero es mirar el precio tachado. En España, desde la reforma del artículo 20 de la
            Ley de Ordenación del Comercio Minorista que hizo el Real Decreto-ley 24/2021, el precio
            anterior que anuncia una rebaja tiene que ser el más bajo que esa tienda aplicó al
            producto en los 30 días previos. Subir el precio a principios de noviembre para bajarlo
            el día 27 no es legal, y el Ministerio de Derechos Sociales, Consumo y Agenda 2030 ya ha
            sancionado a varias tiendas online por subir precios antes de un Black Friday para
            presentarlos luego como rebaja.
          </p>
          <p>
            La ley no impide que te encuentres un descuento pequeño vestido de gran ocasión. Para
            eso sirve el histórico. Herramientas gratuitas como Keepa o CamelCamelCamel enseñan la
            evolución del precio de un producto en Amazon durante meses; si el precio del Black
            Friday es el mismo que tuvo en septiembre, no hay prisa. Nuestro precio comprobado, con
            su fecha, te sirve de segunda referencia.
          </p>
          <p>
            Comprueba también que sea el mismo modelo. Muchas marcas venden variantes casi iguales
            con otro número al final, otro color o un pack con filtros, y el precio de una no vale
            para la otra. En las fichas de HumiSalud enlazamos siempre el modelo concreto que hemos
            analizado.
          </p>
          <p>
            Y suma lo que cuesta tenerlo. Un evaporativo barato con filtros caros, o un ultrasónico
            que te obliga a comprar agua destilada todo el invierno, puede salir más caro en dos
            años que uno que costaba más el día de la compra. En cada ficha verás si necesita filtro
            y en el{" "}
            <Link to="/coste-de-uso" className="underline underline-offset-4">
              calculador de coste de uso
            </Link>{" "}
            lo que gasta de luz.
          </p>
          <p>
            Por último, fíjate en quién vende y envía. Un producto vendido por un tercero puede
            tener otras condiciones de devolución y garantía que uno vendido por Amazon; míralo
            antes de pagar, sobre todo si es un regalo de Navidad.
          </p>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
          Si lo compras para un problema concreto
        </h2>
        <ul className="mt-5 space-y-3 text-base text-muted-foreground">
          <li>
            <Link
              to="/blog/$slug"
              params={{ slug: "aire-seco-calefaccion-sintomas-soluciones" }}
              className="font-medium text-foreground underline underline-offset-4"
            >
              Aire seco por la calefacción: síntomas y cómo arreglarlo
            </Link>
          </li>
          <li>
            <Link
              to="/blog/$slug"
              params={{ slug: "humidificador-bebe-cual-elegir-uso-seguro" }}
              className="font-medium text-foreground underline underline-offset-4"
            >
              Humidificador para el bebé: cuál elegir y cómo usarlo sin riesgos
            </Link>
          </li>
          <li>
            <Link
              to="/blog/$slug"
              params={{ slug: "humidificador-resfriado-tos-congestion" }}
              className="font-medium text-foreground underline underline-offset-4"
            >
              Humidificador con resfriado, tos o congestión: cuándo ayuda y cuándo no
            </Link>
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/ofertas"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft"
          >
            Ver las ofertas activas <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/mejores-humidificadores"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium"
          >
            Ranking completo
          </Link>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <FAQ items={FAQS} />
      </section>
    </article>
  );
}
