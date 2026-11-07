// Uygulama ekran görüntüleri: public/screenshots/<dil>/<ekran>.webp (8 dil × 11 ekran, 1076×759).
// Görüntüler yeni Windows uygulamasından, uydurma "Alex" bilgisayarının demo verisiyle alınır
// (gerçek dosya adı görünmez). Uygulamanın ekranı değişince yeniden çekilir.

export const APP_SHOT_W = 1076;
export const APP_SHOT_H = 759;

export type AppShot =
  | "overview"
  | "clean"
  | "appdata"
  | "large-files"
  | "duplicates"
  | "empty-folders"
  | "disk-map"
  | "windows"
  | "health"
  | "privacy"
  | "settings";

/** Çekimi olan diller; sitenin diğer dilleri (varsa) İngilizce görüntüye düşer. */
const SHOT_LOCALES = ["en", "tr", "de", "fr", "es", "it", "pt", "ja"];

export const appShotSrc = (shot: AppShot, locale: string) =>
  `/screenshots/${SHOT_LOCALES.includes(locale) ? locale : "en"}/${shot}.webp`;

/**
 * Eski sekme/özellik kimlikleri (blog eşlemesi ve ürün vitrini) → uygulamadaki en yakın ekran.
 * Yeni uygulamanın 8 sayfası var; eski uygulamadaki bazı ekranlar (RAM, DNS, hizmetler…) yok,
 * onlar en yakın gerçek ekranı gösterir.
 */
const SHOT_FOR_FEATURE: Record<string, AppShot> = {
  overview: "overview",
  "disk-analysis": "disk-map",
  "disk-treemap": "disk-map",
  "large-files": "large-files",
  duplicates: "duplicates",
  "visual-duplicates": "duplicates",
  "empty-folders": "empty-folders",
  cache: "clean",
  downloads: "clean",
  "recycle-bin": "clean",
  "speed-up": "clean",
  appdata: "appdata",
  "uninstall-leftovers": "appdata",
  "unused-apps": "appdata",
  browser: "privacy",
  "privacy-report": "privacy",
  "file-shredder": "privacy",
  startup: "health",
  "disk-health": "health",
  "ram-cleaner": "health",
  "dns-cache": "health",
  "boot-speed": "health",
  "service-manager": "windows",
};

export const shotForFeature = (featureId: string): AppShot =>
  SHOT_FOR_FEATURE[featureId] ?? "overview";
