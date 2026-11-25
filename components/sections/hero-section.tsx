import { ArrowRightIcon, DropletIcon, ShieldCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { home } from "@/content/home";

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#25854a] focus-visible:ring-offset-2";

/**
 * Below `lg` the copy sits on the page background above the image card. From `lg` up the copy
 * and the card share one grid cell, so the copy overlays a full-width card.
 */
export function HeroSection() {
  const { hero } = home;

  return (
    <section className="bg-background px-3 pt-8 pb-3 sm:px-6 sm:pt-12 lg:pt-4 lg:pb-0">
      <div className="grid gap-10 lg:gap-0">
        <div className="relative z-10 flex flex-col items-start px-1 sm:px-0 lg:col-start-1 lg:row-start-1 lg:justify-between lg:gap-12 lg:p-12 xl:p-14">
          <div>
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#dbe9df] bg-[#f3f8f4] py-1.5 pr-4 pl-3 text-[11px] font-medium tracking-wide text-[#1e3a2b] sm:text-xs lg:border-white/15 lg:bg-white/10 lg:text-white/90 lg:backdrop-blur-sm">
              <BreathingDot
                size="sm"
                colorClassName="bg-[#25854a] lg:bg-[#7cc694]"
                pulseClassName="bg-[#25854a]/45 lg:bg-[#7cc694]/45"
              />
              {hero.eyebrow}
            </p>

            <h1 className="max-w-2xl font-heading text-4xl leading-[1.1] font-bold tracking-tight text-[#14261c] sm:text-5xl lg:text-white xl:text-6xl">
              {hero.titlePrefix}
              <span className="mt-1 block">
                {hero.titleConnector}{" "}
                <span className="font-normal text-[#25854a] italic lg:text-[#7cc694]">
                  {hero.titleHighlight}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#4a5a50] sm:text-base lg:max-w-2xl lg:text-white/85">
              {hero.description}
            </p>
          </div>

          <div className="mt-9 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center lg:mt-0">
            <Link
              href={hero.primaryCta.href}
              className={`group inline-flex h-13 items-center gap-4 rounded-full bg-[#245237] py-1.5 pr-1.5 pl-6 text-sm font-semibold text-white shadow-md shadow-[#245237]/25 transition duration-300 hover:bg-[#1d422c] hover:shadow-lg active:scale-[0.98] lg:bg-white lg:text-[#173a26] lg:shadow-black/20 lg:hover:bg-[#eaf6ee] ${focusRing}`}
            >
              {hero.primaryCta.label}
              <span className="flex size-10 items-center justify-center rounded-full bg-white text-[#245237] lg:bg-[#245237] lg:text-white">
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className={`group inline-flex h-13 items-center gap-4 rounded-full border border-[#245237]/35 bg-white py-1.5 pr-1.5 pl-6 text-sm font-semibold text-[#1e3a2b] transition duration-300 hover:border-[#245237] hover:bg-[#f3f8f4] active:scale-[0.98] lg:border-white/45 lg:bg-white/10 lg:text-white lg:backdrop-blur-sm lg:hover:border-white/80 lg:hover:bg-white/20 ${focusRing}`}
            >
              {hero.secondaryCta.label}
              <span className="flex size-10 items-center justify-center rounded-full bg-[#e3efe7] text-[#245237] lg:bg-white/20 lg:text-white">
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative isolate aspect-[4/5] overflow-hidden rounded-2xl bg-[#13261b] shadow-lg sm:aspect-[4/3] sm:rounded-3xl lg:col-start-1 lg:row-start-1 lg:aspect-auto lg:min-h-[max(500px,50vh)]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0f2016]/75 via-[#0f2016]/10 to-[#0f2016]/35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-[#0f2318]/90 via-[#12281b]/60 to-transparent lg:block"
          />

          <div className="absolute top-5 left-5 flex items-center gap-2 sm:top-7 sm:left-7 lg:top-10 lg:right-10 lg:left-auto">
            <span className="flex size-10 items-center justify-center rounded-full bg-white text-[#245237] shadow-md">
              <DropletIcon className="size-4" />
            </span>
            <span className="inline-flex h-10 items-center rounded-full bg-white px-4 text-sm font-medium text-[#1e3a2b] shadow-md">
              {hero.imageBadge}
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-xl bg-white p-4 shadow-xl sm:inset-x-auto sm:right-7 sm:bottom-7 sm:max-w-sm sm:p-5 lg:right-10 lg:bottom-10 lg:max-w-xs xl:max-w-sm">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#e3efe7] text-[#245237]">
              <ShieldCheckIcon className="size-5" />
            </span>
            <div>
              <p className="text-sm leading-snug font-medium text-[#14261c]">
                {hero.coaCard.text}
              </p>
              <Link
                href={hero.coaLink.href}
                className={`group mt-2 inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-[#25854a] transition-colors hover:text-[#1d422c] sm:text-sm ${focusRing}`}
              >
                {hero.coaLink.label}
                <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
