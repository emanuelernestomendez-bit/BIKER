import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  cta: string;
};

export function ServiceCard({
  title,
  description,
  details,
  icon: Icon,
  cta
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,92,13,0.18),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative space-y-6">
        <span className="inline-flex rounded-2xl border border-white/10 bg-black/40 p-4 text-brand-ember">
          <Icon className="h-7 w-7" />
        </span>
        <div className="space-y-3">
          <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
            {title}
          </h3>
          <p className="text-base leading-7 text-white/68">{description}</p>
          <p className="text-sm uppercase tracking-[0.18em] text-white/46">
            {details}
          </p>
        </div>
        <Link
          href={cta}
          className="inline-flex cursor-pointer rounded-full border border-white/12 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-200 hover:border-brand-orange hover:bg-white/8"
        >
          Consultar vía WhatsApp
        </Link>
      </div>
    </article>
  );
}
