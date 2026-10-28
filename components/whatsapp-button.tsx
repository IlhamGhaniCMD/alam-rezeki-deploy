import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappUrl } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform outline-none hover:scale-105 focus-visible:ring-3 focus-visible:ring-ring/50 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
