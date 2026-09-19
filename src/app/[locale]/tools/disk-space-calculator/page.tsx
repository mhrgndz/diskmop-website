import { setRequestLocale } from "next-intl/server";
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
  ArrowRight,
} from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const META_TRANSLATIONS: Record<
  string,
  {
    title: string;
    description: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
  }
> = {
  tr: {
    title:
      "Ücretsiz Disk & Depolama Hesaplayıcı — Ne Kadar Yer Kazanabilirsin?",
    description:
      "Bilgisayarınızda veya telefonunuzda ne kadar gereksiz önbellek biriktiğini, SSD sağlığı riskini ve DiskMop ile tek tıkla kaç GB kurtarabileceğinizi ücretsiz hesaplayın.",
    badge: "Ücretsiz Çevrimiçi Web Aracı",
    heroTitle: "Disk & Depolama Alanı Hesaplayıcı",
    heroSubtitle:
      "Sürücünüzün doluluk oranını seçin; oyun, sistem, yazılım ve medya önbelleklerinden ne kadar gigabayt kurtarabileceğinizi anında görün.",
  },
  en: {
    title:
      "Free Disk Space & Storage Calculator — How Much Space Can You Free Up?",
    description:
      "Calculate how much junk cache is hiding on your PC, Mac, iPhone or Android. Check SSD health risk and see how many gigabytes you can reclaim with Disk Mop.",
    badge: "Free Online Web Tool",
    heroTitle: "Disk Space & Storage Calculator",
    heroSubtitle:
      "Select your drive size and usage habits to calculate how much reclaimable space is hiding in system caches, games, and media.",
  },
  de: {
    title:
      "Kostenloser Festplatten- & Speicherplatzrechner — Wie viel Speicherplatz können Sie freigeben?",
    description:
      "Berechnen Sie, wie viele Gigabyte an verstecktem Cache auf Ihrem PC, Mac oder Smartphone liegen. Prüfen Sie Ihr SSD-Risiko online.",
    badge: "Kostenloses Online-Tool",
    heroTitle: "Festplatten- & Speicherplatzrechner",
    heroSubtitle:
      "Wählen Sie Ihre Festplattengröße und Nutzungsgewohnheiten, um bereinigbaren Speicherplatz sofort zu ermitteln.",
  },
  fr: {
    title:
      "Calculateur d'Espace Disque Gratuit — Combien de gigas pouvez-vous récupérer ?",
    description:
      "Calculez combien de caches inutiles encombrent votre PC, Mac, iPhone ou Android. Vérifiez les risques pour votre SSD et estimez votre gain d'espace.",
    badge: "Outil Web Gratuit",
    heroTitle: "Calculateur d'Espace Disque & Stockage",
    heroSubtitle:
      "Sélectionnez la taille de votre disque et vos usages pour découvrir l'espace récupérable dans vos caches et fichiers temporaires.",
  },
  es: {
    title:
      "Calculadora Gratuita de Espacio en Disco — ¿Cuánto espacio puedes liberar?",
    description:
      "Calcula cuántos gigabytes de archivos basura y cachés ocultos ocupan tu PC, Mac o móvil. Comprueba el rendimiento de tu SSD.",
    badge: "Herramienta Web Gratuita",
    heroTitle: "Calculadora de Espacio en Disco y Almacenamiento",
    heroSubtitle:
      "Selecciona la capacidad de tu disco para calcular cuánto espacio recuperable puedes liberar en juegos, sistema y fotos.",
  },
  it: {
    title:
      "Calcolatore Gratuito di Spazio su Disco — Quanto spazio puoi liberare?",
    description:
      "Calcola quanti gigabyte di cache e file temporanei occupano il tuo PC, Mac o smartphone. Verifica lo stato di salute del tuo SSD.",
    badge: "Strumento Web Gratuito",
    heroTitle: "Calcolatore di Spazio su Disco & Storage",
    heroSubtitle:
      "Scopri quanto spazio puoi recuperare subito eliminando cache di sistema, shader di gioco e residui di app.",
  },
  pt: {
    title:
      "Calculadora Gratuita de Espaço em Disco — Quantos gigas você pode liberar?",
    description:
      "Calcule quanto cache oculto está ocupando seu computador ou celular. Avalie o risco para seu SSD e recupere espaço.",
    badge: "Ferramenta Web Gratuita",
    heroTitle: "Calculadora de Espaço em Disco & Armazenamento",
    heroSubtitle:
      "Descubra quantos gigabytes recuperáveis estão escondidos no seu sistema operacional, jogos e aplicativos.",
  },
  ja: {
    title:
      "無料ディスク容量＆ストレージ計算ツール — 何GBの空き容量を増やせるか？",
    description:
      "PC、Mac、iPhone、Androidにどれだけの不要キャッシュが蓄積しているかを即座に計算。SSDの健康リスクと解放可能な容量を診断します。",
    badge: "無料オンラインWebツール",
    heroTitle: "ディスク容量＆ストレージ計算ツール",
    heroSubtitle:
      "ドライブの容量と使用状況を選択して、システムキャッシュやゲーム、メディアから何GB解放できるかをシミュレーションします。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = META_TRANSLATIONS[locale] || META_TRANSLATIONS.en;
  const path = "/tools/disk-space-calculator";

  return {
    title: `${meta.title} — Disk Mop`,
    description: meta.description,
    alternates: alternatesFor(locale, path),
    ...socialFor({
      locale,
      path,
      title: `${meta.title} — Disk Mop`,
      description: meta.description,
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

  const tMeta = META_TRANSLATIONS[locale] || META_TRANSLATIONS.en;
  const baseUrl = "https://diskmop.com";
  const pageUrl = `${baseUrl}${locale === "en" ? "" : `/${locale}`}/tools/disk-space-calculator`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#app`,
        name: tMeta.title,
        description: tMeta.description,
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
            name: "Tools",
            item: pageUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Disk Space Calculator",
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
            name:
              locale === "tr"
                ? "SSD dolunca neden yavaşlar?"
                : "Why does an SSD slow down when full?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                locale === "tr"
                  ? "SSD sürücüler blok bazlı çalışır. Sürücü %80 doluluğa ulaştığında TRIM ve çöp toplama (garbage collection) işlemleri için serbest blok bulmak zorlaşır ve yazma amplifikasyonu (Write Amplification) artar. Bu durum sistem donmalarına neden olur."
                  : "SSDs write data in blocks. When an SSD exceeds 80% capacity, finding empty blocks for wear leveling and TRIM becomes much slower, resulting in write amplification and significant performance drops.",
            },
          },
          {
            "@type": "Question",
            name:
              locale === "tr"
                ? "En çok hangi dosyalar gizlice yer kaplar?"
                : "Which files consume the most hidden disk space?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                locale === "tr"
                  ? "Windows güncelleme artıkları (WinSxS), tarayıcı önbellekleri, Steam shader önbelleği, kaldırılan uygulamaların AppData artıkları ve mesajlaşma önbellekleri (WhatsApp, Discord) en büyük gizli yer tüketicileridir."
                  : "Windows update logs (WinSxS), browser caches, Steam shader pre-caching, orphaned AppData folders, and messaging app media (WhatsApp, Discord, Telegram) account for up to 80% of hidden clutter.",
            },
          },
        ],
      },
    ],
  };

  const calculatorLabels = {
    platformLabel:
      locale === "tr" ? "1. Cihazınızı Seçin" : "1. Select Your Device",
    driveSizeLabel:
      locale === "tr"
        ? "2. Toplam Disk / Bellek Boyutu"
        : "2. Total Drive Capacity",
    currentUsageLabel:
      locale === "tr" ? "3. Tahmini Doluluk Oranı" : "3. Estimated Usage",
    activitiesLabel:
      locale === "tr"
        ? "4. Kullanım Alışkanlıklarınız"
        : "4. Primary Activities & Data Types",
    estimatedSavings:
      locale === "tr"
        ? "Kazanılabilir Tahmini Alan"
        : "Estimated Space You Can Free",
    reclaimableNotice:
      locale === "tr"
        ? "Bu tahmin; sistem logları, paket önbellekleri, kopya dosyalar ve geçici artıkların gerçek veri dağılımına dayanır."
        : "Based on average telemetry for system logs, installer remnants, duplicate media, and app caches.",
    ssdWarningTitle:
      locale === "tr"
        ? "SSD Performans Riski Yüksek"
        : "SSD Write Performance Risk",
    ssdWarningDesc:
      locale === "tr"
        ? "Sürücünüz %80 doluluğu aştığı için TRIM blok silme hızı düşer. Bu seviyede temizlik yapmak sistem hızınızı korur."
        : "Drive exceeds 80% capacity. TRIM efficiency drops and write latency increases. Freeing space restores original speed.",
    ssdGoodTitle:
      locale === "tr"
        ? "Optimum Performans Seviyesi"
        : "Healthy Capacity Range",
    ssdGoodDesc:
      locale === "tr"
        ? "Sürücünüz sağlıklı çalışma aralığında. Düzenli temizlik tıkanmaları önler."
        : "Drive is within healthy margins. Routine maintenance prevents unexpected disk full freezes.",
    breakdownTitle:
      locale === "tr"
        ? "Tahmini Temizlik Dağılımı"
        : "Projected Space Breakdown",
    systemCache:
      locale === "tr"
        ? "Sistem & Tarayıcı Önbelleği"
        : "System & Browser Caches",
    gameJunk:
      locale === "tr"
        ? "Steam & Oyun Önbellekleri"
        : "Steam & Game Shader Caches",
    devJunk:
      locale === "tr"
        ? "Geliştirici & Paket Artıkları"
        : "Developer & Package Leftovers",
    mediaJunk:
      locale === "tr"
        ? "4K Video & Benzer Fotoğraflar"
        : "4K Videos & Duplicate Media",
    msgJunk:
      locale === "tr"
        ? "Mesajlaşma Önbelleği (WhatsApp/Discord)"
        : "Messaging Media Caches",
    downloadButton:
      locale === "tr" ? "Disk Mop'u Ücretsiz İndir" : "Download Disk Mop Free",
    freeTrialTrust:
      locale === "tr"
        ? "3 ücretsiz silme hakkı dahil · Kredi kartı gerekmez · %100 Güvenli"
        : "3 free deletions included · No credit card required · 100% Safe",
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
            <span className="text-foreground">Tools</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate font-medium">
              Disk Space Calculator
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
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
                {locale === "tr" ? "%80 SSD Eşiği" : "The 80% SSD Threshold"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {locale === "tr"
                  ? "Katı hal sürücüleri boş blok kalmadığında mevcut blokları silip yeniden yazmak zorunda kalır. Doluluk %80'i aştığında yazma hızları %50'ye varan oranda yavaşlar."
                  : "SSDs must perform read-modify-write cycles when free blocks run out. Above 80% capacity, write speeds degrade significantly due to TRIM overhead."}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit mb-4">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {locale === "tr"
                  ? "Gizli Dosya Şişmesi"
                  : "Invisible File Bloat"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {locale === "tr"
                  ? "Güncelleme logları, tarayıcı veri tabanları ve oyun gölgelendirici önbellekleri çoğu kullanıcı tarafından fark edilmez ve disk temizleme araçlarından gizlenir."
                  : "Windows update logs, shader pre-caches, and uninstalled application leftovers accumulate silently and escape built-in cleaning utilities."}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {locale === "tr"
                  ? "Tek Tıkla Kurtarma"
                  : "Safe 1-Click Recovery"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {locale === "tr"
                  ? "Disk Mop sisteminizi tarayarak yalnızca güvenle silinebilecek geçici dosyaları seçer. Kişisel dosyalarınıza ve kayıtlarınıza asla dokunmaz."
                  : "Disk Mop scans your drives for non-essential cache and orphaned files without ever endangering system integrity or user documents."}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6">
              <HelpCircle className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              {locale === "tr"
                ? "Sıkça Sorulan Sorular"
                : "Frequently Asked Questions"}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-base">
                  {locale === "tr"
                    ? "SSD dolunca neden yavaşlar?"
                    : "Why does an SSD slow down when full?"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {locale === "tr"
                    ? "SSD sürücüler blok bazlı çalışır. Sürücü %80 doluluğa ulaştığında TRIM ve çöp toplama (garbage collection) işlemleri için serbest blok bulmak zorlaşır ve yazma amplifikasyonu (Write Amplification) artar. Bu durum sistem donmalarına neden olur."
                    : "SSDs write data in blocks. When an SSD exceeds 80% capacity, finding empty blocks for wear leveling and TRIM becomes much slower, resulting in write amplification and significant performance drops."}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1 text-base">
                  {locale === "tr"
                    ? "En çok hangi dosyalar gizlice yer kaplar?"
                    : "Which files consume the most hidden disk space?"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {locale === "tr"
                    ? "Windows güncelleme artıkları (WinSxS), tarayıcı önbellekleri, Steam shader önbelleği, kaldırılan uygulamaların AppData artıkları ve mesajlaşma önbellekleri (WhatsApp, Discord) en büyük gizli yer tüketicileridir."
                    : "Windows update logs (WinSxS), browser caches, Steam shader pre-caching, orphaned AppData folders, and messaging app media (WhatsApp, Discord, Telegram) account for up to 80% of hidden clutter."}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1 text-base">
                  {locale === "tr"
                    ? "Disk Mop temizliği güvenli midir?"
                    : "Is cleaning with Disk Mop completely safe?"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {locale === "tr"
                    ? "Evet. Disk Mop yerel olarak çalışır, kişisel verilerinizi toplamaz ve yalnızca işletim sisteminin güvenle yeniden oluşturabileceği önbellekleri ve artık dosyaları hedefler. Cihaz başına 3 ücretsiz silme hakkı ile güvenle test edebilirsiniz."
                    : "Yes. Disk Mop runs strictly locally without collecting personal data. It targets only reproducible caches, log files, and orphaned leftovers with a safety-first architecture. You get 3 free deletions per device to verify."}
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
