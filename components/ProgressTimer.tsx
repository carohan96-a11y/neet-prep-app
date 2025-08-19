"use client";
import { useEffect, useMemo, useState } from "react";

export default function ProgressTimer({ total, current, seconds=60, onTimeUp } : { total: number; current: number; seconds?: number; onTimeUp?: () => void }) {
  const [t, setT] = useState(seconds);
  useEffect(() => { setT(seconds); }, [current, seconds]);
  useEffect(() => {
    const id = setInterval(() => setT(v => {
      if (v <= 1) { clearInterval(id); onTimeUp?.(); return 0; }
      return v - 1;
    }), 1000);
    return () => clearInterval(id);
  }, [current]);
  const pct = useMemo(() => Math.max(0, Math.min(100, (current/total)*100)), [current, total]);
  const timePct = useMemo(() => Math.max(0, Math.min(100, (t/seconds)*100)), [t, seconds]);
  return (
    <div className="mb-4">
      <div className="h-2 w-full rounded-full bg-white/40 dark:bg-slate-800/60 overflow-hidden">
        <div className="h-full bg-brand-600" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/40 dark:bg-slate-800/60 overflow-hidden">
        <div className="h-full bg-emerald-500" style={{ width: `${timePct}%` }} />
      </div>
      <div className="text-sm opacity-80 mt-1 flex justify-between">
        <span>Question {current} / {total}</span>
        <span>{t}s</span>
      </div>
    </div>
  );
}
