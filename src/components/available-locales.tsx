"use client";

import { createContext, useContext } from "react";

/**
 * Yalnız bazı dillerde var olan sayfalar (makaleler) hangi dillerde
 * bulunduğunu bildirir; dil seçici buna göre 404'e gitmekten kaçınır.
 * Sağlayıcı yoksa (null) sayfa 18 dilde de vardır.
 */
const AvailableLocalesContext = createContext<readonly string[] | null>(null);

export function AvailableLocales({
  locales,
  children,
}: {
  locales: readonly string[];
  children: React.ReactNode;
}) {
  return (
    <AvailableLocalesContext.Provider value={locales}>
      {children}
    </AvailableLocalesContext.Provider>
  );
}

export function useAvailableLocales() {
  return useContext(AvailableLocalesContext);
}
