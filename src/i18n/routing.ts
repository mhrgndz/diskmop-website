import { defineRouting } from "next-intl/routing";
import { LOCALES } from "@/lib/locales";

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
