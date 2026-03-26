import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Medal } from "@/components/ui/Medal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hall of Honor — honoring those who fundamentally changed society.",
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
            About Hall of Honor
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              <strong className="text-zinc-900 dark:text-zinc-100">
                Hall of Honor
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
              Our honorees span six categories — Technology, Science, Medicine,
              Civil Rights, Arts &amp; Culture, and Exploration — because
              fundamental change comes from every field. Each profile features
              interactive timelines, impact metrics, key contributions, and
              notable quotes.
            </p>
            <p>
              The community plays an active role through nominations and voting.
              Know someone who deserves to be honored? Head to the{" "}
              <a
                href="/nominate"
                className="text-amber-600 underline hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                nominations page
              </a>{" "}
              and make your case.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Hall of Honor is an open project dedicated to recognizing those
              whose contributions transcend their time.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
