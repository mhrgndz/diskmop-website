"use client";

import { useState, useEffect } from "react";
import { IOS_APP_ID } from "@/lib/app-version";

interface AppInfo {
  version: string;
  downloadCounts: { windows: number; mac: number; total: number };
  assets: Record<string, { size: number }>;
  macVersion: string;
  iosVersion: string;
}

const CACHE_KEY = "diskmop-app-info-v2";
// Apple'ın herkese açık arama ucu: App Store'da YAYINDA olan sürümü verir (incelemedeki sürümü değil), CORS açık.
const IOS_LOOKUP_URL = `https://itunes.apple.com/lookup?id=${IOS_APP_ID}`;
const CACHE_TTL = 5 * 60 * 1000;

function getCached(): AppInfo | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

export function useAppInfo() {
  const [info, setInfo] = useState<AppInfo | null>(getCached);

  useEffect(() => {
    if (info) return;
    const fromApi = fetch("https://api.diskmop.com/api/latest-version").then(
      (r) => r.json(),
    );
    const fromStore = fetch(IOS_LOOKUP_URL).then((r) => r.json());
    Promise.allSettled([fromApi, fromStore]).then(([api, store]) => {
      if (api.status !== "fulfilled") return;
      const data = api.value;
      const assets: AppInfo["assets"] = data.assets || {};
      // macOS sürümü DMG adından okunur (DiskMop-1.0.31-arm64.dmg): etiket (v1.0.33) Windows'a aittir.
      const macAsset = Object.keys(assets).find((n) => n.endsWith(".dmg"));
      const parsed: AppInfo = {
        version: data.version || "",
        downloadCounts: data.downloadCounts || {
          windows: 0,
          mac: 0,
          total: 0,
        },
        assets,
        macVersion: macAsset?.match(/(\d+\.\d+\.\d+)/)?.[1] ?? "",
        iosVersion:
          store.status === "fulfilled"
            ? (store.value?.results?.[0]?.version ?? "")
            : "",
      };
      setInfo(parsed);
      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: parsed, ts: Date.now() }),
        );
      } catch {}
    });
  }, []);

  const getSize = (pattern: string): string => {
    if (!info?.assets) return "";
    const entry = Object.entries(info.assets).find(([name]) =>
      name.includes(pattern),
    );
    if (!entry) return "";
    const mb = entry[1].size / (1024 * 1024);
    return `~${Math.round(mb)} MB`;
  };

  return {
    version: info?.version || "",
    macVersion: info?.macVersion || "",
    iosVersion: info?.iosVersion || "",
    downloads: info?.downloadCounts || { windows: 0, mac: 0, total: 0 },
    windowsSize: getSize("DiskMop-Setup-"),
    macSize: getSize(".dmg"),
  };
}
