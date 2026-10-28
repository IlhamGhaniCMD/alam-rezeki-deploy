import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

// Cache Components rejects a bare new Date() during prerender.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[3fr_2fr]">
        <div className="space-y-3">
          <h2 className="font-heading text-xl font-semibold">
            About {site.name}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-background/80">
            {site.description}
          </p>
        </div>
        <address className="space-y-3 text-sm not-italic">
          <p className="flex gap-3">
            <MapPinIcon className="mt-0.5 size-4 shrink-0" />
            {site.address}
          </p>
          <p className="flex gap-3">
            <PhoneIcon className="mt-0.5 size-4 shrink-0" />
            <a
              href={`tel:+${site.whatsapp.number}`}
              className="hover:underline"
            >
              {site.whatsapp.display}
            </a>
          </p>
          <p className="flex gap-3">
            <MailIcon className="mt-0.5 size-4 shrink-0" />
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </p>
        </address>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-background/70">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
