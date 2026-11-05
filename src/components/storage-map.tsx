"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

/**
 * Ana sayfa kahramanının altındaki etkileşimli disk kullanım çubuğu.
 *
 * Bir "örnek disk" kategorilere ayrılır; temizlenebilir bir kategoriye
 * dokunup "Temizle" denince o kategorinin genişliği boş alana (marka mavisi)
 * geçer. Sistem ve kullanıcı dosyaları korumalıdır, seçilemez; bu, uygulamadaki
 * sistem dosyası korumasını anlatır.
 *
 * Tüm sayılar ÖRNEKTİR (gerçek bir taramadan gelmez); bileşen bunu görünür bir
 * dipnotla belirtir. Metinler messages.storageMap altında, 18 dilde.
 */

const TOTAL_GB = 512;

type CategoryId = "sys" | "mine" | "cache" | "dup" | "dev" | "dl";

interface Category {
  id: CategoryId;
  gb: number;
  /** Tailwind arka plan sınıfı; çubuk dilimi ve gösterge noktası aynısını kullanır. */
  swatch: string;
  /** Korumalı kategori temizlenemez. */
  locked: boolean;
}

const CATEGORIES: Category[] = [
  { id: "sys", gb: 68, swatch: "bg-slate-500", locked: true },
  {
    id: "mine",
    gb: 210,
    swatch: "bg-slate-800 dark:bg-slate-300",
    locked: true,
  },
  { id: "cache", gb: 31, swatch: "bg-amber-500", locked: false },
  { id: "dup", gb: 26, swatch: "bg-violet-500", locked: false },
  { id: "dev", gb: 24, swatch: "bg-teal-500", locked: false },
  { id: "dl", gb: 18, swatch: "bg-rose-500", locked: false },
];

const BASE_FREE_GB =
  TOTAL_GB - CATEGORIES.reduce((sum, category) => sum + category.gb, 0);

export function StorageMap() {
  const t = useTranslations("storageMap");
  const locale = useLocale();
  const [selected, setSelected] = useState<CategoryId>("cache");
  const [cleared, setCleared] = useState<Partial<Record<CategoryId, boolean>>>(
    {},
  );

  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });

  const freedGb = CATEGORIES.reduce(
    (sum, category) => sum + (cleared[category.id] ? category.gb : 0),
    0,
  );
  const freeGb = BASE_FREE_GB + freedGb;

  const active = CATEGORIES.find((category) => category.id === selected)!;
  const activeCleared = Boolean(cleared[active.id]);

  const toggleActive = () => {
    setCleared((current) => ({ ...current, [active.id]: !current[active.id] }));
  };

  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("eyebrow", { total: TOTAL_GB })}
          </p>
          <p className="mt-1 text-4xl sm:text-5xl font-bold tracking-tight tabular-nums text-foreground">
            {number.format(freeGb)}{" "}
            <span className="text-lg sm:text-xl font-semibold text-muted-foreground tracking-normal">
              {t("freeLabel")}
            </span>
          </p>
        </div>
        <p
          className="text-sm font-medium text-muted-foreground tabular-nums"
          aria-live="polite"
        >
          {freedGb > 0
            ? t("freedLabel", { gb: number.format(freedGb) })
            : t("hint")}
        </p>
      </div>

      {/* Disk kullanım çubuğu */}
      <div
        role="group"
        aria-label={t("groupLabel")}
        className="flex h-16 sm:h-[72px] overflow-hidden rounded-xl bg-background"
      >
        {CATEGORIES.map((category) => {
          const isCleared = Boolean(cleared[category.id]);
          const isSelected = category.id === selected;
          const name = t(`cats.${category.id}.name`);
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelected(category.id)}
              aria-label={`${name}, ${category.gb} GB${
                isCleared ? `, ${t("cleaned")}` : ""
              }`}
              aria-pressed={isSelected}
              style={{ flexGrow: isCleared ? 0 : category.gb }}
              className={cn(
                "min-w-0 basis-0 overflow-hidden border-0 p-0 cursor-pointer",
                "transition-[flex-grow] duration-500 ease-out",
                "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-foreground",
                category.swatch,
                isSelected
                  ? "shadow-[inset_0_0_0_4px_var(--background),inset_0_0_0_7px_var(--foreground)]"
                  : "shadow-[inset_-3px_0_0_var(--background)]",
              )}
            />
          );
        })}
        <div
          role="img"
          aria-label={`${number.format(freeGb)} ${t("freeLabel")}`}
          style={{ flexGrow: freeGb }}
          className="min-w-0 basis-0 bg-brand-600 transition-[flex-grow] duration-500 ease-out"
        />
      </div>

      {/* Gösterge */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {CATEGORIES.map((category) => {
          const isCleared = Boolean(cleared[category.id]);
          const isSelected = category.id === selected;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelected(category.id)}
              aria-pressed={isSelected}
              className={cn(
                "flex min-h-12 items-center gap-2.5 rounded-lg border bg-card px-3 py-2 text-left transition-colors",
                "hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
                isSelected ? "border-foreground" : "border-border",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-3 w-3 shrink-0 rounded-[3px]",
                  category.swatch,
                )}
              />
              <span className="min-w-0 flex-1 text-sm font-semibold leading-tight text-foreground">
                {t(`cats.${category.id}.name`)}
              </span>
              <span className="text-sm tabular-nums text-muted-foreground">
                {isCleared ? 0 : category.gb}
              </span>
            </button>
          );
        })}
      </div>

      {/* Seçili kategorinin ayrıntısı */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-5 sm:p-8">
        <div className="flex flex-wrap items-start gap-x-12 gap-y-6">
          <div className="min-w-[220px] flex-1">
            <p className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground">
              <span
                aria-hidden="true"
                className={cn("h-3 w-3 rounded-[3px]", active.swatch)}
              />
              {active.locked ? t("kindLocked") : t("kindClean")}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {t(`cats.${active.id}.name`)}
            </h3>
            <p className="mt-2 text-5xl sm:text-6xl font-bold tracking-tight tabular-nums text-foreground">
              {activeCleared ? 0 : active.gb}
              <span className="ml-1.5 text-xl font-semibold text-muted-foreground tracking-normal">
                GB
              </span>
            </p>
          </div>
          <div className="min-w-[260px] flex-[2]">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {t(`cats.${active.id}.text`)}
            </p>
            {!active.locked && (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={toggleActive}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800"
                >
                  {activeCleared
                    ? t("btnUndo")
                    : t("btnClean", { gb: active.gb })}
                </button>
                <span className="text-sm text-muted-foreground">
                  {t("note")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{t("disclaimer")}</p>
    </div>
  );
}
