import { useState } from "react"
import { LogIn } from "lucide-react"
import Button from "./Button"
import AuthModal from "./AuthModal"
import { useUser } from "../context/UserContext"
import { useLanguage } from "../context/LanguageContext"

export default function SignInButton({ size = "sm", className = "", label }) {
  const { user } = useUser()
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const finalLabel = label ?? t("Sign In")

  if (user) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className={`group inline-flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/50 ${className}`}
          aria-label={t("Open your zaliorax account")}
        >
          <img
            src={`https://mc-heads.net/avatar/${user.username}/40`}
            alt=""
            className="h-7 w-7 rounded-lg object-cover ring-1 ring-primary-400/40"
          />
          <span className="max-w-[110px] truncate text-sm font-semibold text-white">{user.username}</span>
        </button>
        <AuthModal open={open} onClose={() => setOpen(false)} />
      </>
    )
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline" size={size} className={className}>
        <LogIn className="h-4 w-4" />
        {finalLabel}
      </Button>
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
