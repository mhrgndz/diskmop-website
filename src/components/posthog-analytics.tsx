"use client";

import { useEffect } from "react";
import { startPosthog } from "@/lib/posthog";

/** PostHog'u sayfa açıldıktan sonra, boşta başlatır (ayrıntı: lib/posthog.ts). */
export function PosthogAnalytics() {
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (typeof w.requestIdleCallback === "function") w.requestIdleCallback(startPosthog);
    else setTimeout(startPosthog, 1500);
  }, []);
  return null;
}
