"use client";

import { useState, useMemo } from "react";
import {
  HardDrive,
  Cpu,
  Smartphone,
  Laptop,
  AlertTriangle,
  CheckCircle,
  Download,
  Sparkles,
  Layers,
  Gamepad2,
  Code2,
  Image as ImageIcon,
  MessageSquare,
} from "lucide-react";
import { STORE_URLS } from "@/lib/app-version";

interface CalculatorLabels {
  platformLabel: string;
  driveSizeLabel: string;
  currentUsageLabel: string;
  activitiesLabel: string;
  estimatedSavings: string;
  reclaimableNotice: string;
  ssdWarningTitle: string;
  ssdWarningDesc: string;
  ssdGoodTitle: string;
  ssdGoodDesc: string;
  breakdownTitle: string;
  systemCache: string;
  gameJunk: string;
  devJunk: string;
  mediaJunk: string;
  msgJunk: string;
  downloadButton: string;
  freeTrialTrust: string;
}

interface DiskSpaceCalculatorProps {
  locale: string;
  labels: CalculatorLabels;
}

type Platform = "windows" | "mac" | "ios" | "android";

export function DiskSpaceCalculator({
  locale,
  labels,
}: DiskSpaceCalculatorProps) {
  const [platform, setPlatform] = useState<Platform>("windows");
  const [capacity, setCapacity] = useState<number>(512); // GB
  const [usagePercent, setUsagePercent] = useState<number>(85); // %

  const [hasGaming, setHasGaming] = useState<boolean>(true);
  const [hasDev, setHasDev] = useState<boolean>(false);
  const [hasMedia, setHasMedia] = useState<boolean>(true);
  const [hasMessaging, setHasMessaging] = useState<boolean>(true);

  // Reclaim calculations
  const breakdown = useMemo(() => {
    let system = capacity * 0.035; // ~3.5%
    let gaming = hasGaming ? (platform === "windows" ? 22 : 8) : 0;
    let dev = hasDev
      ? platform === "windows" || platform === "mac"
        ? 18
        : 0
      : 0;
    let media = hasMedia
      ? platform === "ios"
        ? 19
        : platform === "android"
          ? 14
          : 12
      : 0;
    let messaging = hasMessaging
      ? platform === "ios" || platform === "android"
        ? 8
        : 4.5
      : 0;

    // Scale dynamically with drive capacity
    const scale = capacity >= 1000 ? 1.4 : capacity <= 128 ? 0.5 : 1.0;
    system = Math.round(system * scale * 10) / 10;
    gaming = Math.round(gaming * scale * 10) / 10;
    dev = Math.round(dev * scale * 10) / 10;
    media = Math.round(media * scale * 10) / 10;
    messaging = Math.round(messaging * scale * 10) / 10;

    const total =
      Math.round((system + gaming + dev + media + messaging) * 10) / 10;

    return { system, gaming, dev, media, messaging, total };
  }, [capacity, platform, hasGaming, hasDev, hasMedia, hasMessaging]);

  const usedGb = Math.round(capacity * (usagePercent / 100) * 10) / 10;
  const freeGbAfter =
    Math.round((capacity - usedGb + breakdown.total) * 10) / 10;
  const isSsdAtRisk = usagePercent >= 80;

  // Platform specific download links
  const downloadUrl = useMemo(() => {
    if (platform === "windows")
      return "https://api.diskmop.com/download/windows";
    if (platform === "mac") return "https://api.diskmop.com/download/mac";
    if (platform === "ios") return STORE_URLS.ios;
    return STORE_URLS.android;
  }, [platform]);

  return (
    <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-xl transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Form Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Platform Picker */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              {labels.platformLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: "windows", name: "Windows", icon: Cpu },
                { id: "mac", name: "macOS", icon: Laptop },
                { id: "ios", name: "iPhone", icon: Smartphone },
                { id: "android", name: "Android", icon: Smartphone },
              ].map((p) => {
                const Icon = p.icon;
                const isSelected = platform === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlatform(p.id as Platform)}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-sm font-medium transition-all ${
                      isSelected
                        ? "border-brand-500 bg-brand-50/80 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 shadow-sm ring-1 ring-brand-500"
                        : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-brand-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drive Capacity Picker */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              {labels.driveSizeLabel}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[128, 256, 512, 1000, 2000].map((cap) => {
                const labelText =
                  cap >= 1000 ? `${cap / 1000} TB` : `${cap} GB`;
                const isSelected = capacity === cap;
                return (
                  <button
                    key={cap}
                    type="button"
                    onClick={() => setCapacity(cap)}
                    className={`py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                      isSelected
                        ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                        : "border-border bg-background text-foreground/80 hover:border-brand-300"
                    }`}
                  >
                    {labelText}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Usage Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-foreground">
                {labels.currentUsageLabel}
              </label>
              <span className="font-mono text-sm font-bold text-brand-600 dark:text-brand-400">
                %{usagePercent} ({usedGb} GB /{" "}
                {capacity >= 1000 ? `${capacity / 1000} TB` : `${capacity} GB`})
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="98"
              value={usagePercent}
              onChange={(e) => setUsagePercent(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>%30 (Ferah)</span>
              <span>%75 (Sınır)</span>
              <span className="text-red-500 font-semibold">%90+ (Kritik)</span>
            </div>
          </div>

          {/* Usage Activities */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              {labels.activitiesLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background/50 hover:bg-muted/40 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasGaming}
                  onChange={(e) => setHasGaming(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
                <Gamepad2 className="h-4 w-4 text-purple-500" />
                <span className="text-xs sm:text-sm text-foreground">
                  Steam / Epic / Oyun Paketleri
                </span>
              </label>

              {(platform === "windows" || platform === "mac") && (
                <label className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background/50 hover:bg-muted/40 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={hasDev}
                    onChange={(e) => setHasDev(e.target.checked)}
                    className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                  />
                  <Code2 className="h-4 w-4 text-blue-500" />
                  <span className="text-xs sm:text-sm text-foreground">
                    Docker / Node / Geliştirici Önbelleği
                  </span>
                </label>
              )}

              <label className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background/50 hover:bg-muted/40 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasMedia}
                  onChange={(e) => setHasMedia(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
                <ImageIcon className="h-4 w-4 text-emerald-500" />
                <span className="text-xs sm:text-sm text-foreground">
                  4K Video / Benzer Fotoğraflar
                </span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background/50 hover:bg-muted/40 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasMessaging}
                  onChange={(e) => setHasMessaging(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
                <MessageSquare className="h-4 w-4 text-green-500" />
                <span className="text-xs sm:text-sm text-foreground">
                  WhatsApp / Discord / Telegram Önbelleği
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Output & CTA Card */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-50/70 via-background to-card dark:from-brand-950/30 dark:via-background dark:to-card p-6 sm:p-7 shadow-lg">
          <div>
            {/* Header Result */}
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wide uppercase mb-2">
              <Sparkles className="h-4 w-4" />
              <span>{labels.estimatedSavings}</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-black text-foreground tracking-tight">
                ~{breakdown.total}
              </span>
              <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                GB
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
              {labels.reclaimableNotice}
            </p>

            {/* Visual Storage Bar */}
            <div className="space-y-2 mb-6">
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden flex">
                <div
                  style={{
                    width: `${Math.max(10, usagePercent - (breakdown.total / capacity) * 100)}%`,
                  }}
                  className="bg-slate-400 dark:bg-slate-600 h-full"
                  title="Gerekli Sistem & Dosyalar"
                />
                <div
                  style={{
                    width: `${Math.min(40, (breakdown.total / capacity) * 100)}%`,
                  }}
                  className="bg-brand-500 h-full animate-pulse"
                  title="DiskMop ile Temizlenebilir Çöpler"
                />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-400" />
                  Kişisel Dosyalar
                </span>
                <span className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-bold">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-500" />
                  Geri Kazanılacak ({breakdown.total} GB)
                </span>
              </div>
            </div>

            {/* SSD Alert Card */}
            <div
              className={`rounded-xl border p-3.5 mb-6 text-xs transition-colors ${
                isSsdAtRisk
                  ? "border-amber-500/30 bg-amber-50/60 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200"
                  : "border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200"
              }`}
            >
              <div className="flex items-start gap-2.5">
                {isSsdAtRisk ? (
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="font-semibold mb-1">
                    {isSsdAtRisk ? labels.ssdWarningTitle : labels.ssdGoodTitle}
                  </h4>
                  <p className="opacity-90 leading-relaxed text-[11px]">
                    {isSsdAtRisk ? labels.ssdWarningDesc : labels.ssdGoodDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Itemized breakdown */}
            <div className="space-y-2 border-t border-border/70 pt-4 mb-6 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>{labels.systemCache}</span>
                <span className="font-mono font-semibold text-foreground">
                  ~{breakdown.system} GB
                </span>
              </div>
              {hasGaming && breakdown.gaming > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <span>{labels.gameJunk}</span>
                  <span className="font-mono font-semibold text-foreground">
                    ~{breakdown.gaming} GB
                  </span>
                </div>
              )}
              {hasDev && breakdown.dev > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <span>{labels.devJunk}</span>
                  <span className="font-mono font-semibold text-foreground">
                    ~{breakdown.dev} GB
                  </span>
                </div>
              )}
              {hasMedia && breakdown.media > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <span>{labels.mediaJunk}</span>
                  <span className="font-mono font-semibold text-foreground">
                    ~{breakdown.media} GB
                  </span>
                </div>
              )}
              {hasMessaging && breakdown.messaging > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <span>{labels.msgJunk}</span>
                  <span className="font-mono font-semibold text-foreground">
                    ~{breakdown.messaging} GB
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div>
            <a
              href={downloadUrl}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Download className="h-4 w-4" />
              <span>{labels.downloadButton}</span>
            </a>
            <p className="text-center text-[11px] text-muted-foreground mt-2.5">
              {labels.freeTrialTrust}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
