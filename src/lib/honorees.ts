import { honorees } from "@/data/honorees";
import { categories } from "@/data/categories";
import { Honoree, Category, CategoryId } from "@/lib/types";

export function getAllHonorees(): Honoree[] {
  return honorees;
}

export function getHonoreeBySlug(slug: string): Honoree | undefined {
  return honorees.find((h) => h.slug === slug);
}

export function getHonoreesByCategory(category: CategoryId): Honoree[] {
  return honorees.filter((h) => h.category === category);
}

export function getRelatedHonorees(slug: string, limit = 3): Honoree[] {
  const honoree = getHonoreeBySlug(slug);
  if (!honoree) return [];
  return honorees
    .filter((h) => h.category === honoree.category && h.slug !== slug)
    .slice(0, limit);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function searchHonorees(query: string): Honoree[] {
  const lower = query.toLowerCase();
  return honorees.filter(
    (h) =>
      h.name.toLowerCase().includes(lower) ||
      h.title.toLowerCase().includes(lower) ||
      h.tags.some((t) => t.toLowerCase().includes(lower))
  );
}
