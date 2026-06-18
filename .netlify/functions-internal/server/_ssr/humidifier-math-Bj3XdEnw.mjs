const SATURATION_G_PER_M3 = 17.3;
function calcular(input) {
  const volumenM3 = Math.max(1, input.m2 * input.alturaM);
  const delta = Math.max(0, input.humedadObjetivo - input.humedadActual) / 100;
  const masaG = volumenM3 * SATURATION_G_PER_M3 * delta;
  const caudalGph = masaG * Math.max(0.1, input.ach);
  const depositoLitrosDia = caudalGph * Math.max(1, input.horasUso) / 1e3;
  return {
    volumenM3,
    deficitGramos: masaG,
    caudalGph,
    depositoLitrosDia
  };
}
const POTENCIA_W = {
  Ultrasónico: { tipico: 30, nota: "20–40 W según modo" },
  Evaporativo: { tipico: 20, nota: "15–25 W según ventilador" },
  Híbrido: { tipico: 60, nota: "30–250 W según modo (caliente sube mucho)" },
  "Vapor caliente": { tipico: 320, nota: "250–400 W al hervir" },
  "UV-C": { tipico: 30, nota: "Similar a ultrasónico estándar" }
};
function costeMensual(watts, horasDia, precioKwh) {
  return watts * horasDia * 30 / 1e3 * precioKwh;
}
function costeAnual(watts, horasDia, precioKwh) {
  return watts * horasDia * 365 / 1e3 * precioKwh;
}
export {
  POTENCIA_W as P,
  costeAnual as a,
  calcular as b,
  costeMensual as c
};
