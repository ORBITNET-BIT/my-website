import { useEffect, useState } from "react"

export default function PageTransition({ children }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 60)
    window.scrollTo(0, 0)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <div
      className={`min-h-screen transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
