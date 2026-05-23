import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Disk Mop',
  description: 'Disk Mop Privacy Policy. Learn how we handle your data.',
};

function PrivacyContent() {
  const t = useTranslations('privacy');

  const sections = [
    { title: t('sections.overview.title'), content: t('sections.overview.content') },
    { title: t('sections.dataCollection.title'), content: t('sections.dataCollection.content') },
    { title: t('sections.localStorage.title'), content: t('sections.localStorage.content') },
    { title: t('sections.internetUsage.title'), content: t('sections.internetUsage.content') },
    { title: t('sections.thirdParty.title'), content: t('sections.thirdParty.content') },
    { title: t('sections.analytics.title'), content: t('sections.analytics.content') },
    { title: t('sections.children.title'), content: t('sections.children.content') },
    { title: t('sections.changes.title'), content: t('sections.changes.content') },
    { title: t('sections.contact.title'), content: t('sections.contact.content') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {t('title')}
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          {t('lastUpdated')}
        </p>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navigation />
      <PrivacyContent />
      <Footer />
    </>
  );
}
