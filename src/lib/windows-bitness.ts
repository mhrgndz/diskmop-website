/**
 * Ziyaretçinin Windows'unun 32 mi 64 bit mi olduğunu bulur ve doğru kurucuyu seçer.
 *
 * Neden User-Agent tek başına yetmez: Chrome ve Edge (Chromium ≥ 101) User-Agent'ı dondurdu, 32 bit Windows'ta bile
 * "Win64; x64" yazıyor. Bu yüzden önce tarayıcının `userAgentData` bilgisine (bitness) bakılır; yoksa (Firefox)
 * User-Agent'taki işarete: "Win64", "x64", "WOW64" (32 bit tarayıcı, 64 bit Windows), "ARM64".
 * Emin olunamayan her durumda 64 bit döner: kurucu 32 bit Windows'ta bile açıkça uyarır, 64 bit PC'ye 32 bit
 * kurucu önermek ise gereksiz yavaş ve eski bir yapıya yönlendirmek olur.
 */

export type WindowsBitness = "x64" | "x86";

/** `navigator.userAgentData.getHighEntropyValues(["architecture","bitness"])` yanıtından kullandığımız alanlar. */
export interface HighEntropyHints {
  architecture?: string;
  bitness?: string;
}

/** Yalnızca 32 bit olduğuna dair KESİN bir işaret varsa "x86"; yoksa "x64". */
export function detectWindowsBitness(
  userAgent: string,
  hints?: HighEntropyHints | null,
): WindowsBitness {
  if (!/Windows NT/i.test(userAgent)) return "x64";

  // Chromium: işlemcinin/işletim sisteminin gerçek bit sayısı (32 bit tarayıcı 64 bit Windows'ta "64" der)
  if (hints?.bitness) {
    return hints.bitness === "32" && hints.architecture !== "arm" ? "x86" : "x64";
  }

  // userAgentData yok (Firefox, eski tarayıcılar): User-Agent'taki 64 bit işaretleri
  return /Win64|x64|WOW64|amd64|ARM64/i.test(userAgent) ? "x64" : "x86";
}

/** Kurucunun adresi ve ölçüm adı. Adresler API'de: `/download/windows` (64 bit), `/download/windows-x86` (32 bit). */
export function windowsDownload(bitness: WindowsBitness): {
  href: string;
  platform: "windows" | "windows-x86";
  /** Ziyaretçinin gördüğü ad: hangi sürümü indireceği açıkça yazılır. */
  label: string;
  bits: "64-bit" | "32-bit";
} {
  return bitness === "x86"
    ? {
        href: "https://api.diskmop.com/download/windows-x86",
        platform: "windows-x86",
        label: "Windows 32-bit",
        bits: "32-bit",
      }
    : {
        href: "https://api.diskmop.com/download/windows",
        platform: "windows",
        label: "Windows 64-bit",
        bits: "64-bit",
      };
}
