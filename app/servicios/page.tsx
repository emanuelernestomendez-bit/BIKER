import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { buildWhatsAppUrl } from "@/lib/brand";
import { serviceHighlights, services } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de JC BikerStore en Santo Domingo: accesorios, protección rider, instalación, asesoría personalizada y envíos coordinados por WhatsApp."
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Servicios para equiparte, instalar y comprar sin perder tiempo."
            description="Te atendemos en tienda y por WhatsApp para ayudarte a elegir bien, resolver rápido y coordinar tu compra con claridad."
          />
          <div className="flex flex-wrap gap-3">
            {serviceHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/68"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href={buildWhatsAppUrl(
                "Hola JC BikerStore, quiero orientación sobre sus servicios."
              )}
            >
              Hablar por WhatsApp
            </CtaButton>
            <CtaButton href="/catalogo" variant="ghost">
              Ver catálogo visual
            </CtaButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 70}
              className={cn(
                service.featured ? "md:col-span-2 xl:col-span-3" : "xl:col-span-2"
              )}
            >
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
