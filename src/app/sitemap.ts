import type { MetadataRoute } from 'next';
import { articles } from '@/content/articles';
import { LOCALES, localeUrl } from '@/lib/seo';

/**
 * Her giriş 8 dilin tamamını + x-default'u ilan eder. x-default İngilizce
 * sürüme işaret eder: dili eşleşmeyen kullanıcı oraya düşer. (Eskiden yoktu,
 * bu yüzden Google eşleşmeyen diller için sürüm seçemiyordu.)
 */
function diller(path: string) {
  return {
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, path)])),
      'x-default': localeUrl('en', path),
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
      url: localeUrl(locale, ''),
      lastModified: sonIcerik,
      changeFrequency: 'weekly',
      priority: locale === 'en' ? 1.0 : 0.9,
      alternates: diller(''),
    });
  }

  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, '/privacy'),
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: diller('/privacy'),
    });
  }

  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, '/blog'),
      lastModified: sonIcerik,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: diller('/blog'),
    });
  }

  for (const article of articles) {
    for (const locale of LOCALES) {
      entries.push({
        url: localeUrl(locale, `/blog/${article.slug}`),
        lastModified: new Date(article.updated || article.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: diller(`/blog/${article.slug}`),
      });
    }
  }

  return entries;
}
