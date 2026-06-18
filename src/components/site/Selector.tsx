import { useMemo, useState } from "react";
import { productos, type Producto } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

type Uso = "bebe" | "dormitorio" | "salon" | "alergias" | "inteligente" | "general";
type Vapor = "frio" | "caliente" | "indiferente";

interface State {
  m2: number;
  presupuesto: number;
  uso: Uso;
  silencio: boolean;
  vapor: Vapor;
}

export function Selector() {
  const en = useLocale() === "en";
  const [state, setState] = useState<State>({
    m2: 20, presupuesto: 80, uso: "dormitorio", silencio: true, vapor: "frio",
  });

  const ranking = useMemo(() => scoreProductos(productos, state), [state]);
  const top = ranking[0];
  const alts = ranking.slice(1, 3);

  const L = {
    eyebrow: en ? "Personalised recommendation" : "Recomendación personalizada",
    title: en ? "Tell us about your space" : "Cuéntanos cómo es tu espacio",
    subtitle: en
      ? "We cross-check your answers with our editorial method to suggest a main pick and two alternatives."
      : "Cruzamos tus respuestas con la metodología editorial para sugerir un modelo principal y dos alternativas.",
    roomSize: en ? "Room size" : "Tamaño de la estancia",
    budget: en ? "Maximum budget" : "Presupuesto máximo",
    use: en ? "Main use" : "Uso principal",
    vapor: en ? "Mist type" : "Tipo de vapor",
    cold: en ? "Cool" : "Frío",
    hot: en ? "Warm" : "Caliente",
    either: en ? "Either" : "Indiferente",
    silent: en
      ? "I want a silent model for night-time use"
      : "Quiero un modelo silencioso para uso nocturno",
    mainRec: en ? "Main recommendation" : "Recomendación principal",
    bestFit: en ? "Best fit" : "Mejor encaje",
    alternatives: en ? "Alternatives" : "Alternativas",
    reason: (s: State) =>
      en ? (
        <>
          We recommend it because it fits your {s.m2} m², budget of {s.presupuesto} € and{" "}
          <strong className="text-foreground font-medium">{labelUso(s.uso, true)}</strong> use.
          We don't show products without enough data; where you see "—" there's no verified official figure.
        </>
      ) : (
        <>
          Lo recomendamos porque encaja con tus {s.m2} m², presupuesto de {s.presupuesto} € y uso&nbsp;
          <strong className="text-foreground font-medium">{labelUso(s.uso, false)}</strong>. No mostramos productos
          sin datos suficientes; donde aparece "—" no hay cifra oficial verificada.
        </>
      ),
    empty: en
      ? "Not enough data to recommend a model with those criteria. Adjust budget or size."
      : "No tenemos datos suficientes para recomendar un modelo con tus criterios. Ajusta el presupuesto o el tamaño.",
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_1.4fr] items-start">
      <form className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft" onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs uppercase tracking-wider font-medium">{L.eyebrow}</span>
        </div>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight">{L.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{L.subtitle}</p>

        <div className="mt-6 space-y-6">
          <Field label={`${L.roomSize}: ${state.m2} m²`}>
            <input type="range" min={5} max={70} step={1} value={state.m2}
              onChange={(e) => setState({ ...state, m2: +e.target.value })}
              className="w-full accent-[var(--color-primary)]" />
          </Field>
          <Field label={`${L.budget}: ${state.presupuesto} €`}>
            <input type="range" min={20} max={250} step={5} value={state.presupuesto}
              onChange={(e) => setState({ ...state, presupuesto: +e.target.value })}
              className="w-full accent-[var(--color-primary)]" />
          </Field>

          <Field label={L.use}>
            <div className="grid grid-cols-2 gap-2">
              {(["bebe","dormitorio","salon","alergias","inteligente","general"] as Uso[]).map((u) => (
                <Chip key={u} active={state.uso === u} onClick={() => setState({ ...state, uso: u })}>
                  {labelUso(u, en)}
                </Chip>
              ))}
            </div>
          </Field>

          <Field label={L.vapor}>
            <div className="grid grid-cols-3 gap-2">
              {(["frio","caliente","indiferente"] as Vapor[]).map((v) => (
                <Chip key={v} active={state.vapor === v} onClick={() => setState({ ...state, vapor: v })}>
                  {v === "frio" ? L.cold : v === "caliente" ? L.hot : L.either}
                </Chip>
              ))}
            </div>
          </Field>

          <label className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3 cursor-pointer">
            <input type="checkbox" checked={state.silencio} onChange={(e) => setState({ ...state, silencio: e.target.checked })} className="h-4 w-4 accent-[var(--color-primary)]" />
            <span className="text-sm">{L.silent}</span>
          </label>
        </div>
      </form>

      <div className="space-y-4">
        {top ? (
          <>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <ArrowRight className="h-3.5 w-3.5" /> {L.mainRec}
            </div>
            <ProductCard producto={top} badge={L.bestFit} highlight />
            <p className="text-xs text-muted-foreground">{L.reason(state)}</p>

            {alts.length > 0 && (
              <>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">{L.alternatives}</div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {alts.map((p) => <ProductCard key={p.slug} producto={p} />)}
                </div>
              </>
            )}
          </>
        ) : (
          <EmptyState text={L.empty} />
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      {children}
    </div>
  );
}
function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className={[
        "rounded-full border px-3 py-2 text-sm transition-all",
        active ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-background hover:bg-secondary",
      ].join(" ")}>{children}</button>
  );
}
function labelUso(u: Uso, en: boolean) {
  const es = { bebe: "Bebé", dormitorio: "Dormitorio", salon: "Salón", alergias: "Alergias", inteligente: "Inteligente", general: "General" };
  const enMap = { bebe: "Baby", dormitorio: "Bedroom", salon: "Living room", alergias: "Allergies", inteligente: "Smart", general: "General" };
  return (en ? enMap : es)[u];
}
function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
      {text}
    </div>
  );
}

function scoreProductos(prods: Producto[], s: State): Producto[] {
  return [...prods]
    .map((p) => ({ p, score: scoreOne(p, s) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.p);
}
function scoreOne(p: Producto, s: State): number {
  let score = p.valoracionEditorial;
  if (typeof p.coberturaM2 === "number") {
    if (p.coberturaM2 >= s.m2) score += 8;
    else score -= Math.min(20, (s.m2 - p.coberturaM2));
  }
  if (p.precioMin && p.precioMin > s.presupuesto) score -= 25;
  const m: Record<Uso, string[]> = {
    bebe: ["Ultrasónico", "Evaporativo"],
    dormitorio: ["Ultrasónico", "Evaporativo"],
    salon: ["Híbrido", "Evaporativo", "Ultrasónico"],
    alergias: ["Evaporativo"],
    inteligente: ["UV-C", "Ultrasónico"],
    general: ["Ultrasónico", "Híbrido", "Evaporativo", "UV-C", "Vapor caliente"],
  };
  if (m[s.uso].includes(p.tecnologia)) score += 6;
  if (s.silencio && p.tecnologia === "Vapor caliente") score -= 30;
  if (s.vapor === "frio" && p.tecnologia === "Vapor caliente") score -= 40;
  if (s.vapor === "caliente" && !["Vapor caliente", "Híbrido"].includes(p.tecnologia)) score -= 8;
  return Math.max(0, score);
}
