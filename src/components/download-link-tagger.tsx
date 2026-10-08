"use client";

import { useEffect } from "react";
import { readGaIdentity } from "@/lib/ga-identity";

const DOWNLOAD_PREFIX = "https://api.diskmop.com/download/";

/**
 * İndirme bağlantısına tıklanırken adrese GA kimliğini (`cid`, `sid`) ve
 * bulunulan sayfanın yolunu (`src`) ekler. API bunlarla GA4'e sunucu taraflı
 * `app_download` olayı yollar (bkz. `lib/ga-identity.ts`).
 *
 * Tek tek bileşenlere dokunmamak için belge düzeyinde, yakalama aşamasında
 * dinlenir: hero, blog CTA'ları, hesaplayıcı, açılır menü… hepsi aynı adrese
 * gidiyor. Orta tık, sağ tık > "bağlantıyı kopyala/kaydet" de kapsanır.
 */
export function DownloadLinkTagger() {
  useEffect(() => {
    function tag(event: Event) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || !link.href.startsWith(DOWNLOAD_PREFIX)) return;
      try {
        const url = new URL(link.href);
        const { clientId, sessionId } = readGaIdentity();
        if (clientId) url.searchParams.set("cid", clientId);
        else url.searchParams.delete("cid");
        if (sessionId) url.searchParams.set("sid", sessionId);
        else url.searchParams.delete("sid");
        url.searchParams.set("src", window.location.pathname.slice(0, 100));
        link.href = url.toString();
      } catch {
        // Ölçüm indirmeyi asla engellemez
      }
    }

    const types = ["pointerdown", "click", "auxclick", "contextmenu"];
    for (const type of types) document.addEventListener(type, tag, true);
    return () => {
      for (const type of types) document.removeEventListener(type, tag, true);
    };
  }, []);

  return null;
}
