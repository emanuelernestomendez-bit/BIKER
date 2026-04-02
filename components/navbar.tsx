"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { brand, buildWhatsAppUrl } from "@/lib/brand";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/logo-mark";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[1.7rem] border border-white/10 bg-black/70 p-3 shadow-panel backdrop-blur-xl pointer-events-auto">
        <div className="flex items-center justify-between gap-4">
          <LogoMark />

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 text-sm uppercase tracking-[0.16em] transition duration-200",
                    active
                      ? "bg-brand-orange text-white"
                      : "text-white/68 hover:bg-white/6 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={buildWhatsAppUrl(
                "Hola JC BikerStore, quiero asistencia inmediata por WhatsApp."
              )}
              className="hidden cursor-pointer items-center gap-2 rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-brand-ember sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-brand-orange hover:bg-white/10 lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-4 space-y-2 border-t border-white/10 pt-4 lg:hidden">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block cursor-pointer rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.16em] transition duration-200",
                    active
                      ? "bg-brand-orange text-white"
                      : "bg-white/[0.03] text-white/72 hover:bg-white/8 hover:text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={buildWhatsAppUrl(
                `Hola ${brand.name}, quiero consultar productos y servicios.`
              )}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-brand-orange bg-brand-orange px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-brand-ember"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Escribir ahora
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
