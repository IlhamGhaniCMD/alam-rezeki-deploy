"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { site, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import logo from "@/public/images/brand/logo.jpeg";

const springTransition = {
  type: "spring" as const,
  stiffness: 340,
  damping: 30,
  mass: 0.85,
};

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isIsland, setIsIsland] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const delta = latest - previous;
    lastScrollY.current = latest;

    // Zone 1: Top of page — standard full-width white header
    if (latest <= 24) {
      setIsIsland(false);
      setIsHidden(false);
      return;
    }

    // Zone 2 & 3: Scrolled past top — morph into centered white Dynamic Island
    setIsIsland(true);

    // Keep visible during initial scroll (24px–240px)
    if (latest <= 240) {
      setIsHidden(false);
      return;
    }

    // Past 240px: smoothly hide on scroll down, reappear on scroll up
    if (delta > 6 && !isHovered) {
      setIsHidden(true);
    } else if (delta < -5) {
      setIsHidden(false);
    }
  });

  return (
    <header
      className={cn(
        "pointer-events-none sticky top-0 z-50 flex h-16 w-full items-center justify-center px-3 transition-colors duration-200 sm:px-6",
        !isIsland && "border-b border-gray-200 bg-white",
      )}
    >
      {/* Outer wrapper controls vertical scroll hide/show & floating offset */}
      <motion.div
        initial={false}
        animate={{
          y: isHidden ? -88 : isIsland ? 10 : 0,
          scale: isHidden ? 0.92 : isIsland && isHovered ? 1.015 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={springTransition}
        className="flex w-full justify-center"
      >
        {/* Inner capsule sizes strictly to its content (md:w-fit) in Island mode */}
        <motion.div
          layout
          transition={springTransition}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            borderRadius: isIsland ? 9999 : 16,
          }}
          className={cn(
            "relative flex items-center justify-between transition-[background-color,box-shadow,border-color,padding] duration-200",
            isHidden ? "pointer-events-none" : "pointer-events-auto",
            isIsland
              ? "w-full max-w-full gap-3 border border-gray-200 bg-white p-1.5 pl-3.5 shadow-lg shadow-black/8 md:w-fit md:gap-5 lg:gap-6"
              : "h-16 w-full max-w-6xl gap-4 border border-transparent bg-transparent px-1 sm:px-2",
          )}
        >
          {/* Brand Logo & Title */}
          <motion.div layout="position" className="relative z-10 shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200 transition-all duration-200",
                  isIsland ? "size-8" : "size-10",
                )}
              >
                <Image
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  preload
                  className="size-full object-cover"
                />
              </div>
              <span
                className={cn(
                  "font-heading font-semibold tracking-tight whitespace-nowrap text-[#12301f] transition-all duration-200",
                  isIsland ? "text-sm" : "text-lg",
                )}
              >
                {site.name}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.nav
            layout="position"
            aria-label="Main"
            onMouseLeave={() => setHoveredNav(null)}
            className={cn(
              "relative z-10 hidden items-center md:flex",
              isIsland ? "gap-0.5" : "gap-1.5",
            )}
          >
            {site.nav.map((item) => {
              const isActiveHover = hoveredNav === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.href)}
                  className={cn(
                    "relative z-10 rounded-full px-3.5 py-1.5 font-medium whitespace-nowrap text-gray-700 transition-colors duration-150 hover:text-gray-950",
                    isIsland ? "text-xs" : "text-sm",
                  )}
                >
                  <AnimatePresence>
                    {isActiveHover && (
                      <motion.span
                        layoutId="dynamic-island-nav-hover"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                      />
                    )}
                  </AnimatePresence>
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>

          {/* Right Action Pill (Desktop) & Mobile Menu */}
          <motion.div
            layout="position"
            className="relative z-10 flex shrink-0 items-center gap-1.5"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden shrink-0 items-center gap-2 rounded-full bg-[#1e4d32] font-medium whitespace-nowrap text-white transition-all duration-200 hover:bg-[#163b26] md:inline-flex",
                isIsland
                  ? "px-3.5 py-1.5 text-xs shadow-xs"
                  : "px-4 py-2 text-sm shadow-xs",
              )}
            >
              <BreathingDot
                size="sm"
                colorClassName="bg-[#5ce08e]"
                pulseClassName="bg-[#7cc694]/65"
              />
              <WhatsAppIcon className="size-3.5 shrink-0" />
              <span>
                {isIsland && !isHovered ? "WhatsApp" : site.whatsapp.display}
              </span>
            </a>

            <MobileNav isIsland={isIsland} />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
