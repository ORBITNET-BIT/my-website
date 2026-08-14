import { MessageCircle, LifeBuoy } from "lucide-react"
import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import FaqAccordion from "../components/FaqAccordion"
import { FAQ_ITEMS } from "../data/faq"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

export default function Faq() {
  const { t } = useLanguage()
  return (
    <div className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-primary-600/[0.1] blur-[130px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("FAQ")}
            title={t("Frequently asked questions")}
            description={t("Everything you need to know about joining, playing, and supporting zaliorax.")}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <FaqAccordion items={FAQ_ITEMS.map((item) => ({ q: t(item.q), a: t(item.a) }))} />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl card-surface px-8 py-9 text-center sm:flex-row sm:text-start">
            <div className="flex items-start gap-4">
              <div className="hidden sm:block">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/10 text-primary-300">
                  <LifeBuoy className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{t("Still have questions?")}</h3>
                <p className="mt-1 text-sm text-mist-400">
                  {t("Our team answers fast in the Discord — open a ticket and we'll help you out.")}
                </p>
              </div>
            </div>
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(255,77,109,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(255,77,109,0.8)]"
            >
              <MessageCircle className="h-4 w-4" />
              {t("Contact support")}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
