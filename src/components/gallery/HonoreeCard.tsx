import Link from "next/link";
import { Honoree } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { VoteButton } from "@/components/voting/VoteButton";
import { categories } from "@/data/categories";

export function HonoreeCard({ honoree }: { honoree: Honoree }) {
  const category = categories.find((c) => c.id === honoree.category);

  return (
    <Link
      href={`/honoree/${honoree.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30">
        <Avatar
          name={honoree.name}
          src={honoree.portraitImage}
          size="fill"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 min-w-0">
          <h3 className="text-base font-bold text-zinc-900 group-hover:text-amber-700 dark:text-zinc-100 dark:group-hover:text-amber-400 sm:text-lg truncate">
            {honoree.name}
          </h3>
          {category && (
            <Badge category={honoree.category} label={category.label} />
          )}
        </div>
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {honoree.title}
        </p>
        <p className="mt-1 line-clamp-3 text-sm text-zinc-500 dark:text-zinc-500">
          {honoree.summary}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex flex-wrap gap-1.5">
            {honoree.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <VoteButton slug={honoree.slug} size="sm" />
        </div>
      </div>
    </Link>
  );
}
