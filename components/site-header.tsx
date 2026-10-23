import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/content/site";
import logo from "@/public/images/brand/logo.jpeg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt=""
            width={40}
            height={40}
            preload
            className="size-10 rounded-full"
          />
          <span className="font-heading text-lg font-semibold text-primary">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {site.whatsapp.display}
            </a>
          </Button>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
