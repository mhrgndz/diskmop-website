import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { articles } from '@/content/articles';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const baseUrl = 'https://diskmop.com';
  const canonicalPath = locale === 'en' ? '/blog' : `/${locale}/blog`;

  return {
    title: `${t('title')} — Disk Mop`,
    description: t('subtitle'),
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages: {
        en: `${baseUrl}/blog`,
        tr: `${baseUrl}/tr/blog`,
        de: `${baseUrl}/de/blog`,
        fr: `${baseUrl}/fr/blog`,
        es: `${baseUrl}/es/blog`,
        it: `${baseUrl}/it/blog`,
        pt: `${baseUrl}/pt/blog`,
        ja: `${baseUrl}/ja/blog`,
      },
    },
    openGraph: {
      title: `${t('title')} — Disk Mop`,
      description: t('subtitle'),
      url: `${baseUrl}${canonicalPath}`,
      siteName: 'Disk Mop',
      type: 'website',
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
              {t('badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const content = article.content[locale] || article.content['en'];
              return (
                <Link
                  key={article.slug}
                  href={`/${locale}/blog/${article.slug}`}
                  className="group block"
                >
                  <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-700">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readingTime} {t('readingTime')}
                      </span>
                    </div>
                    <div className="inline-block px-2.5 py-1 rounded-md bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-medium mb-3">
                      {article.type === 'guide'
                        ? (article.category || t('guide'))
                        : `vs ${article.competitorName}`}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {content.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {content.subtitle}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
                      {t('readMore')}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
