"use client";

import {
  BadgeCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";

export function CoaCarousel() {
  const { certificates } = home.coa;
  const [activeIndex, setActiveIndex] = useState(0);

  const total = certificates.length;
  const current = certificates[activeIndex];

  function handlePrev() {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % total);
  }

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-2xl border border-[#dce6de] bg-white p-4 shadow-sm sm:p-6">
        <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#2b533c] px-3 py-1 text-[11px] font-medium text-white shadow-xs sm:top-4 sm:right-4">
          <BadgeCheckIcon className="size-3.5 text-[#8fd4a4]" />
          {current.sealedBadge}
        </span>

        {/* Left / Right Overlay Controls */}
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          onClick={handlePrev}
          aria-label="Previous certificate"
          className="absolute top-1/2 left-2.5 z-10 -translate-y-1/2 rounded-full border-[#cfe0d4] bg-white/90 text-[#1c3d29] shadow-sm backdrop-blur-xs hover:bg-[#eef5f0] sm:left-3.5"
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          onClick={handleNext}
          aria-label="Next certificate"
          className="absolute top-1/2 right-2.5 z-10 -translate-y-1/2 rounded-full border-[#cfe0d4] bg-white/90 text-[#1c3d29] shadow-sm backdrop-blur-xs hover:bg-[#eef5f0] sm:right-3.5"
        >
          <ChevronRightIcon className="size-4" />
        </Button>

        <div className="relative flex h-84 w-full items-center justify-center px-6 sm:h-104 sm:px-8">
          <Image
            key={current.id}
            src={current.image}
            alt={current.alt}
            className="max-h-full w-auto rounded-md object-contain transition-opacity duration-200"
          />
        </div>
      </div>

      {/* Carousel Footer: Certificate Info + Dots & Counter */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <p className="text-xs font-bold text-[#14261c]">{current.title}</p>
          <p className="text-[11px] text-[#5c6c62]">{current.issuer}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${cert.title}`}
                aria-current={index === activeIndex}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-[#244e35]"
                    : "w-2 bg-[#bdd0c2] hover:bg-[#8eac96]"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-[#24573a] tabular-nums">
            {activeIndex + 1} / {total}
          </span>
        </div>
      </div>
    </div>
  );
}
