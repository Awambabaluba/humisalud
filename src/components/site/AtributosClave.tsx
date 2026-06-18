import type { AtributosProducto } from "@/data/products";
import { Check, X, HelpCircle, Settings2, Moon, Wrench, Sparkles } from "lucide-react";

type TriBool = boolean | "DATO_PENDIENTE";

interface Row {
  label: string;
  value: TriBool | string[] | number | "DATO_PENDIENTE" | undefined;
  suffix?: string;
}

export function AtributosClave({ atributos }: { atributos?: AtributosProducto }) {
  if (!atributos) return null;

  const grupos: { title: string; icon: React.ReactNode; rows: Row[] }[] = [
    {
      title: "Inteligencia y control",
      icon: <Settings2 className="h-4 w-4" />,
      rows: [
        { label: "Higrostato (sensor de humedad)", value: atributos.control.higrostato },
        { label: "Modo automático", value: atributos.control.modoAuto },
        { label: "WiFi y app móvil", value: atributos.control.wifiApp },
        { label: "Asistentes de voz", value: atributos.control.asistentesVoz },
        { label: "Temporizador", value: atributos.control.temporizador },
        { label: "Apagado auto sin agua", value: atributos.control.apagadoAutoSinAgua },
      ],
    },
    {
      title: "Confort de uso",
      icon: <Moon className="h-4 w-4" />,
      rows: [
        { label: "Modo noche / silencioso", value: atributos.confort.modoNoche },
        { label: "Luces LED apagables", value: atributos.confort.luzApagable },
        { label: "Boquilla giratoria 360°", value: atributos.confort.boquilla360 },
        { label: "Indicador nivel de agua", value: atributos.confort.indicadorAgua },
        { label: "Rellenado superior (top-fill)", value: atributos.confort.topFill },
      ],
    },
    {
      title: "Mantenimiento e higiene",
      icon: <Wrench className="h-4 w-4" />,
      rows: [
        { label: "Necesita filtro", value: atributos.mantenimiento.filtroRequerido },
        atributos.mantenimiento.filtroRequerido === true
          ? { label: "Coste anual del filtro", value: atributos.mantenimiento.filtroCosteAnualEur, suffix: "€/año" }
          : null,
        { label: "Boca ancha (limpieza fácil)", value: atributos.mantenimiento.bocaAncha },
        { label: "Cartucho antical", value: atributos.mantenimiento.cartuchoAntical },
        { label: "Función auto-limpieza", value: atributos.mantenimiento.autolimpieza },
        { label: "Lámpara UV-C", value: atributos.mantenimiento.uvc },
      ].filter(Boolean) as Row[],
    },
    {
      title: "Extras",
      icon: <Sparkles className="h-4 w-4" />,
      rows: [
        { label: "Difusor de aromas", value: atributos.extras.aromaterapia },
        { label: "Vapor caliente/templado", value: atributos.extras.vaporCaliente },
        { label: "Ionizador", value: atributos.extras.ionizador },
        { label: "Consumo eléctrico", value: atributos.extras.consumoW, suffix: "W" },
      ],
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold">Lo que de verdad importa al elegirlo</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Estos son los detalles que marcan la diferencia entre un humidificador que usas a diario y uno que acaba en un armario.
        Donde aparece "—" es que no hay dato oficial verificado.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {grupos.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="text-primary">{g.icon}</span>
              {g.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {g.rows.map((r) => (
                <li key={r.label} className="flex items-start justify-between gap-3">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-medium text-foreground text-right">{renderValue(r)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function renderValue(r: Row): React.ReactNode {
  const v = r.value;
  if (v === "DATO_PENDIENTE" || v === undefined) {
    return <HelpCircle className="inline h-4 w-4 text-muted-foreground" aria-label="dato pendiente" />;
  }
  if (v === true) return <Check className="inline h-4 w-4 text-primary" aria-label="sí" />;
  if (v === false) return <X className="inline h-4 w-4 text-muted-foreground/60" aria-label="no" />;
  if (Array.isArray(v)) {
    if (v.length === 0) return <X className="inline h-4 w-4 text-muted-foreground/60" aria-label="no" />;
    return <span className="text-xs">{v.join(" · ")}</span>;
  }
  if (typeof v === "number") return <span className="tabular-nums">{v}{r.suffix ? ` ${r.suffix}` : ""}</span>;
  return <span>—</span>;
}
