import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { MethodologyBlock } from "@/components/site/MethodologyBlock";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodología editorial — HumiSalud" },
      {
        name: "description",
        content:
          "Cómo evaluamos cada humidificador: rúbrica de 100 puntos, fuentes, fechado de precios y separación de valoraciones.",
      },
      { property: "og:title", content: "Metodología editorial — HumiSalud" },
      { property: "og:url", content: "https://humisalud.com/metodologia" },
    ],
    links: [{ rel: "canonical", href: "https://humisalud.com/metodologia" }],
  }),
  component: Metodologia,
});

function Metodologia() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Metodología" }]} />
      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
          Cómo evaluamos
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Cómo trabajamos en HumiSalud
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          No probamos los humidificadores en casa y lo decimos sin rodeos. Lo que sí hacemos: leer
          las fichas técnicas con lupa, cruzar reseñas verificadas y pasar siempre cada modelo por
          la misma rúbrica para poder compararlos entre sí.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Rúbrica de 100 puntos</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {[
            ["Rendimiento / caudal por m²", "15%"],
            ["Relación calidad-precio", "12%"],
            ["Facilidad de limpieza", "12%"],
            ["Ruido", "10%"],
            ["Autonomía y depósito", "10%"],
            ["Higiene (tecnología, antibacteriano declarado)", "10%"],
            ["Soporte de recambios", "8%"],
            ["Consumo y coste eléctrico", "8%"],
            ["Funciones extra (modo auto, app, voz)", "8%"],
            ["Garantía y servicio postventa", "7%"],
          ].map(([k, w]) => (
            <li
              key={k}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
            >
              <span>{k}</span>
              <span className="font-display font-semibold tabular-nums">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Principios editoriales</h2>
        <div className="mt-5">
          <MethodologyBlock />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Lo que no hacemos</h2>
        <ul className="mt-3 list-disc pl-5 text-base space-y-1.5">
          <li>Inventarnos puntuaciones, precios o pruebas que no hemos hecho.</li>
          <li>Meter "últimas 3 unidades" ni relojes que corren hacia atrás.</li>
          <li>Esconder que usamos enlaces de afiliación.</li>
          <li>Pasar los datos del fabricante como si los hubiéramos comprobado nosotros.</li>
          <li>Soltar afirmaciones médicas sin respaldo.</li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6 text-sm">
        <strong className="font-medium">Lo que sí reconocemos:</strong> como no probamos los modelos
        en casa, dependemos de la ficha del fabricante y de las reseñas verificadas. Lo dejamos
        claro en cada análisis y, si un dato está sin confirmar, lo marcamos como pendiente.
      </section>
    </article>
  );
}
