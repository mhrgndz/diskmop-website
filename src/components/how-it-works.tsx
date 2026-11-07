"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const STEPS = [0, 1, 2] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how" className="scroll-mt-20 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:mt-28 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
      </motion.div>

      <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {STEPS.map((i) => {
          const last = i === STEPS.length - 1;
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "min-w-0 border-t-2 pt-6",
                last ? "border-brand-600" : "border-border",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full text-lg font-extrabold",
                  last
                    ? "bg-brand-600 text-white"
                    : "bg-brand-600/10 text-brand-600 dark:text-brand-400",
                )}
              >
                {i + 1}
              </span>
              <h3 className="mb-1.5 mt-4 text-2xl font-bold tracking-tight text-foreground">
                {t(`steps.${i}.title`)}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {t(`steps.${i}.description`)}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
