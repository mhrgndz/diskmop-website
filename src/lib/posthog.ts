/**
 * PostHog (AB bulutu, uygulamayla aynı proje) — site ziyareti ve dönüşüm olayları.
 *
 * ÇEREZSİZ: `persistence: "memory"`, tarayıcıya hiçbir şey yazılmaz; kimlik sayfa
 * açık kaldığı sürece bellekte yaşar (site içi geçişler aynı ziyarette sayılır,
 * yeni sekme yeni ziyaretçidir). Anonim ziyaretçi için kişi profili açılmaz.
 * Kütüphane ilk boşta anında yüklenir: sayfanın açılışını yavaşlatmaz.
 * Yönetim paneli (/admin, /myadmin) ölçülmez.
 *
 * Uygulama olaylarından ayırmak için panoda `$lib = web` süzgeci kullanılır
 * (uygulama: diskmop-windows, kurucu: diskmop-installer, API: diskmop-api).
 */

type PostHogLike = { capture: (name: string, props?: Record<string, unknown>) => void };

export const POSTHOG_KEY = "phc_zKBXTKM4NhJyJQ74GVzKB2XhcZq4DhHE2SQjYshyAQY2";
export const POSTHOG_HOST = "https://eu.i.posthog.com";

let client: PostHogLike | null = null;
let loading = false;
const waiting: Array<[string, Record<string, unknown>]> = [];

function excluded(): boolean {
  const p = window.location.pathname;
  return p.startsWith("/admin") || p.startsWith("/myadmin");
}

/** Bir kez çağrılır (kök yerleşim). Ölçüm ASLA sayfayı bozmaz: hata yutulur. */
export function startPosthog(): void {
  if (typeof window === "undefined" || client || loading || excluded()) return;
  loading = true;
  import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        persistence: "memory",
        person_profiles: "identified_only",
        capture_pageview: "history_change",
        capture_pageleave: true,
        autocapture: false,
        disable_session_recording: true,
        disable_surveys: true,
      });
      client = posthog;
      for (const [name, props] of waiting.splice(0)) posthog.capture(name, props);
    })
    .catch(() => {
      loading = false;
    });
}

/** GA olaylarının aynısı PostHog'a da gider; kütüphane henüz yüklenmediyse sıraya girer. */
export function capturePosthog(name: string, props: Record<string, unknown>): void {
  if (typeof window === "undefined" || excluded()) return;
  try {
    if (client) client.capture(name, props);
    else if (waiting.length < 50) waiting.push([name, props]);
  } catch {
    // yut
  }
}
