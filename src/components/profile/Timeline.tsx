import { TimelineEvent } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TimelineItem({ event }: { event: TimelineEvent }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1 h-full w-px bg-amber-300 dark:bg-amber-700 last:hidden" />
      <div className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-amber-500 bg-white dark:bg-zinc-950" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
          {event.year}
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {event.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <section>
      <SectionHeading>Timeline</SectionHeading>
      <div className="ml-1">
        {events.map((event) => (
          <TimelineItem key={`${event.year}-${event.title}`} event={event} />
        ))}
      </div>
    </section>
  );
}
