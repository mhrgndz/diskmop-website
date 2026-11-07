"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function FinalCTA() {
  const t = useTranslations("finalCta");

  // Mesajlarda emoji'li tek satır var ("🔒 Safe Download • ✓ Virus-free • 💰 …"): emojiler atılır, maddeler noktayla ayrılır.
  const trust = t("trust")
    // Emoji: yedek çiftli (🔒 💰) + dingbat/işaret blokları (✓ ✔); derleme hedefi `u` bayrağına izin vermiyor.
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[☀-➿️]/g, "")
    .split(/\s*[•·]\s*/)
    .map((p) => p.trim())
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:mt-28 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-brand-600 px-7 py-14 text-white sm:px-14 sm:py-16">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -end-24 -top-16 h-[400px] w-[400px]"
        >
          <g fill="none" stroke="#FFFFFF" strokeOpacity=".22" strokeWidth="1.5">
            <circle cx="200" cy="200" r="190" />
            <circle cx="200" cy="200" r="140" />
            <circle cx="200" cy="200" r="90" />
          </g>
        </svg>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-[11em] text-[clamp(36px,5.6vw,72px)] font-extrabold leading-[1.04] tracking-[-0.03em]"
        >
          {t("title")}
        </motion.h2>

        <p className="relative mt-5 text-xl text-[#DCE6FF]">{t("subtitle")}</p>

        <div className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#platforms"
            className="inline-flex min-h-[54px] items-center rounded-xl bg-white px-8 text-[17px] font-bold text-navy transition hover:brightness-95"
          >
            {t("cta")}
          </a>
          <span className="font-mono text-[13px] text-[#DCE6FF]">{trust}</span>
        </div>
      </div>
    </section>
  );
}
