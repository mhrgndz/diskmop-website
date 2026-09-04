/**
 * Uygulama sürümlerinin TEK doğru kaynağı.
 *
 * Neden gerekli: sürüm bilgisi eskiden yalnızca tarayıcıda, `/api/latest-version`
 * çağrısıyla geliyordu. Sunucunun ürettiği HTML'de sabit "v1.0.0" yedeği vardı
 * ve JavaScript çalıştırmayan her okuyucu — Google'ın ilk taraması, ChatGPT,
 * Perplexity, paylaşım önizlemeleri — ürünü İLK SÜRÜMÜNDE sanıyordu.
 *
 * Buradaki değerler sunucuda basılır; canlı API yanıtı gelirse Windows sürümünü
 * günceller. Yeni sürüm çıktığında BURASI da güncellenmeli.
 */
export const APP_VERSIONS = {
  windows: '1.0.17',
  mac: '1.0.19',
  android: '1.0.7',
} as const;

/** Şema ve metinlerde kullanılan "güncel sürüm". */
export const LATEST_VERSION = APP_VERSIONS.windows;

/** İlk genel sürümün tarihi — olgunluk sinyali. */
export const FIRST_RELEASE_DATE = '2026-05-15';

/** Güncel sürümün yayın tarihi. */
export const LATEST_RELEASE_DATE = '2026-09-04';

export const RELEASE_NOTES_URL = 'https://github.com/mhrgndz/diskmop-releases/releases';

export function versionFor(platform: 'windows' | 'mac' | 'android'): string {
  return APP_VERSIONS[platform];
}
