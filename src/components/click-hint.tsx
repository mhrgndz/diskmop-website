"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * İndirme düğmesinin üzerine "tıkla" diyen animasyonlu el.
 *
 * Düğme ekrana girince el köşeden gelir, düğmeye basar (düğme de içeri göçer,
 * parmak ucundan dalga yayılır) ve çekilir. Rahatsız etmesin diye:
 * - her görünüşte yalnız CYCLES tur oynar, sayfa başına en fazla MAX_RUNS kez;
 * - ziyaretçi düğmeye gelir, odaklar ya da tıklarsa bir daha oynamaz;
 * - "hareketi azalt" tercihi açıksa hiç görünmez.
 */
const CYCLE_MS = 2400;
const CYCLES = 2;
const MAX_RUNS = 3;

interface ClickHintProps {
  children: ReactNode;
  className?: string;
  /** Görünürlük beklemeden hemen oyna (ör. sonradan beliren yapışkan çubuk). */
  immediate?: boolean;
  /** Animasyona başlamadan önce bekleme (ms). */
  delay?: number;
}

export function ClickHint({
  children,
  className,
  immediate = false,
  delay = 400,
}: ClickHintProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [running, setRunning] = useState(false);
  const runs = useRef(0);
  const stopped = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let startTimer: ReturnType<typeof setTimeout> | undefined;
    let endTimer: ReturnType<typeof setTimeout> | undefined;

    const play = () => {
      if (stopped.current || runs.current >= MAX_RUNS) return;
      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        if (stopped.current) return;
        runs.current += 1;
        setRunning(true);
        endTimer = setTimeout(() => setRunning(false), CYCLE_MS * CYCLES);
      }, delay);
    };

    const halt = () => {
      stopped.current = true;
      clearTimeout(startTimer);
      clearTimeout(endTimer);
      setRunning(false);
    };
    el.addEventListener("pointerenter", halt);
    el.addEventListener("focusin", halt);
    el.addEventListener("click", halt);

    let observer: IntersectionObserver | undefined;
    if (immediate) {
      play();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) play();
          else clearTimeout(startTimer);
        },
        { threshold: 0.9 }
      );
      observer.observe(el);
    }

    return () => {
      observer?.disconnect();
      clearTimeout(startTimer);
      clearTimeout(endTimer);
      el.removeEventListener("pointerenter", halt);
      el.removeEventListener("focusin", halt);
      el.removeEventListener("click", halt);
    };
  }, [immediate, delay]);

  return (
    <span
      ref={ref}
      className={cn("click-hint relative inline-flex", running && "click-hint-run", className)}
    >
      {children}
      {running && (
        <span aria-hidden className="click-hint-hand pointer-events-none absolute z-10">
          {/* Bağlantı imleci eli; parmak ucu (12.5, 2.5), basınca uçta üç çizgi belirir */}
          <svg viewBox="0 0 32 32" className="click-hint-svg block h-[34px] w-[34px] overflow-visible">
            <g
              className="click-hint-rays"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M12.5 -4.5v-3.5" />
              <path d="M6.5 -1.5l-2.5-2.5" />
              <path d="M18.5 -1.5l2.5-2.5" />
            </g>
            <path
              d="M10.5 4.5a2 2 0 0 1 4 0v8a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v6.5c0 4.5-3 8-8 8h-3.5c-2.6 0-4.5-1.2-6-3.2l-4.4-5.9a2.1 2.1 0 0 1 3.1-2.8l2.8 2.4z"
              fill="#ffffff"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 12.5v4.5M18.5 13.5v4M22.5 14.5v3.5"
              stroke="#111111"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </span>
  );
}
