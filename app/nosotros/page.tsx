import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brand } from "@/lib/brand";
import { instagramCards, storyPoints, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Historia y valores de JC BikerStore, tienda rider en Santo Domingo enfocada en calidad, pasión, servicio y comunidad."
};

export default function AboutPage() {
  return (
    <div className="space-y-14 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal>
          <SectionHeading
            eyebrow="Nosotros"
            title="Una tienda creada para riders que no compran a ciegas."
            description="JC BikerStore nace con una idea simple: juntar criterio, estética y atención rápida en un mismo punto para la comunidad motera de Santo Domingo."
          />
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="space-y-4">
          {storyPoints.map((point, index) => (
            <article
              key={point}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">
                {`0${index + 1}`}
              </p>
              <p className="mt-4 text-lg leading-8 text-white/72">{point}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-panel">
          <Image
            src="/images/about-store.png"
            alt="Ambiente de tienda y cultura rider"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-white/10 bg-black/55 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">
              Misión
            </p>
            <p className="mt-3 text-base leading-7 text-white/74">
              Ayudar a cada rider a montar un setup confiable, seguro y con
              presencia, sin complicar la compra ni el proceso.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <Reveal key={value.title}>
              <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel">
                <h2 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-white">
                  {value.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-white/66">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Galería"
          title="El mood de la marca se vive entre vitrina, calle y comunidad."
          description="Mientras el Instagram se mantiene como canal vivo del día a día, esta selección resume la energía visual que queremos proyectar."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {instagramCards.map((item) => (
            <Reveal key={item.title}>
              <Link
                href={brand.instagramUrl}
                className="group block cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/62">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-brand-orange/20 to-transparent p-8 shadow-panel">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-ember">
              Comunidad rider
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-white">
              Si ruedas en Santo Domingo, este punto es para ti.
            </h2>
          </div>
          <CtaButton href={brand.instagramUrl}>Seguir en Instagram</CtaButton>
        </Reveal>
      </section>
    </div>
  );
}
