import { SectionHeading } from "@/components/ui/SectionHeading";

export function ImpactSection({ statement }: { statement: string }) {
  return (
    <section>
      <SectionHeading>Why They Changed Society</SectionHeading>
      <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 dark:border-amber-900/50 dark:from-amber-950/20 dark:to-zinc-950">
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {statement}
        </p>
      </div>
    </section>
  );
}
