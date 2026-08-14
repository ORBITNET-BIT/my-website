import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-primary-400/30 bg-ink-750 shadow-[0_0_40px_-18px_rgba(255,77,109,0.5)]"
                : "border-white/[0.07] bg-ink-800 hover:border-white/[0.14]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
              aria-expanded={isOpen}
            >
              <span className={`text-base font-semibold transition-colors duration-300 ${isOpen ? "text-white" : "text-mist-100"}`}>
                {item.q}
              </span>
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-primary-400/40 bg-primary-500/10 text-primary-300"
                    : "border-white/10 bg-white/[0.03] text-mist-400"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-mist-400">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
