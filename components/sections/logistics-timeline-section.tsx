import Image from "next/image";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { home } from "@/content/home";

export function LogisticsTimelineSection() {
  const { logistics } = home;

  return (
    <section
      id="logistics"
      className="relative isolate overflow-hidden bg-[#12261b] py-20 text-white sm:py-24"
    >
      {/* Radial Emerald Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-3/4 -translate-x-1/2 rounded-full bg-[#25854a]/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Timeline Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-2.5">
            <BreathingDot
              colorClassName="bg-[#38b868]"
              pulseClassName="bg-[#5ce08e]/55"
            />
            <span className="text-xs font-semibold tracking-widest text-[#7cc694] uppercase">
              {logistics.eyebrow}
            </span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl lg:text-[42px]">
            {logistics.headingSegments.map((segment) => (
              <span
                key={segment.text}
                className={segment.highlight ? "text-[#7cc694]" : "text-white"}
              >
                {segment.text}
              </span>
            ))}
          </h2>
          <p className="mt-3.5 text-xs leading-relaxed text-white/75 sm:text-sm">
            {logistics.description}
          </p>
        </div>

        {/* Horizontal Interactive Timeline (4 Steps) */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {logistics.steps.map((item, index) => (
            <article
              key={item.step}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Step Operational Thumbnail & Step Label (Above Axis) */}
              <div className="w-full px-3">
                <div className="relative mx-auto aspect-16/10 w-full max-w-[220px] overflow-hidden rounded-lg border border-white/15 bg-black/25 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#7cc694]/60">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  />
                </div>

                <p className="mt-4 font-heading text-base font-bold tracking-wider text-white uppercase sm:text-lg">
                  {item.step}
                </p>
              </div>

              {/* Timeline Horizontal Track & Small Refined Node */}
              <div className="relative my-5 flex w-full items-center justify-center">
                {/* Left Half of Line: Solid on Step 01, Dashed on others */}
                {index === 0 ? (
                  <div aria-hidden="true" className="h-0.5 w-1/2 bg-white/85" />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-1/2 border-t-2 border-dashed border-white/45"
                  />
                )}

                {/* Right Half of Line: Always Dashed */}
                <div
                  aria-hidden="true"
                  className="w-1/2 border-t-2 border-dashed border-white/45"
                />

                {/* Small Refined Timeline Node (Small White Ring with Dark Center) */}
                <span className="absolute z-10 flex size-3.5 items-center justify-center rounded-full bg-white shadow-xs transition-transform duration-300 group-hover:scale-125">
                  <span className="size-1.5 rounded-full bg-[#12261b]" />
                </span>
              </div>

              {/* Step Title & Description (Below Axis) */}
              <div className="flex flex-1 flex-col items-center px-4">
                <h3 className="font-heading text-base font-bold text-white transition-colors group-hover:text-[#7cc694]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
