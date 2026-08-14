import { createContext, useCallback, useContext, useRef, useState } from "react"
import { CheckCircle2, Info, AlertTriangle, X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const ToastContext = createContext(null)

export function useToast() {
  return useContext(ToastContext)
}

const ICONS = {
  success: CheckCircle2,
  info: Info,
  warning: AlertTriangle,
}

const COLORS = {
  success: "text-emerald-400",
  info: "text-primary-400",
  warning: "text-amber-400",
}

export function ToastProvider({ children }) {
  const { t } = useLanguage()
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const push = useCallback(
    (message, type = "success", duration = 3200) => {
      const id = ++idRef.current
      setToasts((prev) => [...prev, { id, message, type }])
      window.setTimeout(() => dismiss(id), duration)
    },
    [dismiss],
  )

  const notify = useCallback(
    (message, type = "success", duration) => push(message, type, duration),
    [push],
  )

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col items-center gap-2 px-4"
      >
        {toasts.map((toast) => {
          const Icon = ICONS[toast.type] || Info
          return (
            <div
              key={toast.id}
              className="pointer-events-auto flex w-full animate-toast-in items-center gap-3 rounded-2xl border border-white/10 bg-ink-750/90 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              <Icon className={`h-5 w-5 shrink-0 ${COLORS[toast.type] || "text-primary-400"}`} />
              <p className="flex-1 text-sm font-medium text-mist-100">{toast.message}</p>
              <button
                onClick={() => dismiss(toast.id)}
                className="rounded-lg p-1 text-mist-400 transition hover:bg-white/5 hover:text-white"
                aria-label={t("Dismiss notification")}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}
