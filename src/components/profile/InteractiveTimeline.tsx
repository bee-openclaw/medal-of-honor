"use client";

import { useState, useEffect, useRef } from "react";
import { TimelineEvent } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TimelineItem({
  event,
  isExpanded,
  onToggle,
}: {
  event: TimelineEvent;
  isExpanded: boolean;
  onToggle: () => void;
}) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-6 last:pb-0 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="absolute left-0 top-1 h-full w-px bg-amber-300 last:hidden dark:bg-amber-700" />
      <div
        className={`absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border-2 transition-colors duration-200 ${
          isExpanded
            ? "border-amber-500 bg-amber-500"
            : "border-amber-500 bg-white dark:bg-zinc-950"
        }`}
      />
      <button
        onClick={onToggle}
        className="w-full text-left group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
            {event.year}
          </span>
          <svg
            className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-amber-700 dark:text-zinc-100 dark:group-hover:text-amber-400">
          {event.title}
        </h3>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export function InteractiveTimeline({ events }: { events: TimelineEvent[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section>
      <SectionHeading>Timeline</SectionHeading>
      <div className="ml-1">
        {events.map((event, i) => (
          <TimelineItem
            key={`${event.year}-${event.title}`}
            event={event}
            isExpanded={expandedIndex === i}
            onToggle={() =>
              setExpandedIndex(expandedIndex === i ? null : i)
            }
          />
        ))}
      </div>
    </section>
  );
}
