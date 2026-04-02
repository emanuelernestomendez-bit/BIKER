import Link from "next/link";

export function LogoMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-panel transition-transform duration-300 group-hover:-translate-y-0.5">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,92,13,0.45),transparent_55%)]" />
        <span className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
          JC
        </span>
      </span>
      <span className="flex flex-col">
        <span className="font-display text-2xl uppercase leading-none tracking-[0.18em] text-white">
          BikerStore
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-white/55">
          Santo Domingo RD
        </span>
      </span>
    </Link>
  );
}
