"use client";

import { useTranslations } from "next-intl";
import { Download, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { useOSDetection } from "@/hooks/use-os-detection";
import { trackDownload, type DownloadPlatform } from "@/lib/analytics";
import { ExpandableVideo } from "@/components/expandable-video";
import {
  SHOWCASE_VIDEO_W,
  SHOWCASE_VIDEO_H,
  showcaseVideoSrc,
  showcasePosterSrc,
} from "@/components/showcase-video";

interface FeatureInfo {
  id: string;
  tabIndex: number;
}

const MOBILE_SLUGS = new Set([
  "iphone-storage-full",
  "android-storage-full",
  "clear-cache-android",
  "delete-duplicate-photos-android",
  "find-duplicate-similar-photos-iphone",
  "reduce-video-size-iphone",
  "whatsapp-storage-full-android",
]);

const SLUG_FEATURE_MAP: Record<string, FeatureInfo> = {
  // En cok okunan 5 makale ve diger populer yazilar
  "appdata-cleanup": { id: "cache", tabIndex: 6 },
  "delete-old-user-profiles-windows": { id: "large-files", tabIndex: 2 },
  "how-much-free-disk-space-do-i-need": { id: "disk-treemap", tabIndex: 13 },
  "steam-shader-cache-cleanup": { id: "cache", tabIndex: 6 },
  "disk-space-for-gaming": { id: "large-files", tabIndex: 2 },
  "winsxs-cleanup": { id: "cache", tabIndex: 6 },
  "clear-cache-windows-11": { id: "cache", tabIndex: 6 },

  // Disk analizi ve genel temizlik
  "c-drive-full-for-no-reason": { id: "disk-analysis", tabIndex: 1 },
  "free-disk-space": { id: "overview", tabIndex: 0 },
  "drive-capacity-less-than-advertised": { id: "disk-treemap", tabIndex: 13 },
  "windows-disk-cleanup": { id: "overview", tabIndex: 0 },
  "storage-sense": { id: "overview", tabIndex: 0 },
  "is-it-safe-to-delete-windows-files": { id: "overview", tabIndex: 0 },
  "best-disk-cleaners": { id: "overview", tabIndex: 0 },

  // Dosya ve klasor yonetimi
  "find-large-files-windows": { id: "large-files", tabIndex: 2 },
  "find-duplicate-files-windows": { id: "duplicates", tabIndex: 3 },
  "delete-temporary-files-windows": { id: "cache", tabIndex: 6 },
  "clean-up-downloads-folder": { id: "downloads", tabIndex: 5 },
  "auto-empty-recycle-bin": { id: "recycle-bin", tabIndex: 8 },
  "windows-old-folder": { id: "large-files", tabIndex: 2 },
  "pagefile-hiberfil": { id: "large-files", tabIndex: 2 },
  "wsl-docker-disk-space": { id: "large-files", tabIndex: 2 },
  "system-restore-points-taking-space": { id: "disk-analysis", tabIndex: 1 },
  "onedrive-taking-up-space": { id: "disk-analysis", tabIndex: 1 },
  "windows-installer-folder-cleanup": { id: "cache", tabIndex: 6 },
  "windows-11-24h2-cache-bug": { id: "cache", tabIndex: 6 },

  // Performans ve hizlandirma
  "slow-startup-fix": { id: "startup", tabIndex: 10 },
  "fix-100-disk-usage-windows": { id: "speed-up", tabIndex: 4 },
  "speed-up-computer": { id: "speed-up", tabIndex: 4 },
  "windows-search-index-slow": { id: "speed-up", tabIndex: 4 },
  "windows-slow-after-update": { id: "speed-up", tabIndex: 4 },
  "windows-update-not-enough-space": { id: "disk-analysis", tabIndex: 1 },
  "flush-dns-cache": { id: "dns-cache", tabIndex: 9 },
  "ssd-health-check-windows": { id: "disk-health", tabIndex: 20 },
  "ssd-slows-down-when-full": { id: "disk-analysis", tabIndex: 1 },
  "uninstall-leftovers": { id: "uninstall-leftovers", tabIndex: 16 },

  // macOS ozel makaleleri
  "clear-system-data-mac": { id: "cache", tabIndex: 6 },
  "mac-purgeable-space-local-snapshots": { id: "disk-analysis", tabIndex: 1 },
  "mac-startup-disk-full": { id: "disk-analysis", tabIndex: 1 },
  "icloud-taking-up-mac-storage": { id: "large-files", tabIndex: 2 },

  // Karsilastirma yazilari
  cleanmymac: { id: "overview", tabIndex: 0 },
  ccleaner: { id: "overview", tabIndex: 0 },
  daisydisk: { id: "disk-treemap", tabIndex: 13 },
  treesize: { id: "disk-treemap", tabIndex: 13 },
  windirstat: { id: "disk-treemap", tabIndex: 13 },
  wiztree: { id: "disk-treemap", tabIndex: 13 },
  bleachbit: { id: "overview", tabIndex: 0 },
  "avg-tuneup": { id: "speed-up", tabIndex: 4 },
  "avast-cleanup": { id: "speed-up", tabIndex: 4 },
  "glary-utilities": { id: "speed-up", tabIndex: 4 },
  iobit: { id: "speed-up", tabIndex: 4 },
  mackeeper: { id: "overview", tabIndex: 0 },
  cleanmypc: { id: "overview", tabIndex: 0 },
  "wise-disk-cleaner": { id: "overview", tabIndex: 0 },
};

interface BlogScreenshotShowcaseProps {
  slug: string;
  locale: string;
  articlePlatform?: "ios" | "android" | "mac" | "windows";
}

export function BlogScreenshotShowcase({
  slug,
  locale,
  articlePlatform,
}: BlogScreenshotShowcaseProps) {
  const tBlog = useTranslations("blog");
  const tShowcase = useTranslations("showcase");
  const detectedOS = useOSDetection();

  // Mobil makaleler icin masaustu arayuzu gosterilmez
  if (
    articlePlatform === "ios" ||
    articlePlatform === "android" ||
    MOBILE_SLUGS.has(slug)
  ) {
    return null;
  }

  // Ozellik tespiti (tanimli degilse varsayilan genel bakis)
  const feature = SLUG_FEATURE_MAP[slug] || { id: "overview", tabIndex: 0 };
  const featureName = tShowcase(`tabs.${feature.tabIndex}.name`);
  const featureDescription = tShowcase(`tabs.${feature.tabIndex}.description`);

  // Hedef platform belirleme: makale platformu oncelikli
  const targetOS = articlePlatform || detectedOS;
  const isMac = targetOS === "mac";

  const downloadHref = isMac
    ? "https://api.diskmop.com/download/mac"
    : "https://api.diskmop.com/download/windows";
  const osLabel = isMac ? "macOS" : "Windows";
  const downloadPlatform: DownloadPlatform = isMac ? "mac" : "windows";

  const videoSrc = showcaseVideoSrc(feature.id, locale);
  const posterSrc = showcasePosterSrc(feature.id, locale);

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-card to-card/50 shadow-xl shadow-brand-500/5 ring-1 ring-border/50">
      {/* Pencere Mock Basligi */}
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/60 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/90">
          <Sparkles className="h-3.5 w-3.5 text-brand-500" />
          <span>Disk Mop — {featureName}</span>
        </div>
        <div className="text-[11px] font-mono text-muted-foreground/60 hidden sm:block">
          v1.1
        </div>
      </div>

      {/* Ekran Goruntusu / Video Vitrini */}
      <div className="relative bg-black/40">
        <ExpandableVideo
          src={videoSrc}
          poster={posterSrc}
          title={`Disk Mop - ${featureName}`}
          width={SHOWCASE_VIDEO_W}
          height={SHOWCASE_VIDEO_H}
          lazy={true}
        />
      </div>

      {/* Alt Bilgi ve Aksiyon Paneli */}
      <div className="flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between border-t border-border/80 bg-muted/20">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
            <Sparkles className="h-3 w-3" />
            <span>{tBlog("showcaseBadge")}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground">
            {tBlog("showcaseTitle", { feature: featureName })}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {featureDescription}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {tBlog("trustFreeDeletions")}
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
              {tBlog("trustSafe")}
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-2">
          <a
            href={downloadHref}
            download
            onClick={() => trackDownload(downloadPlatform, "blog_showcase")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition-all hover:from-brand-500 hover:to-teal-500 hover:shadow-lg hover:shadow-brand-500/30 active:scale-[0.98]"
          >
            <Download className="h-4 w-4" />
            <span>{tBlog("downloadFor", { os: osLabel })}</span>
          </a>
          <span className="text-[11px] text-center md:text-right text-muted-foreground/75">
            {tBlog("trustNoCard")}
          </span>
        </div>
      </div>
    </div>
  );
}
