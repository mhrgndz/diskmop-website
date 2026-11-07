"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";

import { DownloadDropdown } from "@/components/download-dropdown";
import { useOSDetection } from "@/hooks/use-os-detection";
import { STORE_URLS, versionFor } from "@/lib/app-version";
import { trackDownload } from "@/lib/analytics";

export function Hero() {
  const t = useTranslations("hero");
  const tApp = useTranslations("app");
  // iPhone/iPad ziyaretçisine masaüstü ürünü değil iPhone uygulaması anlatılır:
  // metinler `hero.ios.*`'tan gelir, ana düğme doğrudan App Store'a gider ve
  // Windows ekran görüntüsü gösterilmez.
  const isIOS = useOSDetection() === "ios";
  const text = (key: string) => (isIOS ? t(`ios.${key}`) : t(key));

  // "Windows 10/11 & macOS 12+ • Virus-free • Signed & Notarized" → üç ayrı madde
  const points = text("platforms")
    .split(/\s*[•·]\s*/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
      {/* Disk halkaları: yalnız süs */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -end-44 -top-28 hidden h-[600px] w-[600px] sm:block"
      >
        <g fill="none" stroke="var(--border)" strokeWidth="1.5">
          <circle cx="300" cy="300" r="290" />
          <circle cx="300" cy="300" r="230" />
          <circle cx="300" cy="300" r="170" />
          <circle cx="300" cy="300" r="110" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            isIOS
              ? "max-w-3xl"
              : "grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-14"
          }
        >
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 inline-flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.08em] text-muted-foreground"
            >
              <span className="block h-2 w-2 rounded-full bg-aqua" />
              Windows · macOS · iPhone · Android
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(40px,5.2vw,72px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-foreground"
            >
              {text("title")}{" "}
              <span className="text-brand-600 dark:text-brand-400">
                {text("titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-[28em] text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {text("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              {isIOS ? (
                <a
                  href={STORE_URLS.ios}
                  onClick={() => trackDownload("ios", "hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[54px] items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 text-[17px] font-semibold text-white transition hover:brightness-110"
                >
                  <Download className="h-4 w-4" />
                  {t("ios.cta")}
                </a>
              ) : (
                <>
                  <DownloadDropdown variant="primary" location="hero" />
                  <a
                    href="#how"
                    className="inline-flex h-[54px] items-center justify-center rounded-xl border border-[#BCCADD] px-6 text-[17px] font-semibold text-foreground transition hover:bg-card dark:border-border"
                  >
                    {t("watchVideo")}
                  </a>
                </>
              )}
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[14.5px] text-muted-foreground"
            >
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-aqua-soft">
                    <Check
                      className="h-3 w-3 text-aqua-ink"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          {!isIOS && (
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="min-w-0"
            >
              <div className="overflow-hidden rounded-[14px] bg-navy shadow-[0_40px_70px_-28px_rgba(11,27,51,0.5),0_0_0_1px_rgba(11,27,51,0.14)]">
                <Image
                  src="/brand/app-overview.png"
                  alt={tApp("screenshotAlt")}
                  width={1076}
                  height={759}
                  priority
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-3.5 font-mono text-[12.5px] text-muted-foreground">
                DiskMop {versionFor("windows")} · Windows
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>
  );
}
