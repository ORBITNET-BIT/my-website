import { Construction } from "lucide-react"
import Button from "./Button"
import { useLanguage } from "../context/LanguageContext"

export default function ComingSoon({ title, message }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-primary-500/25 blur-3xl" />
        <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-primary-400/30 bg-primary-500/10">
          <Construction className="h-9 w-9 text-primary-300" />
        </div>
      </div>
      <h2 className="mt-8 font-display text-3xl font-extrabold tracking-tight text-white">{title ?? t("Coming soon")}</h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-400">
        {message || t("This feature is currently being prepared and will be available very soon.")}
      </p>
      <Button to="/" variant="outline" className="mt-8">
        {t("Back to Home")}
      </Button>
    </div>
  )
}
