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
          <span className="click-hint-ripple absolute rounded-full" />
          <svg viewBox="0 0 32 32" className="relative h-8 w-8 drop-shadow-md">
            <path
              d="M11.5 3.5c1.4 0 2.5 1.1 2.5 2.5v8.2l.6-.1c1-.2 2 .4 2.3 1.4l.1.3.4-.1c1-.2 2 .4 2.3 1.3l.1.3.5-.1c1.1-.1 2.1.6 2.3 1.7l.9 4.3c.4 2-.2 4-1.6 5.4l-1 1c-.8.8-1.9 1.3-3 1.3h-5.2c-1.4 0-2.7-.6-3.5-1.7l-4.7-6.1c-.7-.9-.6-2.2.3-2.9.8-.7 2-.6 2.8.1l1.4 1.3V6c0-1.4 1.1-2.5 2.5-2.5Z"
              fill="#ffffff"
              stroke="#0f172a"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M14 15v5M17.4 16.4v4.2M20.8 18.2v3"
              stroke="#0f172a"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </span>
  );
}
