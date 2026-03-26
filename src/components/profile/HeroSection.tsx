import { Honoree } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Medal } from "@/components/ui/Medal";
import { Avatar } from "@/components/ui/Avatar";
import { VoteButton } from "@/components/voting/VoteButton";
import { ImpactScoreMeter } from "@/components/profile/ImpactScoreMeter";
import { categories } from "@/data/categories";

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function HeroSection({ honoree }: { honoree: Honoree }) {
  const category = categories.find((c) => c.id === honoree.category);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3">
          <Medal className="h-full w-full" />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <Avatar
            name={honoree.name}
            src={honoree.portraitImage}
            size="xl"
            className="shrink-0 rounded-full border-4 border-amber-400 shadow-lg dark:border-amber-600"
          />
          <div className="text-center sm:text-left">
            {category && (
              <div className="mb-3">
                <Badge category={honoree.category} label={category.label} />
              </div>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl break-words">
              {honoree.name}
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 sm:justify-start">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
                {honoree.title}
              </p>
              <VoteButton slug={honoree.slug} size="lg" />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 sm:justify-start">
              <span>Born: {formatDate(honoree.born)}</span>
              {honoree.died && <span>Died: {formatDate(honoree.died)}</span>}
              <span>{honoree.birthPlace}</span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {honoree.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {honoree.impactScore != null && (
              <div className="mt-4 max-w-md">
                <ImpactScoreMeter score={honoree.impactScore} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
