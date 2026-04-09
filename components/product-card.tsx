import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  accent: string;
  price: string;
  availability: string;
  cta: string;
};

export function ProductCard({
  name,
  category,
  description,
  image,
  accent,
  price,
  availability,
  cta
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] shadow-panel transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60">
      <div className="relative aspect-[4/4.3] overflow-hidden border-b border-white/10 bg-[#101010]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur">
          <span className="text-[11px] uppercase tracking-[0.24em] text-brand-ember">
            {category}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/64">
            {accent}
          </span>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <h3 className="font-display text-3xl uppercase leading-none tracking-[0.08em] text-white">
            {name}
          </h3>
          <p className="text-base leading-7 text-white/68">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-brand-orange/40 bg-brand-orange/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ember">
            {availability}
          </span>
          <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/74">
            {price}
          </span>
        </div>
        <Link
          href={cta}
          className="inline-flex cursor-pointer rounded-full border border-brand-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-200 hover:bg-brand-orange"
        >
          Consultar precio
        </Link>
      </div>
    </article>
  );
}
