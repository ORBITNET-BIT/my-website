import { useState } from "react"
import { ShoppingBag, Sparkles, Users, Scale, Calendar, ArrowRight, KeyRound } from "lucide-react"
import Button from "../components/Button"
import JoinNowButton from "../components/JoinNowButton"
import CopyButton from "../components/CopyButton"
import Particles from "../components/Particles"
import Reveal from "../components/Reveal"
import CountUp from "../components/CountUp"
import SectionHeading from "../components/SectionHeading"
import RankCard from "../components/RankCard"
import KeyCard from "../components/KeyCard"
import StoreModal from "../components/StoreModal"
import { LogoMark } from "../components/Logo"
import { SITE } from "../data/site"
import { STATS, FEATURES } from "../data/features"
import { RANKS } from "../data/ranks"
import { KEYS } from "../data/keys"
import { useLanguage } from "../context/LanguageContext"

const FEATURE_ICONS = {
  sparkles: Sparkles,
  users: Users,
  scale: Scale,
  calendar: Calendar,
}

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary-600/[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[380px] w-[480px] rounded-full bg-primary-500/[0.07] blur-[120px]" />

      <Particles count={26} />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-[24%] hidden h-12 w-12 animate-float rounded-2xl border border-primary-400/20 bg-primary-500/[0.06] backdrop-blur-sm lg:block" style={{ animationDelay: "0s" }} />
        <div className="absolute right-[10%] top-[30%] hidden h-16 w-16 animate-float-slow rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm lg:block" style={{ animationDelay: "1.2s" }} />
        <div className="absolute left-[16%] bottom-[22%] hidden h-9 w-9 animate-float-slow rounded-xl border border-primary-400/15 bg-primary-500/[0.05] lg:block" style={{ animationDelay: "2.4s" }} />
        <div className="absolute right-[16%] bottom-[26%] hidden h-14 w-14 animate-float rounded-2xl border border-white/10 bg-white/[0.02] lg:block" style={{ animationDelay: "0.6s" }} />
        <div className="absolute right-[28%] top-[16%] hidden h-7 w-7 animate-float rounded-lg border border-primary-400/20 bg-primary-500/[0.07] md:block" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
          <LogoMark className="h-24 w-24 drop-shadow-[0_0_50px_rgba(255,77,109,0.5)] sm:h-32 sm:w-32" />
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.18s" }}>
          <h1 className="mt-6 font-display text-5xl font-extrabold tracking-[0.12em] text-white sm:text-7xl lg:text-8xl">
            zaliorax
          </h1>
          <p className="mt-4 font-display text-base font-semibold tracking-[0.35em] text-gradient-primary uppercase sm:text-lg">
            {t("Your adventure starts here.")}
          </p>
        </div>

        <p className="animate-fade-up max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg" style={{ animationDelay: "0.32s" }}>
          {t("Join zaliorax, build your legacy, make alliances, and create your own story.")}
        </p>

        <div className="animate-fade-up mt-9 flex flex-col items-center gap-3.5 sm:flex-row" style={{ animationDelay: "0.46s" }}>
          <JoinNowButton size="lg" className="w-full sm:w-auto" />
          <Button to="/store" variant="outline" size="lg" className="w-full sm:w-auto">
            <ShoppingBag className="h-5 w-5" />
            {t("VIEW STORE")}
          </Button>
        </div>

        <div className="animate-fade-up mt-10" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md transition-colors duration-300 hover:border-primary-400/40">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-sm font-medium text-white sm:text-base">{SITE.ip}</span>
            <CopyButton />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-mist-500">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <div className="h-2 w-1 rounded-full bg-primary-400" />
        </div>
      </div>
    </section>
  )
}

function StatsStrip() {
  const { t } = useLanguage()
  return (
    <section className="relative border-y border-white/[0.06] bg-ink-950/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="flex flex-col items-center gap-1.5 px-6 py-9 text-center sm:py-11">
            {stat.text ? (
              <span className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{stat.value}</span>
            ) : (
              <CountUp
                value={stat.value}
                suffix={stat.suffix || ""}
                className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              />
            )}
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist-500">{t(stat.label)}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Whyzaliorax() {
  const { t } = useLanguage()
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t("Why zaliorax")}
          title={t("A server built around you")}
          description={t("We designed zaliorax to feel like home — a place where every player matters, every build is respected, and every session is worth it.")}
        />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, i) => {
          const Icon = FEATURE_ICONS[feature.icon] || Sparkles
          return (
            <Reveal key={feature.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-3xl card-surface p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-400/30 hover:shadow-[0_20px_60px_-20px_rgba(255,77,109,0.4)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/0 blur-3xl transition-all duration-700 group-hover:bg-primary-500/[0.14]" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/10 text-primary-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{t(feature.title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{t(feature.description)}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function StorePreview({ onBuy }) {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-ink-950/50">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-primary-600/[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={t("Store")}
              title={t("Pick your rank")}
              description={t("Support zaliorax and unlock exclusive perks. Every purchase keeps the network running.")}
            />
          </Reveal>
          <Reveal delay={120}>
            <Button to="/store" variant="ghost" className="shrink-0 text-primary-300 hover:text-white">
              {t("View full store")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 rtl:rotate-180" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {RANKS.slice(0, 3).map((rank, i) => (
            <Reveal key={rank.id} delay={i * 100} className={rank.popular ? "lg:-mt-4" : ""}>
              <RankCard rank={rank} onBuy={onBuy} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function KeysPreview({ onBuy }) {
  const { t } = useLanguage()
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={t("Keys")}
            title={t("Unlock exclusive loot")}
            description={t("Crate keys give you a shot at cosmetics, gear and rare rewards. The rarer the key, the better the odds.")}
          />
        </Reveal>
        <Reveal delay={120}>
          <Button to="/store" variant="ghost" className="shrink-0 text-primary-300 hover:text-white">
            {t("View all keys")}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 rtl:rotate-180" />
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {KEYS.slice(0, 3).map((item, i) => (
          <Reveal key={item.id} delay={i * 90}>
            <KeyCard item={item} onBuy={onBuy} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl card-surface px-8 py-7 text-center sm:flex-row sm:text-start">
          <div className="flex items-center gap-4">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/10 text-primary-300">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">{t("Want a better chance?")}</h3>
              <p className="mt-1 text-sm text-mist-400">
                {t("zaliorax+ members get bonus crate rewards every single crate.")}
              </p>
            </div>
          </div>
          <Button to="/store" variant="outline" size="sm" className="shrink-0">
            {t("See ranks")}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}

function Cta() {
  const { t } = useLanguage()
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-[1.5px]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-400/50 via-primary-600/20 to-transparent" />
          <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-ink-850 px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[480px] -translate-x-1/2 rounded-full bg-primary-500/[0.14] blur-[100px]" />

            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                {t("Ready to")} <span className="text-gradient-primary">{t("launch")}</span> {t("into zaliorax?")}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist-400">
                {t("The server is online right now. Jump in and start your journey — no downloads, no setup, just adventure.")}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <JoinNowButton size="lg" className="w-full sm:w-auto" />
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-sm text-mist-100">{SITE.ip}</span>
                  <CopyButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRank, setSelectedRank] = useState(null)

  const openBuy = (rank) => {
    setSelectedRank(rank)
    setModalOpen(true)
  }

  return (
    <div className="animate-fade-in">
      <Hero />
      <StatsStrip />
      <Whyzaliorax />
      <StorePreview onBuy={openBuy} />
      <KeysPreview onBuy={openBuy} />
      <Cta />
      <StoreModal open={modalOpen} onClose={() => setModalOpen(false)} rank={selectedRank} />
    </div>
  )
}
