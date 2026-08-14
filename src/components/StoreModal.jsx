import { Wrench, CheckCircle2, BadgeInfo } from "lucide-react"
import Modal from "./Modal"
import Button from "./Button"
import { useUser } from "../context/UserContext"
import { useLanguage } from "../context/LanguageContext"

export default function StoreModal({ open, onClose, rank }) {
  const { user } = useUser()
  const { t } = useLanguage()
  return (
    <Modal open={open} onClose={onClose}>
      <div className="relative px-7 pb-8 pt-10 sm:px-9">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-400/30 bg-primary-500/10">
            <Wrench className="h-8 w-8 text-primary-300" />
            <span className="absolute -right-1 -top-1 inline-flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-60" />
              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-primary-500 bg-amber-400" />
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-white">
            {t("Store Maintenance")}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-400">
            {t("The zaliorax store is currently under maintenance. Purchases are temporarily unavailable — please check back later.")}
          </p>

          {rank && (
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-mist-300">
              <BadgeInfo className="h-4 w-4 text-primary-400" />
              <span>
                {t("Selected:")} <span className="font-semibold text-white">{rank.name}</span> — ${rank.price}
              </span>
            </div>
          )}

          {user && (
            <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-mist-300">
              <img
                src={`https://mc-heads.net/avatar/${user.username}/40`}
                alt=""
                className="h-7 w-7 rounded-lg object-cover ring-1 ring-primary-400/40"
              />
              <span className="truncate">
                {t("Signed in as {username} — purchases will be linked here.", { username: user.username })}
              </span>
            </div>
          )}

          <div className="mt-7 flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-row">
            <Button onClick={onClose} variant="primary" className="w-full sm:w-auto">
              {t("Close")}
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              className="w-full text-mist-400 hover:text-white sm:w-auto"
            >
              {t("Notify me later")}
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-mist-500">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            {t("Ranks will be delivered instantly once the store opens.")}
          </div>
        </div>
      </div>
    </Modal>
  )
}
