'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * D — Plaka ve döküm. A ile B'nin birleşimi, ama yan yana yapıştırılmış iki
 * pano değil: halkadaki her dilim ARTIK BİR DOSYA. Kol bir dilimi bitirdiği an
 * o dosyanın adı sağdaki döküme düşer. Halka bütünü, döküm ayrıntıyı verir ve
 * ikisini aynı olay tetikler — bu yüzden ayrı bir açıklama listesine gerek kalmaz.
 */

const RADIUS = 72;
const CIRC = 2 * Math.PI * RADIUS;

const JUNK_FROM = 130;
const JUNK_TO = 259.1;

interface JunkFile {
  name: string;
  gb: number;
  color: string;
  from: number;
  to: number;
}

const RAW: Array<Omit<JunkFile, 'from' | 'to'>> = [
  { name: 'Temp\\chrome_cache', gb: 12, color: '#f59e0b' },
  { name: 'IMG_2841 (2).jpg', gb: 6, color: '#8b5cf6' },
  { name: 'node_modules.old', gb: 9, color: '#14b8a6' },
  { name: 'setup_v3.exe', gb: 4, color: '#f43f5e' },
  { name: 'Ekran Kaydı 12.mp4', gb: 8, color: '#8b5cf6' },
  { name: 'update.log', gb: 8, color: '#f59e0b' },
];

const TOTAL_GB = RAW.reduce((s, f) => s + f.gb, 0);

// Dosyalar çöp yayını GB'leriyle orantılı paylaşır.
const FILES: JunkFile[] = (() => {
  const perGb = (JUNK_TO - JUNK_FROM) / TOTAL_GB;
  let cursor = JUNK_FROM;
  return RAW.map((f) => {
    const from = cursor;
    cursor += f.gb * perGb;
    return { ...f, from, to: cursor };
  });
})();

const KEEP = { from: 0, to: JUNK_FROM, color: '#2563eb' };

const REFILL_MS = 500;
const SWEEP_MS = 6200;
const HOLD_MS = 2600;
const CYCLE_MS = SWEEP_MS + HOLD_MS;

const ROW_H = 42;

function arcDash(from: number, to: number) {
  const len = Math.max(0, ((to - from) / 360) * CIRC);
  return {
    strokeDasharray: `${len} ${CIRC - len}`,
    strokeDashoffset: -((from / 360) * CIRC),
  };
}

export function PlatterManifest() {
  const t = useTranslations('heroVisual');
  const reduceMotion = useReducedMotion();
  const [elapsed, setElapsed] = useState(reduceMotion ? SWEEP_MS : 0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      setElapsed(SWEEP_MS);
      return;
    }
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      setElapsed((now - start) % CYCLE_MS);
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [reduceMotion]);

  const arm = elapsed < SWEEP_MS ? (elapsed / SWEEP_MS) * 360 : 360;
  const sweeping = elapsed < SWEEP_MS;
  const refill = Math.min(1, elapsed / REFILL_MS);

  const consumedRatio = (f: JunkFile) => {
    if (arm <= f.from) return 0;
    if (arm >= f.to) return 1;
    return (arm - f.from) / (f.to - f.from);
  };

  const freed = FILES.reduce((sum, f) => sum + f.gb * consumedRatio(f), 0);

  return (
    <div className="w-full">
      <figure
        className="rounded-3xl border border-border bg-muted p-7 sm:p-9"
        aria-label={t('aria', { gb: TOTAL_GB })}
      >
        <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-center sm:gap-9">
          {/* Plaka */}
          <div className="relative w-[220px] shrink-0 lg:w-[248px]">
            <svg viewBox="0 0 200 200" className="w-full" role="presentation">
              <defs>
                <linearGradient
                  id="dm-arm-d"
                  gradientUnits="userSpaceOnUse"
                  x1="100"
                  y1="58"
                  x2="100"
                  y2="18"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              <g transform="rotate(-90 100 100)">
                <circle
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity={0.16}
                  strokeWidth="17"
                  className="text-muted-foreground"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke={KEEP.color}
                  strokeWidth="17"
                  {...arcDash(KEEP.from, KEEP.to)}
                />
                <g style={{ opacity: refill }}>
                  {FILES.map((f) => {
                    const from = f.from + consumedRatio(f) * (f.to - f.from);
                    if (from >= f.to - 0.05) return null;
                    return (
                      <circle
                        key={f.name}
                        cx="100"
                        cy="100"
                        r={RADIUS}
                        fill="none"
                        stroke={f.color}
                        strokeWidth="17"
                        {...arcDash(from, f.to)}
                      />
                    );
                  })}
                </g>
              </g>

              <circle
                cx="100"
                cy="100"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.22}
                strokeWidth="1"
                className="text-muted-foreground"
              />

              {!reduceMotion && sweeping && (
                <g transform={`rotate(${arm} 100 100)`}>
                  <line x1="100" y1="58" x2="100" y2="18" stroke="url(#dm-arm-d)" strokeWidth="2" />
                  <circle cx="100" cy="20" r="8" fill="#60a5fa" opacity="0.2" />
                  <circle cx="100" cy="20" r="3.5" fill="#3b82f6" />
                </g>
              )}
            </svg>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-baseline gap-1.5">
                <span className="text-5xl font-bold tabular-nums tracking-tight text-foreground lg:text-6xl">
                  {Math.round(freed)}
                </span>
                <span className="text-xl font-semibold text-muted-foreground">GB</span>
              </div>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {t('freed')}
              </span>
            </div>
          </div>

          {/* Döküm — kol bir dilimi bitirdikçe satır düşer */}
          <div className="w-full min-w-0 flex-1">
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              {t('cleaned')}
            </span>
            {/* Satırlar baştan durur, kol dilimi bitirince yanar. Böylece panel hep
                dolu görünür ve neyin sırada olduğu da okunur. */}
            <div className="mt-2 flex flex-col">
              {FILES.map((f) => {
                const done = consumedRatio(f) === 1;
                return (
                  <div
                    key={f.name}
                    className="flex items-center gap-2.5 transition-opacity duration-300 ease-out"
                    style={{ height: ROW_H, opacity: done ? 1 : 0.4 }}
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                      {done ? (
                        <Check className="h-4 w-4" style={{ color: f.color }} />
                      ) : (
                        <span
                          className="h-2 w-2 rounded-full border"
                          style={{ borderColor: f.color }}
                        />
                      )}
                    </span>
                    <span
                      className={`truncate font-mono text-[13px] ${
                        done ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {f.name}
                    </span>
                    <span className="ml-auto shrink-0 font-mono text-[13px] tabular-nums text-muted-foreground">
                      {f.gb} GB
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
