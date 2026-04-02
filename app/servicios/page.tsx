import type { Metadata } from "next";
import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { buildWhatsAppUrl } from "@/lib/brand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de JC BikerStore: venta de motos, accesorios, repuestos y equipos de seguridad para riders en Santo Domingo."
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Una tienda que entiende lo que necesita un rider en movimiento."
            description="Cada servicio parte de una conversación clara: qué usas, qué necesitas y cuál es la solución más lógica para tu moto o tu equipo."
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <CtaButton
              href={buildWhatsAppUrl(
                "Hola JC BikerStore, quiero consultar sus servicios."
              )}
            >
              Consultar ahora
            </CtaButton>
            <CtaButton href="/catalogo" variant="ghost">
              Ir al catálogo
            </CtaButton>
          </div>
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

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#0f0f0f] p-6 lg:grid-cols-3 lg:p-8">
          {[
            "1. Escríbenos por WhatsApp y cuéntanos qué moto tienes o qué pieza buscas.",
            "2. Te orientamos según uso, categoría y disponibilidad real en tienda.",
            "3. Coordinas visita o compras con la vía más rápida para ti."
          ].map((step) => (
            <Reveal key={step}>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-white/70">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-brand-orange/20 to-transparent p-8 shadow-panel">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-ember">
              Servicio directo
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-white">
              Si lo tuyo es resolver rápido, aquí ya tienes el botón.
            </h2>
          </div>
          <Link
            href={buildWhatsAppUrl(
              "Hola JC BikerStore, quiero ayuda para elegir un producto."
            )}
            className="inline-flex cursor-pointer rounded-full border border-brand-orange bg-brand-orange px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-brand-ember"
          >
            Ir a WhatsApp
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
