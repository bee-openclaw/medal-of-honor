import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/profile/HeroSection";
import { InteractiveTimeline } from "@/components/profile/InteractiveTimeline";
import { QuoteBlock } from "@/components/profile/QuoteBlock";
import { ImpactSection } from "@/components/profile/ImpactSection";
import { ImpactMetrics } from "@/components/profile/ImpactMetrics";
import { KeyContributions } from "@/components/profile/KeyContributions";
import { RelatedHonorees } from "@/components/profile/RelatedHonorees";
import {
  getAllHonorees,
  getHonoreeBySlug,
  getRelatedHonorees,
} from "@/lib/honorees";

export function generateStaticParams() {
  return getAllHonorees().map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const honoree = getHonoreeBySlug(slug);
  if (!honoree) return { title: "Not Found" };

  const title = `${honoree.name} — ${honoree.title}`;
  const description = honoree.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      images: honoree.portraitImage
        ? [{ url: honoree.portraitImage, alt: honoree.name }]
        : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: { canonical: `/honoree/${slug}` },
  };
}

export default async function HonoreePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const honoree = getHonoreeBySlug(slug);

  if (!honoree) {
    notFound();
  }

  const related = getRelatedHonorees(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: honoree.name,
    description: honoree.summary,
    jobTitle: honoree.title,
    birthDate: honoree.born,
    ...(honoree.died && { deathDate: honoree.died }),
    birthPlace: { "@type": "Place", name: honoree.birthPlace },
    image: honoree.portraitImage || undefined,
    knowsAbout: honoree.tags,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection honoree={honoree} />
      <Container>
        <div className="py-12 space-y-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Hall of Honor
          </Link>

          <ImpactSection statement={honoree.impactStatement} />

          {honoree.impactMetrics && honoree.impactMetrics.length > 0 && (
            <ImpactMetrics metrics={honoree.impactMetrics} />
          )}

          <div className="grid gap-12 lg:grid-cols-2">
            <InteractiveTimeline events={honoree.timeline} />
            <div className="space-y-8">
              <KeyContributions contributions={honoree.contributions} />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  <span className="border-b-2 border-amber-500 pb-1">
                    Notable Quotes
                  </span>
                </h2>
                {honoree.quotes.map((quote, i) => (
                  <QuoteBlock key={i} quote={quote} />
                ))}
              </div>
            </div>
          </div>

          <RelatedHonorees honorees={related} />
        </div>
      </Container>
    </div>
  );
}
