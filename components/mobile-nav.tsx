"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/content/site";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="md:hidden">
          <MenuIcon className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>{site.name}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {site.nav.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                href={item.href}
                className="rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <Button asChild size="lg" className="w-full">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
