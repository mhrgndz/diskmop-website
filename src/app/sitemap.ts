import type { MetadataRoute } from 'next';
import { articles } from '@/content/articles';

const BASE_URL = 'https://diskmop.com';
const locales = ['en', 'tr', 'de'] as const;

function localeUrl(locale: string, path: string) {
  return locale === 'en' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  for (const locale of locales) {
    entries.push({
      url: localeUrl(locale, ''),
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: locale === 'en' ? 1.0 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, localeUrl(l, '')])
        ),
      },
    });
  }

  // Blog listing
  for (const locale of locales) {
    entries.push({
      url: localeUrl(locale, '/blog'),
      lastModified: new Date('2025-05-10'),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, localeUrl(l, '/blog')])
        ),
      },
    });
  }

  // Blog articles
  for (const article of articles) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, `/blog/${article.slug}`),
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, localeUrl(l, `/blog/${article.slug}`)])
          ),
        },
      });
    }
  }

  return entries;
}
