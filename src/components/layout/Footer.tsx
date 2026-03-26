import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="flex flex-col items-center gap-2 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            {siteConfig.name}
          </p>
          <p>{siteConfig.description}</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
