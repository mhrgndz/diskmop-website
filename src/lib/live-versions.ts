import { APP_VERSIONS, IOS_APP_ID, LATEST_RELEASE_DATE } from "@/lib/app-version";

/**
 * Sürümlerin CANLI kaynağı (yalnız sunucu): sabit sayılar yalnız yedek.
 *
 *  - Windows: GitHub yayınındaki kurulum dosyasının adı (`DiskMop-Setup-1.1.1.exe`). Etiket
 *    (v1.1.1) DEĞİL: yalnız-Mac bir yayın etiketi Windows sürümü sanılmasın.
 *  - macOS: aynı yayındaki DMG adı (`DiskMop-1.0.35-arm64.dmg`).
 *  - iPhone: Apple'ın herkese açık arama ucu (App Store'da YAYINDA olan sürüm).
 *  - Tarih: yayının GitHub'daki yayın tarihi.
 *
 * Veri kendi API'mizden (`/api/latest-version`, GitHub'ı önbellekler) gelir. Sayfalar saatlik
 * yeniden üretilir (`revalidate`), yani yeni sürüm çıkınca site kendiliğinden güncellenir;
 * kaynaklara ulaşılamazsa sabit yedek basılır, sayfa asla bozulmaz.
 */
export const VERSIONS_REVALIDATE_SECONDS = 3600;

export interface LiveVersions {
  windows: string;
  mac: string;
  ios: string;
  /** YYYY-MM-DD */
  releaseDate: string;
  /** false: kaynaklara ulaşılamadı, sabit yedek basıldı. */
  live: boolean;
}

const FALLBACK: LiveVersions = {
  windows: APP_VERSIONS.windows,
  mac: APP_VERSIONS.mac,
  ios: APP_VERSIONS.ios,
  releaseDate: LATEST_RELEASE_DATE,
  live: false,
};

async function getJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    next: { revalidate: VERSIONS_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

export async function getLiveVersions(): Promise<LiveVersions> {
  const [api, store] = await Promise.allSettled([
    getJson("https://api.diskmop.com/api/latest-version"),
    getJson(`https://itunes.apple.com/lookup?id=${IOS_APP_ID}`),
  ]);

  const out: LiveVersions = { ...FALLBACK };
  let anyLive = false;

  if (api.status === "fulfilled") {
    const data = api.value as {
      published?: string;
      assets?: Record<string, unknown>;
    };
    const names = Object.keys(data.assets ?? {});
    const win = names
      .map((n) => n.match(/^DiskMop-Setup-(\d+\.\d+\.\d+)\.exe$/)?.[1])
      .find(Boolean);
    const mac = names
      .map((n) => n.match(/^DiskMop-(\d+\.\d+\.\d+)-(?:arm64|x64)\.dmg$/)?.[1])
      .find(Boolean);
    if (win) {
      out.windows = win;
      anyLive = true;
    }
    if (mac) {
      out.mac = mac;
      anyLive = true;
    }
    const day = data.published?.slice(0, 10);
    if (day && /^\d{4}-\d{2}-\d{2}$/.test(day)) out.releaseDate = day;
  }

  if (store.status === "fulfilled") {
    const version = (store.value as { results?: { version?: string }[] })
      ?.results?.[0]?.version;
    if (version) {
      out.ios = version;
      anyLive = true;
    }
  }

  out.live = anyLive;
  return out;
}
