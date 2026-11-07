"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { trackCheckout } from "@/lib/analytics";

const features = [
  "features.0",
  "features.1",
  "features.2",
  "features.3",
  "features.4",
  "features.5",
  "features.6",
  "features.7",
] as const;

export function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const [pricing, setPricing] = useState({
    discountedPrice: 19.9,
    originalPrice: 19.9,
    discountPercent: 0,
    hasDiscount: false,
    currencySymbol: "$",
    checkoutUrl:
      "https://buy.polar.sh/polar_cl_wou91uXU3RSe6IFmESbfYGBKDyReZ3ZsK7k2r31u2Fq",
  });

  useEffect(() => {
    fetch("https://api.diskmop.com/api/pricing")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && (data.checkoutUrl || data.originalPrice)) {
          const original = data.originalPrice ?? 19.9;
          const discounted = data.discountedPrice ?? original;
          const percent = data.discountPercent ?? 0;
          setPricing({
            discountedPrice: discounted,
            originalPrice: original,
            discountPercent: percent,
            hasDiscount: discounted < original && percent > 0,
            currencySymbol: data.currencySymbol ?? "$",
            checkoutUrl:
              data.checkoutUrl ||
              "https://buy.polar.sh/polar_cl_wou91uXU3RSe6IFmESbfYGBKDyReZ3ZsK7k2r31u2Fq",
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="pricing" className="scroll-mt-20 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:mt-28 lg:px-8">
      {/* Başlık görsel olarak yok (fiyat zaten başlık gibi); sayfa yapısı ve ekran okuyucu için duruyor. */}
      <h2 className="sr-only">{t("title")}</h2>

      <div className="flex flex-wrap gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="min-w-0 flex-[1_1_420px] rounded-3xl bg-navy p-8 text-[#EAF0FA] sm:p-12"
        >
          <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-[#7FE0D2]">
            {t("plan.name")}
          </p>
          <div className="mt-2.5 flex flex-wrap items-baseline gap-x-4">
            <span className="text-[clamp(72px,9vw,120px)] font-extrabold leading-none tracking-[-0.04em] text-white">
              {pricing.currencySymbol}
              {pricing.discountedPrice.toFixed(2)}
            </span>
            <span className="text-xl font-medium text-[#A9B8D0]">
              {t("plan.period")}
            </span>
            {pricing.hasDiscount && (
              <>
                <span className="text-2xl font-semibold text-[#A9B8D0] line-through">
                  {pricing.currencySymbol}
                  {pricing.originalPrice.toFixed(2)}
                </span>
                <span className="rounded-full border border-aqua/40 bg-aqua/15 px-2.5 py-1 text-xs font-bold text-[#7FE0D2]">
                  {pricing.discountPercent}% OFF
                </span>
              </>
            )}
          </div>
          <p className="mb-8 mt-3 text-lg text-[#A9B8D0]">
            {t("subtitle")}
          </p>
          <a
            href={`/buy?lang=${locale}`}
            onClick={() => trackCheckout("pricing")}
            className="inline-flex min-h-[54px] items-center rounded-xl bg-white px-8 text-[17px] font-bold text-navy transition hover:brightness-95"
          >
            {t("plan.cta")}
          </a>
          <p className="mt-[18px] font-mono text-[12.5px] text-[#A9B8D0]">
            {t("plan.paymentTrust")}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="min-w-0 flex-[1_1_360px] rounded-3xl border border-border bg-card p-8 sm:px-12 sm:py-10"
        >
          {features.map((key, i) => (
            <li
              key={key}
              className={
                "flex items-center gap-3.5 py-3 font-medium text-foreground" +
                (i < features.length - 1 ? " border-b border-border" : "")
              }
            >
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-aqua-soft">
                <Check
                  className="h-3.5 w-3.5 text-aqua-ink"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </span>
              {t(key)}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
