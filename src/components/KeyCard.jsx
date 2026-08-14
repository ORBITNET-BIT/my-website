import { Check, KeyRound } from "lucide-react"
import Button from "./Button"
import { useLanguage } from "../context/LanguageContext"

export default function KeyCard({ item, onBuy }) {
  const { t } = useLanguage()
  return (
    <div className="group relative flex h-full flex-col rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-1.5">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-400/40 via-primary-600/20 to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="relative flex h-full flex-col rounded-3xl card-surface p-6 sm:p-7">
        <div className="flex items-center gap-3.5">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-400/30 bg-primary-500/10 text-primary-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <KeyRound className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-bold text-white">{t(item.name)}</h3>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist-500">
              {t(item.rarity)}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-end gap-1.5">
          <span className="font-display text-3xl font-extrabold tracking-tight text-white">${item.price}</span>
          <span className="pb-1 text-sm text-mist-500">{t("USD")}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-mist-400">{t(item.tagline)}</p>

        <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/[0.07] pt-5">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-mist-300">
              <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="font-mono text-[13px]">{t(feature)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Button onClick={() => onBuy(item)} variant="outline" className="w-full">
            {t("Buy Key")}
          </Button>
        </div>
      </div>
    </div>
  )
}
