/**
 * Sitenin dil listesi için TEK kaynak. routing, seo, sitemap, dil seçici ve
 * ana sayfa JSON-LD'si buradan beslenir. Yalnız middleware.ts'teki matcher
 * Next'in statik analizi yüzünden bu listeyi elle tekrar eder.
 *
 * Uygulama 18 dilli; site de aynı 18 dil.
 */
export const LOCALES = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "ja",
  "ar",
  "he",
  "id",
  "ko",
  "pl",
  "ro",
  "ru",
  "th",
  "vi",
  "zh-Hans",
] as const;
export type Locale = (typeof LOCALES)[number];

/** Dil seçicideki yerel ad ve rozet. */
export const LOCALE_LABELS: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "EN" },
  tr: { label: "Türkçe", flag: "TR" },
  de: { label: "Deutsch", flag: "DE" },
  fr: { label: "Français", flag: "FR" },
  es: { label: "Español", flag: "ES" },
  it: { label: "Italiano", flag: "IT" },
  pt: { label: "Português", flag: "PT" },
  ja: { label: "日本語", flag: "JA" },
  ar: { label: "العربية", flag: "AR" },
  he: { label: "עברית", flag: "HE" },
  id: { label: "Bahasa Indonesia", flag: "ID" },
  ko: { label: "한국어", flag: "KO" },
  pl: { label: "Polski", flag: "PL" },
  ro: { label: "Română", flag: "RO" },
  ru: { label: "Русский", flag: "RU" },
  th: { label: "ไทย", flag: "TH" },
  vi: { label: "Tiếng Việt", flag: "VI" },
  "zh-Hans": { label: "简体中文", flag: "ZH" },
};

/** OpenGraph `locale` alanı IETF değil, dil_ÜLKE biçimi ister. */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  tr: "tr_TR",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  ja: "ja_JP",
  ar: "ar_AR",
  he: "he_IL",
  id: "id_ID",
  ko: "ko_KR",
  pl: "pl_PL",
  ro: "ro_RO",
  ru: "ru_RU",
  th: "th_TH",
  vi: "vi_VN",
  "zh-Hans": "zh_CN",
};

/** Sağdan sola yazılan diller: <html dir="rtl">. */
const RTL_LOCALES: readonly string[] = ["ar", "he"];
export function localeDir(locale: string): "rtl" | "ltr" {
  return RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
}

/**
 * Gizlilik politikasının çevrilmiş olduğu diller. Hukuki metin makine
 * çevirisine bırakılmadı; diğer dillerde İngilizce sürüme yönlenir.
 */
export const POLICY_LOCALES: readonly string[] = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "ja",
];
