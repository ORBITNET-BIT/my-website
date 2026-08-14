import { Play } from "lucide-react"
import Button from "./Button"
import { useToast } from "./Toast"
import { SITE } from "../data/site"
import { useLanguage } from "../context/LanguageContext"

export default function JoinNowButton({ size = "lg", className = "" }) {
  const { notify } = useToast()
  const { t } = useLanguage()

  const join = async () => {
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
    <Button onClick={join} variant="primary" size={size} shine className={className}>
      <Play className="h-5 w-5 fill-current" />
      {t("PLAY NOW")}
    </Button>
  )
}
