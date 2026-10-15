"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function EmailCopy({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="email-copy-wrapper">
      <div className="email-pill">
        <a href={`mailto:${email}`}>{email}</a>
        <button type="button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">
          {status === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        </button>
      </div>
      <p className="email-copy-feedback" role="status" aria-live="polite" aria-atomic="true">
        {status === "copied" ? "Copied!" : status === "failed" ? "Could not copy. Select the email address and copy it manually." : ""}
      </p>
    </div>
  );
}
