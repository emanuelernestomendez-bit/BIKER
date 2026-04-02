import Link from "next/link";

import { brand } from "@/lib/brand";
import { footerLinks, navigation } from "@/lib/site";
import { LogoMark } from "@/components/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div className="space-y-6">
          <LogoMark />
          <p className="max-w-xl text-base leading-7 text-white/66">
            Motocicletas, accesorios, repuestos y equipamiento para riders que
            necesitan resolver con criterio, presencia y atención directa.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-white">
            Navegación
          </h3>
          <ul className="space-y-3 text-white/66">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="cursor-pointer transition hover:text-brand-ember"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-white">
            Contacto
          </h3>
          <ul className="space-y-3 text-white/66">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="cursor-pointer transition hover:text-brand-ember"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>{brand.scheduleLabel}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
