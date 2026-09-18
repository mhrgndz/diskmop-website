'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * İndirme + kurulum paneli. Tek kaynak: api.diskmop.com/api/stats (günlük seri,
 * cihazlar, GitHub sayaçları). Günler İstanbul saatine göre.
 *
 * Üç sayı birbirinden farklıdır ve üçü de doğrudur — farklı şeyleri sayarlar:
 *   - Site sayacı: İndir düğmesiyle dosyanın gönderilmeye başladığı her istek.
 *   - GitHub: dosyanın her indirilişi (site + otomatik güncelleme + doğrudan bağlantı).
 *   - Kurulum: uygulamanın bir cihazda İLK açılışı (ping). Gerçek kullanıcıya en yakın sayı.
 */

const API = 'https://api.diskmop.com';

type Counts = Record<string, number>;

interface SeriesDay {
  date: string;
  downloads: Counts;
  newInstalls: Counts;
  active: Counts | null;
}

interface GithubStats {
  fetchedAt: string;
  totals: Counts;
  releases: Array<{ tag: string; published: string } & Counts>;
}

interface Stats {
  generatedAt: string;
  downloads: {
    counts: Counts;
    logEntries: number;
    logSince: string | null;
    clientTrackedSince: string | null;
    clientMix30: Record<string, Counts>;
  };
  installs: {
    total: number;
    byOs: Counts;
    active7: number;
    active30: number;
    versions: Record<string, Counts>;
    activeTrackedSince: string | null;
  };
  series: SeriesDay[];
  github: GithubStats | { error: string };
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

const isWin = (k: string) => k === 'windows' || k.startsWith('windows-');
const isMac = (k: string) => k === 'mac' || k.startsWith('mac-');
const sumWhere = (c: Counts | null | undefined, pred: (k: string) => boolean) =>
  Object.entries(c ?? {}).reduce((s, [k, n]) => (pred(k) ? s + n : s), 0);

const dlWin = (d: SeriesDay) => sumWhere(d.downloads, isWin);
const dlMac = (d: SeriesDay) => sumWhere(d.downloads, isMac);
const dlBot = (d: SeriesDay) => d.downloads._bot ?? 0;
const newWin = (d: SeriesDay) => d.newInstalls.win32 ?? 0;
const newMac = (d: SeriesDay) => d.newInstalls.darwin ?? 0;
const newAndroid = (d: SeriesDay) => d.newInstalls.Android ?? 0;
const activeTotal = (d: SeriesDay) => (d.active ? Object.values(d.active).reduce((s, n) => s + n, 0) : null);

const fmt = (n: number) => n.toLocaleString('tr-TR');
const pct = (a: number, b: number) => (b > 0 ? `%${((a / b) * 100).toLocaleString('tr-TR', { maximumFractionDigits: 1 })}` : '—');

// Seri günleri "YYYY-MM-DD" (İstanbul). UTC gece yarısı + UTC biçimleme = kayma yok.
const dayLabel = (date: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('tr-TR', { timeZone: 'UTC', ...opts });

const dateTime = (iso: string) =>
  new Date(iso).toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

const osLabel = (os: string) => (os === 'win32' ? 'Windows' : os === 'darwin' ? 'macOS' : os === 'linux' ? 'Linux' : os);

function compareVersions(a: string, b: string) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pb[i] || 0) - (pa[i] || 0);
    if (d) return d;
  }
  return 0;
}

function timeAgo(iso: string) {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'az önce';
  if (mins < 60) return `${mins} dk önce`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} sa önce`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} gün önce`;
  return `${Math.floor(days / 30)} ay önce`;
}

const COLORS = {
  windows: '#3b82f6',
  mac: '#a78bfa',
  android: '#34d399',
  bot: '#52525b',
};

// ---------- sayfa ----------

export default function StatsPage() {
  const [days, setDays] = useState(30);
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (range: number) => {
    setLoading(true);
    setError(null);
    try {
      const r = await fetch(`${API}/api/stats?days=${range}`, { cache: 'no-store' });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      setStats(await r.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(days);
  }, [days, load]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">DiskMop — İstatistikler</h1>
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
                    days === d ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
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
          </div>
        </header>

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            API'ye ulaşılamadı: {error}
          </div>
        )}
        {loading && !stats && <p className="text-zinc-500">Yükleniyor…</p>}
        {stats && <Dashboard stats={stats} />}
      </div>
    </div>
  );
}

function Dashboard({ stats }: { stats: Stats }) {
  const s = stats.series;
  const today = s[s.length - 1];
  const yesterday = s[s.length - 2];
  const lastN = (n: number) => s.slice(-n);

  const periods = [
    { label: 'Bugün', days: [today] },
    { label: 'Dün', days: yesterday ? [yesterday] : [] },
    { label: 'Son 7 gün', days: lastN(7) },
    { label: 'Son 30 gün', days: lastN(30) },
  ];

  return (
    <>
      {/* Özet kartları */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {periods.map((p) => {
          const win = p.days.reduce((a, d) => a + dlWin(d), 0);
          const mac = p.days.reduce((a, d) => a + dlMac(d), 0);
          const bot = p.days.reduce((a, d) => a + dlBot(d), 0);
          const iWin = p.days.reduce((a, d) => a + newWin(d), 0);
          const iMac = p.days.reduce((a, d) => a + newMac(d), 0);
          const iAnd = p.days.reduce((a, d) => a + newAndroid(d), 0);
          return (
            <div key={p.label} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{p.label}</p>
              <p className="mt-2 text-3xl font-bold tabular-nums">{fmt(win + mac)}</p>
              <p className="text-xs text-zinc-400">
                indirme · Windows {fmt(win)} · Mac {fmt(mac)}
                {bot > 0 && <span className="text-zinc-600"> · +{fmt(bot)} bot</span>}
              </p>
              <div className="mt-3 border-t border-zinc-800 pt-3">
                <p className="text-xl font-semibold tabular-nums text-emerald-400">{fmt(iWin + iMac + iAnd)}</p>
                <p className="text-xs text-zinc-400">
                  yeni kurulum · Win {fmt(iWin)} · Mac {fmt(iMac)} · Android {fmt(iAnd)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <DailyChart
        title="Günlük indirme"
        hint="Sitedeki İndir düğmeleri (api.diskmop.com). Bot istekleri 19 Eylül'den beri ayrı sayılıyor ve buraya girmiyor."
        days={s}
        segments={[
          { label: 'Windows', color: COLORS.windows, value: dlWin },
          { label: 'Mac', color: COLORS.mac, value: dlMac },
        ]}
        extra={(d) => (dlBot(d) ? `bot ${fmt(dlBot(d))}` : '')}
      />

      <DailyChart
        title="Günlük yeni kurulum"
        hint="Uygulamanın bir cihazda ilk kez açıldığı gün. Android kurulumları Google Play'den gelir."
        days={s}
        segments={[
          { label: 'Windows', color: COLORS.windows, value: newWin },
          { label: 'Mac', color: COLORS.mac, value: newMac },
          { label: 'Android', color: COLORS.android, value: newAndroid },
        ]}
      />

      <DailyTable days={s} activeSince={stats.installs.activeTrackedSince} />

      <Reliability stats={stats} />

      {/* min-w-0: ızgara öğesi içindeki tablo kadar genişleyip telefonda sayfayı taşırmasın */}
      <div className="grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
        <DevicesSummary stats={stats} />
        <GithubReleases github={stats.github} />
      </div>

      <DeviceList />
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
  const totals = days.map((d) => segments.reduce((a, seg) => a + seg.value(d), 0));
  const max = Math.max(1, ...totals);
  const sum = totals.reduce((a, n) => a + n, 0);
  const shown = hover ?? days.length - 1;
  const d = days[shown];
  const labelEvery = days.length <= 31 ? 5 : days.length <= 90 ? 14 : 30;

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-semibold">
          {title} <span className="text-sm font-normal text-zinc-500">· {days.length} günde {fmt(sum)}</span>
        </h2>
        <div className="flex gap-3 text-xs text-zinc-400">
          {segments.map((seg) => (
            <span key={seg.label} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ background: seg.color }} />
              {seg.label}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-1 text-xs text-zinc-500">{hint}</p>

      {/* Seçili (üzerine gelinen, yoksa bugünkü) gün */}
      <p className="mt-3 h-5 text-sm tabular-nums">
        <span className="font-medium text-zinc-200">{dayLabel(d.date, { day: 'numeric', month: 'long', weekday: 'long' })}</span>
        <span className="text-zinc-400">
          {' '}· toplam {fmt(totals[shown])}
          {segments.map((seg) => ` · ${seg.label} ${fmt(seg.value(d))}`).join('')}
          {extra && extra(d) ? ` · ${extra(d)}` : ''}
        </span>
      </p>

      <div className="mt-2 flex h-40 items-end gap-[2px]" onMouseLeave={() => setHover(null)}>
        {days.map((day, i) => (
          <div
            key={day.date}
            onMouseEnter={() => setHover(i)}
            className={`flex h-full flex-1 flex-col justify-end rounded-sm ${i === shown ? 'bg-zinc-800' : ''}`}
          >
            {segments.map((seg) => {
              const v = seg.value(day);
              if (!v) return null;
              return <div key={seg.label} style={{ height: `${(v / max) * 100}%`, background: seg.color }} />;
            })}
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-[2px] text-[10px] text-zinc-500">
        {days.map((day, i) => (
          // Etiket çubuğun sağ kenarında biter, sola taşar: en sağdaki gün kutudan dışarı taşmasın.
          <div key={day.date} className="flex flex-1 justify-end overflow-visible whitespace-nowrap">
            {(days.length - 1 - i) % labelEvery === 0 ? dayLabel(day.date, { day: 'numeric', month: 'short' }) : ''}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- günlük tablo ----------

function DailyTable({ days, activeSince }: { days: SeriesDay[]; activeSince: string | null }) {
  const rows = [...days].reverse();
  const td = 'px-3 py-2 text-right tabular-nums';
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="px-5 pt-4">
        <h2 className="font-semibold">Gün gün</h2>
        <p className="mt-1 text-xs text-zinc-500">
          En yeni gün üstte.{' '}
          {activeSince
            ? `"Etkin cihaz" (o gün uygulamayı açan cihaz sayısı) ${dayLabel(activeSince, { day: 'numeric', month: 'long' })}'den beri tutuluyor.`
            : '"Etkin cihaz" sayımı ilk pingle başlayacak.'}
        </p>
      </div>
      <div className="mt-3 max-h-[28rem] overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-zinc-900 text-xs text-zinc-500">
            <tr>
              <th className="px-3 py-2 text-left font-medium" rowSpan={2}>Gün</th>
              <th className="px-3 pt-2 text-center font-medium text-zinc-300" colSpan={4}>İndirme</th>
              <th className="px-3 pt-2 text-center font-medium text-emerald-400" colSpan={3}>Yeni kurulum</th>
              <th className="px-3 py-2 text-right font-medium" rowSpan={2}>Etkin cihaz</th>
            </tr>
            <tr className="border-b border-zinc-800">
              <th className="px-3 pb-2 text-right font-medium">Windows</th>
              <th className="px-3 pb-2 text-right font-medium">Mac</th>
              <th className="px-3 pb-2 text-right font-medium text-zinc-300">Toplam</th>
              <th className="px-3 pb-2 text-right font-medium">Bot</th>
              <th className="px-3 pb-2 text-right font-medium">Windows</th>
              <th className="px-3 pb-2 text-right font-medium">Mac</th>
              <th className="px-3 pb-2 text-right font-medium">Android</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d, i) => {
              const win = dlWin(d);
              const mac = dlMac(d);
              const act = activeTotal(d);
              const weekday = new Date(`${d.date}T00:00:00Z`).getUTCDay();
              return (
                <tr
                  key={d.date}
                  className={`border-t border-zinc-800/60 ${i === 0 ? 'bg-zinc-800/40 font-medium' : ''} ${weekday === 1 ? 'border-t-zinc-700' : ''}`}
                >
                  <td className="px-3 py-2 text-left whitespace-nowrap text-zinc-300">
                    {dayLabel(d.date, { day: '2-digit', month: 'short', weekday: 'short' })}
                    {i === 0 && <span className="ml-2 text-xs text-zinc-500">bugün</span>}
                  </td>
                  <td className={td}>{win || <Dim />}</td>
                  <td className={td}>{mac || <Dim />}</td>
                  <td className={`${td} font-semibold text-zinc-100`}>{win + mac || <Dim />}</td>
                  <td className={`${td} text-zinc-500`}>{dlBot(d) || <Dim />}</td>
                  <td className={`${td} text-emerald-300`}>{newWin(d) || <Dim />}</td>
                  <td className={`${td} text-emerald-300`}>{newMac(d) || <Dim />}</td>
                  <td className={`${td} text-emerald-300`}>{newAndroid(d) || <Dim />}</td>
                  <td className={td}>{act ?? <Dim />}</td>
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

// ---------- sayılar nasıl okunmalı ----------

function Reliability({ stats }: { stats: Stats }) {
  const c = stats.downloads.counts;
  const siteWin = sumWhere(c, isWin);
  const siteMac = sumWhere(c, isMac);
  const gh = 'error' in stats.github ? null : stats.github.totals;
  const ghWin = gh ? (gh.winSetup ?? 0) + (gh.winPortable ?? 0) : null;
  const ghMac = gh ? (gh.macDmgArm ?? 0) + (gh.macDmgIntel ?? 0) + (gh.macZipArm ?? 0) + (gh.macZipIntel ?? 0) : null;
  const instWin = stats.installs.byOs.win32 ?? 0;
  const instMac = stats.installs.byOs.darwin ?? 0;
  const instAnd = stats.installs.byOs.Android ?? 0;
  const mix = stats.downloads.clientMix30;
  const since = stats.downloads.logSince;

  const cell = 'px-4 py-3 text-right tabular-nums';
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="font-semibold">Sayılar nasıl okunmalı?</h2>
      <p className="mt-1 text-sm text-zinc-400">
        Üç kaynak farklı şeyleri sayar; hepsi tüm zamanlar içindir. Gerçek kullanıcıya en yakın olan
        <span className="text-emerald-400"> kurulum</span> sayısıdır.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-zinc-500">
            <tr className="border-b border-zinc-800">
              <th className="px-4 py-2 text-left font-medium">Kaynak</th>
              <th className="px-4 py-2 text-right font-medium">Windows</th>
              <th className="px-4 py-2 text-right font-medium">Mac</th>
              <th className="px-4 py-2 text-left font-medium">Ne sayıyor</th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-b border-zinc-800/60">
              <td className="px-4 py-3 font-medium">Site indirme sayacı</td>
              <td className={cell}>{fmt(siteWin)}</td>
              <td className={cell}>{fmt(siteMac)}</td>
              <td className="px-4 py-3 text-zinc-400">
                İndir düğmesiyle dosyanın gönderilmeye başladığı her istek. Aynı kişinin tekrar denemesi ve
                botlar da girer (botlar 19 Eylül'den beri ayrılıyor).
                {since && <> Günlük kayıt {dayLabel(since.slice(0, 10), { day: 'numeric', month: 'long', year: 'numeric' })}'den beri.</>}
              </td>
            </tr>
            <tr className="border-b border-zinc-800/60">
              <td className="px-4 py-3 font-medium">GitHub dosya indirmeleri</td>
              <td className={cell}>{ghWin == null ? '—' : fmt(ghWin)}</td>
              <td className={cell}>{ghMac == null ? '—' : fmt(ghMac)}</td>
              <td className="px-4 py-3 text-zinc-400">
                Dosyanın her indirilişi: site + <b className="font-medium text-zinc-300">otomatik güncellemeler</b> +
                doğrudan GitHub bağlantıları. Güncelleme denetimi (latest.yml) ayrıca{' '}
                {gh ? fmt(gh.latestYml ?? 0) : '—'} kez.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-emerald-400">Uygulamayı açan cihaz</td>
              <td className={`${cell} text-emerald-300`}>{fmt(instWin)}</td>
              <td className={`${cell} text-emerald-300`}>{fmt(instMac)}</td>
              <td className="px-4 py-3 text-zinc-400">
                Her cihaz ilk açılışta bir kez sayılır. Android (Google Play) ayrıca {fmt(instAnd)}.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-zinc-950/60 p-4 text-sm">
          <p className="text-zinc-400">İndirmeden kuruluma (site sayacına göre)</p>
          <p className="mt-1">
            Windows <b className="tabular-nums">{pct(instWin, siteWin)}</b> · Mac{' '}
            <b className="tabular-nums">{pct(instMac, siteMac)}</b>
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Mac oranı çok düşükse Mac dosyası çoğunlukla açılmadan kalıyor demektir: botlar, telefondan
            basılan Mac bağlantısı ya da Gatekeeper uyarısı.
          </p>
        </div>
        <div className="rounded-lg bg-zinc-950/60 p-4 text-sm">
          <p className="text-zinc-400">Son 30 günde indirmeyi kim başlattı?</p>
          {Object.keys(mix).length === 0 ? (
            <p className="mt-1 text-xs text-zinc-500">
              İstemci türü 19 Eylül'den beri kaydediliyor; ilk indirmelerle burada görünecek.
            </p>
          ) : (
            Object.entries(mix).map(([file, byClient]) => (
              <p key={file} className="mt-1">
                <span className="text-zinc-300">{file === 'mac' ? 'Mac dosyası' : file === 'windows' ? 'Windows dosyası' : file}:</span>{' '}
                <span className="text-zinc-400">
                  {Object.entries(byClient)
                    .sort(([, a], [, b]) => b - a)
                    .map(([k, n]) => `${clientLabel(k)} ${fmt(n)}`)
                    .join(' · ')}
                </span>
              </p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

const clientLabel = (k: string) =>
  ({ bot: 'bot', ios: 'iPhone/iPad', android: 'Android', mac: 'Mac', windows: 'Windows', linux: 'Linux', other: 'diğer' })[k] ?? k;

// ---------- cihazlar ve sürümler ----------

function DevicesSummary({ stats }: { stats: Stats }) {
  const inst = stats.installs;
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="font-semibold">Cihazlar</h2>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
        {[
          ['Toplam', inst.total],
          ['Son 30 gün etkin', inst.active30],
          ['Son 7 gün etkin', inst.active7],
        ].map(([label, n]) => (
          <div key={label as string} className="rounded-lg bg-zinc-950/60 p-3">
            <p className="text-2xl font-bold tabular-nums">{fmt(n as number)}</p>
            <p className="text-xs text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        {Object.entries(inst.byOs)
          .sort(([, a], [, b]) => b - a)
          .map(([os, n]) => `${osLabel(os)} ${fmt(n)}`)
          .join(' · ')}
      </p>

      <h3 className="mt-5 text-sm font-medium text-zinc-300">Son 30 günde etkin cihazların sürümü</h3>
      <div className="mt-2 space-y-3">
        {Object.entries(inst.versions).map(([os, byVersion]) => {
          const entries = Object.entries(byVersion).sort(([a], [b]) => compareVersions(a, b));
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
                      <div className="h-full rounded-full bg-blue-500" style={{ width: `${(n / total) * 100}%` }} />
                    </div>
                    <span className="w-8 text-right tabular-nums text-zinc-400">{n}</span>
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

function GithubReleases({ github }: { github: Stats['github'] }) {
  if ('error' in github) {
    return (
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-400">
        GitHub sayaçları alınamadı ({github.error}).
      </section>
    );
  }
  const td = 'px-2 py-1.5 text-right tabular-nums';
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <h2 className="font-semibold">Sürüm başına GitHub indirmeleri</h2>
      <p className="mt-1 text-xs text-zinc-500">
        Otomatik güncellemeler dahil · {dateTime(github.fetchedAt)} itibarıyla
      </p>
      <div className="mt-3 max-h-80 overflow-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-zinc-900 text-zinc-500">
            <tr className="border-b border-zinc-800">
              <th className="px-2 py-1.5 text-left font-medium">Sürüm</th>
              <th className="px-2 py-1.5 text-right font-medium">Win kurulum</th>
              <th className="px-2 py-1.5 text-right font-medium">Portable</th>
              <th className="px-2 py-1.5 text-right font-medium">Mac dmg</th>
              <th className="px-2 py-1.5 text-right font-medium">Mac zip</th>
              <th className="px-2 py-1.5 text-right font-medium">Denetim</th>
            </tr>
          </thead>
          <tbody>
            {github.releases.map((r) => (
              <tr key={r.tag} className="border-t border-zinc-800/60">
                <td className="px-2 py-1.5 text-left">
                  <span className="font-mono text-zinc-300">{r.tag}</span>{' '}
                  <span className="text-zinc-600">{r.published.slice(0, 10)}</span>
                </td>
                <td className={td}>{r.winSetup ?? 0}</td>
                <td className={td}>{r.winPortable ?? 0}</td>
                <td className={td}>{(r.macDmgArm ?? 0) + (r.macDmgIntel ?? 0)}</td>
                <td className={td}>{(r.macZipArm ?? 0) + (r.macZipIntel ?? 0)}</td>
                <td className={`${td} text-zinc-500`}>{(r.latestYml ?? 0) + (r.latestMacYml ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ---------- cihaz listesi (açılınca yüklenir) ----------

function DeviceList() {
  const [devices, setDevices] = useState<Device[] | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open || devices) return;
    fetch(`${API}/api/installations`, { cache: 'no-store' })
      .then((r) => r.json())
      .then((j) => setDevices(j.devices ?? []))
      .catch(() => setDevices([]));
  }, [open, devices]);

  const sorted = useMemo(() => devices ?? [], [devices]);

  return (
    <details
      className="rounded-xl border border-zinc-800 bg-zinc-900"
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="cursor-pointer px-5 py-4 font-semibold">Cihaz listesi</summary>
      <div className="overflow-x-auto border-t border-zinc-800">
        {!devices ? (
          <p className="px-5 py-4 text-sm text-zinc-500">Yükleniyor…</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-xs text-zinc-500">
              <tr>
                {['Cihaz', 'Sistem', 'Sürüm', 'Açılış', 'İlk görülme', 'Son görülme'].map((h) => (
                  <th key={h} className="px-4 py-2 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((d) => (
                <tr key={d.id} className="border-t border-zinc-800/60">
                  <td className="px-4 py-2 font-mono text-zinc-500">{d.id}</td>
                  <td className="px-4 py-2">
                    {osLabel(d.os)} <span className="text-xs text-zinc-600">{d.osVersion} {d.arch}</span>
                  </td>
                  <td className="px-4 py-2 font-mono text-xs text-blue-400">v{d.appVersion}</td>
                  <td className="px-4 py-2 tabular-nums text-zinc-400">{d.launches}</td>
                  <td className="px-4 py-2 text-xs text-zinc-500">{dateTime(d.firstSeen)}</td>
                  <td className="px-4 py-2 text-xs text-zinc-400">{timeAgo(d.lastSeen)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </details>
  );
}
