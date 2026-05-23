'use client';

import { useEffect, useState, useRef, useCallback, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Copy,
  Download,
  ArrowLeft,
  Monitor,
  Laptop,
  Loader2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

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

interface CheckoutData {
  email: string | null;
  licenseKey: string | null;
  product: string;
}

function SuccessContent() {
  const t = useTranslations('success');
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get('checkout_id');

  const [data, setData] = useState<CheckoutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const retryRef = useRef(0);

  const fetchCheckout = useCallback(async () => {
    if (!checkoutId) {
      setLoading(false);
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const res = await fetch(`https://api.diskmop.com/api/checkout/${checkoutId}`);
      if (!res.ok) throw new Error('fetch_failed');
      const result: CheckoutData = await res.json();

      if (!result.licenseKey && retryRef.current < 3) {
        retryRef.current += 1;
        setTimeout(() => fetchCheckout(), 2000);
        return;
      }

      setData(result);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, [checkoutId]);

  useEffect(() => {
    fetchCheckout();
  }, [fetchCheckout]);

  const handleCopy = async () => {
    if (!data?.licenseKey) return;
    await navigator.clipboard.writeText(data.licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRetry = () => {
    retryRef.current = 0;
    fetchCheckout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 text-brand-500 mx-auto animate-spin" />
          <h2 className="text-xl font-semibold mt-4">{t('loading')}</h2>
          <p className="text-muted-foreground mt-2 text-sm">{t('loadingSubtitle')}</p>
        </motion.div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <AlertCircle className="w-16 h-16 text-amber-500 mx-auto" />
          <h2 className="text-2xl font-bold mt-4">{t('error')}</h2>
          <p className="text-muted-foreground mt-2">{t('errorDesc')}</p>
          {checkoutId && (
            <button
              onClick={handleRetry}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              {t('retry')}
            </button>
          )}
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backHome')}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

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

          {data.licenseKey && (
            <div className="mt-8 bg-card rounded-2xl border p-6">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                {t('licenseLabel')}
              </p>
              <div className="flex items-center gap-2 justify-center bg-muted rounded-xl p-4">
                <code className="text-lg font-mono font-bold tracking-wider">
                  {data.licenseKey}
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
          )}

          <div className="mt-8 bg-card rounded-2xl border p-6 text-left">
            <h3 className="font-semibold text-sm mb-4">{t('stepsTitle')}</h3>
            <div className="space-y-3">
              {[t('step1'), t('step2'), t('step3')].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
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
                  <p className="text-xs text-muted-foreground">Setup • ~80 MB</p>
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
                  <p className="text-xs text-muted-foreground">DMG • ~175 MB</p>
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

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
