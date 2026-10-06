"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Check, Copy, LogOut } from "lucide-react";
import { releaseLicenseDevice, signOut } from "@/app/actions/account";

export function CopyKeyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-500" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}

export function ReleaseDeviceButton({
  licenseId,
  label,
  pendingLabel,
  confirmText,
  doneText,
  errorText,
}: {
  licenseId: string;
  label: string;
  pendingLabel: string;
  confirmText: string;
  doneText: string;
  errorText: string;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(
    null,
  );

  return (
    <div className="flex flex-col items-start gap-1 sm:items-end">
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          if (!window.confirm(confirmText)) return;
          startTransition(async () => {
            const result = await releaseLicenseDevice(licenseId);
            setMessage(
              result.ok
                ? { ok: true, text: doneText }
                : { ok: false, text: errorText },
            );
            if (result.ok) router.refresh();
          });
        }}
        className="h-8 rounded-lg border border-border bg-background px-2.5 text-xs font-medium text-foreground hover:border-red-500/50 hover:text-red-500 transition-colors disabled:opacity-50"
      >
        {pending ? pendingLabel : label}
      </button>
      {message && (
        <p
          className={`text-xs ${
            message.ok ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}

export function SignOutButton({
  locale,
  label,
}: {
  locale: string;
  label: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => signOut(locale))}
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-background px-3.5 text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-50"
    >
      <LogOut className="w-4 h-4 text-muted-foreground" />
      <span>{label}</span>
    </button>
  );
}
