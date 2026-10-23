import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to home</Link>
      </Button>
    </section>
  );
}
