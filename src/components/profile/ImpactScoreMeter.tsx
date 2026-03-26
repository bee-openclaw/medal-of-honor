"use client";

import { useEffect, useRef, useState } from "react";

export function ImpactScoreMeter({ score }: { score: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-4">
      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
        Impact Score
      </span>
      <div className="relative flex-1 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${score}%` : "0%" }}
        />
      </div>
      <span
        className={`text-lg font-bold transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          score >= 90
            ? "text-amber-600 dark:text-amber-400"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
      >
        {score}
      </span>
    </div>
  );
}
