import { useMemo, useState } from "react";
import { calcular } from "@/lib/humidifier-math";
import { productos, isDisponible } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useT } from "@/i18n/LocaleContext";
import { Droplets } from "lucide-react";

export function CalculatorWidget() {
  const t = useT();
  const [m2, setM2] = useState(20);
  const [alturaM, setAlturaM] = useState(2.5);
  const [humedadActual, setHumedadActual] = useState(30);
  const [humedadObjetivo, setHumedadObjetivo] = useState(50);
  const [horasUso, setHorasUso] = useState(8);
  const [ach, setAch] = useState(0.5);

  const result = useMemo(
    () => calcular({ m2, alturaM, humedadActual, humedadObjetivo, horasUso, ach }),
    [m2, alturaM, humedadActual, humedadObjetivo, horasUso, ach],
  );

  const matches = useMemo(
    () =>
      productos.filter(
        (p) => isDisponible(p) && typeof p.coberturaM2 === "number" && (p.coberturaM2 as number) >= m2,
      ),
    [m2],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start">
      <form
        className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft"
        onSubmit={(e) => e.preventDefault()}
      >
        <NumberField label={t("calc.area")} value={m2} min={5} max={120} step={1} onChange={setM2} unit="m²" />
        <NumberField label={t("calc.height")} value={alturaM} min={2.2} max={4} step={0.1} onChange={setAlturaM} unit="m" />
        <NumberField label={t("calc.current")} value={humedadActual} min={10} max={80} step={1} onChange={setHumedadActual} unit="%" />
        <NumberField label={t("calc.target")} value={humedadObjetivo} min={30} max={65} step={1} onChange={setHumedadObjetivo} unit="%" />
        <NumberField label={t("calc.hours")} value={horasUso} min={1} max={24} step={1} onChange={setHorasUso} unit="h" />
        <NumberField label={t("calc.ach")} value={ach} min={0.2} max={3} step={0.1} onChange={setAch} unit="ACH" />
      </form>

      <div className="space-y-5">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-mist via-card to-background p-6 sm:p-8 shadow-card">
          <div className="flex items-center gap-2 text-primary">
            <Droplets className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wider font-medium">{t("calc.results")}</span>
          </div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <Metric label={t("calc.flow")} value={`${Math.round(result.caudalGph)} g/h`} />
            <Metric label={t("calc.tank")} value={`${result.depositoLitrosDia.toFixed(1)} L`} />
          </dl>
          <p className="mt-4 text-xs text-muted-foreground">{t("calc.disclaimer")}</p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">{t("calc.matches")}</h3>
          {matches.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">{t("calc.no_matches")}</p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {matches.slice(0, 4).map((p) => (
                <ProductCard key={p.slug} producto={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NumberField({
  label, value, min, max, step, onChange, unit,
}: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; unit: string }) {
  return (
    <label className="block mb-5">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full accent-[var(--color-primary)]"
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-background/70 backdrop-blur border border-border p-4">
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-semibold">{value}</dd>
    </div>
  );
}
