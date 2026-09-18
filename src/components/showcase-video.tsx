'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Tanıtım videoları uygulamadan demo veriyle, 8 dilde kaydedildi (1280×688).
// Demo modu: diskmop-app src/main/demo (DISKMOP_DEMO=1 npm run dev).
// Aynı dosyaları hem özellikler ızgarası hem tanıtım sekmeleri kullanır.
export const SHOWCASE_VIDEO_W = 1280;
export const SHOWCASE_VIDEO_H = 688;
export const showcaseVideoSrc = (id: string, locale: string) => `/videos/${id}/${locale}.mp4`;
export const showcasePosterSrc = (id: string, locale: string) => `/videos/${id}/${locale}.webp`;

interface ShowcaseVideoProps {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
  /**
   * Video öğesi (ve kapağı) ancak ekrana yaklaşınca oluşturulur. Özellikler
   * ızgarası gibi birçok videonun alt alta durduğu yerlerde kullanılır:
   * `<video poster>` kapağı hemen indirdiği için 21 kapak sayfa açılırken
   * birden inerdi.
   */
  lazy?: boolean;
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
export function ShowcaseVideo({ src, poster, label, width, height, lazy = false }: ShowcaseVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const [near, setNear] = useState(!lazy);

  useEffect(() => {
    if (near) return;
    const el = placeholderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [near]);

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
  }, [src, reduceMotion, near]);

  if (!near) {
    return (
      <div
        ref={placeholderRef}
        aria-hidden
        className="w-full bg-muted"
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    );
  }

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
