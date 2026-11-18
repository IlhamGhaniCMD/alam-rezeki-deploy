import { DownloadIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/content/site";
import logo from "@/public/images/brand/logo.jpeg";

// Cache Components rejects a bare new Date() during prerender.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const certifications = [
  "ISO 22000:2018",
  "HACCP Certified",
  "Halal Indonesia",
  "Kosher Compliant",
  "FDA Registered",
];

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer
      id="contact"
      className="border-t border-neutral-800 bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                {site.name}
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-white/70">
              Indonesian trading company specializing in coconuts, high-quality
              spices, herbs, and agricultural derivatives exported to global
              markets.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-xs font-bold tracking-wider text-[#7cc694] uppercase">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-[#7cc694]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compliance & Quality */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-xs font-bold tracking-wider text-[#7cc694] uppercase">
              Compliance & Quality
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="pt-1 text-xs leading-relaxed text-white/60">
              Independent lab verification by SGS & Sucofindo provided with each
              commercial batch shipment.
            </p>
          </div>

          {/* Column 4: International Trade Inquiries */}
          <div className="space-y-3.5">
            <h3 className="font-heading text-xs font-bold tracking-wider text-[#7cc694] uppercase">
              International Trade Inquiries
            </h3>
            <div className="space-y-2.5 text-xs text-white/75">
              <div className="flex items-start gap-2">
                <MailIcon className="mt-0.5 size-3.5 shrink-0 text-[#7cc694]" />
                <div>
                  <span className="text-white/50">Export Desk:</span>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-white transition-colors hover:text-[#7cc694]"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 size-3.5 shrink-0 text-[#7cc694]" />
                <div>
                  <span className="text-white/50">Phone / WhatsApp:</span>{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white transition-colors hover:text-[#7cc694]"
                  >
                    {site.whatsapp.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 size-3.5 shrink-0 text-[#7cc694]" />
                <div>
                  <span className="text-white/50">Headquarters:</span>{" "}
                  <span className="text-white/80">{site.address}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-[#245237] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#1d422c]"
              >
                <DownloadIcon className="size-3.5 text-[#7cc694]" />
                Download Product Spec Catalog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved. Indonesian Coconut &
            Agro Trading.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50">
            <span>INCOTERMS 2020 Basis</span>
            <span className="text-white/20">•</span>
            <span>Certificate Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
