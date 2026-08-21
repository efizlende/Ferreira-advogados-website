interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}