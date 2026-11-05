import { MailIcon, MapPinIcon, MessageSquareIcon } from "lucide-react";
import { ExportRequestForm } from "@/components/sections/export-request-form";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { home } from "@/content/home";

function ContactCardIcon({ name }: { name: string }) {
  switch (name) {
    case "message-square":
      return <MessageSquareIcon className="size-4 text-[#24573a]" />;
    case "map-pin":
      return <MapPinIcon className="size-4 text-[#24573a]" />;
    default:
      return <MailIcon className="size-4 text-[#24573a]" />;
  }
}

export function QuotationSection() {
  const { quotation } = home;

  return (
    <section id="quotation" className="bg-[#f6f9f4] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2.5">
              <BreathingDot />
              <span className="text-xs font-semibold tracking-widest text-[#24573a] uppercase">
                {quotation.eyebrow}
              </span>
            </div>
            <h2 className="mt-3 font-heading text-3xl leading-tight font-bold sm:text-4xl lg:text-[42px]">
              {quotation.headingSegments.map((segment) => (
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
            <p className="mt-4 text-sm leading-relaxed text-[#24573a]">
              {quotation.description}
            </p>

            <div className="mt-8 space-y-4">
              {quotation.contacts.map((contact) => {
                const content = (
                  <>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e2ece4]">
                      <ContactCardIcon name={contact.icon} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#14261c]">
                        {contact.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-[#25854a]">
                        {contact.value}
                      </p>
                      {contact.note ? (
                        <p className="mt-1 text-[11px] text-[#6c7c71]">
                          {contact.note}
                        </p>
                      ) : null}
                    </div>
                  </>
                );

                const cardClasses =
                  "flex items-start gap-4 rounded-2xl border border-[#e3ebe4] bg-white p-5 shadow-2xs transition-all duration-200 hover:border-[#25854a]/40 hover:shadow-sm";

                if (contact.href) {
                  return (
                    <a
                      key={contact.title}
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`${cardClasses} block text-inherit no-underline`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={contact.title} className={cardClasses}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <ExportRequestForm />
        </div>
      </div>
    </section>
  );
}
