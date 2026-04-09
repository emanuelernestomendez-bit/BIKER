import type { Metadata } from "next";

import { CatalogClient } from "@/components/catalog-client";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { catalogIntro } from "@/lib/site";

type CatalogPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo de productos reales de JC BikerStore: cascos, protección, repuestos, direccionales, soportes y accesorios."
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = (await searchParams) || {};
  const initialCategory =
    typeof params.categoria === "string" ? params.categoria : undefined;

  return (
    <div className="space-y-14 px-4 pb-20 pt-8 sm:px-6">
      <section className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel lg:p-12">
        <Reveal>
          <SectionHeading
            eyebrow={catalogIntro.eyebrow}
            title={catalogIntro.title}
            description={catalogIntro.description}
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl">
        <Reveal>
          <CatalogClient initialCategory={initialCategory} />
        </Reveal>
      </section>
    </div>
  );
}
