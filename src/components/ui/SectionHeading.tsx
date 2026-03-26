export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
      <span className="border-b-2 border-amber-500 pb-1">{children}</span>
    </h2>
  );
}
