import { STATUS_META } from "../data/status"
import { useLanguage } from "../context/LanguageContext"

export default function StatusCard({ service, index }) {
  const { t } = useLanguage()
  const meta = STATUS_META[service.status]
  const delay = index * 80

  return (
    <div
      className="group relative rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-1.5"
    >
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-white/12 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${
          service.status === "maintenance" ? "from-amber-400/25" : ""
        }`}
      />
      <div className="relative flex h-full flex-col rounded-3xl bg-gradient-to-b from-ink-800 to-ink-850 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white">{t(service.name)}</h3>
            <p className="mt-1 text-sm text-mist-500">{t(service.detail)}</p>
          </div>
          <span
            className={`relative inline-flex h-3 w-3 shrink-0 rounded-full ${meta.dot} shadow-[0_0_14px] ${meta.glow}`}
          >
            <span className={`absolute inset-0 animate-ping rounded-full ${meta.dot} opacity-50`} />
          </span>
        </div>

        <dl className="mt-6 flex flex-col gap-3 border-t border-white/[0.07] pt-6" style={{ animationDelay: `${delay}ms` }}>
          {service.items.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 text-sm">
              <dt className="text-mist-500">{t(item.label)}</dt>
              <dd className={`font-mono font-medium ${meta.color}`}>{t(item.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
