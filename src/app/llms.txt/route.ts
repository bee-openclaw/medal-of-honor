import { getAllHonorees } from "@/lib/honorees";
import { categories } from "@/data/categories";

export function GET() {
  const honorees = getAllHonorees();

  const categoryMap = new Map(categories.map((c) => [c.id, c.label]));

  const lines = [
    "# Medal of Honor",
    "",
    "> Honoring the people who fundamentally changed the way we live and work.",
    "",
    "Medal of Honor is a community-driven platform celebrating visionary individuals",
    "whose contributions fundamentally shaped modern society. It features detailed",
    "biographical profiles with interactive timelines, impact metrics, key contributions,",
    "and community nominations and voting.",
    "",
    "## Categories",
    "",
    ...categories.map((c) => `- **${c.label}**: ${c.description}`),
    "",
    "## Honorees",
    "",
    ...honorees.map(
      (h) =>
        `### ${h.name}\n- **Title**: ${h.title}\n- **Category**: ${categoryMap.get(h.category)}\n- **Born**: ${h.born}${h.died ? `, Died: ${h.died}` : ""}\n- **Birthplace**: ${h.birthPlace}\n- **Impact Score**: ${h.impactScore ?? "N/A"}/100\n- **Summary**: ${h.summary}\n- **Profile**: /honoree/${h.slug}\n`
    ),
    "## Features",
    "",
    "- Interactive biographical timelines",
    "- Impact score ratings (1-100)",
    "- Impact metrics with key statistics",
    "- Community nominations for new honorees",
    "- Community voting system",
    "- Category-based filtering and search",
    "",
    "## Pages",
    "",
    "- / — Hall of Honor gallery with all honorees",
    "- /honoree/[slug] — Individual honoree profile",
    "- /nominate — Nominate a new honoree",
    "- /about — About the project",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
