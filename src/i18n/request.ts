import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  const english = (await import("../../messages/en.json")).default;
  if (locale === "en") return { locale, messages: english };

  // Yeni dillerde çevrilmeyen bölümler (ör. gizlilik politikası) İngilizce
  // kalsın diye dil dosyası İngilizcenin üzerine bölüm bölüm bindirilir.
  const localized = (await import(`../../messages/${locale}.json`)).default;
  return { locale, messages: { ...english, ...localized } };
});
