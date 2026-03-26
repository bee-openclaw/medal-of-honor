"use client";

import { useState } from "react";
import { Contribution } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ContributionImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain p-2"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function KeyContributions({
  contributions,
}: {
  contributions: Contribution[];
}) {
  return (
    <section>
      <SectionHeading>Key Contributions</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {contributions.map((c) => (
          <div
            key={c.title}
            className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
          >
            {c.image && (
              <ContributionImage
                src={c.image}
                alt={c.imageAlt || c.title}
              />
            )}
            <div className="p-5">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
