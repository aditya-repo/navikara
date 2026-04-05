import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1fbd59]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
