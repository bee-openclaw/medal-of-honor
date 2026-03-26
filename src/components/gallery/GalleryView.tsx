"use client";

import { useState, useMemo } from "react";
import { Honoree, CategoryId } from "@/lib/types";
import { categories } from "@/data/categories";
import { HonoreeGrid } from "@/components/gallery/HonoreeGrid";

export function GalleryView({ honorees }: { honorees: Honoree[] }) {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryId | "all"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const populatedCategories = useMemo(() => {
    const counts = new Map<CategoryId, number>();
    for (const h of honorees) {
      counts.set(h.category, (counts.get(h.category) || 0) + 1);
    }
    return counts;
  }, [honorees]);

  const filtered = useMemo(() => {
    let result = honorees;
    if (selectedCategory !== "all") {
      result = result.filter((h) => h.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.title.toLowerCase().includes(q) ||
          h.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [honorees, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          <div className="flex gap-2 pb-2 sm:flex-wrap sm:pb-0 min-w-max sm:min-w-0">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-amber-500 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const count = populatedCategories.get(cat.id) || 0;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                disabled={count === 0}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-white"
                    : count === 0
                      ? "cursor-not-allowed bg-zinc-50 text-zinc-300 dark:bg-zinc-900 dark:text-zinc-700"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {cat.icon} {cat.label}
                {count === 0 && (
                  <span className="ml-1 text-xs italic">soon</span>
                )}
              </button>
            );
          })}
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search honorees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 pl-10 text-base text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 sm:w-64"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <HonoreeGrid honorees={filtered} />
    </div>
  );
}
