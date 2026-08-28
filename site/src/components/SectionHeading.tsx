type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${
            light
              ? "bg-white/10 text-accent-300"
              : "bg-accent-500/10 text-accent-600"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-balance ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty ${
            light ? "text-white/70" : "text-navy-900/65"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
