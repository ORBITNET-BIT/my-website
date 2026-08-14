import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { useToast } from "./Toast"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

export default function CopyButton({ className = "", size = "md" }) {
  const { notify } = useToast()
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
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
    setCopied(true)
    notify(t("Server IP copied to clipboard!"))
    window.setTimeout(() => setCopied(false), 1800)
  }

  const cls =
    size === "lg"
      ? "h-11 w-11 rounded-xl"
      : "h-9 w-9 rounded-lg"

  return (
    <button
      onClick={copy}
      aria-label={t("Copy server address")}
      title={t("Copy server address")}
      className={`inline-flex items-center justify-center border border-white/12 bg-white/[0.05] text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/50 hover:text-primary-300 ${cls} ${className}`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  )
}
