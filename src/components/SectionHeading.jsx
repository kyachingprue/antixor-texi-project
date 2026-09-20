import { Reveal } from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">{eyebrow}</p>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm leading-relaxed sm:text-base ${light ? "text-slate-300" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
