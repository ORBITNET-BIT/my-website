import { useLanguage } from "../context/LanguageContext"

export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <img
      src="./logo-red.png"
      alt="zaliorax logo"
      className={`${className} rounded-2xl object-cover ring-1 ring-primary-400/40 shadow-[0_0_20px_rgba(230,34,34,0.45)]`}
    />
  )
}

export function Logo({ compact = false, onClick, className = "" }) {
  const { t } = useLanguage()
  return (
    <a
      href="#/"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="zaliorax home"
    >
      <div className="relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
        <LogoMark className="h-9 w-9 sm:h-10 sm:w-10 drop-shadow-[0_0_18px_rgba(230,34,34,0.55)]" />
      </div>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl sm:text-[22px] font-extrabold tracking-[0.18em] text-white">
          zaliorax
        </span>
        {!compact && (
          <span className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-mist-500">
            {t("Network")}
          </span>
        )}
      </span>
    </a>
  )
}
