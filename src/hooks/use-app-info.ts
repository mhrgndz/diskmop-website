'use client';

import { useState, useEffect } from 'react';

interface AppInfo {
  version: string;
  downloadCounts: { windows: number; mac: number; total: number };
  assets: Record<string, { size: number }>;
}

const CACHE_KEY = 'diskmop-app-info';
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
    fetch('https://api.diskmop.com/api/latest-version')
      .then((r) => r.json())
      .then((data) => {
        const parsed: AppInfo = {
          version: data.version || '',
          downloadCounts: data.downloadCounts || { windows: 0, mac: 0, total: 0 },
          assets: data.assets || {},
        };
        setInfo(parsed);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: parsed, ts: Date.now() }));
        } catch {}
      })
      .catch(() => {});
  }, []);

  const getSize = (pattern: string): string => {
    if (!info?.assets) return '';
    const entry = Object.entries(info.assets).find(([name]) => name.includes(pattern));
    if (!entry) return '';
    const mb = entry[1].size / (1024 * 1024);
    return `~${Math.round(mb)} MB`;
  };

  return {
    version: info?.version || '',
    downloads: info?.downloadCounts || { windows: 0, mac: 0, total: 0 },
    windowsSize: getSize('DiskMop-Setup-'),
    macSize: getSize('.dmg'),
  };
}
