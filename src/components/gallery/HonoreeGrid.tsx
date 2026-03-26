import { Honoree } from "@/lib/types";
import { HonoreeCard } from "@/components/gallery/HonoreeCard";

export function HonoreeGrid({ honorees }: { honorees: Honoree[] }) {
  if (honorees.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          No honorees found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {honorees.map((honoree) => (
        <HonoreeCard key={honoree.slug} honoree={honoree} />
      ))}
    </div>
  );
}
