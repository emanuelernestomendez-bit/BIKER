import Link from "next/link";

import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-200",
        variant === "primary"
          ? "border-brand-orange bg-brand-orange text-white shadow-glow hover:bg-brand-ember"
          : "border-white/14 bg-white/5 text-white hover:border-brand-orange hover:bg-white/10",
        className
      )}
    >
      {children}
    </Link>
  );
}
