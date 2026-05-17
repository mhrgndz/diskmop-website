import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getArticle, getAllSlugs, articles } from '@/content/articles';
import { routing } from '@/i18n/routing';
import {
  Check,
  X,
  Clock,
  Calendar,
  ChevronRight,
  ArrowRight,
  Download,
} from 'lucide-react';

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Not Found' };

  const content = article.content[locale] || article.content['en'];
  const baseUrl = 'https://diskmop.com';
  const canonicalPath = locale === 'en' ? `/blog/${slug}` : `/${locale}/blog/${slug}`;

  return {
    title: `${content.title} | Disk Mop Blog`,
    description: content.metaDescription,
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages: {
        en: `${baseUrl}/blog/${slug}`,
        tr: `${baseUrl}/tr/blog/${slug}`,
        de: `${baseUrl}/de/blog/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${baseUrl}${canonicalPath}`,
      siteName: 'Disk Mop',
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticle(slug);
  if (!article) notFound();

  const content = article.content[locale] || article.content['en'];
  const t = await getTranslations({ locale, namespace: 'blog' });

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDescription,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'Disk Mop' },
    publisher: {
      '@type': 'Organization',
      name: 'Disk Mop',
      logo: { '@type': 'ImageObject', url: 'https://diskmop.com/brand/icon.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://diskmop.com${locale === 'en' ? '' : `/${locale}`}/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href={`/${locale}`}
              className="hover:text-foreground transition-colors"
            >
              Disk Mop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={`/${locale}/blog`}
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate">{content.title}</span>
          </nav>
        </div>

        {/* Article Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readingTime} {t('readingTime')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl text-muted-foreground">{content.subtitle}</p>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {content.intro.map((p, i) => (
            <p
              key={i}
              className="text-muted-foreground leading-relaxed mb-4 text-lg"
            >
              {p}
            </p>
          ))}
        </section>

        {/* Comparison Table (only for comparison articles) */}
        {article.comparison && article.comparison.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {t('comparisonTable')}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">
                    {t('feature')}
                  </th>
                  <th className="text-center p-4 font-semibold text-brand-600 dark:text-brand-400">
                    Disk Mop
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">
                    {article.competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {article.comparison.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                    }
                  >
                    <td className="p-4 font-medium text-foreground">
                      {row.feature[locale] || row.feature['en']}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        row.winner === 'diskmop'
                          ? 'text-green-600 dark:text-green-400 font-semibold'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {row.diskmop}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        row.winner === 'competitor'
                          ? 'text-green-600 dark:text-green-400 font-semibold'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        )}

        {/* Pros & Cons (only for comparison articles) */}
        {'diskmopPros' in content && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Disk Mop</h3>
              <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5">
                <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-3">
                  {t('pros')}
                </h4>
                <ul className="space-y-2">
                  {(content as import('@/content/types').ArticleContent).diskmopPros.map((pro, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5">
                <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">
                  {t('cons')}
                </h4>
                <ul className="space-y-2">
                  {(content as import('@/content/types').ArticleContent).diskmopCons.map((con, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <X className="h-4 w-4 text-red-500 dark:text-red-400 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                {article.competitorName}
              </h3>
              <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5">
                <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-3">
                  {t('pros')}
                </h4>
                <ul className="space-y-2">
                  {(content as import('@/content/types').ArticleContent).competitorPros.map((pro, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5">
                <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">
                  {t('cons')}
                </h4>
                <ul className="space-y-2">
                  {(content as import('@/content/types').ArticleContent).competitorCons.map((con, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <X className="h-4 w-4 text-red-500 dark:text-red-400 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Detailed Sections */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {content.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              {section.content.map((p, j) => (
                <p
                  key={j}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Verdict */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-950/30 dark:to-brand-900/20 border border-brand-200 dark:border-brand-800 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('verdict')}
            </h2>
            {content.verdict.map((p, i) => (
              <p
                key={i}
                className="text-foreground/80 leading-relaxed mb-3 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center rounded-2xl bg-gray-950 dark:bg-gray-900 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {content.ctaText}
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              {t('ctaSubtitle')}
            </p>
            <a
              href={`/${locale}#pricing`}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              <Download className="h-5 w-5" />
              {t('downloadCta')}
            </a>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('relatedArticles')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((rel) => {
                const relContent =
                  rel.content[locale] || rel.content['en'];
                return (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/blog/${rel.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700 transition-all"
                  >
                    <div className="text-xs text-brand-600 dark:text-brand-400 font-medium mb-2">
                      {rel.type === 'guide'
                        ? (rel.category || 'Guide')
                        : `vs ${rel.competitorName}`}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {relContent.title}
                    </h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      {t('readMore')} <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
