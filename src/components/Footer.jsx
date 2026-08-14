import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import { DiscordIcon } from "./SocialIcons"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

const SOCIAL_ICONS = {
  Discord: DiscordIcon,
}

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm text-mist-400">{t(SITE.tagline)}</p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label={t("Footer")}>
            {SITE.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-mist-400 transition-colors hover:text-primary-300"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SITE.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.label] || DiscordIcon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mist-400 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/50 hover:text-primary-300 hover:shadow-[0_10px_30px_-10px_rgba(255,77,109,0.6)]"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-xs text-mist-500">{SITE.ip}</p>
          <p className="text-xs text-mist-500">
            {t("© 2026 zaliorax Network. All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}
