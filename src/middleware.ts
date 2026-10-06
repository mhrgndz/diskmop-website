import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(en|tr|de|fr|es|it|pt|ja)/:path*",
    "/((?!api|myadmin|buy|auth|_next|_vercel|.*\\..*).*)",
  ],
};
