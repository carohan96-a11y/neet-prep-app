"use client";
import { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

type Q = {
  id: string;
  subject: "Physics"|"Chemistry"|"Biology";
  chapter: string;
  difficulty: "Easy"|"Medium"|"Hard";
  question: string;
  options: { key: "A"|"B"|"C"|"D"; text: string }[];
  answer: "A"|"B"|"C"|"D";
  explanation?: string;
};

export default function QuestionCard({ q, onAttempt }: { q: Q; onAttempt: (correct: boolean) => void }) {
  const [chosen, setChosen] = useState<null | "A"|"B"|"C"|"D">(null);
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);

  const submit = (pick: "A"|"B"|"C"|"D") => {
    if (chosen) return;
    setChosen(pick);
    const ok = pick === q.answer;
    onAttempt(ok);
    setShow(true);
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="badge">{q.subject}</span>
          <span className="badge">{q.chapter}</span>
          <span className="badge">{q.difficulty}</span>
        </div>
        <button onClick={() => setSaved(s => !s)} className="btn btn-ghost">
          {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-lg font-semibold mb-4">{q.question}</p>

      <div className="grid gap-2">
        {q.options.map((o) => {
          const isPicked = chosen === o.key;
          const isCorrect = o.key === q.answer;
          const state = chosen
            ? isCorrect
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : isPicked
                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                : "border-transparent"
            : "border-transparent hover:border-brand-600";
          return (
            <button
              key={o.key}
              disabled={!!chosen}
              onClick={() => submit(o.key)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition ${state}`}
            >
              <span className="font-semibold mr-2">{o.key}.</span>
              {o.text}
            </button>
          );
        })}
      </div>

      {show && (
        <div className="mt-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700">
          <p className="font-semibold mb-1">Explanation</p>
          <p className="opacity-90">{q.explanation || "No explanation provided."}</p>
        </div>
      )}
    </div>
  );
}
