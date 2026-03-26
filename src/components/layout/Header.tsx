"use client";

import { useState } from "react";
import Link from "next/link";
import { Medal } from "@/components/ui/Medal";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Medal className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-zinc-600 transition-all duration-200 dark:bg-zinc-400 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-600 transition-opacity duration-200 dark:bg-zinc-400 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-600 transition-all duration-200 dark:bg-zinc-400 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile menu dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-200 ${
          menuOpen ? "max-h-60 border-t border-zinc-200 dark:border-zinc-800" : "max-h-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-zinc-700 transition-colors hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
