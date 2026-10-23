import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/content/site";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {site.tagline}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        {site.description}
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/products">View products</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
