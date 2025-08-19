"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Dashboard() {
  const cards = [
    { title: "Accuracy", value: "78%", hint: "+4% this week" },
    { title: "Total Attempted", value: "1,240", hint: "across all subjects" },
    { title: "Streak", value: "12 days", hint: "keep it up!" },
    { title: "Avg. Time/Q", value: "38s", hint: "speed improving" },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-p py-10">
        <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:i*0.05}} className="card">
              <div className="text-sm opacity-70">{c.title}</div>
              <div className="text-3xl font-extrabold">{c.value}</div>
              <div className="text-xs opacity-70 mt-1">{c.hint}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="card h-64">Subject-wise chart (hook up Recharts later)</div>
          <div className="card h-64">Chapter weakness map (coming soon)</div>
        </div>
      </div>
    </div>
  );
}
