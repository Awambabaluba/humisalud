// Cálculos puros para la calculadora y la página de coste de uso.
// Referencia: humedad absoluta a 20 °C ≈ 17,3 g/m³ a saturación.

export interface CalcInput {
  m2: number;
  alturaM: number;
  humedadActual: number; // %
  humedadObjetivo: number; // %
  horasUso: number;
  ach: number; // air changes per hour
}

export interface CalcResult {
  volumenM3: number;
  deficitGramos: number;
  caudalGph: number; // g/h
  depositoLitrosDia: number;
}

const SATURATION_G_PER_M3 = 17.3;

export function calcular(input: CalcInput): CalcResult {
  const volumenM3 = Math.max(1, input.m2 * input.alturaM);
  const delta = Math.max(0, input.humedadObjetivo - input.humedadActual) / 100;
  const masaG = volumenM3 * SATURATION_G_PER_M3 * delta;
  const caudalGph = masaG * Math.max(0.1, input.ach);
  const depositoLitrosDia = (caudalGph * Math.max(1, input.horasUso)) / 1000;
  return {
    volumenM3,
    deficitGramos: masaG,
    caudalGph,
    depositoLitrosDia,
  };
}

// Rangos medios de consumo por tecnología (estudio de mercado interno HumiSalud).
// Son aproximaciones para ESTIMAR coste, no datos de fabricante.
export const POTENCIA_W: Record<string, { tipico: number; nota: string }> = {
  Ultrasónico: { tipico: 30, nota: "20–40 W según modo" },
  Evaporativo: { tipico: 20, nota: "15–25 W según ventilador" },
  Híbrido: { tipico: 60, nota: "30–250 W según modo (caliente sube mucho)" },
  "Vapor caliente": { tipico: 320, nota: "250–400 W al hervir" },
  "UV-C": { tipico: 30, nota: "Similar a ultrasónico estándar" },
};

export function costeMensual(watts: number, horasDia: number, precioKwh: number): number {
  return (watts * horasDia * 30) / 1000 * precioKwh;
}
export function costeAnual(watts: number, horasDia: number, precioKwh: number): number {
  return (watts * horasDia * 365) / 1000 * precioKwh;
}
