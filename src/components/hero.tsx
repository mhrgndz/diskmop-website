"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Download } from "lucide-react";

import { DownloadDropdown } from "@/components/download-dropdown";
import { StorageMap } from "@/components/storage-map";
import { useOSDetection } from "@/hooks/use-os-detection";
import { STORE_URLS } from "@/lib/app-version";
import { trackDownload } from "@/lib/analytics";

export function Hero() {
  const t = useTranslations("hero");
  // iPhone/iPad ziyaretçisine masaüstü ürünü değil iPhone uygulaması anlatılır:
  // metinler `hero.ios.*`'tan gelir, ana düğme doğrudan App Store'a gider.
  // "10.000+ kullanıcı" satırı masaüstüne ait olduğu için orada gösterilmez.
  const isIOS = useOSDetection() === "ios";
  const text = (key: string) => (isIOS ? t(`ios.${key}`) : t(key));

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık: sola yaslı, büyük, tek renk vurgu (gradyan yok) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.02] text-foreground"
        >
          {text("title")}{" "}
          <span className="text-brand-600 dark:text-brand-400">
            {text("titleHighlight")}
          </span>
        </motion.h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground"
          >
            {text("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start gap-4"
          >
            {isIOS ? (
              <a
                href={STORE_URLS.ios}
                onClick={() => trackDownload("ios", "hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-brand-700 active:bg-brand-800"
              >
                <Download className="h-4 w-4" />
                {t("ios.cta")}
              </a>
            ) : (
              <DownloadDropdown variant="primary" location="hero" />
            )}

            {!isIOS && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {t("users")}
                </span>
              </div>
            )}
            <p className="text-xs text-muted-foreground">{text("platforms")}</p>
          </motion.div>
        </div>

        <StorageMap />
      </div>
    </section>
  );
}
