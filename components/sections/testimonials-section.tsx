import Image from "next/image";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { CoconutIllustration } from "@/components/ui/coconut-illustration";
import { home } from "@/content/home";

export function TestimonialsSection() {
  const { testimonials } = home;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f6f9f4] py-20 sm:py-24"
    >
      {/* Pinned to the viewport edges, outside the content container. */}
      <CoconutIllustration className="pointer-events-none absolute bottom-10 left-0 w-64 translate-x-[-30%] -scale-x-100 text-[#25854a] opacity-[0.06] sm:w-80 lg:w-md" />
      <CoconutIllustration className="pointer-events-none absolute top-10 right-0 w-64 translate-x-[30%] text-[#25854a] opacity-[0.06] sm:w-80 lg:w-md" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2.5">
            <BreathingDot />
            <span className="text-xs font-semibold tracking-wider text-[#1e3a2b] uppercase">
              {testimonials.topEyebrow}
            </span>
          </div>

          <h2 className="mt-3 font-heading text-3xl leading-tight font-bold sm:text-4xl lg:text-[42px]">
            <span className="block">
              {testimonials.topHeadingSegments.map((segment) => (
                <span
                  key={segment.text}
                  className={
                    segment.highlight ? "text-[#25854a]" : "text-[#14261c]"
                  }
                >
                  {segment.text}
                </span>
              ))}
            </span>
            <span className="mt-1 block text-[#14261c]">
              {testimonials.topHeadingSecondLine}
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Left Value Statement + Right Staggered Testimonial Cards */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="lg:pt-4">
            <div className="inline-flex items-center gap-2.5">
              <BreathingDot />
              <span className="text-xs font-semibold tracking-wider text-[#24573a] uppercase">
                {testimonials.sideEyebrow}
              </span>
            </div>

            <h3 className="mt-4 font-heading text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl lg:text-[42px]">
              {testimonials.sideHeadingSegments.map((segment) => (
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

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#24573a]">
              {testimonials.sideDescription}
            </p>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2">
            {testimonials.items.map((item, index) => (
              <article
                key={item.author}
                className={`flex flex-col justify-between rounded-2xl border border-[#e1ebe3] bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#25854a]/40 hover:shadow-md sm:p-7 ${
                  index === 1 ? "sm:mt-10 lg:mt-12" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={52}
                    height={52}
                    className="size-13 rounded-full object-cover ring-2 ring-[#e6f0e9]"
                  />
                  <span className="rounded-full bg-[#e6f0e9] px-4 py-1 text-xs font-semibold text-[#24573a]">
                    {item.tag}
                  </span>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-[#24573a] sm:text-sm">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-6 border-t border-[#ebf2ed] pt-4">
                  <p className="font-heading text-base font-bold text-[#14261c]">
                    {item.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
