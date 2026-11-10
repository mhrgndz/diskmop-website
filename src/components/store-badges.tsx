"use client";

import { useLocale, useTranslations } from "next-intl";

import { trackDownload, type CtaLocation, type DownloadPlatform } from "@/lib/analytics";
import { MAC_APP_STORE_LIVE, STORE_URLS } from "@/lib/app-version";
import type { Locale } from "@/lib/locales";
import {
  APP_STORE_BADGES,
  GOOGLE_PLAY_BADGES,
  MAC_APP_STORE_BADGES,
  MICROSOFT_STORE_BADGES,
  type StoreBadgeFile,
} from "@/lib/store-badges";

/** Rozetler bu yükseklikte çizilir; Apple ekranda en az 40 px ister. */
const BADGE_HEIGHT = 40;

interface BadgeSpec {
  key: "macAppStore" | "microsoftStore" | "appStore" | "googlePlay";
  href: string;
  platform: DownloadPlatform;
  /** `public/badges/<klasör>`; Google Play tek (siyah) PNG, diğerleri siyah/beyaz SVG. */
  folder: string;
  png?: boolean;
  badges: Record<Locale, StoreBadgeFile>;
  altKey: string;
}

// Sıra: masaüstü önce (Mac, Windows), sonra telefon (iPhone, Android).
const BADGES: BadgeSpec[] = [
  {
    key: "macAppStore",
    href: STORE_URLS.mac,
    platform: "mac-store",
    folder: "mac-app-store",
    badges: MAC_APP_STORE_BADGES,
    altKey: "macAppStoreBadge",
  },
  {
    key: "microsoftStore",
    href: STORE_URLS.windows,
    platform: "windows-store",
    folder: "microsoft-store",
    badges: MICROSOFT_STORE_BADGES,
    altKey: "microsoftStoreBadge",
  },
  {
    key: "appStore",
    href: STORE_URLS.ios,
    platform: "ios",
    folder: "app-store",
    badges: APP_STORE_BADGES,
    altKey: "appStoreBadge",
  },
  {
    key: "googlePlay",
    href: STORE_URLS.android,
    platform: "android",
    folder: "google-play",
    png: true,
    badges: GOOGLE_PLAY_BADGES,
    altKey: "googlePlayBadge",
  },
];

/**
 * Resmî mağaza rozetleri, sayfanın dilinde. Dosyalar kendi alan adımızdan gelir (üçüncü taraf istek yok).
 * `onDark`: rozet koyu zeminde duruyor (ör. mavi şerit) → her zaman beyaz sürüm; aksi halde tema ne ise ona göre
 * (açık temada siyah, koyu temada beyaz). Mac App Store rozeti uygulama mağazada yayınlanana dek gizli
 * (`MAC_APP_STORE_LIVE`): yayında olmayan sayfaya giden bağlantı reklamı bozar.
 */
export function StoreBadges({
  location,
  onDark = false,
  className = "",
}: {
  location: CtaLocation;
  onDark?: boolean;
  className?: string;
}) {
  const locale = useLocale() as Locale;
  const t = useTranslations("stores");

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {BADGES.filter((b) => b.key !== "macAppStore" || MAC_APP_STORE_LIVE).map((b) => {
        const badge = b.badges[locale] ?? b.badges.en;
        const width = Math.round((badge.width / badge.height) * BADGE_HEIGHT);
        const img = (variant: "black" | "white", cls: string) => (
          <img
            src={
              b.png
                ? `/badges/${b.folder}/${badge.file}.png`
                : `/badges/${b.folder}/${variant}/${badge.file}.svg`
            }
            width={width}
            height={BADGE_HEIGHT}
            alt={t(b.altKey)}
            loading="lazy"
            decoding="async"
            className={`h-10 w-auto ${cls}`}
          />
        );
        return (
          <a
            key={b.key}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownload(b.platform, location)}
            className="inline-flex shrink-0 rounded-[8px] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {b.png
              ? img("black", "block")
              : onDark
                ? img("white", "block")
                : (
                    <>
                      {img("black", "block dark:hidden")}
                      {img("white", "hidden dark:block")}
                    </>
                  )}
          </a>
        );
      })}
    </div>
  );
}
