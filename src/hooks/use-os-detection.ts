'use client';

import { useState, useEffect } from 'react';

export type OSType = 'windows' | 'mac' | 'linux' | 'unknown';

export function useOSDetection(): OSType {
  const [os, setOS] = useState<OSType>('unknown');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const platform = navigator.platform?.toLowerCase() || '';

    if (ua.includes('win') || platform.includes('win')) {
      setOS('windows');
    } else if (
      ua.includes('mac') ||
      platform.includes('mac') ||
      ua.includes('iphone') ||
      ua.includes('ipad')
    ) {
      setOS('mac');
    } else if (ua.includes('linux')) {
      setOS('linux');
    }
  }, []);

  return os;
}
