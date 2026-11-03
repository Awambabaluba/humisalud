import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productos, mejoresPorCategoria, isDisponible } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CATEGORIAS } from "@/data/site";

const COPY: Record<
  string,
  {
    h1: string;
    lead: string;
    title: string;
    desc: string;
    intro?: string;
    faq?: { q: string; a: string }[];
    filtro: (p: (typeof productos)[number]) => boolean;
    mejor: keyof typeof mejoresPorCategoria;
  }
> = {
  bebe: {
    h1: "Mejores humidificadores para bebé en 2026",
    lead: "Vapor frío, silenciosos y fáciles de rellenar sin acrobacias. En la habitación del bebé, vapor caliente nunca.",
    title: "Humidificador para bebé 2026: vapor frío, silencioso y seguro",
    desc: "Qué humidificador poner en el cuarto del bebé: vapor frío, poco ruido, humedad entre 40 y 60 % y fácil de limpiar. Modelos comparados con decibelios y precio.",
    intro:
      "En la habitación del bebé, vapor frío siempre: los de vapor caliente calientan el agua y, si se vuelcan o el niño llega a la salida, pueden quemar. Después, el ruido: busca menos de 30 dB en modo noche para que no le despierte; algunos modelos de esta lista bajan a 21-28 dB. Mantén la humedad entre el 40 % y el 60 %, mejor con higrostato o con un higrómetro aparte, porque pasarse favorece el moho y los ácaros. Colócalo a uno o dos metros de la cuna, en alto, fuera de su alcance y con el cable recogido. Vacíalo y sécalo cada día y límpialo a fondo una vez por semana. Si el agua de tu zona es dura, un evaporativo o agua destilada evitan el polvo blanco.",
    faq: [
      {
        q: "¿Vapor frío o caliente para el bebé?",
        a: "Frío. Humidifica igual de bien y no hay riesgo de quemaduras si se vuelca o el niño toca la salida del vapor.",
      },
      {
        q: "¿Es bueno dejar el humidificador encendido toda la noche con el bebé?",
        a: "Sí, si la humedad no pasa del 60 % y el aparato está limpio. Un modelo con higrostato se apaga solo al llegar al nivel que fijes.",
      },
      {
        q: "¿A qué distancia de la cuna lo pongo?",
        a: "A uno o dos metros, en una superficie alta y estable, sin que el vapor vaya directo a la cuna y con el cable fuera de su alcance.",
      },
      {
        q: "¿Puedo echarle aceites esenciales?",
        a: "En el cuarto del bebé, mejor no: pueden irritar sus vías respiratorias. Agua sola, y destilada si la del grifo es muy dura.",
      },
    ],
    filtro: (p) =>
      p.idealPara.some((u) => /bebé|infantil/i.test(u)) ||
      ["Ultrasónico", "Evaporativo"].includes(p.tecnologia),
    mejor: "bebe",
  },
  dormitorio: {
    h1: "Humidificador para dormir: los más silenciosos",
    lead: "Poco ruido y con depósito suficiente para no quedarte a medias a las cuatro de la mañana.",
    title: "Humidificador para dormir 2026: silenciosos y toda la noche",
    desc: "Humidificadores para dormir sin ruido: modo noche, vapor frío y autonomía para toda la noche. Comparativa con decibelios y precios actualizados.",
    intro:
      "Para dormir, lo primero es el ruido: por debajo de 30 dB un humidificador se oye como un susurro, y a partir de 35 dB ya hay quien lo nota con la luz apagada. Mira el dato en modo noche, no a máxima potencia, que es como lo vas a usar. Lo segundo es la autonomía: si el depósito no aguanta ocho horas a nivel bajo, se apagará antes de que suene el despertador. Y lo tercero, la luz: busca que la pantalla y el piloto se puedan apagar. En el dormitorio, mejor vapor frío, a uno o dos metros de la cama y sin apuntarte a la cara. Con la humedad entre el 40 % y el 60 % se descansa mejor y amaneces sin la garganta seca.",
    faq: [
      {
        q: "¿Es bueno dormir con el humidificador encendido?",
        a: "Sí, siempre que la humedad del cuarto se quede entre el 40 % y el 60 %. Por encima aparecen condensación y moho; por eso conviene un modelo con higrostato o un higrómetro aparte.",
      },
      {
        q: "¿Cuántos decibelios son silenciosos para dormir?",
        a: "Por debajo de 30 dB es un susurro y no molesta a casi nadie. Entre 30 y 35 dB se oye en una habitación muy silenciosa. Fíjate en el dato del modo noche.",
      },
      {
        q: "¿Dónde pongo el humidificador en el dormitorio?",
        a: "A uno o dos metros de la cama, sobre una superficie alta y que no sea de madera delicada, y sin que el chorro te dé en la cara ni moje la pared.",
      },
    ],
    filtro: (p) => p.idealPara.some((u) => /dormitorio|nocturno/i.test(u)),
    mejor: "dormitorioSilencioso",
  },
  salon: {
    h1: "Humidificadores para salón y estancias grandes",
    lead: "Caudal de sobra, depósito amplio y modo automático para espacios de 25 a 55 m².",
    title: "Humidificador para salón 2026: para espacios de 30 a 50 m²",
    desc: "Humidificadores para salones y estancias grandes: cobertura de 30 a 50 m², depósitos de 6 litros o más y modo automático. Comparativa con datos y precios.",
    intro:
      "Un salón pide otra liga que un dormitorio. Mira primero la cobertura: el fabricante la da en m², así que compárala con tu salón y, si es abierto a la cocina o tiene techos altos, súmale margen. Después, el depósito: con menos de 4 litros lo rellenarás a diario; los de esta lista llegan a 6 o 7,5 litros. El modo automático con higrostato es casi obligatorio en una estancia grande, porque evita pasarse de humedad y gastar agua y luz de más. Colócalo en una zona despejada, a un metro de muebles de madera, cortinas y aparatos electrónicos, para que el vapor se reparta antes de tocar ninguna superficie.",
    faq: [
      {
        q: "¿Qué tamaño de humidificador necesito para mi salón?",
        a: "Uno cuya cobertura iguale o supere los m² del salón. Si es diáfano o tiene techos altos, elige el siguiente escalón. Nuestra calculadora te da la cifra exacta.",
      },
      {
        q: "¿Basta un humidificador para toda la casa?",
        a: "No. Humidifica bien la estancia donde está y algo las de al lado si dejas las puertas abiertas. Para varias habitaciones, mejor uno por estancia.",
      },
      {
        q: "¿Híbrido o ultrasónico para un salón grande?",
        a: "Los dos sirven. Los híbridos suman un evaporador o calentador y reparten mejor la humedad en invierno, aunque los que calientan el agua gastan más luz.",
      },
    ],
    filtro: (p) => typeof p.coberturaM2 === "number" && p.coberturaM2 >= 30,
    mejor: "salon",
  },
  alergias: {
    h1: "Humidificadores para alergias y asma",
    lead: "Evaporativos: ni rastro de polvo blanco, y modelos con filtración cuidada.",
    title: "Humidificador para alergias y asma 2026: sin polvo blanco",
    desc: "Qué humidificador conviene si tienes alergia o asma: evaporativos sin polvo blanco, humedad entre 40 y 50 % y limpieza fácil. Modelos comparados.",
    intro:
      "Si tienes alergia o asma, el tipo de humidificador importa más que la marca. Los ultrasónicos pulverizan los minerales del agua en forma de polvo blanco que puede irritar las vías respiratorias; por eso recomendamos los evaporativos, que expulsan aire húmedo sin ese residuo. La humedad ideal está entre el 40 % y el 50 %: por debajo se resecan las mucosas y por encima se disparan los ácaros y el moho, que son justo los que empeoran los síntomas. Limpia el depósito cada pocos días para no dispersar bacterias por la habitación.",
    faq: [
      {
        q: "¿Ultrasónico o evaporativo si tengo alergia?",
        a: "Evaporativo. El ultrasónico dispersa el polvo blanco de los minerales del agua, que puede molestar en vías sensibles; el evaporativo humidifica sin ese residuo.",
      },
      {
        q: "¿Qué nivel de humedad es el mejor para la alergia?",
        a: "Entre el 40 % y el 50 %. Por debajo se resecan la garganta y la nariz; por encima del 55-60 % proliferan ácaros y moho, que agravan las alergias.",
      },
      {
        q: "¿Puede el humidificador empeorar la alergia?",
        a: "Solo si no se limpia (acumula moho y bacterias) o si mantienes la casa por encima del 60 % de humedad. Con limpieza semanal y un higrómetro para controlar el nivel, ayuda.",
      },
    ],
    filtro: (p) =>
      p.tecnologia === "Evaporativo" || p.idealPara.some((u) => /alergia|asma/i.test(u)),
    mejor: "alergias",
  },
  inteligente: {
    h1: "Humidificadores con app y conectados",
    lead: "Control desde el móvil, Alexa o Google, y programación automática.",
    title: "Humidificador inteligente 2026: con app, Alexa y modo automático",
    desc: "Humidificadores inteligentes con Wi-Fi: control desde el móvil, Alexa o Google y higrostato que mantiene la humedad sola. Cuáles merecen la pena.",
    intro:
      "Un humidificador «inteligente» se controla desde el móvil por Wi-Fi, obedece a Alexa o Google Assistant y, sobre todo, incorpora un higrostato que mantiene exactamente la humedad que le pides. Ese modo automático es lo que de verdad marca la diferencia: enciende y apaga la nebulización solo, para no pasarse de humedad ni gastar agua de más. También permite programar horarios (por ejemplo, solo de noche) y avisa cuando toca rellenar el depósito. Los modelos con Wi-Fi integran los asistentes de voz; los de solo Bluetooth se manejan desde su propia app.",
    faq: [
      {
        q: "¿Funcionan con Alexa y Google Home?",
        a: "Los modelos con Wi-Fi, sí: se enlazan a la app del asistente y responden por voz. Los que solo llevan Bluetooth se controlan desde la app del fabricante, sin voz.",
      },
      {
        q: "¿Merece la pena el modo automático?",
        a: "Sí. Mantiene la humedad objetivo con un sensor, evita condensaciones y ahorra agua y electricidad frente a dejarlo a máxima potencia todo el tiempo.",
      },
      {
        q: "¿Necesitan internet para funcionar?",
        a: "Para el control remoto y por voz, sí. Como humidificador normal funcionan con los botones del propio aparato aunque se caiga el Wi-Fi.",
      },
    ],
    filtro: (p) =>
      ["UV-C"].includes(p.tecnologia) || /inteligente|smart|app/i.test(p.caracteristicas.join(" ")),
    mejor: "inteligente",
  },
  economico: {
    h1: "Humidificadores baratos (por menos de 40 €)",
    lead: "Para habitaciones pequeñas o si solo lo vas a encender alguna noche suelta.",
    title: "Humidificador barato 2026: los que cumplen por menos de 40 €",
    desc: "Humidificadores baratos que sí cumplen: menos de 40 €, para dormitorios pequeños y uso ocasional. Qué esperar de ellos y cuándo compensa pagar algo más.",
    intro:
      "Por debajo de 40 € encontrarás sobre todo ultrasónicos pequeños, pensados para un dormitorio de pocos metros o para un uso puntual. Cumplen, pero conviene conocer sus límites: depósitos pequeños (más rellenados), menos cobertura y, salvo excepciones como el BreezeCare, sin modo automático. Si vives en una zona de agua dura, usa agua destilada para evitar el polvo blanco típico del ultrasónico. Para la habitación de un niño o una mesita de noche son una compra sensata; para humidificar todo el salón se te quedarán cortos.",
    faq: [
      {
        q: "¿De verdad sirve un humidificador barato?",
        a: "Para cuartos pequeños y uso ocasional, sí. Para salones grandes o funcionamiento continuo, un modelo económico se queda corto de depósito y de cobertura.",
      },
      {
        q: "¿Por qué deja polvo blanco en los muebles?",
        a: "Es el mineral del agua del grifo que el ultrasónico pulveriza junto con el vapor. Se evita usando agua destilada o filtrada.",
      },
      {
        q: "¿Cuánto dura uno económico?",
        a: "Con uso frecuente, entre uno y dos años. Alargas su vida limpiándolo cada semana para que no críe moho ni acumule cal.",
      },
      {
        q: "¿Cuándo compensa pagar algo más?",
        a: "Si lo vas a usar todas las noches o en una habitación de más de 20 m². Entre 45 y 70 € ya hay modelos con depósito grande, modo automático y menos ruido, y el gasto se amortiza en pocos inviernos.",
      },
    ],
    filtro: (p) => p.rango === "Económico",
    mejor: "economico",
  },
};

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const copy = COPY[params.slug];
    if (!copy) throw notFound();
    return { slug: params.slug, title: copy.title, desc: copy.desc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.desc },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.desc },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://humisalud.com/categoria/${loaderData.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Categoría no encontrada</h1>
      <Link to="/" className="mt-4 inline-block text-primary underline">
        Inicio
      </Link>
    </div>
  ),
  component: CategoriaPage,
});

function CategoriaPage() {
  const { slug } = Route.useLoaderData();
  const copy = COPY[slug]!;
  const lista = productos.filter((p) => copy.filtro(p) && isDisponible(p));

  const cat = CATEGORIAS.find((c) => c.slug === slug);
  return (
    <article className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: cat?.titulo ?? "Categoría" }]} />
      <header className="mt-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Categoría</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          {copy.h1}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{copy.lead}</p>
      </header>
      <div className="mt-8">
        <AffiliateDisclosure />
      </div>
      {copy.intro && (
        <section className="mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground">{copy.intro}</p>
        </section>
      )}
      <section className="mt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p, i) => (
            <ProductCard
              key={p.slug}
              producto={p}
              highlight={i === 0}
              badge={i === 0 ? "Mejor opción" : undefined}
            />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Comparativa</h2>
        <div className="mt-4">
          <ComparisonTable productos={lista} />
        </div>
      </section>
      {copy.faq && copy.faq.length > 0 && (
        <section className="mt-14 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-5 space-y-5">
            {copy.faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-medium text-foreground">{f.q}</h3>
                <p className="mt-1 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
