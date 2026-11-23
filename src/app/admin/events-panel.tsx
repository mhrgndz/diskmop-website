"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Olaylar ve hatalar (api.diskmop.com/api/events/*). Uygulama 1.1.11+ (Mac) tarama sonucunu, silme hatalarını, takılı
 * sürücüleri ve sayfa geçişlerini olay olarak yollar; burada sorun türüne göre toplanır ve tek cihazın akışı açılır.
 */

const API = process.env.NEXT_PUBLIC_ADMIN_API || "https://api.diskmop.com";

type Props = Record<string, string | number | boolean>;

interface Issue {
  event: string;
  where: string;
  kind: string;
  code: string | null;
  msg: string | null;
  count: number;
  devices: number;
  versions: Record<string, number>;
  os: Record<string, number>;
  first: string;
  last: string;
  sampleDevice: string;
}

interface ScanRow {
  count: number;
  devices: number;
  empty: number;
  emptyDevices: number;
  denied: number;
  cancelled: number;
  avgMs: number;
}

interface ActionRow {
  count: number;
  failed: number;
  removed: number;
  kinds: Record<string, number>;
}

interface DeviceRow {
  id: string;
  os: string;
  v: string;
  first: string;
  last: string;
  events: number;
  issues: number;
}

interface Summary {
  days: number;
  generatedAt: string;
  devices: number;
  events: number;
  byName: Record<string, { count: number; devices: number }>;
  scans: Record<string, ScanRow>;
  actions: Record<string, ActionRow>;
  issues: Issue[];
  versions: Record<string, number>;
  pages: Record<string, number>;
  volumes: { devices: number; external: number; fs: Record<string, number> };
  recentDevices: DeviceRow[];
}

interface TimelineEvent {
  t: string;
  n: string;
  os: string;
  v: string;
  p: Props;
}

interface Timeline {
  device: {
    os: string;
    osVersion: string;
    arch: string;
    appVersion: string;
    firstSeen: string;
    lastSeen: string;
    launches: number;
  } | null;
  events: TimelineEvent[];
}

const PAGE_LABELS: Record<string, string> = {
  cleanup: "Alan aç",
  library: "Library",
  files: "Dosyalar",
  macspace: "macOS alanı",
  health: "Sistem sağlığı",
  privacy: "Gizlilik",
  settings: "Ayarlar",
  home: "Genel bakış",
  // Windows sayfa adları
  appdata: "AppData",
  windows: "Windows alanı",
};
const TAB_LABELS: Record<string, string> = {
  large: "Büyük dosyalar",
  duplicates: "Kopyalar",
  empty: "Boş klasörler",
  map: "Harita",
};
const KIND_LABELS: Record<string, string> = {
  empty: "Hiçbir şey bulunamadı",
  denied_dirs: "Okunamayan klasör",
  permission: "İzin reddi",
  in_use: "Dosya kullanımda",
  not_found: "Dosya yok",
  no_space: "Yer yok",
  read_only: "Salt okunur",
  not_empty: "Klasör boş değil",
  protected: "Korumalı konum",
  inside_package: "Paket içinde",
  browser_running: "Tarayıcı açık",
  admin_cancelled: "Yönetici onayı iptal",
  app_installed: "Uygulama kurulu",
  bad_id: "Geçersiz öğe",
  cancelled: "İptal",
  failed: "Başarısız",
  other: "Diğer",
};
const EVENT_LABELS: Record<string, string> = {
  launch: "Açılış",
  page: "Sayfa",
  volumes: "Sürücüler",
  scan_end: "Tarama",
  action_end: "Silme",
  error: "Hata",
  scan: "Tarama başladı",
  blocked: "Duvara çarptı",
  paywall_shown: "Duvar",
  buy_click: "Satın al",
  free_delete: "Ücretsiz silme",
};
const LOC_LABELS: Record<string, string> = {
  home: "Ana klasör",
  my_files: "Dosyalarım",
  map: "Harita",
  startup_disk: "Başlangıç diski",
  volume_internal: "Dahili sürücü",
  volume_external: "Harici sürücü",
  folder_home: "Seçilen klasör",
  folder_other: "Ana klasör dışı",
};

const fmt = (n: number) => n.toLocaleString("tr-TR");
const pct = (a: number, b: number) =>
  b > 0 ? `%${Math.round((a / b) * 100)}` : "—";
const osLabel = (os: string) =>
  os === "darwin" ? "Mac" : os === "win32" ? "Windows" : os;
const whereLabel = (w: string) => {
  const [page, tab] = w.split(":");
  const p = PAGE_LABELS[page] ?? page;
  return tab ? `${p} · ${TAB_LABELS[tab] ?? tab}` : p;
};
const kindLabel = (k: string) => KIND_LABELS[k] ?? k;
const dateTime = (iso: string) =>
  new Date(iso).toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
const top = (r: Record<string, number>, n = 3) =>
  Object.entries(r)
    .sort(([, a], [, b]) => b - a)
    .slice(0, n)
    .map(([k, c]) => `${k} (${c})`)
    .join(", ");

// Zaman çizelgesinde bir olayın tek satırlık özeti.
function describe(e: TimelineEvent): string {
  const p = e.p;
  const where = p.page
    ? whereLabel(String(p.page) + (p.tab ? `:${p.tab}` : ""))
    : "";
  switch (e.n) {
    case "scan_end": {
      const parts = [
        where,
        `${fmt(Number(p.items ?? 0))} öğe`,
        `${fmt(Number(p.mb ?? 0))} MB`,
        `${fmt(Number(p.ms ?? 0))} ms`,
      ];
      if (p.loc) parts.push(LOC_LABELS[String(p.loc)] ?? String(p.loc));
      if (p.rootfs) parts.push(String(p.rootfs));
      if (Number(p.denied) > 0) parts.push(`okunamayan ${p.denied}`);
      if (Number(p.skipped_mounts) > 0)
        parts.push(`atlanan bağlama ${p.skipped_mounts}`);
      if (p.cancelled) parts.push("iptal");
      if (p.user === false) parts.push("arka plan");
      return parts.filter(Boolean).join(" · ");
    }
    case "action_end": {
      const parts = [
        where,
        `${fmt(Number(p.selected ?? 0))} seçili`,
        `${fmt(Number(p.removed ?? 0))} silindi`,
      ];
      if (Number(p.failed) > 0) parts.push(`${p.failed} başarısız`);
      if (p.kind) parts.push(kindLabel(String(p.kind)));
      if (p.code) parts.push(String(p.code));
      if (p.msg) parts.push(`“${p.msg}”`);
      return parts.join(" · ");
    }
    case "volumes":
      return `dahili ${p.internal ?? 0} · harici ${p.external ?? 0}${p.fs ? ` (${p.fs})` : ""}${Number(p.unsupported) > 0 ? ` · taranmayan ${p.unsupported}` : ""}`;
    case "launch":
      return [
        p.lang,
        p.licensed ? "lisanslı" : "ücretsiz",
        p.fda ? "Tam Disk Erişimi var" : "Tam Disk Erişimi yok",
      ]
        .filter(Boolean)
        .join(" · ");
    case "free_delete":
      return `${where} · kalan ${p.remaining ?? "?"}`;
    default:
      return (
        where ||
        Object.entries(p)
          .map(([k, v]) => `${k}=${v}`)
          .join(" ")
      );
  }
}

const Th = ({
  children,
  right,
}: {
  children: React.ReactNode;
  right?: boolean;
}) => (
  <th
    className={`whitespace-nowrap px-3 py-2 font-medium ${right ? "text-right" : "text-left"}`}
  >
    {children}
  </th>
);
const Td = ({
  children,
  right,
  mono,
  muted,
  wrap,
}: {
  children: React.ReactNode;
  right?: boolean;
  mono?: boolean;
  muted?: boolean;
  // Uzun metin (kod/mesaj, sürüm listesi) kırılabilir; diğer hücreler tek satır kalır.
  wrap?: boolean;
}) => (
  <td
    className={`${wrap ? "min-w-[160px] break-words" : "whitespace-nowrap"} px-3 py-1.5 ${right ? "text-right tabular-nums" : ""} ${mono ? "font-mono text-xs" : ""} ${muted ? "text-zinc-500" : ""}`}
  >
    {children}
  </td>
);

function Section({
  title,
  children,
  right,
}: {
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <section className="min-w-0 rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 px-4 py-3">
        <h2 className="font-semibold">{title}</h2>
        {right}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}

export function EventsPanel({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [days, setDays] = useState(30);
  const [os, setOs] = useState("");
  const [version, setVersion] = useState("");
  const [data, setData] = useState<Summary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = new URLSearchParams({ days: String(days) });
      if (os) q.set("os", os);
      if (version) q.set("version", version);
      const r = await fetch(`${API}/api/events/summary?${q}`, {
        cache: "no-store",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (r.status === 401) return onLogout();
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      setData(await r.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [days, os, version, token, onLogout]);

  useEffect(() => {
    load();
  }, [load]);

  const versions = useMemo(
    () =>
      Object.keys(data?.versions ?? {}).sort((a, b) =>
        b.localeCompare(a, undefined, { numeric: true }),
      ),
    [data],
  );
  const scans = data
    ? Object.entries(data.scans).sort(([, a], [, b]) => b.count - a.count)
    : [];
  const actions = data
    ? Object.entries(data.actions).sort(([, a], [, b]) => b.count - a.count)
    : [];
  const scanTotal = scans.reduce((a, [, s]) => a + s.count, 0);
  const emptyTotal = scans.reduce((a, [, s]) => a + s.empty, 0);
  const actionTotal = actions.reduce((a, [, s]) => a + s.count, 0);
  const failedTotal = actions.reduce((a, [, s]) => a + s.failed, 0);

  const select =
    "rounded-md bg-zinc-900 px-2 py-1.5 text-sm text-zinc-200 border border-zinc-800";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg bg-zinc-900 p-1">
          {[7, 30, 90].map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`rounded-md px-3 py-1 text-sm font-medium ${days === d ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {d} gün
            </button>
          ))}
        </div>
        <select
          value={os}
          onChange={(e) => setOs(e.target.value)}
          className={select}
        >
          <option value="">Tüm sistemler</option>
          <option value="darwin">Mac</option>
          <option value="win32">Windows</option>
        </select>
        <select
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className={select}
        >
          <option value="">Tüm sürümler</option>
          {versions.map((v) => (
            <option key={v} value={v}>
              v{v}
            </option>
          ))}
        </select>
        <button
          onClick={load}
          className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800"
        >
          Yenile
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          API&apos;ye ulaşılamadı: {error}
        </div>
      )}
      {loading && !data && <p className="text-zinc-500">Yükleniyor…</p>}

      {data && (
        <>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              {
                label: "Olay gönderen cihaz",
                value: fmt(data.devices),
                sub: `${fmt(data.events)} olay`,
                tone: "text-zinc-100",
              },
              {
                label: "Boş dönen tarama",
                value: pct(emptyTotal, scanTotal),
                sub: `${fmt(emptyTotal)} / ${fmt(scanTotal)} tarama`,
                tone: "text-amber-400",
              },
              {
                label: "Hatalı silme",
                value: pct(failedTotal, actionTotal),
                sub: `${fmt(failedTotal)} / ${fmt(actionTotal)} işlem`,
                tone: "text-red-400",
              },
              {
                label: "Harici sürücülü cihaz",
                value: fmt(data.volumes.external),
                sub: Object.keys(data.volumes.fs).length
                  ? top(data.volumes.fs, 4)
                  : "—",
                tone: "text-sky-400",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {c.label}
                </p>
                <p className={`mt-1 text-2xl font-bold tabular-nums ${c.tone}`}>
                  {c.value}
                </p>
                <p className="truncate text-xs text-zinc-400">{c.sub}</p>
              </div>
            ))}
          </div>

          <Section title={`Sorunlar (${data.issues.length})`}>
            {data.issues.length === 0 ? (
              <p className="px-4 py-3 text-sm text-zinc-500">Kayıt yok.</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="text-xs text-zinc-500">
                  <tr>
                    <Th>Neden</Th>
                    <Th>Yer</Th>
                    <Th>Kod / mesaj</Th>
                    <Th right>Cihaz</Th>
                    <Th right>Adet</Th>
                    <Th>Sürüm</Th>
                    <Th>Son</Th>
                    <Th>{""}</Th>
                  </tr>
                </thead>
                <tbody>
                  {data.issues.map((i) => (
                    <tr
                      key={[i.event, i.where, i.kind, i.code, i.msg].join("|")}
                      className="border-t border-zinc-800/60"
                    >
                      <Td>
                        <span
                          className={
                            i.kind === "empty" || i.kind === "denied_dirs"
                              ? "text-amber-400"
                              : "text-red-400"
                          }
                        >
                          {kindLabel(i.kind)}
                        </span>
                        <span className="ml-1.5 text-xs text-zinc-600">
                          {EVENT_LABELS[i.event] ?? i.event}
                        </span>
                      </Td>
                      <Td>{whereLabel(i.where)}</Td>
                      <Td mono muted wrap>
                        {[i.code, i.msg].filter(Boolean).join(" · ") || "—"}
                      </Td>
                      <Td right>{fmt(i.devices)}</Td>
                      <Td right>{fmt(i.count)}</Td>
                      <Td mono muted wrap>
                        {top(i.versions, 2)} ·{" "}
                        {Object.keys(i.os).map(osLabel).join("/")}
                      </Td>
                      <Td muted>{dateTime(i.last)}</Td>
                      <Td>
                        <button
                          onClick={() => setDevice(i.sampleDevice)}
                          className="text-xs text-sky-400 hover:underline"
                        >
                          Cihaz
                        </button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Section>

          <div className="grid gap-4 lg:grid-cols-2">
            <Section title="Taramalar">
              <table className="w-full text-sm">
                <thead className="text-xs text-zinc-500">
                  <tr>
                    <Th>Yer</Th>
                    <Th right>Tarama</Th>
                    <Th right>Cihaz</Th>
                    <Th right>Boş</Th>
                    <Th right>Okunamayan</Th>
                    <Th right>Ort. süre</Th>
                  </tr>
                </thead>
                <tbody>
                  {scans.map(([k, s]) => (
                    <tr key={k} className="border-t border-zinc-800/60">
                      <Td>{whereLabel(k)}</Td>
                      <Td right>{fmt(s.count)}</Td>
                      <Td right>{fmt(s.devices)}</Td>
                      <Td right>
                        <span className={s.empty > 0 ? "text-amber-400" : ""}>
                          {fmt(s.empty)}{" "}
                          <span className="text-xs text-zinc-500">
                            {pct(s.empty, s.count - s.cancelled)}
                          </span>
                        </span>
                      </Td>
                      <Td right>{fmt(s.denied)}</Td>
                      <Td right>
                        {s.avgMs >= 1000
                          ? `${(s.avgMs / 1000).toFixed(1)} sn`
                          : `${fmt(s.avgMs)} ms`}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section title="Silme işlemleri">
              <table className="w-full text-sm">
                <thead className="text-xs text-zinc-500">
                  <tr>
                    <Th>Yer</Th>
                    <Th right>İşlem</Th>
                    <Th right>Hatalı</Th>
                    <Th>Nedenler</Th>
                  </tr>
                </thead>
                <tbody>
                  {actions.map(([k, a]) => (
                    <tr key={k} className="border-t border-zinc-800/60">
                      <Td>{whereLabel(k)}</Td>
                      <Td right>{fmt(a.count)}</Td>
                      <Td right>
                        <span className={a.failed > 0 ? "text-red-400" : ""}>
                          {fmt(a.failed)}{" "}
                          <span className="text-xs text-zinc-500">
                            {pct(a.failed, a.count)}
                          </span>
                        </span>
                      </Td>
                      <Td muted>
                        {Object.entries(a.kinds)
                          .sort(([, x], [, y]) => y - x)
                          .map(([kind, n]) => `${kindLabel(kind)} ${n}`)
                          .join(", ") || "—"}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Section title="Son cihazlar">
              <table className="w-full text-sm">
                <thead className="text-xs text-zinc-500">
                  <tr>
                    <Th>Cihaz</Th>
                    <Th>Sistem</Th>
                    <Th right>Olay</Th>
                    <Th right>Sorun</Th>
                    <Th>Son</Th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentDevices.slice(0, 30).map((d) => (
                    <tr
                      key={d.id}
                      onClick={() => setDevice(d.id)}
                      className={`cursor-pointer border-t border-zinc-800/60 hover:bg-zinc-800/40 ${device === d.id ? "bg-zinc-800/60" : ""}`}
                    >
                      <Td mono muted>
                        {d.id.slice(0, 8)}
                      </Td>
                      <Td>
                        {osLabel(d.os)}{" "}
                        <span className="font-mono text-xs text-blue-400">
                          v{d.v}
                        </span>
                      </Td>
                      <Td right>{fmt(d.events)}</Td>
                      <Td right>
                        <span
                          className={
                            d.issues > 0 ? "text-red-400" : "text-zinc-500"
                          }
                        >
                          {fmt(d.issues)}
                        </span>
                      </Td>
                      <Td muted>{dateTime(d.last)}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section title="Sayfa açılışları">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(data.pages)
                    .sort(([, a], [, b]) => b - a)
                    .map(([k, n]) => (
                      <tr
                        key={k}
                        className="border-t border-zinc-800/60 first:border-t-0"
                      >
                        <Td>{PAGE_LABELS[k] ?? k}</Td>
                        <Td right>{fmt(n)}</Td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Section>
          </div>

          <DeviceTimeline
            token={token}
            onLogout={onLogout}
            id={device}
            setId={setDevice}
            days={days}
          />
        </>
      )}
    </div>
  );
}

function DeviceTimeline({
  token,
  onLogout,
  id,
  setId,
  days,
}: {
  token: string;
  onLogout: () => void;
  id: string;
  setId: (id: string) => void;
  days: number;
}) {
  const [input, setInput] = useState(id);
  const [data, setData] = useState<Timeline | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => setInput(id), [id]);

  useEffect(() => {
    if (!id) {
      setData(null);
      return;
    }
    setLoading(true);
    fetch(
      `${API}/api/events/device?id=${encodeURIComponent(id)}&days=${days}`,
      { cache: "no-store", headers: { Authorization: `Bearer ${token}` } },
    )
      .then((r) => {
        if (r.status === 401) {
          onLogout();
          throw new Error("unauthorized");
        }
        return r.json();
      })
      .then((j: Timeline) => setData(j))
      .catch(() => setData({ device: null, events: [] }))
      .finally(() => setLoading(false));
  }, [id, days, token, onLogout]);

  const issue = (e: TimelineEvent) =>
    (e.n === "action_end" && (Number(e.p.failed) > 0 || !!e.p.kind)) ||
    (e.n === "scan_end" && !e.p.cancelled && Number(e.p.items) === 0) ||
    e.n === "error";

  return (
    <Section
      title="Cihaz akışı"
      right={
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setId(input.trim());
          }}
          className="flex w-full gap-2 sm:w-auto"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Cihaz kimliği"
            className="min-w-0 flex-1 rounded-md sm:w-72 sm:flex-none border border-zinc-800 bg-zinc-950 px-2 py-1 font-mono text-xs text-zinc-200"
          />
          <button className="rounded-md bg-zinc-800 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-700">
            Göster
          </button>
        </form>
      }
    >
      {!id ? (
        <p className="px-4 py-3 text-sm text-zinc-500">Cihaz seçilmedi.</p>
      ) : loading ? (
        <p className="px-4 py-3 text-sm text-zinc-500">Yükleniyor…</p>
      ) : (
        <>
          {data?.device && (
            <p className="border-b border-zinc-800 px-4 py-2 text-xs text-zinc-400">
              {osLabel(data.device.os)} {data.device.osVersion}{" "}
              {data.device.arch} · v{data.device.appVersion} ·{" "}
              {fmt(data.device.launches)} açılış · ilk{" "}
              {dateTime(data.device.firstSeen)} · son{" "}
              {dateTime(data.device.lastSeen)}
            </p>
          )}
          {!data?.events.length ? (
            <p className="px-4 py-3 text-sm text-zinc-500">
              Bu cihazdan olay yok.
            </p>
          ) : (
            <table className="w-full text-sm">
              <tbody>
                {data.events.map((e, i) => (
                  <tr
                    key={i}
                    className="border-t border-zinc-800/60 first:border-t-0"
                  >
                    <Td muted>{dateTime(e.t)}</Td>
                    <Td>
                      <span
                        className={issue(e) ? "text-red-400" : "text-zinc-300"}
                      >
                        {EVENT_LABELS[e.n] ?? e.n}
                      </span>
                    </Td>
                    <Td>{describe(e)}</Td>
                    <Td mono muted>
                      v{e.v}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </Section>
  );
}
