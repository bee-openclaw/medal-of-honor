import { CategoryId } from "@/lib/types";

const categoryColors: Record<CategoryId, string> = {
  tech: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  science: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  arts: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "civil-rights": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  medicine:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  exploration:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};

export function Badge({
  category,
  label,
}: {
  category: CategoryId;
  label: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[category]}`}
    >
      {label}
    </span>
  );
}
