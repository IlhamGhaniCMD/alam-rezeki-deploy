import { BadgeCheckIcon, DownloadIcon } from "lucide-react";
import Link from "next/link";
import { CoaCertificates } from "@/components/sections/coa-certificates";
import { home } from "@/content/home";

export function CoaSection() {
  const { coa } = home;

  return (
    <section id="coa" className="bg-[#fbfcf9] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0d4] bg-[#eef5f0] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#24573a] uppercase">
            <BadgeCheckIcon className="size-3.5" />
            {coa.badge}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
            {coa.headingSegments.map((segment) => (
              <span
                key={segment.text}
                className={
                  segment.highlight ? "text-[#25854a]" : "text-[#14261c]"
                }
              >
                {segment.text}
              </span>
            ))}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#526258]">
            {coa.description}
          </p>
        </div>

        {/* All certificates, side by side */}
        <div className="mt-12">
          <CoaCertificates />
        </div>

        {/* Tested Specimen Performance */}
        <div className="mt-14 grid gap-10 rounded-2xl border border-[#dce6de] bg-white p-6 shadow-xs sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-10">
          <div className="flex flex-col">
            <h3 className="font-heading text-2xl font-bold">
              {coa.performanceHeadingSegments.map((segment) => (
                <span
                  key={segment.text}
                  className={
                    segment.highlight ? "text-[#25854a]" : "text-[#14261c]"
                  }
                >
                  {segment.text}
                </span>
              ))}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5c6c62]">
              {coa.performanceDescription}
            </p>

            <div className="mt-7 lg:mt-auto lg:pt-8">
              <Link
                href={coa.ctaHref}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#244e35] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#1c3e2a]"
              >
                <DownloadIcon className="size-3.5" />
                {coa.ctaLabel}
              </Link>
              <p className="mt-3 text-[11px] text-[#637368]">{coa.footnote}</p>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {coa.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-xs font-semibold text-[#182c20]">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs font-semibold text-[#24573a]">
                  {metric.value}
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#dfeae1]">
                  <div
                    className="h-full rounded-full bg-[#2b583e]"
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-[#637368]">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
