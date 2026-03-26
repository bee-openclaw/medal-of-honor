"use client";

import { useState, useEffect } from "react";

export function VoteButton({
  slug,
  size = "sm",
}: {
  slug: string;
  size?: "sm" | "lg";
}) {
  const [count, setCount] = useState(0);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasVoted = localStorage.getItem(`moh-voted-${slug}`);
    if (hasVoted) setVoted(true);

    fetch(`/api/votes/${slug}`)
      .then((r) => r.json())
      .then((d) => {
        setCount(d.count || 0);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [slug]);

  async function handleVote(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (voted || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      setCount(data.count);
      setVoted(true);
      localStorage.setItem(`moh-voted-${slug}`, "1");
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  const isSmall = size === "sm";

  return (
    <button
      onClick={handleVote}
      disabled={voted || loading}
      className={`inline-flex items-center gap-1 rounded-lg border transition-all ${
        voted
          ? "border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-400"
          : "border-zinc-200 bg-white text-zinc-500 hover:border-amber-400 hover:text-amber-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-amber-500 dark:hover:text-amber-400"
      } ${isSmall ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"} ${
        voted ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <svg
        viewBox="0 0 20 20"
        fill={voted ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={voted ? 0 : 1.5}
        className={isSmall ? "h-3.5 w-3.5" : "h-4 w-4"}
      >
        <path d="M10 3l2.5 5h5.5l-4.5 3.5 1.5 5.5L10 13.5 4.5 17l1.5-5.5L1.5 8h5.5L10 3z" />
      </svg>
      <span className={`font-medium ${loaded ? "" : "invisible"}`}>{count}</span>
    </button>
  );
}
