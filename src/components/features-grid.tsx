"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Sparkles,
  FolderOpen,
  FileSearch,
  LayoutGrid,
  Activity,
  ShieldCheck,
  Clock,
  Eraser,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface Area {
  /** messages: app.features.items.<id>.{title,description} — metinler Windows uygulamasının kendi dil dosyasından */
  id: string;
  icon: LucideIcon;
  /** İki araç (zamanlanmış temizlik, güvenli silme) turkuaz ikon kutusu alır. */
  tool?: boolean;
}

// Windows 1.1.0'daki altı bölüm ve iki araç. Uygulamada olmayan özellik buraya yazılmaz.
const areas: Area[] = [
  { id: "clean", icon: Sparkles },
  { id: "appdata", icon: FolderOpen },
  { id: "files", icon: FileSearch },
  { id: "windows", icon: LayoutGrid },
  { id: "health", icon: Activity },
  { id: "privacy", icon: ShieldCheck },
  { id: "schedule", icon: Clock, tool: true },
  { id: "shred", icon: Eraser, tool: true },
];

export function FeaturesGrid() {
  const t = useTranslations("app.features");

  return (
    <section id="features" className="scroll-mt-20 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:mt-28 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3.5 font-mono text-[13px] uppercase tracking-[0.08em] text-aqua-ink dark:text-aqua">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-[16em] text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground">
          {t("title")}
        </h2>
      </motion.div>

      <ul className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.li
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
              className="min-w-0 rounded-2xl border border-border bg-card p-6"
            >
              <span
                className={cn(
                  "flex h-[46px] w-[46px] items-center justify-center rounded-xl",
                  area.tool
                    ? "bg-aqua/15 text-aqua-ink dark:text-aqua"
                    : "bg-brand-600/10 text-brand-600 dark:text-brand-400",
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mb-1.5 mt-[18px] text-xl font-bold tracking-tight text-foreground">
                {t(`items.${area.id}.title`)}
              </h3>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground">
                {t(`items.${area.id}.description`)}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
