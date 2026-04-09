import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { brand } from "@/lib/brand";
import { homeGateway } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative isolate overflow-hidden px-4 pb-14 pt-6 sm:px-6">
        <div className="absolute inset-0 -z-20 panel-grid opacity-20" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(232,92,13,0.18),transparent_34%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="space-y-8">
            <LogoMark />
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-brand-ember">
                La vitrina oficial
              </p>
              <h1 className="font-display text-[4.2rem] uppercase leading-[0.84] text-white sm:text-[6rem] lg:text-[7.4rem]">
                Espíritu rider.
                <span className="block text-brand-orange">Producto real.</span>
                Atención directa.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Cascos, accesorios, repuestos y protección rider en un
                solo punto, con atención directa desde Santo Domingo.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <CtaButton href="/catalogo">Entrar al catálogo</CtaButton>
              <CtaButton href="/servicios" variant="ghost">
                Ver servicios
              </CtaButton>
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/44">
              {brand.name} · Santo Domingo, República Dominicana
            </p>
          </Reveal>

          <Reveal className="grid gap-4 md:grid-cols-2" delay={120}>
            {homeGateway.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative isolate block min-h-[18rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-panel transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.82)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,92,13,0.22),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/45 text-brand-orange backdrop-blur">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-3">
                    <h2 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-white">
                      {item.title}
                    </h2>
                    <p className="max-w-[16rem] text-sm leading-6 text-white/72">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-ember">
                      Entrar
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
