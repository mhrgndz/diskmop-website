import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { routing } from "@/i18n/routing";
import { localeHref } from "@/lib/locale-path";
import { alternatesFor, socialFor } from "@/lib/seo";
import { DiskSpaceCalculator } from "@/components/disk-space-calculator";
import {
  ChevronRight,
  HelpCircle,
  HardDrive,
  ShieldAlert,
  Zap,
} from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "calculator" });
  const path = "/tools/disk-space-calculator";

  return {
    title: `${t("title")} — Disk Mop`,
    description: t("description"),
    alternates: alternatesFor(locale, path),
    ...socialFor({
      locale,
      path,
      title: `${t("title")} — Disk Mop`,
      description: t("description"),
      type: "website",
    }),
  };
}

export default async function DiskSpaceCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tCalc = await getTranslations({ locale, namespace: "calculator" });
  const tTools = await getTranslations({ locale, namespace: "tools" });
  const baseUrl = "https://diskmop.com";
  const pageUrl = `${baseUrl}${locale === "en" ? "" : `/${locale}`}/tools/disk-space-calculator`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#app`,
        name: tCalc("title"),
        description: tCalc("description"),
        url: pageUrl,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Disk Mop",
            item: `${baseUrl}${locale === "en" ? "/" : `/${locale}`}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: tTools("breadcrumb"),
            item: `${baseUrl}${locale === "en" ? "" : `/${locale}`}/tools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tCalc("breadcrumb"),
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: tCalc("faqQ1"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tCalc("faqA1"),
            },
          },
          {
            "@type": "Question",
            name: tCalc("faqQ2"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tCalc("faqA2"),
            },
          },
          {
            "@type": "Question",
            name: tCalc("faqQ3"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tCalc("faqA3"),
            },
          },
        ],
      },
    ],
  };

  const calculatorLabels = {
    platformLabel: tCalc("platformLabel"),
    driveSizeLabel: tCalc("driveSizeLabel"),
    currentUsageLabel: tCalc("currentUsageLabel"),
    activitiesLabel: tCalc("activitiesLabel"),
    estimatedSavings: tCalc("estimatedSavings"),
    reclaimableNotice: tCalc("reclaimableNotice"),
    ssdWarningTitle: tCalc("ssdWarningTitle"),
    ssdWarningDesc: tCalc("ssdWarningDesc"),
    ssdGoodTitle: tCalc("ssdGoodTitle"),
    ssdGoodDesc: tCalc("ssdGoodDesc"),
    breakdownTitle: tCalc("breakdownTitle"),
    systemCache: tCalc("systemCache"),
    gameJunk: tCalc("gameJunk"),
    devJunk: tCalc("devJunk"),
    mediaJunk: tCalc("mediaJunk"),
    msgJunk: tCalc("msgJunk"),
    downloadButton: tCalc("downloadButton"),
    freeTrialTrust: tCalc("freeTrialTrust"),
    sliderRelaxed: tCalc("sliderRelaxed"),
    sliderWarning: tCalc("sliderWarning"),
    sliderCritical: tCalc("sliderCritical"),
    actGaming: tCalc("actGaming"),
    actDev: tCalc("actDev"),
    actMedia: tCalc("actMedia"),
    actMessaging: tCalc("actMessaging"),
    barSystemTooltip: tCalc("barSystemTooltip"),
    barReclaimableTooltip: tCalc("barReclaimableTooltip"),
    barPersonalLegend: tCalc("barPersonalLegend"),
    barReclaimableLegend: tCalc("barReclaimableLegend"),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href={localeHref(locale, "/")}
              className="hover:text-foreground transition-colors"
            >
              Disk Mop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={localeHref(locale, "/tools")}
              className="hover:text-foreground transition-colors"
            >
              {tTools("breadcrumb")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate font-medium">
              {tCalc("breadcrumb")}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            {tCalc("badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {tCalc("heroTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {tCalc("heroSubtitle")}
          </p>
        </section>

        {/* Interactive Calculator */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <DiskSpaceCalculator locale={locale} labels={calculatorLabels} />
        </section>

        {/* Educational Content & Authority Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 w-fit mb-4">
                <HardDrive className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {tCalc("eduCard1Title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tCalc("eduCard1Desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit mb-4">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {tCalc("eduCard2Title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tCalc("eduCard2Desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {tCalc("eduCard3Title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tCalc("eduCard3Desc")}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6">
              <HelpCircle className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              {tCalc("faqTitle")}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-base">
                  {tCalc("faqQ1")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tCalc("faqA1")}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1 text-base">
                  {tCalc("faqQ2")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tCalc("faqA2")}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1 text-base">
                  {tCalc("faqQ3")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tCalc("faqA3")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
