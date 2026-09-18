'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ShowcaseVideoProps {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
}

/**
 * Tanıtım bölümündeki "GIF gibi" kısa video: sessiz, döngülü, kendiliğinden
 * oynar — ama yalnız ekrandayken. Ekrandan çıkınca durur, böylece aşağıda
 * duran sekmeler bant genişliği ve pil harcamaz.
 *
 * `preload="none"`: video, bölüm görünene kadar hiç indirilmez; o ana kadar
 * yalnız kapak (WebP) gösterilir. "Hareketi azalt" tercihi olan ziyaretçiye
 * video kendiliğinden oynatılmaz, kapak ve oynatma düğmesi gösterilir.
 */
export function ShowcaseVideo({ src, poster, label, width, height }: ShowcaseVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || reduceMotion) return;
    // React `muted` özniteliğini DOM'a her zaman yansıtmıyor; otomatik oynatma
    // politikaları sessizliği özellikten okur.
    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          video.play().catch(() => {
            // Tarayıcı otomatik oynatmayı reddederse kapak görünür kalır.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, reduceMotion]);

  if (failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={label} width={width} height={height} className="w-full h-auto" />;
  }

  return (
    <video
      ref={ref}
      key={src}
      src={src}
      poster={poster}
      width={width}
      height={height}
      aria-label={label}
      className="w-full h-auto block bg-muted"
      muted
      loop
      playsInline
      preload="none"
      controls={!!reduceMotion}
      onError={() => setFailed(true)}
    />
  );
}
