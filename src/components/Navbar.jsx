import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe } from "lucide-react"
import { Logo } from "./Logo"
import SignInButton from "./SignInButton"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { lang, t, toggle } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink-900/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {SITE.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-mist-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(item.label)}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggle}
            className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.03] px-3.5 text-sm font-semibold text-mist-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/50 hover:text-white"
            aria-label="Switch language / تبديل اللغة"
          >
            <Globe className="h-4 w-4 text-primary-300" />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <SignInButton size="sm" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mist-100 transition hover:bg-white/[0.07] lg:hidden"
          aria-label={open ? t("Close menu") : t("Open menu")}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`relative flex h-[calc(100dvh-4rem)] flex-col bg-ink-900/95 px-6 pt-6 pb-10 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="flex flex-col gap-1">
            {SITE.nav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-4 text-lg font-semibold transition-all duration-500 ${
                    isActive
                      ? "bg-primary-500/10 text-primary-300"
                      : "text-mist-300 hover:bg-white/[0.04] hover:text-white"
                  } ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </div>

          <div
            className={`mt-auto flex flex-col gap-2.5 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "380ms" : "0ms" }}
          >
            <button
              onClick={toggle}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-mist-200 transition hover:border-primary-400/50 hover:text-white"
              aria-label="Switch language / تبديل اللغة"
            >
              <Globe className="h-4 w-4 text-primary-300" />
              {lang === "en" ? "عربي" : "English"}
            </button>
            <SignInButton className="w-full" size="lg" />
            <p className="mt-2 text-center font-mono text-sm text-mist-500">{SITE.ip}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
