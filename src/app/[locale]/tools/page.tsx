import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { routing } from "@/i18n/routing";
import { localeHref } from "@/lib/locale-path";
import { alternatesFor, socialFor } from "@/lib/seo";
import {
  Calculator,
  ChevronRight,
  ArrowRight,
  FileSearch,
  Gauge,
  Smartphone,
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
  const t = await getTranslations({ locale, namespace: "tools" });
  const path = "/tools";

  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, path),
    ...socialFor({
      locale,
      path,
      title: t("title"),
      description: t("description"),
      type: "website",
    }),
  };
}

export default async function ToolsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "tools" });
  const baseUrl = "https://diskmop.com";
  const pageUrl = `${baseUrl}${locale === "en" ? "" : `/${locale}`}/tools`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: t("title"),
        description: t("description"),
        url: pageUrl,
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
            name: t("breadcrumb"),
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const toolsList = [
    {
      title: t("cardCalculatorTitle"),
      description: t("cardCalculatorDesc"),
      href: localeHref(locale, "/tools/disk-space-calculator"),
      icon: Calculator,
      isFeatured: true,
      badge: t("featuredBadge"),
    },
    {
      title: t("cardSsdTitle"),
      description: t("cardSsdDesc"),
      href: localeHref(locale, "/blog/ssd-health-check-windows"),
      icon: Gauge,
      isFeatured: false,
      badge: t("guideBadge"),
    },
    {
      title: t("cardIphoneTitle"),
      description: t("cardIphoneDesc"),
      href: localeHref(locale, "/blog/iphone-storage-full"),
      icon: Smartphone,
      isFeatured: false,
      badge: t("guideBadge"),
    },
    {
      title: t("cardLargeFilesTitle"),
      description: t("cardLargeFilesDesc"),
      href: localeHref(locale, "/blog/find-large-files-windows"),
      icon: FileSearch,
      isFeatured: false,
      badge: t("guideBadge"),
    },
  ];

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
            <span className="text-foreground font-medium">
              {t("breadcrumb")}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </section>

        {/* Tools Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`group block rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl ${
                    tool.isFeatured
                      ? "border-brand-500/50 bg-gradient-to-br from-brand-50/80 via-background to-card dark:from-brand-950/30 dark:via-background dark:to-card hover:border-brand-500"
                      : "border-border bg-card hover:border-brand-300 dark:hover:border-brand-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`p-3 rounded-2xl ${
                        tool.isFeatured
                          ? "bg-brand-500 text-white shadow-md"
                          : "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
                      {tool.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {tool.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-3 transition-all">
                    <span>{t("openTool")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
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
