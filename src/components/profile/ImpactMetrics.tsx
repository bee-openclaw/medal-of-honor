"use client";

import { useEffect, useRef, useState } from "react";
import { ImpactMetric } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function MetricCard({ metric }: { metric: ImpactMetric }) {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 text-center transition-all duration-500 dark:border-amber-900/50 dark:from-amber-950/20 dark:to-zinc-950 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
      }`}
    >
      {metric.icon && (
        <span className="text-2xl">{metric.icon}</span>
      )}
      <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 sm:text-3xl">
        {metric.value}
      </p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {metric.label}
      </p>
    </div>
  );
}

export function ImpactMetrics({ metrics }: { metrics: ImpactMetric[] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section>
      <SectionHeading>Impact by the Numbers</SectionHeading>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}
