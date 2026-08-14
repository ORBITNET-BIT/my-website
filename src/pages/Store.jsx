import { useState } from "react"
import { Crown, Palette, Gift, Package, Sparkles, KeyRound } from "lucide-react"
import Button from "../components/Button"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import RankCard from "../components/RankCard"
import KeyCard from "../components/KeyCard"
import StoreModal from "../components/StoreModal"
import { RANKS } from "../data/ranks"
import { KEYS } from "../data/keys"
import { useLanguage } from "../context/LanguageContext"

const CATEGORIES = [
  { id: "ranks", label: "Ranks", icon: Crown, active: true },
  { id: "keys", label: "Keys", icon: KeyRound, active: true },
  { id: "cosmetics", label: "Cosmetics", icon: Palette, active: false },
  { id: "crates", label: "Crates", icon: Gift, active: false },
  { id: "bundles", label: "Bundles", icon: Package, active: false },
]

function ComingSoonCategory({ category }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl card-surface px-8 py-20 text-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-primary-500/20 blur-2xl" />
        <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/10">
          <category.icon className="h-8 w-8 text-primary-300" />
        </div>
      </div>
      <h3 className="mt-6 font-display text-xl font-bold text-white">
        {t(category.label)} {t("coming soon")}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-400">
        {t("This category is currently being prepared. It will be available as soon as the store opens.")}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-mist-400">
        <Sparkles className="h-3.5 w-3.5 text-primary-300" />
        {t("coming soon")}
      </span>
    </div>
  )
}

export default function Store() {
  const { t } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRank, setSelectedRank] = useState(null)

  const openBuy = (rank) => {
    setSelectedRank(rank)
    setModalOpen(true)
  }

  return (
    <div className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-primary-600/[0.1] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("Store")}
            title={t("Support zaliorax, unlock more")}
            description={t("Choose a rank and get instant perks on the server. Purchases are paused right now while we finish the checkout — check back soon.")}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((category) => (
              <span
                key={category.id}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  category.active
                    ? "border-primary-400/40 bg-primary-500/10 text-primary-300 shadow-[0_0_24px_-8px_rgba(255,77,109,0.6)]"
                    : "border-white/[0.08] bg-white/[0.02] text-mist-400"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {t(category.label)}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {RANKS.map((rank, i) => (
            <Reveal key={rank.id} delay={i * 80} className={rank.popular ? "lg:-mt-4" : ""}>
              <RankCard rank={rank} onBuy={openBuy} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <SectionHeading
              eyebrow={t("Keys")}
              title={t("Crate keys")}
              description={t("Keys unlock crates packed with cosmetics, gear and rewards. The rarer the key, the better the loot.")}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KEYS.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <KeyCard item={item} onBuy={openBuy} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.filter((c) => !c.active).map((category, i) => (
            <Reveal key={category.id} delay={i * 100}>
              <ComingSoonCategory category={category} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl card-surface px-8 py-10 text-center sm:flex-row sm:text-start">
            <div>
              <h3 className="font-display text-xl font-bold text-white">{t("Looking for a bundle deal?")}</h3>
              <p className="mt-2 max-w-md text-sm text-mist-400">
                {t("Bundles are the best way to save. They'll be live once the store opens.")}
              </p>
            </div>
            <Button variant="outline" onClick={() => openBuy(null)}>
              {t("Notify me")}
            </Button>
          </div>
        </Reveal>
      </div>

      <StoreModal open={modalOpen} onClose={() => setModalOpen(false)} rank={selectedRank} />
    </div>
  )
}
