import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Medal } from "@/components/ui/Medal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Medal of Honor — honoring those who fundamentally changed society.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <Medal className="w-20 h-20" />
          </div>
          <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            About Medal of Honor
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              <strong className="text-zinc-900 dark:text-zinc-100">
                Medal of Honor
              </strong>{" "}
              celebrates the remarkable individuals who fundamentally changed
              the way people live and work. These are not just inventors or
              entrepreneurs — they are visionaries whose contributions
              reshaped society itself.
            </p>
            <p>
              From the pioneers who put computers in every home to those who
              connected the world through the internet, from the first
              programmer to the father of modern open source — each honoree
              represents a turning point in human history.
            </p>
            <p>
              We started with technology pioneers because their impact is
              uniquely measurable and felt by billions daily. But fundamental
              change comes from every field — science, medicine, civil rights,
              arts, and exploration. We plan to expand into all of these
              categories.
            </p>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Coming Soon
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-1 text-base">
                <li>Community nominations and voting</li>
                <li>
                  Expanded categories: Science, Medicine, Civil Rights, Arts,
                  and Exploration
                </li>
                <li>Detailed impact metrics and interactive timelines</li>
              </ul>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Medal of Honor is an open project dedicated to recognizing those
              whose contributions transcend their time. If you know someone who
              deserves to be honored, the nominations feature is coming soon.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
