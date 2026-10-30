"use client";

import { useTranslations } from "next-intl";
import { Smartphone, Download } from "lucide-react";
import { useOSDetection } from "@/hooks/use-os-detection";
import { iosStoreUrl } from "@/lib/app-version";
import { trackDownload } from "@/lib/analytics";

interface IphoneCompanionCardProps {
  articlePlatform: "ios" | "android" | "mac" | "windows";
  articleSlug?: string;
}

/**
 * Makalenin ana indirme kartının altında iPhone uygulamasını tanıtan küçük kart.
 *
 * İki durumda görünür:
 * - Mac makalelerinde herkese: Mac kullanıcılarının çoğunun iPhone'u da var.
 * - iPhone/iPad'den okunan Windows/Android makalelerinde: ana kart ziyaretçiye
 *   kuramayacağı bir masaüstü sürümü önerir, bu kart cihazına uygun olanı.
 * iPhone makalelerinde ana kart zaten App Store'a gittiği için görünmez.
 */
export function IphoneCompanionCard({
  articlePlatform,
  articleSlug,
}: IphoneCompanionCardProps) {
  const t = useTranslations("blog.iphoneCompanion");
  const detectedOS = useOSDetection();

  const show =
    articlePlatform === "mac" ||
    (detectedOS === "ios" && articlePlatform !== "ios");
  if (!show) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-border bg-card p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
          <Smartphone className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">
            {t("badge")}
          </div>
          <h2 className="text-lg font-bold text-foreground">{t("title")}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
        <a
          href={iosStoreUrl(articleSlug)}
          onClick={() => trackDownload("ios", "blog_iphone_companion")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700 active:bg-brand-800"
        >
          <Download className="h-4 w-4" />
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
