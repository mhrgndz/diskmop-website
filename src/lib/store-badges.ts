import type { Locale } from "@/lib/locales";

/**
 * Mağaza rozetleri: `public/badges/<mağaza>/<black|white>/<dosya>.svg` (App Store, Mac App Store, Microsoft Store) ve
 * `public/badges/google-play/<dosya>.png`. Apple'ın, Microsoft'un ve Google'ın kendi görselleri, DEĞİŞTİRİLMEDEN
 * saklanır (rozet yeniden çizilmez; Google PNG'lerinde yalnız çevredeki saydam boşluk kırpıldı). Siyah rozet açık
 * sayfa, beyaz rozet koyu sayfa içindir (Google'ın rozeti tek, koyu zeminli). Genişlik/yükseklik dosyanın kendisinden.
 * Apple Arapça (App Store, Mac App Store) ve Lehçe/Romence (Mac App Store) rozeti yayımlamıyor: o dillerde İngilizce.
 *
 * Bu dosya `scripts` ile değil, rozetler değiştiğinde elle yeniden üretilir; kaynaklar:
 * - https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-(mac-)app-store/<black|white>/<xx-yy>
 * - https://get.microsoft.com/images/<kod>%20<dark|light>.svg
 * - https://play.google.com/intl/en_us/badges/static/images/badges/<kod>_badge_web_generic.png
 */
export interface StoreBadgeFile {
  file: string;
  width: number;
  height: number;
}

export const APP_STORE_BADGES: Record<Locale, StoreBadgeFile> = {
  en: { file: "en", width: 119.66407, height: 40 },
  tr: { file: "tr", width: 151.29018, height: 40 },
  de: { file: "de", width: 119.66407, height: 40 },
  fr: { file: "fr", width: 126.50751, height: 40 },
  es: { file: "es", width: 119.66407, height: 40 },
  it: { file: "it", width: 119.66407, height: 40 },
  pt: { file: "pt", width: 119.66407, height: 40 },
  ja: { file: "ja", width: 108.85157, height: 40 },
  ar: { file: "en", width: 119.66407, height: 40 },
  he: { file: "he", width: 121.664, height: 42 },
  id: { file: "id", width: 119.66407, height: 40 },
  ko: { file: "ko", width: 129.70071, height: 40 },
  pl: { file: "pl", width: 119.66407, height: 40 },
  ro: { file: "ro", width: 119.66407, height: 40 },
  ru: { file: "ru", width: 119.66407, height: 40 },
  th: { file: "th", width: 119.66407, height: 40 },
  vi: { file: "vi", width: 119.66407, height: 40 },
  "zh-Hans": { file: "zh-Hans", width: 108.85157, height: 40 },
};

export const MAC_APP_STORE_BADGES: Record<Locale, StoreBadgeFile> = {
  en: { file: "en", width: 156.10054, height: 40 },
  tr: { file: "tr", width: 187.6422, height: 40 },
  de: { file: "de", width: 156.10054, height: 40 },
  fr: { file: "fr", width: 156.10054, height: 40 },
  es: { file: "es", width: 156.10054, height: 40 },
  it: { file: "it", width: 156.10054, height: 40 },
  pt: { file: "pt", width: 156.10054, height: 40 },
  ja: { file: "ja", width: 140.18325, height: 40 },
  ar: { file: "en", width: 156.10054, height: 40 },
  he: { file: "he", width: 158, height: 42 },
  id: { file: "id", width: 156.10054, height: 40 },
  ko: { file: "ko", width: 161.01934, height: 40 },
  pl: { file: "en", width: 156.10054, height: 40 },
  ro: { file: "en", width: 156.10054, height: 40 },
  ru: { file: "ru", width: 156.10054, height: 40 },
  th: { file: "th", width: 156.10054, height: 40 },
  vi: { file: "vi", width: 156.10054, height: 40 },
  "zh-Hans": { file: "zh-Hans", width: 140.18325, height: 40 },
};

export const MICROSOFT_STORE_BADGES: Record<Locale, StoreBadgeFile> = {
  en: { file: "en", width: 161, height: 44 },
  tr: { file: "tr", width: 180, height: 44 },
  de: { file: "de", width: 183, height: 44 },
  fr: { file: "fr", width: 161, height: 44 },
  es: { file: "es", width: 161, height: 44 },
  it: { file: "it", width: 161, height: 44 },
  pt: { file: "pt", width: 161, height: 44 },
  ja: { file: "ja", width: 161, height: 44 },
  ar: { file: "ar", width: 161, height: 44 },
  he: { file: "he", width: 161, height: 44 },
  id: { file: "id", width: 161, height: 44 },
  ko: { file: "ko", width: 161, height: 44 },
  pl: { file: "pl", width: 161, height: 44 },
  ro: { file: "ro", width: 161, height: 44 },
  ru: { file: "ru", width: 161, height: 44 },
  th: { file: "th", width: 161, height: 44 },
  vi: { file: "vi", width: 161, height: 44 },
  "zh-Hans": { file: "zh-Hans", width: 161, height: 44 },
};

export const GOOGLE_PLAY_BADGES: Record<Locale, StoreBadgeFile> = {
  en: { file: "en", width: 564, height: 168 },
  tr: { file: "tr", width: 646, height: 192 },
  de: { file: "de", width: 646, height: 192 },
  fr: { file: "fr", width: 646, height: 192 },
  es: { file: "es", width: 646, height: 192 },
  it: { file: "it", width: 646, height: 192 },
  pt: { file: "pt", width: 646, height: 192 },
  ja: { file: "ja", width: 646, height: 192 },
  ar: { file: "ar", width: 564, height: 168 },
  he: { file: "he", width: 564, height: 168 },
  id: { file: "id", width: 646, height: 192 },
  ko: { file: "ko", width: 646, height: 192 },
  pl: { file: "pl", width: 646, height: 192 },
  ro: { file: "ro", width: 646, height: 192 },
  ru: { file: "ru", width: 646, height: 192 },
  th: { file: "th", width: 646, height: 192 },
  vi: { file: "vi", width: 646, height: 192 },
  "zh-Hans": { file: "zh-Hans", width: 646, height: 192 },
};
