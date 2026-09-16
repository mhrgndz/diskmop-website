'use client';

import { useState, useEffect } from 'react';

export type OSType = 'windows' | 'mac' | 'linux' | 'android' | 'ios' | 'unknown';

export function useOSDetection(): OSType {
  const [os, setOS] = useState<OSType>('unknown');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const platform = navigator.platform?.toLowerCase() || '';

    // iPadOS 13+ Safari kendini "Macintosh" olarak tanıtır; onu gerçek Mac'ten
    // yalnızca dokunmatik nokta sayısı ayırır. iPhone uygulaması iPad'e de
    // kurulabildiği için iPad ziyaretçisine macOS değil iPhone kartı önerilir.
    const iPadAsMac = ua.includes('mac') && navigator.maxTouchPoints > 1;

    // Android UA also contains "linux", so it must be checked first
    if (ua.includes('android')) {
      setOS('android');
    } else if (
      ua.includes('iphone') ||
      ua.includes('ipad') ||
      ua.includes('ipod') ||
      iPadAsMac
    ) {
      setOS('ios');
    } else if (ua.includes('win') || platform.includes('win')) {
      setOS('windows');
    } else if (ua.includes('mac') || platform.includes('mac')) {
      setOS('mac');
    } else if (ua.includes('linux')) {
      setOS('linux');
    }
  }, []);

  return os;
}
