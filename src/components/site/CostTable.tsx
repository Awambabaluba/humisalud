import { useState } from "react";
import { POTENCIA_W, costeAnual, costeMensual } from "@/lib/humidifier-math";
import { useT } from "@/i18n/LocaleContext";

export function CostTable() {
  const t = useT();
  const [horas, setHoras] = useState(8);
  const [precio, setPrecio] = useState(0.18);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 mb-6">
        <label className="block">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-sm font-medium">{t("cost.hours")}</span>
            <span className="text-xs text-muted-foreground tabular-nums">{horas} h</span>
          </div>
          <input type="range" min={1} max={24} step={1} value={horas} onChange={(e) => setHoras(+e.target.value)} className="w-full accent-[var(--color-primary)]" />
        </label>
        <label className="block">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-sm font-medium">{t("cost.price")}</span>
            <span className="text-xs text-muted-foreground tabular-nums">{precio.toFixed(2)} €</span>
          </div>
          <input type="range" min={0.05} max={0.45} step={0.01} value={precio} onChange={(e) => setPrecio(+e.target.value)} className="w-full accent-[var(--color-primary)]" />
        </label>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left p-3 font-medium">{t("cost.tech")}</th>
              <th className="text-left p-3 font-medium">{t("cost.power")}</th>
              <th className="text-right p-3 font-medium">{t("cost.month")}</th>
              <th className="text-right p-3 font-medium">{t("cost.year")}</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(POTENCIA_W).map(([tech, { tipico, nota }]) => (
              <tr key={tech} className="border-t border-border">
                <td className="p-3 font-medium">{tech}</td>
                <td className="p-3 text-muted-foreground">
                  {tipico} W <span className="text-xs">({nota})</span>
                </td>
                <td className="p-3 text-right tabular-nums">{costeMensual(tipico, horas, precio).toFixed(2)} €</td>
                <td className="p-3 text-right tabular-nums">{costeAnual(tipico, horas, precio).toFixed(2)} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{t("cost.note")}</p>
    </div>
  );
}
