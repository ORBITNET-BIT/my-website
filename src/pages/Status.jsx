import Reveal from "../components/Reveal"
import SectionHeading from "../components/SectionHeading"
import StatusCard from "../components/StatusCard"
import CopyButton from "../components/CopyButton"
import Button from "../components/Button"
import { useToast } from "../components/Toast"
import { SERVICES, STATUS_META } from "../data/status"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

export default function Status() {
  const { notify } = useToast()
  const { t } = useLanguage()
  const summary = SERVICES.filter((s) => s.status === "operational" || s.status === "online").length

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(SITE.ip)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = SITE.ip
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
    }
    notify(t("IP copied! Launch Minecraft and join {ip}", { ip: SITE.ip }))
  }

  return (
    <div className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-primary-600/[0.1] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("Status")}
            title={t("All systems, at a glance")}
            description={t("Live overview of every zaliorax service. If anything ever goes down, you'll see it here first.")}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl card-surface px-8 py-7 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="relative inline-flex h-12 w-12 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-emerald-400/25" />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-sm font-bold text-emerald-400">
                  {summary}/4
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {summary === 4 ? t("Everything is running smoothly") : t("Most services operational")}
                </h3>
                <p className="mt-0.5 text-sm text-mist-500">
                  {t("Last updated just now · auto-refreshes every 60 seconds")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="font-mono text-sm text-mist-100">{SITE.ip}</span>
              <CopyButton />
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <StatusCard service={service} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal delay={60}>
            <div className="flex h-full flex-col rounded-3xl card-surface p-7">
              <h3 className="font-display text-base font-bold text-white">{t("Minecraft Server")}</h3>
              <p className="mt-1 text-sm text-mist-500">{t("Direct connection details")}</p>
              <dl className="mt-5 flex flex-1 flex-col gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-mist-500">{t("Address")}</dt>
                  <dd className="font-mono font-medium text-white">{SITE.ip}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-mist-500">{t("Version")}</dt>
                  <dd className="font-mono font-medium text-mist-300">{SITE.version}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-mist-500">{t("Players")}</dt>
                  <dd className="font-mono font-medium text-mist-300">127 / 500</dd>
                </div>
              </dl>
              <Button onClick={copyIp} variant="outline" size="sm" className="mt-6 w-full">
                {t("Copy to join")}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-3xl card-surface p-7">
              <h3 className="font-display text-base font-bold text-white">{t("Recent updates")}</h3>
              <p className="mt-1 text-sm text-mist-500">{t("Latest from the zaliorax team")}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-4">
                {[
                  { tag: "Update", text: "Season 3 has arrived with new cosmetics", time: "2 days ago" },
                  { tag: "Patch", text: "Anti-cheat and stability improvements", time: "5 days ago" },
                  { tag: "Event", text: "Summer festival starts this weekend", time: "1 week ago" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-400" />
                    <div>
                      <p className="text-sm leading-snug text-mist-300">{t(item.text)}</p>
                      <p className="mt-1 text-xs text-mist-500">
                        {t(item.tag)} · {t(item.time)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-3xl card-surface p-7">
              <h3 className="font-display text-base font-bold text-white">{t("Legend")}</h3>
              <p className="mt-1 text-sm text-mist-500">{t("What each indicator means")}</p>
              <div className="mt-5 flex flex-1 flex-col gap-3">
                {Object.entries(STATUS_META).slice(0, 3).map(([key, meta]) => (
                  <div key={key} className="flex items-center gap-3 text-sm">
                    <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${meta.dot} shadow-[0_0_10px] ${meta.glow}`} />
                    <span className={`font-medium capitalize ${meta.color}`}>{t(meta.label)}</span>
                    <span className="ms-auto text-xs text-mist-500">
                      {key === "maintenance" ? t("Planned or ongoing work") : key === "online" ? t("Accepting players") : t("No issues")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
