import { useEffect, useRef, useState } from "react"
import { LogIn, LogOut, Loader2, ShieldCheck, AlertCircle, CheckCircle2, UserRound } from "lucide-react"
import Modal from "./Modal"
import Button from "./Button"
import { useToast } from "./Toast"
import { useUser } from "../context/UserContext"
import { useLanguage } from "../context/LanguageContext"

const NAME_RE = /^[A-Za-z0-9_]{3,16}$/

export default function AuthModal({ open, onClose }) {
  const { user, register, logout } = useUser()
  const { notify } = useToast()
  const { t } = useLanguage()
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [previewName, setPreviewName] = useState("")
  const timer = useRef(null)

  const activeName = user ? user.username : previewName
  const bodyUrl = activeName ? `https://mc-heads.net/body/${encodeURIComponent(activeName)}/96` : null
  const headUrl = activeName ? `https://mc-heads.net/avatar/${encodeURIComponent(activeName)}/64` : null

  useEffect(() => {
    if (!open) return
    window.clearTimeout(timer.current)
    const name = username.trim()
    if (NAME_RE.test(name)) {
      timer.current = window.setTimeout(() => setPreviewName(name), 350)
    } else {
      setPreviewName("")
    }
    return () => window.clearTimeout(timer.current)
  }, [username, open])

  useEffect(() => {
    if (open) setError("")
  }, [open])

  const submit = async () => {
    const name = username.trim()
    if (!NAME_RE.test(name)) {
      setError(t("Enter a valid Minecraft username — 3 to 16 letters, numbers or underscores."))
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch(`https://mc-heads.net/uuid/${encodeURIComponent(name)}`)
      const data = await res.json()
      if (res.ok && data && data.id) {
        register({ username: data.name || name, uuid: data.id, joinedAt: Date.now() })
        setUsername("")
        notify(t("Welcome to zaliorax, {name}!", { name: data.name || name }))
      } else {
        setError(t("Player not found on Mojang. Double-check the username and try again."))
      }
    } catch {
      setError(t("Couldn't reach the player lookup service. Check your connection and try again."))
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    notify(t("Signed out of zaliorax."))
  }

  return (
    <Modal open={open} onClose={onClose} size="lg">
      <div className="grid sm:grid-cols-2">
        <div className="relative flex flex-col p-7 sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

          {user ? (
            <div className="flex h-full flex-col">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {t("Signed in")}
              </span>
              <div className="mt-7 flex flex-col items-center gap-3 text-center">
                <img
                  src={headUrl}
                  alt={user.username}
                  className="h-24 w-24 rounded-2xl object-cover ring-2 ring-primary-400/40 shadow-[0_0_40px_-8px_rgba(255,77,109,0.6)]"
                />
                <div>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white">{user.username}</h3>
                  <p className="mt-1 font-mono text-xs text-mist-500">
                    UUID · {user.uuid ? `${user.uuid.slice(0, 8)}…${user.uuid.slice(-4)}` : "—"}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-center text-sm leading-relaxed text-mist-400">
                {t("Your account is linked to your purchases and in-game rewards.")}
              </p>

              <Button onClick={handleLogout} variant="outline" className="mt-7 w-full">
                <LogOut className="h-4 w-4" />
                {t("Sign out")}
              </Button>
            </div>
          ) : (
            <>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-400/25 bg-primary-500/10 text-primary-300">
                <UserRound className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white">
                {t("Sign in to zaliorax")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                {t("Enter your Minecraft username to link your account to purchases and in-game rewards.")}
              </p>

              <label htmlFor="mc-username" className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-mist-500">
                {t("Minecraft username")}
              </label>
              <input
                id="mc-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                placeholder={t("e.g. Notch")}
                autoComplete="off"
                spellCheck="false"
                className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900/80 px-4 py-3 font-mono text-sm text-white placeholder-mist-500 outline-none transition-colors duration-300 focus:border-primary-400/60 focus:ring-2 focus:ring-primary-400/20"
              />

              {error && (
                <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-red-400">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {error}
                </p>
              )}

              <Button onClick={submit} disabled={loading} className="mt-5 w-full" shine>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("Checking…")}
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4" />
                    {t("Sign In")}
                  </>
                )}
              </Button>

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-mist-500">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {t("Using your username instantly creates your zaliorax account — no password needed. Your ID is saved locally on this device.")}
              </p>
            </>
          )}
        </div>

        <div className="relative hidden flex-col items-center justify-center overflow-hidden border-l border-white/[0.06] bg-gradient-to-b from-ink-850 to-ink-950 p-8 sm:flex">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-10 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full bg-primary-500/[0.15] blur-3xl" />

          <div className="relative flex flex-col items-center">
            <div className="flex h-48 w-32 items-end justify-center rounded-2xl border border-white/[0.07] bg-ink-900/70">
              {bodyUrl ? (
                <img
                  key={activeName}
                  src={bodyUrl}
                  alt={`${activeName} skin`}
                  className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(255,77,109,0.35)]"
                />
              ) : (
                <span className="pb-4 text-center text-xs text-mist-500">
                  {t("Your character")}
                  <br />
                  {t("appears here")}
                </span>
              )}
            </div>
            <p className="mt-5 max-w-[160px] truncate font-display text-sm font-bold text-white">
              {activeName || "—"}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-mist-500">
              {user ? t("Linked account") : t("Live preview")}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
