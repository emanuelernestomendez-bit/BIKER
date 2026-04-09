import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { buildWhatsAppUrl } from "@/lib/brand";
import { serviceHighlights, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de JC BikerStore en Santo Domingo: accesorios, equipamiento rider, instalacion, asesoria personalizada y envios coordinados por WhatsApp."
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Lo que hace JC BikerStore por ti y por tu moto."
            description="Aqui no ves un listado de inventario. Ves como te ayudamos a equiparte, instalar, decidir bien y resolver tu compra en tienda o por WhatsApp."
          />
          <div className="grid gap-3 md:grid-cols-3">
            {serviceHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1.4rem] border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white/68"
              >
                {highlight}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href={buildWhatsAppUrl(
                "Hola JC BikerStore, quiero orientacion sobre sus servicios."
              )}
            >
              Hablar por WhatsApp
            </CtaButton>
            <CtaButton href="/catalogo" variant="ghost">
              Ver catalogo visual
            </CtaButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
