import Image from "next/image";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { home } from "@/content/home";

export function AboutSection() {
  const { about } = home;

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2.5">
              <BreathingDot />
              <span className="text-xs font-semibold tracking-wider text-[#1e3a2b] uppercase">
                {about.eyebrow}
              </span>
            </div>

            <h2 className="mt-3 font-heading text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl lg:text-[42px]">
              {about.headingSegments.map((segment) => (
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

            <p className="mt-4 text-sm leading-relaxed text-[#4a5a50]">
              {about.lead}
            </p>

            <div className="mt-8 space-y-6 border-t border-[#e7efe9] pt-7">
              {about.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="grid gap-1.5 sm:grid-cols-[135px_1fr] sm:gap-6"
                >
                  <div className="text-sm leading-snug font-semibold text-[#25854a]">
                    <span className="block">{pillar.number}</span>
                    <span className="block">{pillar.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#4a5a50] sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col">
            {/* Top-Left Primary Image */}
            <div className="relative aspect-4/5 w-[78%] overflow-hidden rounded-2xl shadow-lg sm:w-[76%]">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                sizes="(max-width: 1024px) 75vw, 38vw"
                className="object-cover"
              />
            </div>

            {/* Bottom-Right Jagged / Staggered Secondary Image */}
            <div className="relative z-10 -mt-24 ml-auto aspect-4/5 w-[64%] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl sm:-mt-32 sm:w-[60%] sm:border-[6px]">
              <Image
                src={about.secondaryImage}
                alt={about.secondaryImageAlt}
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl text-center sm:mt-24">
          <div className="inline-flex items-center justify-center gap-2.5">
            <BreathingDot />
            <span className="text-xs font-semibold tracking-wider text-[#1e3a2b] uppercase">
              {about.mission.eyebrow}
            </span>
          </div>

          <h3 className="mt-3 font-heading text-3xl leading-tight font-bold sm:text-4xl">
            <span className="block text-[#25854a]">
              {about.mission.headlinePrimary}
            </span>
            <span className="mt-1 block text-[#14261c]">
              {about.mission.headlineSecondary}
            </span>
          </h3>

          <p className="mt-5 text-sm leading-relaxed text-[#4a5a50] sm:text-base">
            {about.mission.descriptionSegments.map((segment) => (
              <span
                key={segment.text}
                className={
                  segment.highlight
                    ? "font-semibold text-[#25854a]"
                    : "text-[#4a5a50]"
                }
              >
                {segment.text}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
