"use client";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Results() {
  const p = useSearchParams();
  const attempts = Number(p.get("attempts") || 0);
  const correct = Number(p.get("correct") || 0);
  const accuracy = attempts ? Math.round((correct/attempts)*100) : 0;
  const [w, setW] = useState(1200);
  const [h, setH] = useState(800);
  useEffect(() => {
    setW(window.innerWidth);
    setH(window.innerHeight);
  }, []);
  return (
    <div className="min-h-screen relative">
      <Navbar />
      {accuracy >= 60 && <Confetti width={w} height={h} recycle={false} />}
      <div className="container-p py-10">
        <div className="card text-center">
          <h1 className="text-3xl font-extrabold">Your Results</h1>
          <p className="opacity-80 mt-2">Nice work! Keep the streak going.</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="glass p-6"><div className="text-sm opacity-70">Attempted</div><div className="text-3xl font-bold">{attempts}</div></div>
            <div className="glass p-6"><div className="text-sm opacity-70">Correct</div><div className="text-3xl font-bold">{correct}</div></div>
            <div className="glass p-6"><div className="text-sm opacity-70">Accuracy</div><div className="text-3xl font-bold">{accuracy}%</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
