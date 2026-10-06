/**
 * Dönüşüm olayları — ziyaretçinin indirmeye/satın almaya dönüşüp dönüşmediğini ölçer.
 *
 * NEDEN VAR: indirme bağlantıları `api.diskmop.com` alt alanına gider. GA4'ün
 * otomatik "giden bağlantı" ölçümü kendi alan adımızın alt alanlarını saymaz —
 * bu yüzden 28 günde 1.300 ziyaretçiye karşılık raporda SIFIR indirme görünüyordu
 * (2026-09-21 tespiti). Huninin ilk basamağı ölçülmediği sürece hangi sayfanın,
 * hangi yerleşimin ya da hangi blog yazısının iş yaptığı bilinemez.
 *
 * OLAY ADI NEDEN PLATFORMA GÖRE AYRI: GA4'te olay ADI hiçbir kurulum olmadan
 * raporlanabilir; olay PARAMETRESİ ise ancak "özel boyut" olarak kaydedildikten
 * sonra sorgulanabilir. Raporları çeken servis hesabı mülkte yalnız Görüntüleyici
 * olduğu için özel boyut kaydını biz yapamayız. Platform kırılımı ada gömülür,
 * böylece `node ga4.mjs huni` ilk günden çalışır. `location` parametresi de
 * gönderilir: GA4 arayüzünden özel boyut olarak kaydedilirse yerleşim kırılımı
 * (hero / blog / hesaplayıcı ...) da açılır.
 */

export type DownloadPlatform =
  "windows" | "mac" | "mac-intel" | "android" | "ios";

/** CTA'nın sayfadaki yeri — aynı platform birden çok yerden indirilebiliyor. */
export type CtaLocation =
  | "hero"
  | "nav"
  | "nav_mobile"
  | "platform_cards"
  | "blog_inline"
  | "blog_bottom"
  | "blog_sticky"
  | "calculator"
  | "pricing"
  | "success";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Olayı GA4'e yollar. Ölçüm ASLA kullanıcının akışını bozmaz: gtag yüklenmemiş,
 * reklam engelleyici kesmiş ya da çağrı patlamış olsa bile sessizce geçilir.
 */
function sendEvent(name: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
      return;
    }
    // gtag.js henüz yüklenmediyse kuyruğa bırak: yüklenince işlenir.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", name, params]);
  } catch {
    // yut
  }
}

/** Olay adında kullanılabilecek biçim: `mac-intel` → `mac_intel`. */
const EVENT_SUFFIX: Record<DownloadPlatform, string> = {
  windows: "windows",
  mac: "mac",
  "mac-intel": "mac_intel",
  android: "android",
  ios: "ios",
};

/**
 * İndirme/mağaza tıklaması. Android ve iPhone mağazaya gider — o da indirme
 * niyetidir, aynı huniye yazılır.
 */
export function trackDownload(
  platform: DownloadPlatform,
  location: CtaLocation,
): void {
  sendEvent(`download_${EVENT_SUFFIX[platform]}`, { platform, location });
}

/** Polar checkout'a tıklama — huninin satın alma basamağı. */
export function trackCheckout(location: CtaLocation): void {
  sendEvent("checkout_click", { location });
}
