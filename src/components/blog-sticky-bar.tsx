"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  X,
  Sparkles,
  Monitor,
  Laptop,
  Smartphone,
} from "lucide-react";
import { useOSDetection } from "@/hooks/use-os-detection";
import { STORE_URLS } from "@/lib/app-version";

export function BlogStickyBar() {
  const t = useTranslations("blog");
  const detectedOS = useOSDetection();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("diskmop_blog_bar_dismissed") === "1") {
        return;
      }
    } catch {}
    setDismissed(false);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("diskmop_blog_bar_dismissed", "1");
    } catch {}
  };

  let osName = "Windows";
  let downloadHref = "https://api.diskmop.com/download/windows";

  if (detectedOS === "mac") {
    osName = "macOS";
    downloadHref = "https://api.diskmop.com/download/mac";
  } else if (detectedOS === "android") {
    osName = "Android";
    downloadHref = STORE_URLS.android;
  } else if (detectedOS === "ios") {
    osName = "iPhone";
    downloadHref = STORE_URLS.ios;
  }

  const showBar = visible && !dismissed;

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto pointer-events-auto bg-card/95 dark:bg-card/95 backdrop-blur-lg border border-brand-500/30 dark:border-brand-500/30 rounded-2xl shadow-2xl shadow-brand-500/10 p-3 sm:p-4 flex items-center justify-between gap-3 sm:gap-6">
            {/* Left: Icon & Text */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-foreground truncate">
                  {t("stickyBarTitle")}
                </div>
                <div className="text-xs text-muted-foreground truncate hidden sm:block">
                  {t("stickyBarSubtitle")}
                </div>
              </div>
            </div>

            {/* Right: CTA Button & Dismiss */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={downloadHref}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{t("stickyBarButton", { os: osName })}</span>
              </a>

              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Close"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
