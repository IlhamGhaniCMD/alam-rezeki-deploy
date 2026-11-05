import { ArrowRightIcon, PackageIcon, ShieldCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";

export function HeroSection() {
  const { hero } = home;

  return (
    <section className="bg-white px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="relative isolate mx-auto max-w-[1380px] overflow-hidden rounded-2xl bg-[#13261b] text-white shadow-lg sm:rounded-3xl">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          preload
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0f2318]/90 via-[#152c1f]/75 to-[#152c1f]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0f2016]/80 via-transparent to-[#0f2016]/40"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <h1 className="max-w-2xl font-heading text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.titlePrefix}
            <span className="mt-1 block">
              {hero.titleConnector}{" "}
              <span className="font-normal text-[#7cc694] italic">
                {hero.titleHighlight}
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#245237] px-6 text-xs font-semibold text-white shadow-md transition-colors hover:bg-[#1d422c] sm:text-sm"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon className="size-4" />
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 text-xs font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20 sm:text-sm"
            >
              <PackageIcon className="size-4 text-[#7cc694]" />
              {hero.secondaryCta.label}
            </Link>
          </div>

          <Link
            href={hero.coaLink.href}
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#7cc694] transition-colors hover:text-white"
          >
            <ShieldCheckIcon className="size-4" />
            {hero.coaLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
