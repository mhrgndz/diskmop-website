import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * Statik public/robots.txt'in yerini aldı. İki fark var:
 *  1) /myadmin ve /api artık taranmıyor — indirme istatistikleri paneli
 *     eskiden "Allow: /" altında herkese açıktı.
 *  2) Yapay zekâ tarayıcıları AÇIKÇA karşılanıyor. Zaten "*" altında izinliydi
 *     ama GEO tarafında açık kural, aracın tereddüt etmemesi için tercih edilir.
 */
const AI_TARAYICILAR = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  const yasak = ['/myadmin/', '/api/', '/success'];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: yasak },
      { userAgent: AI_TARAYICILAR, allow: '/', disallow: yasak },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
