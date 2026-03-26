import { Quote } from "@/lib/types";

export function QuoteBlock({ quote }: { quote: Quote }) {
  return (
    <blockquote className="relative rounded-lg border-l-4 border-amber-500 bg-amber-50/50 py-4 pl-6 pr-4 dark:bg-amber-950/20">
      <span className="absolute -top-2 left-2 text-4xl text-amber-300 dark:text-amber-700">
        &ldquo;
      </span>
      <p className="relative italic text-zinc-700 dark:text-zinc-300">
        {quote.text}
      </p>
      {quote.source && (
        <cite className="mt-2 block text-sm not-italic text-zinc-500 dark:text-zinc-400">
          &mdash; {quote.source}
        </cite>
      )}
    </blockquote>
  );
}
