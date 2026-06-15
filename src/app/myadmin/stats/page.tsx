'use client';

import { useEffect, useState } from 'react';

interface DownloadStats {
  windows: number;
  mac: number;
  total: number;
  detail: Record<string, number>;
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

interface InstallationStats {
  total: number;
  active30: number;
  active7: number;
  platforms: Record<string, number>;
  devices: Device[];
}

const API = 'https://api.diskmop.com';

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'az önce';
  if (mins < 60) return `${mins}dk önce`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}sa önce`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}g önce`;
  const months = Math.floor(days / 30);
  return `${months}ay önce`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function osLabel(os: string): string {
  if (os === 'win32') return 'Windows';
  if (os === 'darwin') return 'macOS';
  if (os === 'linux') return 'Linux';
  return os;
}

export default function StatsPage() {
  const [downloads, setDownloads] = useState<DownloadStats | null>(null);
  const [installs, setInstalls] = useState<InstallationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<'downloads' | 'installs'>('installs');

  useEffect(() => {
    const empty: InstallationStats = { total: 0, active30: 0, active7: 0, platforms: {}, devices: [] };
    Promise.all([
      fetch(`${API}/api/download-stats`).then((r) => r.json()).catch(() => null),
      fetch(`${API}/api/installations`).then((r) => r.json()).catch(() => null),
    ])
      .then(([dl, inst]) => {
        if (dl) setDownloads(dl);
        setInstalls(inst ? {
          total: inst.total ?? 0,
          active30: inst.active30 ?? 0,
          active7: inst.active7 ?? 0,
          platforms: inst.platforms ?? {},
          devices: inst.devices ?? [],
        } : empty);
      })
      .catch(() => setError('API bağlantı hatası'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-red-400">
          API Hatası: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">DiskMop — Admin</h1>
          <p className="text-zinc-500 mt-1 text-sm">İndirme & Kurulum İstatistikleri</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-zinc-900 rounded-lg p-1 w-fit">
          <button
            onClick={() => setTab('installs')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tab === 'installs'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Kurulumlar
          </button>
          <button
            onClick={() => setTab('downloads')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tab === 'downloads'
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            İndirmeler
          </button>
        </div>

        {tab === 'installs' && installs && <InstallsTab data={installs} />}
        {tab === 'downloads' && downloads && <DownloadsTab data={downloads} />}
      </div>
    </div>
  );
}

function InstallsTab({ data }: { data: InstallationStats }) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Toplam Kurulum" value={data.total} color="green" />
        <StatCard label="Aktif (30 gün)" value={data.active30} color="blue" />
        <StatCard label="Aktif (7 gün)" value={data.active7} color="cyan" />
      </div>

      {/* Platform Breakdown */}
      {Object.keys(data.platforms).length > 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Platform Dağılımı</h2>
          <div className="flex gap-6">
            {Object.entries(data.platforms)
              .sort(([, a], [, b]) => b - a)
              .map(([platform, count]) => (
                <div key={platform} className="flex items-center gap-2">
                  <span className="text-sm font-mono bg-zinc-800 px-2.5 py-1 rounded text-zinc-300">
                    {osLabel(platform)}
                  </span>
                  <span className="text-sm text-zinc-400">{count}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Device List */}
      {data.devices.length > 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-6 pb-4">
            <h2 className="text-lg font-semibold">Cihazlar ({data.total})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-zinc-800 text-zinc-500 text-left">
                  <th className="px-6 py-3 font-medium">ID</th>
                  <th className="px-6 py-3 font-medium">OS</th>
                  <th className="px-6 py-3 font-medium">Versiyon</th>
                  <th className="px-6 py-3 font-medium">Arch</th>
                  <th className="px-6 py-3 font-medium">App</th>
                  <th className="px-6 py-3 font-medium">Açılış</th>
                  <th className="px-6 py-3 font-medium">İlk Görülme</th>
                  <th className="px-6 py-3 font-medium">Son Görülme</th>
                </tr>
              </thead>
              <tbody>
                {data.devices.map((device) => {
                  const isRecent =
                    Date.now() - new Date(device.lastSeen).getTime() < 7 * 24 * 60 * 60 * 1000;
                  return (
                    <tr
                      key={device.id}
                      className="border-t border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                    >
                      <td className="px-6 py-3 font-mono text-zinc-400">{device.id}</td>
                      <td className="px-6 py-3">{osLabel(device.os)}</td>
                      <td className="px-6 py-3 font-mono text-xs text-zinc-400">
                        {device.osVersion}
                      </td>
                      <td className="px-6 py-3 text-zinc-400">{device.arch}</td>
                      <td className="px-6 py-3">
                        <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs font-mono">
                          v{device.appVersion}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-zinc-400">{device.launches}</td>
                      <td className="px-6 py-3 text-zinc-500 text-xs">{formatDate(device.firstSeen)}</td>
                      <td className="px-6 py-3">
                        <span
                          className={`text-xs ${isRecent ? 'text-green-400' : 'text-zinc-500'}`}
                        >
                          {timeAgo(device.lastSeen)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function DownloadsTab({ data }: { data: DownloadStats }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Toplam" value={data.total} color="blue" />
        <StatCard label="Windows" value={data.windows} color="cyan" />
        <StatCard label="macOS" value={data.mac} color="purple" />
      </div>

      {Object.keys(data.detail).length > 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Platform Detayı</h2>
          <div className="space-y-3">
            {Object.entries(data.detail)
              .sort(([, a], [, b]) => b - a)
              .map(([platform, count]) => (
                <div key={platform} className="flex items-center justify-between">
                  <span className="text-sm font-mono bg-zinc-800 px-2.5 py-1 rounded text-zinc-300">
                    {platform}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-zinc-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{
                          width: `${data.total > 0 ? (count / data.total) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-mono text-zinc-400 w-16 text-right">
                      {count.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: 'blue' | 'cyan' | 'purple' | 'green';
}) {
  const colors = {
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400',
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20 text-purple-400',
    green: 'from-green-500/20 to-green-500/5 border-green-500/20 text-green-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-6`}>
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="text-4xl font-bold mt-1 tracking-tight">{value.toLocaleString()}</p>
    </div>
  );
}
