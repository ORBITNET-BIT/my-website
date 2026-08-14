import { Check, Crown, Zap } from "lucide-react"
import Button from "./Button"
import { useLanguage } from "../context/LanguageContext"

export default function RankCard({ rank, onBuy, featured = rank.popular }) {
  const { t } = useLanguage()
  return (
    <div
      className={`group relative flex flex-col rounded-3xl p-[1.5px] transition-all duration-500 ${
        featured
          ? "hover:-translate-y-2"
          : "hover:-translate-y-1.5"
      }`}
    >
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-400/60 via-primary-600/25 to-transparent blur-[2px] transition-opacity duration-500 ${
          featured ? "opacity-80 group-hover:opacity-100" : "opacity-25 group-hover:opacity-60"
        }`}
      />
      <div
        className={`relative flex h-full flex-col rounded-3xl ${
          featured
            ? "bg-gradient-to-b from-ink-750 to-ink-800"
            : "bg-gradient-to-b from-ink-800 to-ink-850"
        } border border-white/[0.08]`}
      >
        {featured && (
          <div className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_6px_20px_-4px_rgba(255,77,109,0.7)]">
            <Crown className="h-3.5 w-3.5" />
            {t("Best value")}
          </div>
        )}
        {!featured && rank.badge && (
          <div className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center whitespace-nowrap rounded-full border border-primary-400/40 bg-ink-800 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-300 shadow-[0_6px_20px_-6px_rgba(255,77,109,0.5)]">
            {t(rank.badge)}
          </div>
        )}

        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex items-center gap-4">
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${rank.accent} shadow-[0_8px_24px_-8px_rgba(255,77,109,0.6)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
            >
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold tracking-tight text-white">
                {rank.name}
              </h3>
              <p className="text-xs text-mist-500">{t("Permanent rank")}</p>
            </div>
          </div>

          <div className="mt-6 flex items-end gap-1.5">
            <span className="font-display text-4xl font-extrabold tracking-tight text-white">
              ${rank.price}
            </span>
            <span className="pb-1 text-sm text-mist-500">{t("USD")}</span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-mist-400">{t(rank.tagline)}</p>

          <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/[0.07] pt-6">
            {rank.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-mist-300">
                <span
                  className={`mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                    featured ? "bg-primary-500/20 text-primary-300" : "bg-white/[0.06] text-mist-400"
                  }`}
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="font-mono text-[13px]">{t(feature)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto p-6 pt-0 sm:p-7 sm:pt-0">
          <Button
            onClick={() => onBuy(rank)}
            variant={featured ? "primary" : "outline"}
            className="w-full"
            shine={featured}
          >
            {t("Buy Now")}
          </Button>
        </div>
      </div>
    </div>
  )
}
