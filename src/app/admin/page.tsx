"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Yönetim paneli (diskmop.com/admin). Giriş: kullanıcı adı + şifre → api.diskmop.com/api/admin/login
 * imzalı jeton verir (12 saat); panel verisi jetonla api.diskmop.com/api/stats'tan gelir. Günler İstanbul saatine göre.
 *
 * Yalnız GERÇEK veri gösterilir (API ayıklar): bot, telefon, dosyanın sistemiyle uyuşmayan bilgisayar ve
 * yarıda kesilen indirme girmez; ham sayaçlar API yanıtında da yoktur.
 *   - Kurulum: uygulamanın bir cihazda İLK açılışı (ping). Gerçek kullanıcıya en yakın sayı.
 */

const API = "https://api.diskmop.com";

type Counts = Record<string, number>;

interface SeriesDay {
  date: string;
  // Gerçek indirme (windows/mac). İstemci türü kaydedilmeden önceki günlerde null.
  realDownloads?: Counts | null;
  newInstalls: Counts;
  // O gün uygulamayı açan farklı cihaz (işletim sistemine göre).
  active: Counts | null;
  // O gün toplam açılış sayısı (aynı cihaz birden çok kez açabilir).
  opens?: Counts | null;
}

interface Stats {
  generatedAt: string;
  downloads: { flow30?: DownloadFlow };
  installs: {
    total: number;
    byOs: Counts;
    active7: number;
    active30: number;
    versions: Record<string, Counts>;
    activeTrackedSince: string | null;
    opens?: {
      trackedSince: string | null;
      today: number;
      last7: number;
      last30: number;
    };
  };
  series: SeriesDay[];
  funnel?: {
    minVersion: string;
    windows: FunnelOs | null;
    mac: FunnelOs | null;
  };
  appStore?: AppStoreStats;
}

// Son 30 gün indirme akışı (API 2026-10-29'dan beri kaydeder; öncesi "başladı" sayılmaz).
interface DownloadFlow {
  started: number;
  completed: number;
  aborted: number;
  unknown: number;
  fromSite: number;
  direct: number;
  byReferrer: Record<string, number>;
}

// Uygulama içi satış hunisi (1.0.32+ sürümlerinden gelen olaylar; cihaz başına bir kez sayılır).
interface FunnelOs {
  devices: number;
  scanned: number;
  blocked: number;
  paywallShown: number;
  freeDelete: number;
  buyClick: number;
  paywallScreens: Record<string, number>;
}

// iOS: uygulama ping atmaz ("Data Not Collected"); sayılar Apple'ın günlük raporundan,
// API 6 saatte bir eşitler. Apple raporu 1–2 gün geriden üretir.
interface AppStoreDay {
  firstTime: number;
  redownload: number;
  update: number;
  installs: number | null;
  deletions: number | null;
}

interface AppStoreStats {
  configured: boolean;
  lastSyncAt: string | null;
  lastError: string | null;
  latestDate: string | null;
  daily: Record<string, AppStoreDay>;
  last30: { territories: Counts; devices: Counts; sources: Counts };
}

interface Device {
  id: string;
  os: string;
  osVersion: string;
  arch: string;
  appVersion: string;
  firstSeen: string;
  lastSeen: string;
  launches: number;
}

// ---------- yardımcılar ----------

// Gerçek indirme (API ayıklar). İstemci türü kaydedilmeden önceki günlerde bilinmez: 0 sayılır.
const dlWin = (d: SeriesDay) => d.realDownloads?.windows ?? 0;
const dlMac = (d: SeriesDay) => d.realDownloads?.mac ?? 0;
const newWin = (d: SeriesDay) => d.newInstalls.win32 ?? 0;
const newMac = (d: SeriesDay) => d.newInstalls.darwin ?? 0;
const newAndroid = (d: SeriesDay) => d.newInstalls.Android ?? 0;
const activeTotal = (d: SeriesDay) =>
  d.active ? Object.values(d.active).reduce((s, n) => s + n, 0) : null;
const actWin = (d: SeriesDay) => d.active?.win32 ?? 0;
const actMac = (d: SeriesDay) => d.active?.darwin ?? 0;
const actAndroid = (d: SeriesDay) => d.active?.Android ?? 0;
const opensTotal = (d: SeriesDay) =>
  d.opens ? Object.values(d.opens).reduce((s, n) => s + n, 0) : null;

const fmt = (n: number) => n.toLocaleString("tr-TR");
const pct = (a: number, b: number) =>
  b > 0
    ? `%${((a / b) * 100).toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`
    : "—";

// Seri günleri "YYYY-MM-DD" (İstanbul). UTC gece yarısı + UTC biçimleme = kayma yok.
const dayLabel = (date: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("tr-TR", {
    timeZone: "UTC",
    ...opts,
  });

const dateTime = (iso: string) =>
  new Date(iso).toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const osLabel = (os: string) =>
  os === "win32"
    ? "Windows"
    : os === "darwin"
      ? "macOS"
      : os === "linux"
        ? "Linux"
        : os;

function compareVersions(a: string, b: string) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pb[i] || 0) - (pa[i] || 0);
    if (d) return d;
  }
  return 0;
}

function timeAgo(iso: string) {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "az önce";
  if (mins < 60) return `${mins} dk önce`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} sa önce`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} gün önce`;
  return `${Math.floor(days / 30)} ay önce`;
}

const COLORS = {
  windows: "#3b82f6",
  mac: "#a78bfa",
  android: "#34d399",
  ios: "#f472b6",
};

// ---------- sayfa ----------

function StatsPanel({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [days, setDays] = useState(30);
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(
    async (range: number) => {
      setLoading(true);
      setError(null);
      try {
        const r = await fetch(`${API}/api/stats?days=${range}`, {
          cache: "no-store",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (r.status === 401) return onLogout();
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        setStats(await r.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    },
    [token, onLogout],
  );

  useEffect(() => {
    load(days);
  }, [days, load]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              DiskMop — İstatistikler
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Günler İstanbul saatine göre
              {stats && <> · güncellendi {dateTime(stats.generatedAt)}</>}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-zinc-900 p-1">
              {[30, 90, 180].map((d) => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    days === d
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {d} gün
                </button>
              ))}
            </div>
            <button
              onClick={() => load(days)}
              className="rounded-lg bg-zinc-900 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
            >
              Yenile
            </button>
            <button
              onClick={onLogout}
              className="rounded-lg bg-zinc-900 px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-800"
            >
              Çıkış
            </button>
          </div>
        </header>

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            API'ye ulaşılamadı: {error}
          </div>
        )}
        {loading && !stats && <p className="text-zinc-500">Yükleniyor…</p>}
        {stats && <Dashboard stats={stats} token={token} onLogout={onLogout} />}
      </div>
    </div>
  );
}

function Dashboard({
  stats,
  token,
  onLogout,
}: {
  stats: Stats;
  token: string;
  onLogout: () => void;
}) {
  const s = stats.series;
  const today = s[s.length - 1];
  const yesterday = s[s.length - 2];
  const lastN = (n: number) => s.slice(-n);

  const periods = [
    { label: "Bugün", days: [today] },
    { label: "Dün", days: yesterday ? [yesterday] : [] },
    { label: "Son 7 gün", days: lastN(7) },
    { label: "Son 30 gün", days: lastN(30) },
  ];

  return (
    <>
      {/* Özet kartları */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {periods.map((p) => {
          const win = p.days.reduce((a, d) => a + dlWin(d), 0);
          const mac = p.days.reduce((a, d) => a + dlMac(d), 0);
          const iWin = p.days.reduce((a, d) => a + newWin(d), 0);
          const iMac = p.days.reduce((a, d) => a + newMac(d), 0);
          const iAnd = p.days.reduce((a, d) => a + newAndroid(d), 0);
          return (
            <div
              key={p.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {p.label}
              </p>
              <p className="mt-2 text-3xl font-bold tabular-nums">
                {fmt(win + mac)}
              </p>
              <p className="text-xs text-zinc-400">
                indirme · Windows {fmt(win)} · Mac {fmt(mac)}
              </p>
              <div className="mt-3 border-t border-zinc-800 pt-3">
                <p className="text-xl font-semibold tabular-nums text-emerald-400">
                  {fmt(iWin + iMac + iAnd)}
                </p>
                <p className="text-xs text-zinc-400">
                  yeni kurulum · Win {fmt(iWin)} · Mac {fmt(iMac)} · Android{" "}
                  {fmt(iAnd)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <DailyChart
        title="Günlük indirme"
        hint="Gerçek indirmeler: dosyanın kendi sistemindeki bir tarayıcıdan başlayıp yarıda kesilenler hariç. 20 Eylül öncesi ayrıştırılamadığı için gösterilmez."
        days={s}
        segments={[
          { label: "Windows", color: COLORS.windows, value: dlWin },
          { label: "Mac", color: COLORS.mac, value: dlMac },
        ]}
      />

      <DailyChart
        title="Günlük yeni kurulum"
        hint="Uygulamanın bir cihazda ilk kez açıldığı gün. Android kurulumları Google Play'den gelir."
        days={s}
        segments={[
          { label: "Windows", color: COLORS.windows, value: newWin },
          { label: "Mac", color: COLORS.mac, value: newMac },
          { label: "Android", color: COLORS.android, value: newAndroid },
        ]}
      />

      <DailyChart
        title="Günlük açan cihaz"
        hint="O gün uygulamayı en az bir kez açan farklı cihaz sayısı. Kurulumdan sonra uygulamayı gerçekten kullananları gösterir; yeni kurulum grafiğinden farklı olarak eski kullanıcıların dönüşü de burada görünür."
        days={s}
        segments={[
          { label: "Windows", color: COLORS.windows, value: actWin },
          { label: "Mac", color: COLORS.mac, value: actMac },
          { label: "Android", color: COLORS.android, value: actAndroid },
        ]}
      />

      <DailyChart
        title="Günlük açılış"
        hint="Uygulamanın o gün toplam kaç kez açıldığı (aynı cihaz birden çok sayılır; Windows'ta tepsideki uygulamayı yeniden açmak da dahil). Kayıt 7 Kasım 2026'da başladı."
        days={s}
        segments={[
          {
            label: "Açılış",
            color: COLORS.windows,
            value: (d: SeriesDay) => opensTotal(d) ?? 0,
          },
        ]}
      />

      <FunnelSection funnel={stats.funnel} flow={stats.downloads.flow30} />

      <AppStoreSection days={s} appStore={stats.appStore} />

      <DailyTable days={s} activeSince={stats.installs.activeTrackedSince} />

      <DevicesSummary stats={stats} />

      <DeviceList token={token} onLogout={onLogout} />
    </>
  );
}

// ---------- günlük grafik ----------

interface Segment {
  label: string;
  color: string;
  value: (d: SeriesDay) => number;
}

function DailyChart({
  title,
  hint,
  days,
  segments,
  extra,
}: {
  title: string;
  hint: string;
  days: SeriesDay[];
  segments: Segment[];
  extra?: (d: SeriesDay) => string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const totals = days.map((d) =>
    segments.reduce((a, seg) => a + seg.value(d), 0),
  );
  const max = Math.max(1, ...totals);
  const sum = totals.reduce((a, n) => a + n, 0);
  const shown = hover ?? days.length - 1;
  const d = days[shown];
  const labelEvery = days.length <= 31 ? 5 : days.length <= 90 ? 14 : 30;

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-semibold">
          {title}{" "}
          <span className="text-sm font-normal text-zinc-500">
            · {days.length} günde {fmt(sum)}
          </span>
        </h2>
        <div className="flex gap-3 text-xs text-zinc-400">
          {segments.map((seg) => (
            <span key={seg.label} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: seg.color }}
              />
              {seg.label}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-1 text-xs text-zinc-500">{hint}</p>

      {/* Seçili (üzerine gelinen, yoksa bugünkü) gün */}
      <p className="mt-3 h-5 text-sm tabular-nums">
        <span className="font-medium text-zinc-200">
          {dayLabel(d.date, { day: "numeric", month: "long", weekday: "long" })}
        </span>
        <span className="text-zinc-400">
          {" "}
          · toplam {fmt(totals[shown])}
          {segments
            .map((seg) => ` · ${seg.label} ${fmt(seg.value(d))}`)
            .join("")}
          {extra && extra(d) ? ` · ${extra(d)}` : ""}
        </span>
      </p>

      <div
        className="mt-2 flex h-40 items-end gap-[2px]"
        onMouseLeave={() => setHover(null)}
      >
        {days.map((day, i) => (
          <div
            key={day.date}
            onMouseEnter={() => setHover(i)}
            className={`flex h-full flex-1 flex-col justify-end rounded-sm ${i === shown ? "bg-zinc-800" : ""}`}
          >
            {segments.map((seg) => {
              const v = seg.value(day);
              if (!v) return null;
              return (
                <div
                  key={seg.label}
                  style={{
                    height: `${(v / max) * 100}%`,
                    background: seg.color,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-[2px] text-[10px] text-zinc-500">
        {days.map((day, i) => (
          // Etiket çubuğun sağ kenarında biter, sola taşar: en sağdaki gün kutudan dışarı taşmasın.
          <div
            key={day.date}
            className="flex flex-1 justify-end overflow-visible whitespace-nowrap"
          >
            {(days.length - 1 - i) % labelEvery === 0
              ? dayLabel(day.date, { day: "numeric", month: "short" })
              : ""}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- iPhone (App Store) ----------

const SOURCE_LABELS: Record<string, string> = {
  "App Store search": "App Store araması",
  "App Store browse": "App Store gezinme",
  "App referrer": "Başka uygulama",
  "Web referrer": "Web sitesi",
  "Institutional purchase": "Kurumsal",
  Unavailable: "Bilinmiyor",
};

function FunnelSection({
  funnel,
  flow,
}: {
  funnel?: Stats["funnel"];
  flow?: DownloadFlow;
}) {
  const win = funnel?.windows;
  const steps: Array<[string, number]> = win
    ? [
        ["Kurulum (1.0.32+)", win.devices],
        ["Tarama yaptı", win.scanned],
        ["Duvara çarptı", win.blocked],
        ["Duvarı gördü", win.paywallShown],
        ["Satın al'a bastı", win.buyClick],
      ]
    : [];
  const hasFlow = flow && flow.started > 0;
  if (!win && !hasFlow) return null;
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="font-semibold">Satış hunisi</h2>
      <p className="mt-1 text-xs text-zinc-500">
        Windows, uygulama içi olaylar (1.0.32 ve üstü, cihaz başına bir kez).
        Eski sürümler olay göndermez; sayılar yeni sürüm yayılınca anlam
        kazanır.
      </p>
      {win && (
        <div className="mt-3 grid grid-cols-2 gap-3 text-center sm:grid-cols-5">
          {steps.map(([label, n], i) => (
            <div key={label} className="rounded-lg bg-zinc-950/60 p-3">
              <p className="text-2xl font-bold tabular-nums">{fmt(n)}</p>
              <p className="text-xs text-zinc-500">{label}</p>
              {i > 0 && (
                <p className="text-xs text-zinc-600">{pct(n, steps[0][1])}</p>
              )}
            </div>
          ))}
        </div>
      )}
      {win && (
        <p className="mt-3 text-xs text-zinc-500">
          Ücretsiz silme kullanan: {fmt(win.freeDelete)}
          {Object.keys(win.paywallScreens).length > 0 &&
            " · Duvarın çıktığı ekranlar: " +
              Object.entries(win.paywallScreens)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 6)
                .map(([k, n]) => k + " " + n)
                .join(", ")}
        </p>
      )}
      {hasFlow && (
        <>
          <h3 className="mt-5 text-sm font-medium text-zinc-300">
            İndirme akışı (son 30 gün)
          </h3>
          <p className="mt-1 text-xs text-zinc-400">
            Başladı {fmt(flow.started)} · tamamlandı {fmt(flow.completed)} (
            {pct(flow.completed, flow.started)}) · yarıda kesildi{" "}
            {fmt(flow.aborted)} · site düğmesinden {fmt(flow.fromSite)} ·
            doğrudan bağlantı {fmt(flow.direct)}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Gelen alan adı:{" "}
            {Object.entries(flow.byReferrer)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 8)
              .map(([k, n]) => k + " " + n)
              .join(" · ")}
          </p>
        </>
      )}
    </section>
  );
}

function AppStoreSection({
  days,
  appStore,
}: {
  days: SeriesDay[];
  appStore?: AppStoreStats;
}) {
  if (!appStore || !appStore.configured) {
    return (
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-400">
        iPhone (App Store) sayıları için API'de App Store Connect anahtarı
        tanımlı değil.
      </section>
    );
  }
  const day = (d: SeriesDay) => appStore.daily[d.date];
  const first = (d: SeriesDay) => day(d)?.firstTime ?? 0;
  const redownload = (d: SeriesDay) => day(d)?.redownload ?? 0;
  const update = (d: SeriesDay) => day(d)?.update ?? 0;
  const hasInstalls = Object.values(appStore.daily).some(
    (d) => d.installs !== null,
  );

  // Apple raporu geriden geldiği için "son N gün" en son raporlu günden geriye sayılır.
  const end = days.findIndex((d) => d.date === appStore.latestDate);
  const upTo = end >= 0 ? days.slice(0, end + 1) : [];
  const periods = [
    { label: "Son raporlu gün", days: upTo.slice(-1) },
    { label: "Son 7 gün", days: upTo.slice(-7) },
    { label: "Son 30 gün", days: upTo.slice(-30) },
    { label: `${days.length} gün`, days },
  ];
  const top = (c: Counts, label?: (k: string) => string) =>
    Object.entries(c)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 12)
      .map(([k, n]) => `${label ? label(k) : k} ${fmt(n)}`)
      .join(" · ") || "—";

  return (
    <>
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-semibold">iPhone (App Store)</h2>
          <p className="text-xs text-zinc-500">
            Son raporlu gün{" "}
            {appStore.latestDate
              ? dayLabel(appStore.latestDate, { day: "numeric", month: "long" })
              : "—"}
            {appStore.lastSyncAt && (
              <> · eşitlendi {timeAgo(appStore.lastSyncAt)}</>
            )}
          </p>
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Apple&apos;ın günlük indirme raporu (App Analytics). iOS uygulaması
          hiçbir veri göndermediği için kurulum/etkin cihaz sayılamaz; Apple
          raporu 1–2 gün geriden üretir, günler Apple&apos;ın tarihine göre.
        </p>
        {appStore.lastError && (
          <p className="mt-2 text-xs text-red-400">
            Son eşitleme hatası: {appStore.lastError}
          </p>
        )}
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {periods.map((p) => {
            const f = p.days.reduce((a, d) => a + first(d), 0);
            const r = p.days.reduce((a, d) => a + redownload(d), 0);
            const u = p.days.reduce((a, d) => a + update(d), 0);
            return (
              <div key={p.label} className="rounded-lg bg-zinc-950/60 p-3">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {p.label}
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-pink-400">
                  {fmt(f)}
                </p>
                <p className="text-xs text-zinc-400">
                  ilk indirme · yeniden {fmt(r)} · güncelleme {fmt(u)}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 space-y-1 text-xs text-zinc-400">
          <p>
            <span className="text-zinc-500">Ülke (30 gün, ilk indirme): </span>
            {top(appStore.last30.territories)}
          </p>
          <p>
            <span className="text-zinc-500">Kaynak: </span>
            {top(appStore.last30.sources, (k) => SOURCE_LABELS[k] ?? k)}
          </p>
          <p>
            <span className="text-zinc-500">Cihaz: </span>
            {top(appStore.last30.devices)}
          </p>
        </div>
      </section>

      <DailyChart
        title="Günlük iPhone indirmesi"
        hint="App Store ilk indirmeleri ve aynı Apple hesabıyla yeniden indirmeler (güncellemeler hariç)."
        days={days}
        segments={[
          { label: "İlk indirme", color: COLORS.ios, value: first },
          { label: "Yeniden", color: "#9d174d", value: redownload },
        ]}
        extra={(d) => (update(d) ? `güncelleme ${fmt(update(d))}` : "")}
      />

      {hasInstalls && (
        <DailyChart
          title="Günlük iPhone kurulum / silme"
          hint="Apple'ın kurulum ve silme raporu (yalnız izin veren cihazlar)."
          days={days}
          segments={[
            {
              label: "Kurulum",
              color: COLORS.ios,
              value: (d) => day(d)?.installs ?? 0,
            },
            {
              label: "Silme",
              color: "#52525b",
              value: (d) => day(d)?.deletions ?? 0,
            },
          ]}
        />
      )}
    </>
  );
}

// ---------- günlük tablo ----------

function DailyTable({
  days,
  activeSince,
}: {
  days: SeriesDay[];
  activeSince: string | null;
}) {
  const rows = [...days].reverse();
  const td = "px-3 py-2 text-right tabular-nums";
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="px-5 pt-4">
        <h2 className="font-semibold">Gün gün</h2>
        <p className="mt-1 text-xs text-zinc-500">
          En yeni gün üstte.{" "}
          {activeSince
            ? `"Açan cihaz" (o gün uygulamayı açan farklı cihaz) ${dayLabel(activeSince, { day: "numeric", month: "long" })}'den beri, "Açılış" (toplam açılış sayısı) 7 Kasım'dan beri tutuluyor.`
            : '"Açan cihaz" sayımı ilk pingle başlayacak.'}
        </p>
      </div>
      <div className="mt-3 max-h-[28rem] overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-zinc-900 text-xs text-zinc-500">
            <tr>
              <th className="px-3 py-2 text-left font-medium" rowSpan={2}>
                Gün
              </th>
              <th
                className="px-3 pt-2 text-center font-medium text-zinc-300"
                colSpan={3}
              >
                İndirme
              </th>
              <th
                className="px-3 pt-2 text-center font-medium text-emerald-400"
                colSpan={3}
              >
                Yeni kurulum
              </th>
              <th
                className="px-3 pt-2 text-center font-medium text-sky-400"
                colSpan={3}
              >
                Açan cihaz
              </th>
              <th className="px-3 py-2 text-right font-medium" rowSpan={2}>
                Açılış
              </th>
            </tr>
            <tr className="border-b border-zinc-800">
              <th className="px-3 pb-2 text-right font-medium">Windows</th>
              <th className="px-3 pb-2 text-right font-medium">Mac</th>
              <th className="px-3 pb-2 text-right font-medium text-zinc-300">
                Toplam
              </th>
              <th className="px-3 pb-2 text-right font-medium">Windows</th>
              <th className="px-3 pb-2 text-right font-medium">Mac</th>
              <th className="px-3 pb-2 text-right font-medium">Android</th>
              <th className="px-3 pb-2 text-right font-medium">Windows</th>
              <th className="px-3 pb-2 text-right font-medium">Mac</th>
              <th className="px-3 pb-2 text-right font-medium">Android</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d, i) => {
              const win = dlWin(d);
              const mac = dlMac(d);
              const opn = opensTotal(d);
              const weekday = new Date(`${d.date}T00:00:00Z`).getUTCDay();
              return (
                <tr
                  key={d.date}
                  className={`border-t border-zinc-800/60 ${i === 0 ? "bg-zinc-800/40 font-medium" : ""} ${weekday === 1 ? "border-t-zinc-700" : ""}`}
                >
                  <td className="px-3 py-2 text-left whitespace-nowrap text-zinc-300">
                    {dayLabel(d.date, {
                      day: "2-digit",
                      month: "short",
                      weekday: "short",
                    })}
                    {i === 0 && (
                      <span className="ml-2 text-xs text-zinc-500">bugün</span>
                    )}
                  </td>
                  <td className={td}>{win || <Dim />}</td>
                  <td className={td}>{mac || <Dim />}</td>
                  <td className={`${td} font-semibold text-zinc-100`}>
                    {win + mac || <Dim />}
                  </td>
                  <td className={`${td} text-emerald-300`}>
                    {newWin(d) || <Dim />}
                  </td>
                  <td className={`${td} text-emerald-300`}>
                    {newMac(d) || <Dim />}
                  </td>
                  <td className={`${td} text-emerald-300`}>
                    {newAndroid(d) || <Dim />}
                  </td>
                  <td className={`${td} text-sky-300`}>
                    {actWin(d) || <Dim />}
                  </td>
                  <td className={`${td} text-sky-300`}>
                    {actMac(d) || <Dim />}
                  </td>
                  <td className={`${td} text-sky-300`}>
                    {actAndroid(d) || <Dim />}
                  </td>
                  <td className={td}>{opn ?? <Dim />}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const Dim = () => <span className="text-zinc-700">·</span>;

// ---------- cihazlar ve sürümler ----------

function DevicesSummary({ stats }: { stats: Stats }) {
  const inst = stats.installs;
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="font-semibold">Cihazlar</h2>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
        {[
          ["Toplam", inst.total],
          ["Son 30 gün açan", inst.active30],
          ["Son 7 gün açan", inst.active7],
        ].map(([label, n]) => (
          <div key={label as string} className="rounded-lg bg-zinc-950/60 p-3">
            <p className="text-2xl font-bold tabular-nums">
              {fmt(n as number)}
            </p>
            <p className="text-xs text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        {Object.entries(inst.byOs)
          .sort(([, a], [, b]) => b - a)
          .map(([os, n]) => `${osLabel(os)} ${fmt(n)}`)
          .join(" · ")}
      </p>

      <h3 className="mt-5 text-sm font-medium text-zinc-300">
        Son 30 günde etkin cihazların sürümü
      </h3>
      <div className="mt-2 space-y-3">
        {Object.entries(inst.versions).map(([os, byVersion]) => {
          const entries = Object.entries(byVersion).sort(([a], [b]) =>
            compareVersions(a, b),
          );
          const total = entries.reduce((a, [, n]) => a + n, 0);
          return (
            <div key={os}>
              <p className="text-xs text-zinc-500">
                {osLabel(os)} · {fmt(total)} cihaz
              </p>
              <div className="mt-1 space-y-1">
                {entries.slice(0, 6).map(([v, n]) => (
                  <div key={v} className="flex items-center gap-2 text-xs">
                    <span className="w-14 font-mono text-zinc-400">v{v}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${(n / total) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 text-right tabular-nums text-zinc-400">
                      {n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ---------- cihaz listesi (açılınca yüklenir) ----------

function DeviceList({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [devices, setDevices] = useState<Device[] | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open || devices) return;
    fetch(`${API}/api/installations`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => {
        if (r.status === 401) {
          onLogout();
          throw new Error("unauthorized");
        }
        return r.json();
      })
      .then((j) => setDevices(j.devices ?? []))
      .catch(() => setDevices([]));
  }, [open, devices, token, onLogout]);

  const sorted = useMemo(() => devices ?? [], [devices]);

  return (
    <details
      className="rounded-xl border border-zinc-800 bg-zinc-900"
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="cursor-pointer px-5 py-4 font-semibold">
        Cihaz listesi
      </summary>
      <div className="overflow-x-auto border-t border-zinc-800">
        {!devices ? (
          <p className="px-5 py-4 text-sm text-zinc-500">Yükleniyor…</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-xs text-zinc-500">
              <tr>
                {[
                  "Cihaz",
                  "Sistem",
                  "Sürüm",
                  "Açılış",
                  "İlk görülme",
                  "Son görülme",
                ].map((h) => (
                  <th key={h} className="px-4 py-2 text-left font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((d) => (
                <tr key={d.id} className="border-t border-zinc-800/60">
                  <td className="px-4 py-2 font-mono text-zinc-500">{d.id}</td>
                  <td className="px-4 py-2">
                    {osLabel(d.os)}{" "}
                    <span className="text-xs text-zinc-600">
                      {d.osVersion} {d.arch}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-mono text-xs text-blue-400">
                    v{d.appVersion}
                  </td>
                  <td className="px-4 py-2 tabular-nums text-zinc-400">
                    {d.launches}
                  </td>
                  <td className="px-4 py-2 text-xs text-zinc-500">
                    {dateTime(d.firstSeen)}
                  </td>
                  <td className="px-4 py-2 text-xs text-zinc-400">
                    {timeAgo(d.lastSeen)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </details>
  );
}

// ---------- giriş ----------

const TOKEN_KEY = "diskmop-admin-token";

function readToken(): string | null {
  try {
    const raw = sessionStorage.getItem(TOKEN_KEY);
    if (!raw) return null;
    const { token, expiresAt } = JSON.parse(raw) as {
      token: string;
      expiresAt: number;
    };
    return token && expiresAt > Date.now() ? token : null;
  } catch {
    return null;
  }
}

function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const r = await fetch(`${API}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.token) {
        try {
          sessionStorage.setItem(
            TOKEN_KEY,
            JSON.stringify({ token: j.token, expiresAt: j.expiresAt }),
          );
        } catch {
          /* depolama kapalıysa oturum yalnız bu sayfada yaşar */
        }
        onLogin(j.token);
      } else if (r.status === 429) {
        setError(
          `Çok fazla hatalı deneme. ${Math.ceil((j.retryAfter ?? 900) / 60)} dakika sonra tekrar deneyin.`,
        );
      } else if (r.status === 401) {
        setError("Kullanıcı adı veya şifre hatalı.");
      } else {
        setError("Giriş şu anda yapılamıyor.");
      }
    } catch {
      setError("Sunucuya ulaşılamadı.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
      >
        <h1 className="text-lg font-semibold text-zinc-100">Yönetim paneli</h1>
        <label className="block text-sm text-zinc-400">
          Kullanıcı adı
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            autoFocus
            required
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 outline-none focus:border-zinc-500"
          />
        </label>
        <label className="block text-sm text-zinc-400">
          Şifre
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 outline-none focus:border-zinc-500"
          />
        </label>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-white disabled:opacity-60"
        >
          {busy ? "Giriş yapılıyor…" : "Giriş yap"}
        </button>
      </form>
    </div>
  );
}

export default function AdminPage() {
  // undefined: sessionStorage henüz okunmadı (sunucuda ve ilk çizimde giriş formu çakışmasın).
  const [token, setToken] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    setToken(readToken());
  }, []);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(TOKEN_KEY);
    } catch {
      /* yoksay */
    }
    setToken(null);
  }, []);

  if (token === undefined) return <div className="min-h-screen bg-zinc-950" />;
  if (!token) return <LoginForm onLogin={setToken} />;
  return <StatsPanel token={token} onLogout={logout} />;
}
