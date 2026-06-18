// Imágenes oficiales de producto. Fuente: webs de los fabricantes
// (Cecotec, Levoit/VeSync, Philips/Versuni, Rowenta/Groupe SEB, Xiaomi, Winix).
// Uso editorial / referencial sobre los productos enlazados.
import cecotec from "./products/cecotec-pure-aroma-300-yang.webp";
import levoit from "./products/levoit-dual-200s.webp";
import philips from "./products/philips-hu2716-nanocloud.webp";
import rowenta from "./products/rowenta-aqua-perfect.webp";
import xiaomi from "./products/xiaomi-smart-humidifier-2.webp";
import winix from "./products/winix-l500.webp";

export const PRODUCT_IMAGES: Record<string, string> = {
  "cecotec-pure-aroma-300-yang": cecotec,
  "levoit-dual-200s": levoit,
  "philips-hu2716-nanocloud": philips,
  "rowenta-aqua-perfect": rowenta,
  "xiaomi-smart-humidifier-2": xiaomi,
  "winix-l500": winix,
};

export const PRODUCT_IMAGE_CREDITS: Record<string, string> = {
  "cecotec-pure-aroma-300-yang": "Cecotec",
  "levoit-dual-200s": "Levoit / VeSync",
  "philips-hu2716-nanocloud": "Philips / Versuni",
  "rowenta-aqua-perfect": "Rowenta / Groupe SEB",
  "xiaomi-smart-humidifier-2": "Xiaomi",
  "winix-l500": "Winix",
};
