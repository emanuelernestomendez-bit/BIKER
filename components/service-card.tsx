import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  includes: string;
  forWho: string;
  benefit: string;
  price: string;
  modalities: string[];
  trust: string;
  icon: LucideIcon;
  ctaLabel: string;
  cta: string;
  supportLabel?: string;
  supportHref?: string;
};

export function ServiceCard({
  title,
  includes,
  forWho,
  benefit,
  price,
  modalities,
  trust,
  icon: Icon,
  ctaLabel,
  cta,
  supportLabel,
  supportHref
}: ServiceCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,92,13,0.18),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col space-y-6">
        <span className="inline-flex rounded-2xl border border-white/10 bg-black/40 p-4 text-brand-ember">
          <Icon className="h-7 w-7" />
        </span>
        <div className="space-y-4">
          <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
            {title}
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-ember">
                Que incluye
              </p>
              <p className="text-base leading-7 text-white/72">{includes}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.3rem] border border-white/10 bg-black/30 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                  Para quien es
                </p>
                <p className="mt-2 text-sm leading-6 text-white/72">{forWho}</p>
              </div>
              <div className="rounded-[1.3rem] border border-white/10 bg-black/30 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
                  Beneficio principal
                </p>
                <p className="mt-2 text-sm leading-6 text-white/72">{benefit}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {modalities.map((modality) => (
              <span
                key={modality}
                className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/74"
              >
                {modality}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/48">
              Precio o cotizacion
            </p>
            <p className="font-display text-3xl uppercase leading-none tracking-[0.06em] text-brand-ember">
              {price}
            </p>
          </div>
          <p className="text-sm leading-6 text-white/52">{trust}</p>
        </div>
        <div className="mt-auto space-y-3 pt-2">
          {supportLabel && supportHref ? (
            <Link
              href={supportHref}
              className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/64 transition duration-200 hover:text-brand-ember"
            >
              {supportLabel}
            </Link>
          ) : null}
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
