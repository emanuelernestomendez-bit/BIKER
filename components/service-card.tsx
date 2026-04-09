import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  includes: string;
  forWho: string;
  benefit: string;
  pricingLabel: string;
  price: string;
  priceNote?: string;
  modalities: string[];
  trust: string;
  icon: LucideIcon;
  featured?: boolean;
  ctaLabel: string;
  cta: string;
};

export function ServiceCard({
  title,
  includes,
  forWho,
  benefit,
  pricingLabel,
  price,
  priceNote,
  modalities,
  trust,
  icon: Icon,
  featured = false,
  ctaLabel,
  cta
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] shadow-panel transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60",
        featured ? "p-8 lg:p-9" : "p-7"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,92,13,0.18),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col space-y-6">
        <span className="inline-flex rounded-2xl border border-white/10 bg-black/40 p-4 text-brand-ember">
          <Icon className="h-7 w-7" />
        </span>
        <div className="space-y-4">
          <h3
            className={cn(
              "font-display uppercase leading-none text-white",
              featured
                ? "text-[2.15rem] tracking-[0.06em]"
                : "text-3xl tracking-[0.08em]"
            )}
          >
            {title}
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-ember">
                Qué incluye
              </p>
              <p className="text-base leading-7 text-white/72">{includes}</p>
            </div>
            <dl className="space-y-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                  Para quién es
                </dt>
                <dd className="mt-1 text-sm leading-6 text-white/72">{forWho}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                  Beneficio principal
                </dt>
                <dd className="mt-1 text-sm leading-6 text-white/72">{benefit}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="space-y-5 border-t border-white/10 pt-5">
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                Modalidad
              </p>
              <p className="text-sm leading-6 text-white/72">
                {modalities.join(" · ")}
              </p>
            </div>
            <div className="space-y-1 sm:text-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                {pricingLabel}
              </p>
              <p className="font-display text-3xl uppercase leading-none tracking-[0.06em] text-brand-ember">
                {price}
              </p>
              {priceNote ? (
                <p className="text-xs leading-5 text-white/52">{priceNote}</p>
              ) : null}
            </div>
          </div>
          <p className="text-sm leading-6 text-white/52">{trust}</p>
        </div>
        <div className="mt-auto pt-1">
          <Link
            href={cta}
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-200 hover:bg-brand-ember"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
