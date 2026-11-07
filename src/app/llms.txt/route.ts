import { LLMS_TEMPLATE } from "@/content/llms-template";
import {
  VERSIONS_REVALIDATE_SECONDS,
  getLiveVersions,
} from "@/lib/live-versions";

/**
 * /llms.txt: eskiden statik public/llms.txt'ti ve sürüm numaraları her yayında elle
 * güncellenmeliydi (bayatlıyordu). Şimdi şablon (src/content/llms-template.ts) canlı
 * sürümlerle doldurulur; saatlik yeniden üretilir.
 */
export const revalidate = VERSIONS_REVALIDATE_SECONDS;

const fill = (text: string, key: string, value: string) =>
  text.split(`{{${key}}}`).join(value);

export async function GET() {
  const v = await getLiveVersions();
  let body = LLMS_TEMPLATE;
  body = fill(body, "WIN", v.windows);
  body = fill(body, "MAC", v.mac);
  body = fill(body, "IOS", v.ios);
  body = fill(body, "DATE", v.releaseDate);
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": `public, s-maxage=${VERSIONS_REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
    },
  });
}
