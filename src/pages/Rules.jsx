import { Shield, Blocks, Swords, MessageSquare, Gavel } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import { RULES } from "../data/rules"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

const ICONS = {
  shield: Shield,
  blocks: Blocks,
  swords: Swords,
  message: MessageSquare,
  gavel: Gavel,
}

export default function Rules() {
  const { t } = useLanguage()
  return (
    <div className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-primary-600/[0.1] blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("Rules")}
            title={t("The zaliorax code")}
            description={t("A few simple rules keep zaliorax fair, friendly, and fun for everyone. Breaking them may result in warnings, mutes, or bans.")}
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {RULES.map((category, i) => {
            const Icon = ICONS[category.icon] || Shield
            return (
              <Reveal key={category.id} delay={i * 60}>
                <div className="group overflow-hidden rounded-3xl card-surface transition-all duration-500 hover:border-primary-400/25 hover:shadow-[0_20px_60px_-24px_rgba(255,77,109,0.35)]">
                  <div className="flex flex-col gap-4 border-b border-white/[0.06] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/10 text-primary-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white">{t(category.title)}</h2>
                      <p className="mt-0.5 text-sm text-mist-500">{t(category.description)}</p>
                    </div>
                  </div>
                  <ul className="grid gap-x-8 gap-y-4 px-6 py-7 sm:px-8 lg:grid-cols-2">
                    {category.rules.map((rule, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-mist-300">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-primary-400/30 bg-primary-500/10 font-display text-[11px] font-bold text-primary-300">
                          {j + 1}
                        </span>
                        {t(rule)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl card-surface px-8 py-8 text-center sm:flex-row sm:text-start">
            <div>
              <h3 className="font-display text-lg font-bold text-white">{t("Not sure about something?")}</h3>
              <p className="mt-1.5 text-sm text-mist-400">
                {t("Ask a member of staff or open a ticket in our Discord — we're happy to help.")}
              </p>
            </div>
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary-400/40 bg-primary-500/10 px-5 py-2.5 text-sm font-semibold text-primary-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-500/20 hover:text-white"
            >
              {t("Join the Discord")}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
