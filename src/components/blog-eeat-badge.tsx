import { ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

interface BlogEeatBadgeProps {
  platform?: "windows" | "mac" | "ios" | "android" | "all";
  updatedDate: string;
  testedOnLabel: string;
  verifiedSafeLabel: string;
  lastUpdatedLabel: string;
}

export function BlogEeatBadge({
  platform = "all",
  updatedDate,
  testedOnLabel,
  verifiedSafeLabel,
  lastUpdatedLabel,
}: BlogEeatBadgeProps) {
  let platformDetails = "Windows 11 24H2 & macOS Sequoia";
  if (platform === "windows") {
    platformDetails = "Windows 11 24H2 & 10 (Build 26100+)";
  } else if (platform === "mac") {
    platformDetails = "macOS Sequoia 15.1 & Sonoma 14";
  } else if (platform === "ios") {
    platformDetails = "iOS 18 & iPadOS 18 (PhotoKit)";
  } else if (platform === "android") {
    platformDetails = "Android 15 & 14 (Scoped Storage)";
  }

  return (
    <aside
      aria-label="Editorial & Testing Verification"
      className="rounded-xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 sm:p-4 text-xs sm:text-sm text-foreground/80 mb-8 transition-colors"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="font-semibold text-emerald-800 dark:text-emerald-300">
            {verifiedSafeLabel}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-mono">
            <Cpu className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
            <strong className="text-foreground/90 font-medium">
              {testedOnLabel}:
            </strong>{" "}
            {platformDetails}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              {lastUpdatedLabel}: {updatedDate}
            </span>
          </span>
        </div>
      </div>
    </aside>
  );
}
