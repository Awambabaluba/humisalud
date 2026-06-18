import { Check, X } from "lucide-react";

export function ProsCons({ ventajas, inconvenientes }: { ventajas: string[]; inconvenientes: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="font-display text-base font-semibold flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-sage/30 text-foreground">
            <Check className="h-3.5 w-3.5" />
          </span>
          Ventajas
        </h4>
        <ul className="mt-3 space-y-2 text-sm">
          {ventajas.map((v) => (
            <li key={v} className="flex gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> <span>{v}</span></li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="font-display text-base font-semibold flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-destructive/15 text-foreground">
            <X className="h-3.5 w-3.5" />
          </span>
          Inconvenientes
        </h4>
        <ul className="mt-3 space-y-2 text-sm">
          {inconvenientes.map((v) => (
            <li key={v} className="flex gap-2"><X className="h-4 w-4 mt-0.5 shrink-0 text-destructive" /> <span>{v}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
