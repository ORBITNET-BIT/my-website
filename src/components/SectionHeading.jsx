export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-start"
  return (
    <div className={`flex flex-col ${alignCls}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/25 bg-primary-500/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-300">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-mist-400 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  )
}
