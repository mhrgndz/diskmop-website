import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { routing } from "@/i18n/routing";
import { localeHref } from "@/lib/locale-path";
import { alternatesFor, socialFor } from "@/lib/seo";
import {
  Calculator,
  HardDrive,
  Cpu,
  Smartphone,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileSearch,
  Gauge,
} from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const TOOLS_META: Record<
  string,
  {
    title: string;
    description: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    openTool: string;
    featuredBadge: string;
  }
> = {
  tr: {
    title: "Ücretsiz Web Araçları & Disk Hesaplayıcıları — Disk Mop",
    description:
      "Disk doluluğu hesaplayıcı, SSD sağlık analizi ve depolama alanı optimizasyon araçları. Çevrimiçi, ücretsiz ve anında sonuç.",
    badge: "Çevrimiçi Yardımcı Araçlar",
    heroTitle: "Ücretsiz Disk & Depolama Araçları",
    heroSubtitle:
      "Sisteminizin ne kadar yer kazanabileceğini, SSD ömrünü ve depolama ihtiyaçlarınızı saniyeler içinde hesaplayın.",
    openTool: "Aracı Aç",
    featuredBadge: "Öne Çıkan Araç",
  },
  en: {
    title: "Free Web Tools & Storage Calculators — Disk Mop",
    description:
      "Disk space calculator, SSD lifespan estimation, and storage optimization utilities. 100% free, online, and instant results.",
    badge: "Online Utilities",
    heroTitle: "Free Disk & Storage Web Tools",
    heroSubtitle:
      "Calculate how many gigabytes you can reclaim, estimate SSD health, and plan your storage requirements in seconds.",
    openTool: "Launch Tool",
    featuredBadge: "Featured Tool",
  },
  de: {
    title: "Kostenlose Web-Tools & Speicherplatzrechner — Disk Mop",
    description:
      "Speicherplatzrechner, SSD-Lebensdauer-Schätzung und Speicheroptimierungs-Tools. Kostenlos, online und sofort.",
    badge: "Online-Dienstprogramme",
    heroTitle: "Kostenlose Festplatten- & Speicherplatz-Tools",
    heroSubtitle:
      "Berechnen Sie, wie viele Gigabyte Sie freigeben können, und optimieren Sie Ihren Speicherplatz online.",
    openTool: "Tool starten",
    featuredBadge: "Empfohlenes Tool",
  },
  fr: {
    title: "Outils Web Gratuits & Calculateurs de Stockage — Disk Mop",
    description:
      "Calculateur d'espace disque, estimation de durée de vie SSD et utilitaires d'optimisation de stockage en ligne gratuits.",
    badge: "Utilitaires en Ligne",
    heroTitle: "Outils Web Gratuits pour Disque & Stockage",
    heroSubtitle:
      "Calculez le gain d'espace réalisable, préservez la santé de votre SSD et planifiez vos besoins de stockage.",
    openTool: "Ouvrir l'outil",
    featuredBadge: "Outil Vedette",
  },
  es: {
    title: "Herramientas Web Gratuitas y Calculadoras de Espacio — Disk Mop",
    description:
      "Calculadora de espacio en disco, estimación de vida útil del SSD y herramientas de optimización online gratuitas.",
    badge: "Utilidades en Línea",
    heroTitle: "Herramientas Web Gratuitas de Disco y Espacio",
    heroSubtitle:
      "Calcula cuántos gigabytes puedes recuperar y planifica tu almacenamiento en segundos.",
    openTool: "Abrir herramienta",
    featuredBadge: "Herramienta Destacada",
  },
  it: {
    title: "Strumenti Web Gratuiti e Calcolatori di Spazio — Disk Mop",
    description:
      "Calcolatore di spazio su disco, stima della durata dell'SSD e utilità di ottimizzazione dell'archiviazione gratuite.",
    badge: "Utilità Online",
    heroTitle: "Strumenti Web Gratuiti per Disco & Storage",
    heroSubtitle:
      "Calcola quanti gigabyte puoi recuperare e ottimizza le prestazioni del tuo sistema in pochi secondi.",
    openTool: "Avvia strumento",
    featuredBadge: "Strumento in Evidenza",
  },
  pt: {
    title:
      "Ferramentas Web Gratuitas e Calculadoras de Armazenamento — Disk Mop",
    description:
      "Calculadora de espaço em disco, estimativa de vida útil do SSD e utilitários de otimização de armazenamento online.",
    badge: "Utilitários Online",
    heroTitle: "Ferramentas Web Gratuitas de Disco e Espaço",
    heroSubtitle:
      "Calcule quantos gigabytes recuperáveis existem no seu sistema e planeje seu espaço de armazenamento.",
    openTool: "Abrir ferramenta",
    featuredBadge: "Ferramenta em Destaque",
  },
  ja: {
    title: "無料Webツール＆ストレージ計算機 — Disk Mop",
    description:
      "ディスク容量計算機、SSD寿命シミュレーション、ストレージ最適化ユーティリティ。無料・オンラインで即座に診断。",
    badge: "オンラインユーティリティ",
    heroTitle: "無料ディスク＆ストレージツール",
    heroSubtitle:
      "何ギガバイトの空き容量を増やせるかをシミュレーションし、ストレージの健全性を維持します。",
    openTool: "ツールを開く",
    featuredBadge: "注目のツール",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = TOOLS_META[locale] || TOOLS_META.en;
  const path = "/tools";

  return {
    title: meta.title,
    description: meta.description,
    alternates: alternatesFor(locale, path),
    ...socialFor({
      locale,
      path,
      title: meta.title,
      description: meta.description,
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

  const tMeta = TOOLS_META[locale] || TOOLS_META.en;
  const baseUrl = "https://diskmop.com";
  const pageUrl = `${baseUrl}${locale === "en" ? "" : `/${locale}`}/tools`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: tMeta.title,
        description: tMeta.description,
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
            name: "Tools",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const toolsList = [
    {
      title:
        locale === "tr"
          ? "Depolama Alanı & Temizlik Hesaplayıcı"
          : "Disk Space & Storage Calculator",
      description:
        locale === "tr"
          ? "Cihazınızı ve sürücü boyutunuzu seçin; oyun, sistem, geliştirici ve mesajlaşma çöplerinden kurtarabileceğiniz tahmini alanı ve SSD sağlık riskini anında hesaplayın."
          : "Select your device and capacity to calculate reclaimable space across gaming caches, developer leftovers, and media with interactive SSD health warnings.",
      href: localeHref(locale, "/tools/disk-space-calculator"),
      icon: Calculator,
      isFeatured: true,
      badge: tMeta.featuredBadge,
    },
    {
      title:
        locale === "tr"
          ? "SSD Sağlık & Ömür Rehberi"
          : "SSD Health & Lifespan Check",
      description:
        locale === "tr"
          ? "SSD sürücünüzün doluluk oranı %80'i aştığında neden yavaşladığını ve TBW (Terabytes Written) sınırını nasıl koruyacağınızı öğrenin."
          : "Understand why SSDs degrade above 80% capacity and how to monitor wear leveling, TRIM efficiency, and SMART metrics.",
      href: localeHref(locale, "/blog/ssd-health-check-windows"),
      icon: Gauge,
      isFeatured: false,
      badge: "Guide",
    },
    {
      title:
        locale === "tr"
          ? "iPhone Fotoğraf & Video Boyut Analizi"
          : "iPhone Media Storage Breakdown",
      description:
        locale === "tr"
          ? "4K videolar, Live Photo'lar ve ProRAW karelerin depolama alanınızı nasıl doldurduğunu ve en az pişmanlıkla nasıl yer açacağınızı keşfedin."
          : "Detailed benchmark table of 4K video, Live Photos, and ProRAW file sizes with proven safe cleanup steps for iOS.",
      href: localeHref(locale, "/blog/iphone-storage-full"),
      icon: Smartphone,
      isFeatured: false,
      badge: "Guide",
    },
    {
      title:
        locale === "tr"
          ? "Büyük & Yinelenen Dosya Bulucu"
          : "Duplicate & Large File Finder",
      description:
        locale === "tr"
          ? "Diskinizde farkında olmadan yer kaplayan gigabaytlarca kopya dosyayı ve unutulmuş devasa kurulum paketlerini güvenle tespit edin."
          : "Locate forgotten multi-gigabyte downloads, duplicate archives, and uninstalled application leftovers safely.",
      href: localeHref(locale, "/blog/find-large-files-windows"),
      icon: FileSearch,
      isFeatured: false,
      badge: "Guide",
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
            <span className="text-foreground font-medium">Tools</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            {tMeta.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {tMeta.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {tMeta.heroSubtitle}
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
                    <span>{tMeta.openTool}</span>
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
