/**
 * GA4 ziyaretçi kimliği — API'nin sunucudan yolladığı olayları (indirme,
 * satın alma) bu tarayıcının GA oturumuna bağlamak için.
 *
 * NEDEN: indirme `api.diskmop.com`'da, ödeme Polar'da bitiyor; tarayıcıdaki
 * gtag olayı ya reklam engelleyiciye takılıyor ya da hiç atılamıyor (2026-10:
 * GA4 indirmelerin ~%5'ini görüyordu). API olayı kendisi yollar; `_ga`
 * çerezindeki kimlik iletilirse olay, ziyaretçinin geldiği kaynak ve giriş
 * sayfasıyla birlikte raporlanır. Kimlik yoksa olay yine sayılır, yalnız
 * kaynağı "(not set)" kalır.
 *
 * Yalnız GA'nın zaten koyduğu çerezler okunur; yeni çerez yazılmaz.
 */

export type GaIdentity = { clientId?: string; sessionId?: string };

/** `_ga` = "GA1.1.<rastgele>.<ilk ziyaret>" → "<rastgele>.<ilk ziyaret>" */
export function clientIdFromCookie(value: string | undefined): string | undefined {
  return value?.match(/^GA\d\.\d+\.(\d{1,20}\.\d{1,20})$/)?.[1];
}

/**
 * `_ga_<ölçüm kimliği>` iki biçimde gelir:
 * eski "GS1.1.<oturum>.<sayaç>.…", yeni "GS2.1.s<oturum>$o<sayaç>$…".
 */
export function sessionIdFromCookie(value: string | undefined): string | undefined {
  if (!value) return undefined;
  return (
    value.match(/^GS2\.\d+\.s(\d{1,20})/)?.[1] ??
    value.match(/^GS1\.\d+\.(\d{1,20})\./)?.[1]
  );
}

/** Çerez listesinden kimlik; sitede tek GA mülkü olduğu için ilk `_ga_*` oturum çerezidir. */
export function gaIdentityFromCookies(
  cookies: ReadonlyArray<{ name: string; value: string }>,
): GaIdentity {
  const clientId = clientIdFromCookie(cookies.find((c) => c.name === "_ga")?.value);
  const sessionId = sessionIdFromCookie(
    cookies.find((c) => c.name.startsWith("_ga_"))?.value,
  );
  return { clientId, sessionId };
}

/** Tarayıcıda `document.cookie`'den okur. */
export function readGaIdentity(): GaIdentity {
  if (typeof document === "undefined") return {};
  const cookies = document.cookie
    .split(";")
    .map((part) => {
      const at = part.indexOf("=");
      return at < 0
        ? { name: part.trim(), value: "" }
        : { name: part.slice(0, at).trim(), value: decodeURIComponent(part.slice(at + 1).trim()) };
    });
  return gaIdentityFromCookies(cookies);
}
