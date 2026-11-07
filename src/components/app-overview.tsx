import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { appShotSrc } from "@/lib/app-shots";

const STEPS = [0, 1, 2] as const;

/**
 * "Ana ekran" bölümü: lacivert panelde gerçek Windows uygulamasının Genel bakış
 * ekranı. Görsel, kenar çubuğu ve başlık kırpılarak yalnız "ne kadar yer
 * açılabilir + sürücüler" kısmı gösterilir.
 */
export function AppOverview() {
  const t = useTranslations("app.overview");
  const tApp = useTranslations("app");
  const locale = useLocale();

  return (
    <section id="overview" className="scroll-mt-20 mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-24 lg:px-8">
      <div className="flex flex-wrap items-center gap-10 rounded-[28px] bg-navy p-7 text-[#EAF0FA] sm:p-12 lg:gap-14 lg:p-14">
        <div className="min-w-0 flex-[1_1_360px]">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.08em] text-[#7FE0D2]">
            {t("eyebrow")}
          </p>
          <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            {t("title")}
          </h2>
          <ol className="mt-8 flex flex-col gap-5">
            {STEPS.map((i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-[19px] font-bold">
                    {t(`steps.${i}.title`)}
                  </div>
                  <div className="text-[#A9B8D0]">
                    {t(`steps.${i}.description`)}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* dir="ltr": kırpma fiziksel (sol kenar çubuğu atılıyor), sağdan-sola dillerde de aynı kalmalı */}
        <div
          dir="ltr"
          className="min-w-0 flex-[1.2_1_460px] overflow-hidden rounded-[14px] shadow-[0_0_0_1px_rgba(255,255,255,0.14)] aspect-[812/390]"
        >
          <Image
            src={appShotSrc("overview", locale)}
            alt={tApp("screenshotAlt")}
            width={1076}
            height={759}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="mt-[-12.3%] ml-[-32.5%] block h-auto w-[132.5%] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
