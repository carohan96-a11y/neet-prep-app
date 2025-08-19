"use client";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import QuestionCard from "@/components/QuestionCard";
import ProgressTimer from "@/components/ProgressTimer";
import data from "@/data/questions.json";
import Link from "next/link";

type Q = typeof data[number];

export default function Quiz() {
  const [subject, setSubject] = useState<"All"|"Physics"|"Chemistry"|"Biology">("All");
  const [difficulty, setDifficulty] = useState<"All"|"Easy"|"Medium"|"Hard">("All");
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const filtered = useMemo(() => data.filter(q =>
    (subject==="All" || q.subject===subject) &&
    (difficulty==="All" || q.difficulty===difficulty)
  ), [subject, difficulty]);

  useEffect(() => setI(0), [subject, difficulty]);

  const q = filtered[i];
  const onAttempt = (ok: boolean) => {
    setAttempts(a => a+1);
    if (ok) setCorrect(c => c+1);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-p py-6">
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <select value={subject} onChange={e=>setSubject(e.target.value as any)} className="glass px-3 py-2 rounded-xl">
            <option>All</option><option>Physics</option><option>Chemistry</option><option>Biology</option>
          </select>
          <select value={difficulty} onChange={e=>setDifficulty(e.target.value as any)} className="glass px-3 py-2 rounded-xl">
            <option>All</option><option>Easy</option><option>Medium</option><option>Hard</option>
          </select>
          <div className="ml-auto text-sm opacity-70">Accuracy: {attempts? Math.round((correct/attempts)*100):0}%</div>
        </div>

        <ProgressTimer total={filtered.length} current={i+1} seconds={60} onTimeUp={()=> setI(x => Math.min(x+1, filtered.length-1))} />

        {q ? (
          <div className="space-y-4">
            <QuestionCard q={q} onAttempt={onAttempt} />
            <div className="flex justify-between">
              <button onClick={()=> setI(i=> Math.max(0, i-1))} className="btn btn-ghost">Prev</button>
              {i < filtered.length-1 ? (
                <button onClick={()=> setI(i=> i+1)} className="btn btn-primary">Next</button>
              ) : (
                <Link href={`/results?attempts=${attempts}&correct=${correct}`} className="btn btn-primary">Finish</Link>
              )}
            </div>
          </div>
        ) : (
          <div className="card">No questions match the selected filters.</div>
        )}
      </div>
    </div>
  );
}
