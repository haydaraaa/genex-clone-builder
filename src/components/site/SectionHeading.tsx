export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-primary ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
