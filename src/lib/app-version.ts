/**
 * Uygulama sürümlerinin TEK doğru kaynağı.
 *
 * Neden gerekli: sürüm bilgisi eskiden yalnızca tarayıcıda, `/api/latest-version`
 * çağrısıyla geliyordu. Sunucunun ürettiği HTML'de sabit "v1.0.0" yedeği vardı
 * ve JavaScript çalıştırmayan her okuyucu — Google'ın ilk taraması, ChatGPT,
 * Perplexity, paylaşım önizlemeleri — ürünü İLK SÜRÜMÜNDE sanıyordu.
 *
 * Buradaki değerler sunucuda basılır; canlı API yanıtı gelirse Windows sürümünü
 * günceller. Yeni sürüm çıktığında BURASI da güncellenmeli — mağaza sürümleri
 * (Android, iPhone) yalnızca buradan okunur, canlı API onları bilmez.
 */
export const APP_VERSIONS = {
  windows: '1.0.26',
  mac: '1.0.25',
  android: '1.0.9',
  ios: '1.0',
} as const;

/**
 * Mağaza sayfaları. Android uygulama kimliği `com.diskmop.android`; iPhone
 * uygulaması "DiskMop: Photo & Video Cleaner", App ID 6811601108 (bundle
 * `com.diskmop.ios`). App Store bağlantısı ülke öneksiz: Apple ziyaretçiyi
 * kendi vitrinine yönlendirir.
 */
export const STORE_URLS = {
  android: 'https://play.google.com/store/apps/details?id=com.diskmop.android',
  ios: 'https://apps.apple.com/app/diskmop-photo-video-cleaner/id6811601108',
} as const;

/** Şema ve metinlerde kullanılan "güncel sürüm". */
export const LATEST_VERSION = APP_VERSIONS.windows;

/** İlk genel sürümün tarihi — olgunluk sinyali. */
export const FIRST_RELEASE_DATE = '2026-05-15';

/** Güncel sürümün yayın tarihi. */
export const LATEST_RELEASE_DATE = '2026-09-19';

export const RELEASE_NOTES_URL = 'https://github.com/mhrgndz/diskmop-releases/releases';

export function versionFor(platform: keyof typeof APP_VERSIONS): string {
  return APP_VERSIONS[platform];
}
