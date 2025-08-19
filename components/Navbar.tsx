"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, FlameKindling } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const d = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
  }, []);
  const toggle = () => {
    setDark((v) => {
      document.documentElement.classList.toggle("dark", !v);
      return !v;
    });
  };
  return (
    <header className="sticky top-0 z-50">
      <div className="gradient-hero h-24 w-full absolute inset-0 opacity-80 blur-2xl -z-10" />
      <nav className="container-p py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-white/40 dark:bg-slate-900/70">
            <FlameKindling className="w-5 h-5 text-brand-700" />
          </div>
          <span className="font-bold text-lg">NEET Pro</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="btn btn-ghost">Dashboard</Link>
          <Link href="/quiz" className="btn btn-primary">Start Practice</Link>
          <button onClick={toggle} className="btn btn-ghost" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
