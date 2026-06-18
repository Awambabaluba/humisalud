import { createFileRoute } from "@tanstack/react-router";
import { Selector } from "@/components/site/Selector";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/selector")({
  head: () => ({
    meta: [
      { title: "Selector de humidificador — HumiSalud" },
      { name: "description", content: "Responde 5 preguntas y te recomendamos el humidificador que mejor encaja con tu estancia, presupuesto y uso." },
      { property: "og:title", content: "Selector de humidificador — HumiSalud" },
      { property: "og:url", content: "/selector" },
    ],
    links: [{ rel: "canonical", href: "/selector" }],
  }),
  component: SelectorPage,
});

function SelectorPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Selector" }]} />
      <header className="mt-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Selector</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Encuentra el que va contigo
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cruzamos los metros de tu habitación, lo que te quieres gastar, el ruido que aguantas y para qué lo vas a usar. Solo te enseñamos modelos con datos contrastados.
        </p>
      </header>
      <div className="mt-10"><Selector /></div>
      <div className="mt-10"><AffiliateDisclosure /></div>
    </section>
  );
}
