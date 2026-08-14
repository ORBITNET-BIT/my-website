import { Link } from "react-router-dom"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:cursor-not-allowed disabled:opacity-50 select-none"

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
}

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-[0_8px_30px_-8px_rgba(255,77,109,0.65)] hover:shadow-[0_12px_40px_-8px_rgba(255,77,109,0.8)] hover:-translate-y-0.5 active:translate-y-0",
  glow: "relative overflow-hidden bg-white text-ink-900 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-6px_rgba(255,122,145,0.9)] active:translate-y-0",
  outline:
    "border border-white/12 bg-white/[0.03] text-mist-100 hover:border-primary-400/50 hover:bg-primary-500/10 hover:-translate-y-0.5 hover:text-white active:translate-y-0",
  ghost: "text-mist-300 hover:text-white hover:bg-white/5",
  dark: "bg-ink-700 text-mist-100 hover:bg-ink-600 hover:-translate-y-0.5 active:translate-y-0 border border-white/10",
}

export function shineClass() {
  return (
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent " +
    "hover:before:animate-[shine_0.9s_ease] "
  )
}

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  shine = false,
  ...props
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${shine ? shineClass() : ""} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
