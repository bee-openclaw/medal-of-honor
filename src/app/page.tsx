import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GalleryView } from "@/components/gallery/GalleryView";
import { Medal } from "@/components/ui/Medal";
import { getAllHonorees } from "@/lib/honorees";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Hall of Honor — Celebrating Visionaries Who Changed the World",
  description:
    "Discover and honor the visionaries who fundamentally changed how we live and work — from Steve Jobs to Al-Khwarizmi, Marie Curie to Nelson Mandela.",
  openGraph: {
    title: "Hall of Honor — Celebrating Visionaries Who Changed the World",
    description:
      "Discover and honor the visionaries who fundamentally changed how we live and work.",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  const honorees = getAllHonorees();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: siteConfig.name,
    description: siteConfig.description,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: honorees.length,
      itemListElement: honorees.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `/honoree/${h.slug}`,
        name: h.name,
        description: h.title,
      })),
    },
  };

  return (
    <div className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <Medal className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Hall of Honor
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Celebrating the visionaries who fundamentally changed the way we
            live and work. These are the people whose contributions shaped the
            modern world.
          </p>
        </div>
        <GalleryView honorees={honorees} />
      </Container>
    </div>
  );
}
