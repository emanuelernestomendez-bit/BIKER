import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brand, buildWhatsAppUrl } from "@/lib/brand";
import { contactHighlights, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto de JC BikerStore: WhatsApp, Instagram, mapa y formulario para consultas de motos, repuestos y accesorios."
};

export default function ContactPage() {
  return (
    <div className="space-y-14 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="Habla con la tienda antes de perder tiempo en la calle."
            description="Escríbenos, ubícanos y coordina tu visita. Toda la información clave está aquí: WhatsApp, Instagram, mapa y horario real."
          />
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="cursor-pointer rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel transition duration-200 hover:border-brand-orange/60"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">
                  {item.title}
                </p>
                <p className="mt-4 font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
                  {item.value}
                </p>
              </Link>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel">
            <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">
              Horario
            </p>
            <p className="mt-4 text-lg leading-8 text-white/72">
              {brand.scheduleLabel}
            </p>
            <Link
              href={buildWhatsAppUrl(
                "Hola JC BikerStore, quiero coordinar una visita a la tienda."
              )}
              className="mt-6 inline-flex cursor-pointer rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-200 hover:bg-brand-ember"
            >
              Coordinar por WhatsApp
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-panel">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[28rem]">
            <iframe
              title="Ubicación de JC BikerStore"
              src={brand.mapsEmbedUrl}
              className="h-full min-h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-5 p-8">
            <p className="text-sm uppercase tracking-[0.26em] text-brand-ember">
              Preguntas rápidas
            </p>
            {faqs.map((item) => (
              <div key={item.question} className="rounded-[1.4rem] border border-white/10 bg-black/30 p-5">
                <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/65">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
