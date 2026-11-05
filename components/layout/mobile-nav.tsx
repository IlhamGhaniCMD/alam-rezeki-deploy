"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { site, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav({ isIsland = false }: { isIsland?: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className={cn(
            "rounded-full text-[#12301f] transition-colors hover:bg-gray-100 hover:text-[#0b2014] md:hidden",
            isIsland && "size-9",
          )}
        >
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
              <BreathingDot
                size="sm"
                colorClassName="bg-[#5ce08e]"
                pulseClassName="bg-[#7cc694]/65"
              />
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
