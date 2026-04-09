import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios y productos disponibles de JC BikerStore: cascos, repuestos, direccionales, soportes, protección y accesorios en Santo Domingo."
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Lo que ofrecemos hoy en tienda."
            description="Cada ficha resume producto, rango de precio y disponibilidad para que consultes directo por WhatsApp."
          />
          <CtaButton href="/catalogo">Ver catálogo visual</CtaButton>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.title}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
