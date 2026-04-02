import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPinned, MoveRight, ShieldCheck } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brand, buildWhatsAppUrl } from "@/lib/brand";
import {
  heroStats,
  homeHighlights,
  instagramCards,
  serviceCategories,
  services
} from "@/lib/site";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-6 sm:px-6">
        <div className="absolute inset-0 -z-20 panel-grid opacity-20" />
        <div className="absolute inset-y-0 right-0 -z-20 hidden w-[48%] bg-[radial-gradient(circle_at_top_right,rgba(232,92,13,0.22),transparent_48%)] lg:block" />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.26em] text-brand-ember">
                Oficial en Santo Domingo
              </span>
              <div className="space-y-5">
                <h1 className="font-display text-[4.3rem] uppercase leading-[0.84] text-white sm:text-[6.4rem] lg:text-[7.8rem]">
                  Tu moto
                  <span className="block text-brand-orange">merece mejor</span>
                  equipo.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  JC BikerStore reúne motocicletas, accesorios, repuestos y
                  protección rider con una vibra industrial, atención rápida y
                  enfoque 100% calle.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <CtaButton
                href={buildWhatsAppUrl(
                  "Hola JC BikerStore, quiero cotizar productos para mi moto."
                )}
              >
                Cotizar por WhatsApp
              </CtaButton>
              <CtaButton href="/catalogo" variant="ghost">
                Ver catálogo
              </CtaButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delay={150}>
            <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-brand-orange/18 blur-3xl lg:block" />
            <div className="hero-tilt relative angle-cut overflow-hidden rounded-[2.2rem] border border-white/10 bg-black shadow-panel">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.72)_100%)]" />
              <Image
                src="/images/hero-rider.png"
                alt="Rider en motocicleta con estilo deportivo"
                width={900}
                height={1120}
                priority
                className="hero-pan h-[31rem] w-full object-cover object-center sm:h-[38rem]"
              />
              <div className="absolute inset-x-6 bottom-6 space-y-4 rounded-[1.7rem] border border-white/10 bg-black/60 p-5 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">
                      Horario de tienda
                    </p>
                    <p className="mt-2 font-display text-4xl uppercase leading-none tracking-[0.08em] text-white">
                      10AM - 7PM
                    </p>
                  </div>
                  <Clock3 className="h-10 w-10 text-brand-orange" />
                </div>
                <div className="metal-line pb-4 text-sm uppercase tracking-[0.18em] text-white/66">
                  Lunes a sábado. Domingos cerrado.
                </div>
                <Link
                  href={brand.mapsUrl}
                  className="inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.2em] text-white transition hover:text-brand-ember"
                >
                  Ver ubicación exacta
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {homeHighlights.map((item) => (
            <Reveal key={item.title}>
              <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
                <item.icon className="h-8 w-8 text-brand-orange" />
                <h2 className="mt-5 font-display text-3xl uppercase tracking-[0.08em] text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/62">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Categorías rápidas"
            title="Todo lo que pide la ruta, el trabajo y la presencia."
            description="Entradas directas para que llegues rápido a la categoría que te interesa. Cada ruta termina en atención real por WhatsApp."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Link
                  href={item.href}
                  className="group flex cursor-pointer flex-col justify-between rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60"
                >
                  <div className="space-y-6">
                    <span className="inline-flex rounded-2xl border border-white/10 bg-black/50 p-4 text-brand-orange">
                      <item.icon className="h-7 w-7" />
                    </span>
                    <div className="space-y-3">
                      <h3 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-white">
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/72 transition group-hover:text-brand-ember">
                    Explorar
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Servicios principales"
            title="Resolvemos desde la moto hasta el último detalle del rider."
            description="Una tienda pensada para que encuentres producto, criterio y atención sin vueltas."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.title}>
                <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-panel transition duration-300 hover:border-brand-orange/60">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                      <service.icon className="h-8 w-8 text-brand-orange" />
                      <h3 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-white">
                        {service.title}
                      </h3>
                      <p className="max-w-xl text-base leading-7 text-white/65">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.cta}
                      className="inline-flex cursor-pointer rounded-full border border-white/12 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-200 hover:border-brand-orange hover:bg-white/8"
                    >
                      Consultar
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#191919] p-6 shadow-panel sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal className="space-y-6">
              <SectionHeading
                eyebrow="Instagram"
                title="La vitrina sigue viva fuera del sitio."
                description="Para ver ingresos, ambiente de tienda y contenido rider en tiempo real, entra al Instagram oficial."
              />
              <div className="flex flex-col gap-4 sm:flex-row">
                <CtaButton href={brand.instagramUrl}>Ir al Instagram</CtaButton>
                <CtaButton href="/contacto" variant="ghost">
                  Ver contacto
                </CtaButton>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {instagramCards.map((item) => (
                <Reveal key={item.title}>
                  <Link
                    href={brand.instagramUrl}
                    className="group block cursor-pointer overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/50"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="space-y-2 p-4">
                      <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/62">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-10">
          <Reveal className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-ember">
              Visítanos
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
              Ubicación clara. Horario claro. Atención clara.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              Estamos en {brand.city}. Abiertos de lunes a sábado, de 10:00 AM a
              7:00 PM. Si prefieres resolver antes de salir, escríbenos por
              WhatsApp.
            </p>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
              <MapPinned className="h-7 w-7 text-brand-orange" />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/44">
                Ubicación
              </p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-white">
                Santo Domingo
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
              <ShieldCheck className="h-7 w-7 text-brand-orange" />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/44">
                Atención
              </p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-white">
                WhatsApp directo
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
