import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsappPhone}?text=Hi%20River%20Steels%2C%20I%27d%20like%20a%20quote.`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
      <a
        href={`tel:${SITE.primaryPhone}`}
        aria-label="Call Now"
        className="w-14 h-14 rounded-full bg-navy text-primary-foreground grid place-items-center shadow-2xl hover:scale-110 transition"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
