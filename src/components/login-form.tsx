"use client";

import { useState, useTransition } from "react";
import { requestSignInCode, verifySignInCode } from "@/app/actions/account";

export interface LoginLabels {
  emailLabel: string;
  emailPlaceholder: string;
  sendCode: string;
  sending: string;
  codeTitle: string;
  codeSent: string;
  codeLabel: string;
  verify: string;
  verifying: string;
  resend: string;
  resent: string;
  otherEmail: string;
  errors: Record<string, string>;
}

export function LoginForm({
  locale,
  next,
  labels,
}: {
  locale: string;
  next: string | null;
  labels: LoginLabels;
}) {
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const sendCode = (again = false) => {
    setError(null);
    setNotice(null);
    startTransition(async () => {
      const result = await requestSignInCode(email, locale);
      if (!result.ok) {
        setError(labels.errors[result.error] || labels.errors.generic);
        return;
      }
      setStep("code");
      setCode("");
      if (again) setNotice(labels.resent);
    });
  };

  const verify = () => {
    setError(null);
    setNotice(null);
    startTransition(async () => {
      const result = await verifySignInCode(email, code, locale, next);
      if (result && !result.ok) {
        setError(labels.errors[result.error] || labels.errors.generic);
      }
    });
  };

  const inputClass =
    "block h-11 w-full rounded-xl border border-border bg-background px-3.5 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all";
  const buttonClass =
    "inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand-500 px-4 text-[15px] font-medium text-white transition-colors hover:bg-brand-600 disabled:opacity-50";

  return (
    <div>
      {step === "email" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendCode();
          }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              {labels.emailLabel}
            </label>
            <input
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={labels.emailPlaceholder}
              className={inputClass}
            />
          </div>
          <button type="submit" disabled={pending} className={buttonClass}>
            {pending ? labels.sending : labels.sendCode}
          </button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            verify();
          }}
          className="space-y-4"
        >
          <div>
            <p className="text-sm font-medium text-foreground">
              {labels.codeTitle}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {labels.codeSent.replace("{email}", email)}
            </p>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              {labels.codeLabel}
            </label>
            <input
              type="text"
              required
              autoComplete="one-time-code"
              inputMode="numeric"
              autoFocus
              pattern="\s*(\d\s*){6}"
              maxLength={11}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={`${inputClass} text-center font-mono text-xl tracking-[0.3em]`}
            />
          </div>
          <button type="submit" disabled={pending} className={buttonClass}>
            {pending ? labels.verifying : labels.verify}
          </button>
          <div className="flex flex-wrap justify-between gap-2 pt-1 text-xs">
            <button
              type="button"
              onClick={() => sendCode(true)}
              disabled={pending}
              className="text-brand-500 hover:underline"
            >
              {labels.resend}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("email");
                setError(null);
                setNotice(null);
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              {labels.otherEmail}
            </button>
          </div>
        </form>
      )}

      <div aria-live="polite" className="mt-3 min-h-5 text-xs">
        {error && (
          <p className="text-red-500 dark:text-red-400 font-medium">{error}</p>
        )}
        {notice && !error && (
          <p className="text-emerald-500 dark:text-emerald-400 font-medium">
            {notice}
          </p>
        )}
      </div>
    </div>
  );
}
