/**
 * Uygulama sürümlerinin TEK doğru kaynağı.
 *
 * Neden gerekli: sürüm bilgisi eskiden yalnızca tarayıcıda, `/api/latest-version`
 * çağrısıyla geliyordu. Sunucunun ürettiği HTML'de sabit "v1.0.0" yedeği vardı
 * ve JavaScript çalıştırmayan her okuyucu — Google'ın ilk taraması, ChatGPT,
 * Perplexity, paylaşım önizlemeleri — ürünü İLK SÜRÜMÜNDE sanıyordu.
 *
 * Buradaki değerler sunucuda basılır (JavaScript çalıştırmayanlar için yedek); tarayıcıda
 * `useAppInfo` canlı değerle değiştirir: Windows (API sürümü), macOS (API'deki DMG adı),
 * iPhone (iTunes Lookup). Android kartında sürüm GÖSTERİLMEZ (Play'in herkese açık sürüm
 * ucu yok; elle yazılan numara bayatlıyordu). Yedekler yine de zaman zaman güncellenmeli.
 */
export const APP_VERSIONS = {
  windows: "1.0.33",
  mac: "1.0.31",
  ios: "1.1.10",
} as const;

/**
 * Mağaza sayfaları. Android uygulama kimliği `com.diskmop.android`; iPhone
 * uygulaması "DiskMop: Photo & Video Cleaner", App ID 6811601108 (bundle
 * `com.diskmop.ios`). App Store bağlantısı ülke öneksiz: Apple ziyaretçiyi
 * kendi vitrinine yönlendirir.
 */
export const IOS_APP_ID = "6811601108";

export const STORE_URLS = {
  android: "https://play.google.com/store/apps/details?id=com.diskmop.android",
  ios: `https://apps.apple.com/app/diskmop-photo-video-cleaner/id${IOS_APP_ID}`,
} as const;

/**
 * App Store özel ürün sayfaları (Custom Product Pages, 2026-10-27'de onaylandı). Makale konusuna uyan sayfa
 * açılır: aynı uygulama, ilk görseller konuya göre sıralı. Eşleme ve kimlikler:
 * claude-kit/araclar/diskmop-ios-magaza-gorselleri/etkinlik-2026-yil-sonu/README.md
 */
const IOS_PRODUCT_PAGES: Record<string, string> = {
  "reduce-video-size-iphone": "294134c6-083c-4baa-b98e-2f199aef0b51",
  "find-duplicate-videos-iphone": "294134c6-083c-4baa-b98e-2f199aef0b51",
  "live-photos-storage-iphone": "294134c6-083c-4baa-b98e-2f199aef0b51",
  "swipe-to-delete-photos-iphone": "be842aee-1f29-4fcd-aaf0-0c25439a10ec",
  "delete-screenshots-iphone": "be842aee-1f29-4fcd-aaf0-0c25439a10ec",
  "find-duplicate-similar-photos-iphone": "dc526bbc-3748-4bb4-bdbe-1fe49797b4e8",
  "delete-blurry-photos-iphone": "dc526bbc-3748-4bb4-bdbe-1fe49797b4e8",
  "delete-whatsapp-photos-iphone": "dc526bbc-3748-4bb4-bdbe-1fe49797b4e8",
  "hide-photos-iphone": "560553e2-0a27-4d34-8faa-4b7d066b6cd8",
};

/** Makale adresine uyan özel ürün sayfasının App Store bağlantısı; eşleşme yoksa ana sayfa. */
export function iosStoreUrl(articleSlug?: string): string {
  const pageId = articleSlug ? IOS_PRODUCT_PAGES[articleSlug] : undefined;
  return pageId ? `${STORE_URLS.ios}?ppid=${pageId}` : STORE_URLS.ios;
}

/** Şema ve metinlerde kullanılan "güncel sürüm". */
export const LATEST_VERSION = APP_VERSIONS.windows;

/** İlk genel sürümün tarihi — olgunluk sinyali. */
export const FIRST_RELEASE_DATE = "2026-05-15";

/** Güncel sürümün yayın tarihi. */
export const LATEST_RELEASE_DATE = "2026-10-29";

export const RELEASE_NOTES_URL =
  "https://github.com/mhrgndz/diskmop-releases/releases";

export function versionFor(platform: keyof typeof APP_VERSIONS): string {
  return APP_VERSIONS[platform];
}
