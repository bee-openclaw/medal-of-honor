import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Medal } from "@/components/ui/Medal";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Container>
        <div className="text-center">
          <Medal className="mx-auto w-16 h-16 opacity-30" />
          <h1 className="mt-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            404
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            This honoree hasn&apos;t been inducted yet.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Back to Hall of Honor
          </Link>
        </div>
      </Container>
    </div>
  );
}
