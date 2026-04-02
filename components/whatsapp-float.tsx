import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/brand";

export function WhatsAppFloat() {
  return (
    <Link
      href={buildWhatsAppUrl(
        "Hola JC BikerStore, quiero consultar disponibilidad y precios."
      )}
      className="fixed bottom-5 right-4 z-50 inline-flex cursor-pointer items-center gap-3 rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-glow transition duration-200 hover:bg-brand-ember sm:bottom-6 sm:right-6"
      aria-label="Escribir a JC BikerStore por WhatsApp"
    >
      <MessageCircleMore className="h-5 w-5" />
      WhatsApp
    </Link>
  );
}
