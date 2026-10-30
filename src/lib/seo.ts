import type { Metadata } from "next";
export const SITE_URL = "https://diskmop.com";

import { LOCALES, OG_LOCALE, type Locale } from "./locales";

export { LOCALES, OG_LOCALE };
export type { Locale };

/** localePrefix: 'as-needed' — İngilizce öneksiz. */
export function localeUrl(locale: string, path = ""): string {
  return locale === "en"
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${locale}${path}`;
}

/**
 * Bir sayfanın hreflang haritası + x-default. `locales` verilmezse 18 dilin
 * hepsi; yalnız bazı dillerde var olan sayfalar (makaleler) kendi listesini verir.
 * x-default İngilizce sürüme işaret eder: dili eşleşmeyen kullanıcı oraya düşer.
 */
export function alternatesFor(
  locale: string,
  path = "",
  locales: readonly string[] = LOCALES,
): Metadata["alternates"] {
  return {
    canonical: localeUrl(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localeUrl(l, path)])),
      "x-default": localeUrl("en", path),
    },
  };
}

/**
 * Paylaşım görseli. `src/app/opengraph-image.png` dosya konvansiyonu denendi
 * ama sayfa kendi openGraph nesnesini verdiğinde Next onu enjekte etmiyordu;
 * bu yüzden public altında duruyor ve açıkça referans veriliyor. Metni İngilizce
 * ve ASCII — 8 dile ayrı görsel üretmek font yüklemesi gerektirir.
 */
const OG_GORSEL = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Disk Mop - free up gigabytes in minutes. Disk cleaner for Windows, macOS and Android, photo cleaner for iPhone.",
};

/** Her sayfanın OG/Twitter bloğu aynı iskeleti paylaşsın diye. */
export function socialFor(opts: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  type?: "website" | "article";
}): Pick<Metadata, "openGraph" | "twitter"> {
  const { locale, path = "", title, description, type = "website" } = opts;
  const url = localeUrl(locale, path);

  return {
    openGraph: {
      type,
      url,
      siteName: "Disk Mop",
      title,
      description,
      locale:
        OG_LOCALE[(locale as Locale) in OG_LOCALE ? (locale as Locale) : "en"],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l],
      ),
      images: [OG_GORSEL],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_GORSEL],
    },
  };
}
