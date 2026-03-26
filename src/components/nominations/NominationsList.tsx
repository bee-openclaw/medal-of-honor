"use client";

import { useState, useEffect, useCallback } from "react";
import { Nomination } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

export function NominationsList({ refreshKey }: { refreshKey?: number }) {
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNominations = useCallback(async () => {
    try {
      const res = await fetch("/api/nominations");
      const data = await res.json();
      setNominations(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNominations();
  }, [fetchNominations, refreshKey]);

  if (loading) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Loading nominations...
      </p>
    );
  }

  if (nominations.length === 0) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        No nominations yet. Be the first to nominate someone!
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {nominations.map((nom) => (
        <div
          key={nom.id}
          className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {nom.name}
            </h3>
            <Badge category={nom.category} label={nom.category} />
          </div>
          <p className="mt-1 text-sm text-zinc-600 line-clamp-2 dark:text-zinc-400">
            {nom.reason}
          </p>
          <div className="mt-2 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
            <span>Nominated by {nom.submittedBy}</span>
            <span
              className={`rounded-full px-2 py-0.5 font-medium ${
                nom.status === "approved"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : nom.status === "rejected"
                    ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
              }`}
            >
              {nom.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
