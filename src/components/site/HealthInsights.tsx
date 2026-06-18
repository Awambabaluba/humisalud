import { HeartPulse, Moon, Baby, Sparkles, ShieldAlert, Info } from "lucide-react";
import type { Tecnologia } from "@/data/products";

interface Props {
  tecnologia: Tecnologia;
  idealPara: string[];
}

// Información de salud útil orientada a problemas reales del usuario.
// Las referencias se citan de forma honesta: organismos públicos y guías clínicas,
// nunca como "promesa médica". La humedad relativa saludable en interiores se sitúa
// entre 40–60 % según múltiples organismos (EPA, ASHRAE 55, guías de la OMS sobre
// vivienda y salud, 2018).
export function HealthInsights({ tecnologia, idealPara }: Props) {
  const dolores = buildDolores(tecnologia, idealPara);

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2">
        <HeartPulse className="h-5 w-5 text-primary" />
        <h2 className="font-display text-2xl font-semibold">Qué problema te resuelve (y cuál no)</h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
        Información práctica orientada a lo que de verdad incomoda en casa cuando el aire está seco.
        No sustituye a un consejo médico: si los síntomas persisten, habla con tu profesional sanitario.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {dolores.map((d) => (
          <div key={d.titulo} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sage/30 text-foreground">
                {d.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{d.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm">
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          <div>
            <p className="font-medium">Rango de humedad recomendado en interiores: 40–60 %.</p>
            <p className="mt-1 text-muted-foreground">
              Es el rango con el que coinciden la guía de vivienda y salud de la OMS (2018),
              la EPA estadounidense y el estándar ASHRAE 55. Por debajo del 30 % aparecen molestias
              en mucosas, ojos y piel; por encima del 60 % crece el riesgo de ácaros y moho. Un higrómetro
              barato (5–10 €) es la mejor compra complementaria a cualquier humidificador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function buildDolores(tec: Tecnologia, idealPara: string[]) {
  const para = idealPara.join(" ").toLowerCase();
  const items: { titulo: string; texto: string; icon: React.ReactNode }[] = [];

  items.push({
    icon: <Moon className="h-5 w-5" />,
    titulo: "Te despiertas con la garganta seca",
    texto:
      "Con calefacción la humedad cae por debajo del 30 %. Mantenerla entre 40–60 % reduce la sequedad de garganta y nariz al despertar. Coloca el humidificador a 1–2 m de la cama, nunca apuntando directamente, y úsalo en modo nocturno si tienes uno con sensor.",
  });

  if (/bebé|infantil|niñ/.test(para)) {
    items.push({
      icon: <Baby className="h-5 w-5" />,
      titulo: "Bebés con mocos y tos nocturna",
      texto:
        "La AEPap (Asociación Española de Pediatría de Atención Primaria) recomienda ambientes húmedos para aliviar la congestión en lactantes. Usa agua limpia, vacía el depósito a diario y mantén el aparato fuera del alcance del bebé. Evita los modelos de vapor caliente cerca de la cuna por riesgo de quemadura.",
    });
  }

  if (/alergi|asma|polen/.test(para)) {
    items.push({
      icon: <ShieldAlert className="h-5 w-5" />,
      titulo: "Alergias y vías respiratorias sensibles",
      texto:
        "Por encima del 60 % de humedad proliferan ácaros y moho, dos de los alérgenos más comunes en interior según la SEAIC. Un humidificador es útil contra el aire seco, pero no sustituye a la limpieza ni a un purificador. Mide siempre con higrómetro.",
    });
  }

  if (tec === "Ultrasónico") {
    items.push({
      icon: <Sparkles className="h-5 w-5" />,
      titulo: "Polvo blanco sobre los muebles",
      texto:
        "Los ultrasónicos atomizan los minerales del agua y los depositan en forma de polvo blanco. Usa agua destilada o desmineralizada, o un cartucho antical. Estudios de la EPA alertan de que ese polvo puede irritar las vías respiratorias en personas sensibles.",
    });
  }

  if (tec === "Evaporativo") {
    items.push({
      icon: <Sparkles className="h-5 w-5" />,
      titulo: "Sin polvo blanco, pero con filtro",
      texto:
        "Los evaporativos no emiten minerales al aire, así que son los preferidos en habitaciones de bebés y personas alérgicas. A cambio, el filtro absorbente debe cambiarse cada 1–3 meses; si lo descuidas, puede oler a humedad estancada.",
    });
  }

  if (tec === "Vapor caliente" || tec === "Híbrido") {
    items.push({
      icon: <ShieldAlert className="h-5 w-5" />,
      titulo: "Vapor caliente: ojo con los niños",
      texto:
        "El vapor caliente esteriliza el agua al hervirla, lo que reduce bacterias. Pero la boquilla y el agua interior alcanzan temperaturas elevadas: los CDC desaconsejan los modelos de vapor en habitaciones infantiles sin supervisión.",
    });
  }

  if (tec === "UV-C") {
    items.push({
      icon: <ShieldAlert className="h-5 w-5" />,
      titulo: "Luz UV-C: útil solo con limpieza regular",
      texto:
        "La luz UV-C reduce la carga microbiana del depósito, pero solo si el agua se cambia y el aparato se limpia con regularidad. Las cifras de eliminación bacteriana del fabricante asumen un mantenimiento perfecto que pocas casas mantienen.",
    });
  }

  items.push({
    icon: <Sparkles className="h-5 w-5" />,
    titulo: "Piel y labios cuarteados",
    texto:
      "La American Academy of Dermatology recomienda usar humidificador en invierno para frenar la pérdida transepidérmica de agua, especialmente útil si tienes dermatitis atópica o psoriasis. El efecto se nota a los pocos días, sobre todo en manos y labios.",
  });

  return items.slice(0, 4);
}
