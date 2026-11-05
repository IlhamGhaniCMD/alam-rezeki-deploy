import Image from "next/image";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { home } from "@/content/home";

export function HaulageSection() {
  const { haulage } = home.logistics;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5">
              <BreathingDot size="sm" />
              <span className="text-[11px] font-semibold tracking-widest text-[#24573a] uppercase">
                {haulage.eyebrow}
              </span>
            </div>
            <h3 className="mt-2 font-heading text-2xl font-bold">
              {haulage.headingSegments.map((segment) => (
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
            <p className="mt-2.5 text-xs leading-relaxed text-[#526258] sm:text-sm">
              {haulage.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {haulage.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-xl border border-[#e3ebe4] bg-[#f7faf6] p-3.5"
                >
                  <p className="text-xs font-bold text-[#25854a]">
                    {highlight.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#5c6c62]">
                    {highlight.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Image Asymmetric Bento Grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-3.5 lg:col-span-6">
            {haulage.images.map((img) => (
              <div
                key={img.alt}
                className={`group relative overflow-hidden rounded-2xl border border-[#e3ebe4] bg-[#13261b] shadow-xs ${img.bentoClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute bottom-2.5 left-3 rounded-full border border-white/20 bg-black/45 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-xs">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
