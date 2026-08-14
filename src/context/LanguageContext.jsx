import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { AR } from "../data/translations"

const KEY = "zaliorax_lang"
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === "ar" || saved === "en") setLang(saved)
    } catch {
      /* storage unavailable */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  const t = useCallback(
    (key, vars) => {
      let text = lang === "ar" ? AR[key] ?? key : key
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, v)
        }
      }
      return text
    },
    [lang],
  )

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), [])

  return <LanguageContext.Provider value={{ lang, t, toggle }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
