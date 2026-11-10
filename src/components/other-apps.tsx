import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Aynı yayıncının diğer uygulamaları (alt bilgide). Ad ve logo markadır, çevrilmez; yalnız tek satırlık açıklama
 * `otherApps.<anahtar>` mesajından gelir. Bağlantılara `utm_source` eklenir: hangi sitenin hangisine yolladığı
 * karşı sitenin analitiğinde görünür.
 */
const APPS = [
  { key: "fileacture", name: "File Acture", href: "https://fileacture.com/" },
  { key: "offerlime", name: "Offerlime", href: "https://offerlime.com/" },
  { key: "inviteroll", name: "Inviteroll", href: "https://inviteroll.com/" },
] as const;

export function OtherApps() {
  const t = useTranslations("otherApps");
  return (
    <div className="mt-12">
      <h3 className="text-white font-semibold text-sm mb-5">{t("title")}</h3>
      <ul className="grid gap-5 sm:grid-cols-3">
        {APPS.map((app) => (
          <li key={app.key}>
            <a
              href={`${app.href}?utm_source=diskmop&utm_medium=footer`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3.5"
            >
              <Image
                src={`/other-apps/${app.key}.png`}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-[10px]"
              />
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold text-gray-300 transition-colors group-hover:text-white">
                  {app.name}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-gray-500">
                  {t(app.key)}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
