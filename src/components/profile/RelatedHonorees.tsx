import Link from "next/link";
import { Honoree } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RelatedHonorees({ honorees }: { honorees: Honoree[] }) {
  if (honorees.length === 0) return null;

  return (
    <section>
      <SectionHeading>Others in This Category</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-3">
        {honorees.map((h) => (
          <Link
            key={h.slug}
            href={`/honoree/${h.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4 transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-700 dark:to-amber-900">
              <span className="text-sm font-bold text-white">
                {h.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="font-semibold text-zinc-900 group-hover:text-amber-700 dark:text-zinc-100 dark:group-hover:text-amber-400">
                {h.name}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {h.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
