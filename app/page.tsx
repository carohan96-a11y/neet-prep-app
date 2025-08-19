"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="gradient-hero absolute inset-0 opacity-90 -z-10" />
      <Navbar />
      <section className="container-p pt-16 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Crack NEET with <span className="underline decoration-white/60">smart practice</span>.
          </h1>
          <p className="mt-4 text-lg opacity-90">
            20,000+ MCQs • Spaced repetition • Detailed analytics • Bookmarks • Explanations.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/quiz" className="btn btn-primary bg-white text-slate-900 hover:bg-white/90">Start free practice</Link>
            <Link href="/dashboard" className="btn btn-ghost text-white border border-white/40">View dashboard</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-3">Why students love it</h3>
          <ul className="space-y-2 opacity-90">
            <li>• Subject & difficulty filters</li>
            <li>• Timer + progress bars</li>
            <li>• Explanations after attempt</li>
            <li>• Bookmarks & review later</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="glass p-4 text-center">🔥 Daily goals</div>
            <div className="glass p-4 text-center">📈 Accuracy trends</div>
            <div className="glass p-4 text-center">⏱️ Time per question</div>
            <div className="glass p-4 text-center">🏷️ Chapter-wise practice</div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
