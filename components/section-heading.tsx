type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={[
        "max-w-3xl space-y-4",
        centered ? "mx-auto text-center" : ""
      ].join(" ")}
    >
      <p className="text-sm uppercase tracking-[0.34em] text-brand-ember">
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-white/68 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
