import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    // Statik analiz için src/lib/locales.ts'teki LOCALES elle tekrarlanır.
    "/(en|tr|de|fr|es|it|pt|ja|ar|he|id|ko|pl|ro|ru|th|vi|zh-Hans)/:path*",
    "/((?!api|myadmin|buy|auth|_next|_vercel|.*\\..*).*)",
  ],
};
