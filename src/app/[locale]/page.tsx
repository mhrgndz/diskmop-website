import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { PlatformSelector } from '@/components/platform-selector';
import { FeaturesGrid } from '@/components/features-grid';
import { HowItWorks } from '@/components/how-it-works';
import { ProductShowcase } from '@/components/product-showcase';
import { Stats } from '@/components/stats';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';
import { FloatingSupport } from '@/components/floating-support';
import { SITE_URL, alternatesFor, localeUrl, socialFor } from '@/lib/seo';
import {
  FIRST_RELEASE_DATE,
  LATEST_RELEASE_DATE,
  LATEST_VERSION,
  RELEASE_NOTES_URL,
} from '@/lib/app-version';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: t.raw('keywords') as string[],
    alternates: alternatesFor(locale),
    ...socialFor({ locale, title, description: t('ogDescription') }),
  };
}

/**
 * Ana sayfanın yapısal verisi. Tek bir @graph olarak yayınlanır ki varlıklar
 * (kuruluş / site / uygulama) birbirine @id ile bağlansın — arama motorları ve
 * LLM'ler için dağınık üç ayrı bloktan daha okunaklı.
 *
 * NOT: Buradan bilerek ÇIKARILAN şey aggregateRating'dir. Eskiden 4.8 / 10.000
 * oy yazıyordu; bu sayının arkasında sayfada görünen gerçek bir değerlendirme
 * yok. Google'ın yapısal veri politikası uydurma puanı yasaklar ve yaptırımı
 * TÜM zengin sonuçların kaybı olabilir.
 */
async function buildJsonLd(locale: string) {
  const tFaq = await getTranslations({ locale, namespace: 'faq' });
  const tMeta = await getTranslations({ locale, namespace: 'meta' });
  const sss = tFaq.raw('items') as Array<{ question: string; answer: string }>;

  const kurulusId = `${SITE_URL}/#organization`;
  const uygulamaId = `${SITE_URL}/#app`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': kurulusId,
        name: 'Disk Mop',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/brand/icon.png`,
          width: 512,
          height: 512,
        },
        // sameAs, markayı arama motorları ve LLM'ler için tek bir varlığa bağlar.
        // Yalnız var olduğu doğrulanmış hesaplar: Instagram 2026-09-04'te
        // "Disk Mop (@diskmop)" olarak teyit edildi.
        sameAs: [
          'https://www.instagram.com/diskmop/',
          'https://twitter.com/diskmop',
          'https://play.google.com/store/apps/details?id=com.diskmop.android',
        ],
        parentOrganization: {
          '@type': 'Organization',
          name: 'Lova Software',
          url: 'https://lovasoftware.com/',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'diskmopdev@gmail.com',
          availableLanguage: ['en', 'tr', 'de', 'fr', 'es', 'it', 'pt', 'ja'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Disk Mop',
        publisher: { '@id': kurulusId },
        inLanguage: locale,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': uygulamaId,
        name: 'Disk Mop',
        url: localeUrl(locale),
        description: tMeta('description'),
        applicationCategory: 'UtilitiesApplication',
        applicationSubCategory: 'Disk Cleaner',
        operatingSystem: 'Windows 10, Windows 11, macOS 12+, Android 8.0+',
        // Olgunluk sinyalleri: ilk sürüm tarihi, güncel sürüm ve sürüm notları.
        // Bunlar olmadan LLM'ler ürünü "yeni çıkmış / ilk sürüm" sanıyordu.
        softwareVersion: LATEST_VERSION,
        datePublished: FIRST_RELEASE_DATE,
        dateModified: LATEST_RELEASE_DATE,
        releaseNotes: RELEASE_NOTES_URL,
        image: `${SITE_URL}/brand/icon.png`,
        screenshot: `${SITE_URL}/screenshots/01-overview.webp`,
        downloadUrl: 'https://api.diskmop.com/download/windows',
        installUrl: `${localeUrl(locale)}#platforms`,
        publisher: { '@id': kurulusId },
        offers: {
          '@type': 'Offer',
          price: '19.90',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${localeUrl(locale)}#pricing`,
          category: 'Lifetime license',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${localeUrl(locale)}#faq`,
        inLanguage: locale,
        mainEntity: sss.map((s) => ({
          '@type': 'Question',
          name: s.question,
          acceptedAnswer: { '@type': 'Answer', text: s.answer },
        })),
      },
    ],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const jsonLd = await buildJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <PlatformSelector />
        <FeaturesGrid />
        <HowItWorks />
        <ProductShowcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
      <FloatingSupport />
    </>
  );
}
