"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Medal } from "@/components/ui/Medal";
import { NominationForm } from "@/components/nominations/NominationForm";
import { NominationsList } from "@/components/nominations/NominationsList";

export default function NominatePage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <Medal className="mx-auto w-12 h-12 mb-4" />
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Nominate an Honoree
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Know someone who fundamentally changed the way people live and
              work? Nominate them for the Medal of Honor.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Submit a Nomination
              </h2>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <NominationForm
                  onSubmitted={() => setRefreshKey((k) => k + 1)}
                />
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Recent Nominations
              </h2>
              <NominationsList refreshKey={refreshKey} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
