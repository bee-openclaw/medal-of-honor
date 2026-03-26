import { MetadataRoute } from "next";
import { getAllHonorees } from "@/lib/honorees";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hallofhonor.world";

export default function sitemap(): MetadataRoute.Sitemap {
  const honorees = getAllHonorees();

  const honoreeUrls = honorees.map((h) => ({
    url: `${BASE_URL}/honoree/${h.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/nominate`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...honoreeUrls,
  ];
}
