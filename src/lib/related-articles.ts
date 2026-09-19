import type { Article } from "@/content/types";

type Platform = "ios" | "android" | "mac" | "windows";

const IOS_SLUGS = new Set([
  "iphone-storage-full",
  "find-duplicate-similar-photos-iphone",
  "reduce-video-size-iphone",
]);

const ANDROID_SLUGS = new Set([
  "android-storage-full",
  "whatsapp-storage-full-android",
  "clear-cache-android",
  "delete-duplicate-photos-android",
]);

const MAC_SLUGS = new Set([
  "clear-system-data-mac",
  "mac-startup-disk-almost-full",
  "icloud-taking-up-mac-storage",
  "mac-purgeable-space-local-snapshots",
  "disk-mop-vs-cleanmymac",
  "disk-mop-vs-daisydisk",
  "disk-mop-vs-mackeeper",
]);

const WINDOWS_SPEED_SLUGS = new Set([
  "windows-11-24h2-cache-bug",
  "how-to-speed-up-computer",
  "fix-slow-startup-windows",
  "fix-100-disk-usage-windows",
  "clear-cache-windows-11",
  "windows-search-index-slow",
  "windows-slow-after-update",
  "ssd-slows-down-when-full",
  "ssd-health-check-windows",
  "free-up-disk-space-for-gaming",
]);

const WINDOWS_COMPARISON_SLUGS = new Set([
  "best-disk-cleaning-software-2025",
  "disk-mop-vs-ccleaner",
  "disk-mop-vs-bleachbit",
  "disk-mop-vs-wise-disk-cleaner",
  "disk-mop-vs-glary-utilities",
  "disk-mop-vs-avg-tuneup",
  "disk-mop-vs-iobit-advanced-systemcare",
  "disk-mop-vs-treesize",
  "disk-mop-vs-windirstat",
  "disk-mop-vs-wiztree",
  "disk-mop-vs-cleanmypc",
  "disk-mop-vs-avast-cleanup",
  "disk-mop-vs-windows-disk-cleanup",
  "disk-mop-vs-storage-sense",
]);

export function getPlatformForSlug(slug: string): Platform {
  if (IOS_SLUGS.has(slug)) return "ios";
  if (ANDROID_SLUGS.has(slug)) return "android";
  if (MAC_SLUGS.has(slug)) return "mac";
  return "windows";
}

/**
 * Belirli ana makaleler için en yüksek dönüşüm ve alaka düzeyine sahip
 * manuel iç link öncelik haritası.
 */
const HANDPICKED_RELATED: Record<string, string[]> = {
  // Mac Kümesi
  "clear-system-data-mac": [
    "disk-mop-vs-cleanmymac",
    "mac-startup-disk-almost-full",
    "mac-purgeable-space-local-snapshots",
  ],
  "disk-mop-vs-cleanmymac": [
    "clear-system-data-mac",
    "disk-mop-vs-daisydisk",
    "mac-startup-disk-almost-full",
  ],
  "disk-mop-vs-daisydisk": [
    "disk-mop-vs-cleanmymac",
    "clear-system-data-mac",
    "mac-startup-disk-almost-full",
  ],
  "mac-startup-disk-almost-full": [
    "clear-system-data-mac",
    "mac-purgeable-space-local-snapshots",
    "icloud-taking-up-mac-storage",
  ],
  "icloud-taking-up-mac-storage": [
    "mac-startup-disk-almost-full",
    "clear-system-data-mac",
    "disk-mop-vs-cleanmymac",
  ],
  "mac-purgeable-space-local-snapshots": [
    "clear-system-data-mac",
    "mac-startup-disk-almost-full",
    "disk-mop-vs-daisydisk",
  ],
  "disk-mop-vs-mackeeper": [
    "disk-mop-vs-cleanmymac",
    "clear-system-data-mac",
    "mac-startup-disk-almost-full",
  ],

  // iOS Kümesi
  "iphone-storage-full": [
    "find-duplicate-similar-photos-iphone",
    "reduce-video-size-iphone",
  ],
  "find-duplicate-similar-photos-iphone": [
    "iphone-storage-full",
    "reduce-video-size-iphone",
  ],
  "reduce-video-size-iphone": [
    "iphone-storage-full",
    "find-duplicate-similar-photos-iphone",
  ],

  // Android Kümesi
  "android-storage-full": [
    "whatsapp-storage-full-android",
    "clear-cache-android",
    "delete-duplicate-photos-android",
  ],
  "whatsapp-storage-full-android": [
    "android-storage-full",
    "clear-cache-android",
    "delete-duplicate-photos-android",
  ],
  "clear-cache-android": [
    "android-storage-full",
    "whatsapp-storage-full-android",
    "delete-duplicate-photos-android",
  ],
  "delete-duplicate-photos-android": [
    "android-storage-full",
    "clear-cache-android",
    "whatsapp-storage-full-android",
  ],

  // Windows Temizlik Hub'ları
  "windows-11-24h2-cache-bug": [
    "c-drive-full-for-no-reason",
    "clear-cache-windows-11",
    "winsxs-folder-cleanup",
  ],
  "c-drive-full-for-no-reason": [
    "windows-11-24h2-cache-bug",
    "how-to-free-disk-space",
    "delete-temporary-files-windows",
    "find-large-files-windows",
  ],
  "how-to-free-disk-space": [
    "c-drive-full-for-no-reason",
    "delete-temporary-files-windows",
    "find-large-files-windows",
  ],
  "delete-temporary-files-windows": [
    "c-drive-full-for-no-reason",
    "clear-cache-windows-11",
    "disk-mop-vs-storage-sense",
  ],
  "find-large-files-windows": [
    "c-drive-full-for-no-reason",
    "disk-mop-vs-treesize",
    "disk-mop-vs-windirstat",
  ],
  "find-duplicate-files-windows": [
    "how-to-free-disk-space",
    "clean-up-downloads-folder",
    "c-drive-full-for-no-reason",
  ],
  "clean-up-downloads-folder": [
    "how-to-free-disk-space",
    "find-large-files-windows",
    "delete-temporary-files-windows",
  ],
  "delete-windows-old-folder": [
    "c-drive-full-for-no-reason",
    "delete-temporary-files-windows",
    "winsxs-folder-cleanup",
  ],
  "winsxs-folder-cleanup": [
    "c-drive-full-for-no-reason",
    "delete-windows-old-folder",
    "windows-installer-folder-cleanup",
  ],
  "delete-pagefile-sys-hiberfil-sys": [
    "c-drive-full-for-no-reason",
    "how-to-free-disk-space",
    "system-restore-points-taking-space",
  ],
  "appdata-folder-cleanup": [
    "c-drive-full-for-no-reason",
    "delete-temporary-files-windows",
    "uninstall-leftovers-cleaner",
  ],

  // Windows Hızlandırma Hub'ları
  "how-to-speed-up-computer": [
    "fix-slow-startup-windows",
    "clear-cache-windows-11",
    "fix-100-disk-usage-windows",
  ],
  "fix-slow-startup-windows": [
    "how-to-speed-up-computer",
    "clear-cache-windows-11",
    "fix-100-disk-usage-windows",
  ],
  "clear-cache-windows-11": [
    "delete-temporary-files-windows",
    "how-to-speed-up-computer",
    "flush-dns-cache",
  ],
  "fix-100-disk-usage-windows": [
    "how-to-speed-up-computer",
    "fix-slow-startup-windows",
    "windows-search-index-slow",
  ],

  // Windows Karşılaştırma Hub'ları
  "disk-mop-vs-ccleaner": [
    "best-disk-cleaning-software-2025",
    "how-to-free-disk-space",
    "c-drive-full-for-no-reason",
  ],
  "best-disk-cleaning-software-2025": [
    "disk-mop-vs-ccleaner",
    "disk-mop-vs-bleachbit",
    "how-to-free-disk-space",
  ],
  "disk-mop-vs-bleachbit": [
    "best-disk-cleaning-software-2025",
    "disk-mop-vs-ccleaner",
    "disk-mop-vs-wise-disk-cleaner",
  ],
};

/**
 * Her makale için en alakalı, aynı işletim sistemi ve konu kümesine ait
 * 3 ilgili makaleyi dinamik olarak hesaplar.
 */
export function getRelatedArticles(
  currentArticle: Article,
  allArticles: Article[],
  count = 3,
): Article[] {
  const currentSlug = currentArticle.slug;
  const currentPlatform = getPlatformForSlug(currentSlug);

  // 1. Varsa manuel el ile seçilmiş öncelikli liste
  const handpickedSlugs = HANDPICKED_RELATED[currentSlug];
  if (handpickedSlugs && handpickedSlugs.length > 0) {
    const matched: Article[] = [];
    for (const slug of handpickedSlugs) {
      const art = allArticles.find((a) => a.slug === slug);
      if (art && art.slug !== currentSlug) {
        matched.push(art);
      }
      if (matched.length >= count) return matched;
    }
    if (matched.length >= count) return matched;
  }

  // 2. Alt küme tespiti (Windows için)
  const isCurrentSpeed = WINDOWS_SPEED_SLUGS.has(currentSlug);
  const isCurrentComparison =
    WINDOWS_COMPARISON_SLUGS.has(currentSlug) ||
    currentArticle.type === "comparison";

  // 3. Skorlama
  const scored = allArticles
    .filter((a) => a.slug !== currentSlug)
    .map((candidate) => {
      let score = 0;
      const candidatePlatform = getPlatformForSlug(candidate.slug);

      // Platform uyumu: kritik önemde (Mac ise Mac, iPhone ise iPhone)
      if (candidatePlatform === currentPlatform) {
        score += 100;
      } else {
        // Platform uyuşmazsa elenmeye yakın düşük puan
        score -= 50;
      }

      // Alt küme uyumu (Windows içi)
      if (currentPlatform === "windows") {
        if (isCurrentSpeed && WINDOWS_SPEED_SLUGS.has(candidate.slug)) {
          score += 40;
        } else if (
          isCurrentComparison &&
          (WINDOWS_COMPARISON_SLUGS.has(candidate.slug) ||
            candidate.type === "comparison")
        ) {
          score += 40;
        } else if (
          !isCurrentSpeed &&
          !isCurrentComparison &&
          !WINDOWS_SPEED_SLUGS.has(candidate.slug) &&
          !WINDOWS_COMPARISON_SLUGS.has(candidate.slug)
        ) {
          score += 30;
        }
      }

      // Kategori uyumu
      if (
        currentArticle.category &&
        candidate.category &&
        currentArticle.category === candidate.category
      ) {
        score += 20;
      }

      // Tip uyumu (guide vs comparison)
      if (currentArticle.type && candidate.type === currentArticle.type) {
        score += 10;
      }

      return { article: candidate, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, count).map((s) => s.article);
}
