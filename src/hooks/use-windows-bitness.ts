"use client";

import { useEffect, useState } from "react";

import {
  detectWindowsBitness,
  type HighEntropyHints,
  type WindowsBitness,
} from "@/lib/windows-bitness";

interface UserAgentDataLike {
  getHighEntropyValues?: (hints: string[]) => Promise<HighEntropyHints>;
}

/**
 * Ziyaretçinin Windows'unun bit sayısı. Sunucuda ve ilk çizimde "x64" döner (JavaScript çalıştırmayan okuyucular
 * ve hidrasyon uyuşmazlığı olmaması için), tarayıcıda bulununca güncellenir. Windows olmayan ziyaretçide de "x64".
 */
export function useWindowsBitness(): WindowsBitness {
  const [bitness, setBitness] = useState<WindowsBitness>("x64");

  useEffect(() => {
    let cancelled = false;
    const ua = navigator.userAgent;
    const data = (navigator as Navigator & { userAgentData?: UserAgentDataLike })
      .userAgentData;

    const apply = (hints?: HighEntropyHints | null) => {
      if (!cancelled) setBitness(detectWindowsBitness(ua, hints));
    };

    if (data?.getHighEntropyValues) {
      data
        .getHighEntropyValues(["architecture", "bitness"])
        .then(apply)
        .catch(() => apply(null));
    } else {
      apply(null);
    }
    return () => {
      cancelled = true;
    };
  }, []);

  return bitness;
}
