import Link from "next/link";

import { brand } from "@/lib/brand";
import { footerLinks, navigation } from "@/lib/site";
import { LogoMark } from "@/components/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
          <LogoMark />
          <p className="max-w-xl text-base leading-7 text-white/66">
            Motocicletas, accesorios, repuestos y equipamiento para riders que
            necesitan resolver con criterio, presencia y atención directa.
          </p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm uppercase tracking-[0.18em] text-white/64">
            {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="cursor-pointer transition hover:text-brand-ember"
                >
                  {item.label}
                </Link>
            ))}
          </nav>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/64">
          <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
            <p>{brand.phoneDisplay}</p>
            <p>@jc_bikerstore_rd</p>
            <p>{brand.scheduleLabel}</p>
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="cursor-pointer transition hover:text-brand-ember"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
