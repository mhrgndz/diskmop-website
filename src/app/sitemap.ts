import type { MetadataRoute } from "next";
import { articles, articleLocales } from "@/content/articles";
import { LOCALES, localeUrl } from "@/lib/seo";
import { POLICY_LOCALES } from "@/lib/locales";

/**
 * Her giriş sayfanın var olduğu dilleri + x-default'u ilan eder. x-default İngilizce
 * sürüme işaret eder: dili eşleşmeyen kullanıcı oraya düşer. (Eskiden yoktu,
 * bu yüzden Google eşleşmeyen diller için sürüm seçemiyordu.)
 */
function diller(path: string, locales: readonly string[] = LOCALES) {
  return {
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localeUrl(l, path)])),
      "x-default": localeUrl("en", path),
    },
  };
}

/** En yeni makalenin tarihi = blog listesinin ve ana sayfanın gerçek tazeliği. */
function enYeniMakaleTarihi(): Date {
  const zamanlar = articles.map((a) => new Date(a.updated || a.date).getTime());
  return new Date(Math.max(...zamanlar));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const sonIcerik = enYeniMakaleTarihi();

  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, ""),
      lastModified: sonIcerik,
      changeFrequency: "weekly",
      priority: locale === "en" ? 1.0 : 0.9,
      alternates: diller(""),
    });
  }

  // Gizlilik politikası yalnız çevrilmiş 8 dilde; diğer diller İngilizceye yönlenir.
  for (const locale of POLICY_LOCALES) {
    entries.push({
      url: localeUrl(locale, "/privacy"),
      lastModified: new Date("2026-05-24"),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: diller("/privacy", POLICY_LOCALES),
    });
  }

  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, "/blog"),
      lastModified: sonIcerik,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: diller("/blog"),
    });
  }

  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, "/tools"),
      lastModified: sonIcerik,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: diller("/tools"),
    });
  }

  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, "/tools/disk-space-calculator"),
      lastModified: sonIcerik,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: diller("/tools/disk-space-calculator"),
    });
  }

  for (const article of articles) {
    const dilleri = articleLocales(article);
    for (const locale of dilleri) {
      entries.push({
        url: localeUrl(locale, `/blog/${article.slug}`),
        lastModified: new Date(article.updated || article.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: diller(`/blog/${article.slug}`, dilleri),
      });
    }
  }

  return entries;
}
