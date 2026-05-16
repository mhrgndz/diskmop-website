'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle, Copy, Download, ArrowLeft, Monitor, Laptop } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

function generateMockLicenseKey(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const segments = 4;
  const segmentLength = 5;
  const parts: string[] = [];
  for (let i = 0; i < segments; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      segment += chars[Math.floor(Math.random() * chars.length)];
    }
    parts.push(segment);
  }
  return parts.join('-');
}

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    const particles: Array<{
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      vx: number;
      vy: number;
      rotation: number;
      rotSpeed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 8 + 4,
        h: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
      });
    }

    let animationId: number;
    let frame = 0;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (frame > 120) p.opacity -= 0.005;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (frame < 300) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}

export default function SuccessPage() {
  const t = useTranslations('success');
  const [licenseKey] = useState(generateMockLicenseKey);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Confetti />
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl font-bold mt-6">{t('title')}</h1>
          <p className="text-muted-foreground mt-2">{t('subtitle')}</p>

          <div className="mt-8 bg-card rounded-2xl border p-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {t('licenseLabel')}
            </p>
            <div className="flex items-center gap-2 justify-center bg-muted rounded-xl p-4">
              <code className="text-lg font-mono font-bold tracking-wider">
                {licenseKey}
              </code>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-background rounded-lg transition-colors"
              >
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t('licenseNote')}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-semibold text-lg mb-4">{t('downloadTitle')}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {t('downloadSubtitle')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://api.diskmop.com/download/windows"
                className="flex items-center gap-3 bg-card border rounded-xl p-4 hover:border-brand-500/50 hover:shadow-md transition-all"
              >
                <Monitor className="w-8 h-8 text-brand-500" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Windows</p>
                  <p className="text-xs text-muted-foreground">v1.0.0 • ~80 MB</p>
                </div>
                <Download className="w-4 h-4 ml-auto text-muted-foreground" />
              </a>
              <a
                href="https://api.diskmop.com/download/mac"
                className="flex items-center gap-3 bg-card border rounded-xl p-4 hover:border-brand-500/50 hover:shadow-md transition-all"
              >
                <Laptop className="w-8 h-8 text-brand-500" />
                <div className="text-left">
                  <p className="font-semibold text-sm">macOS</p>
                  <p className="text-xs text-muted-foreground">v1.0.0 • ~175 MB</p>
                </div>
                <Download className="w-4 h-4 ml-auto text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backHome')}
            </Link>
          </div>

          <div className="mt-6">
            <Image
              src="/brand/icon.svg"
              alt="Disk Mop"
              width={32}
              height={32}
              className="mx-auto opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
