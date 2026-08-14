import { createContext, useContext, useCallback, useEffect, useState } from "react"

const KEY = "zaliorax_user"
const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {
      setUser(null)
    }
  }, [])

  const register = useCallback((profile) => {
    setUser(profile)
    try {
      localStorage.setItem(KEY, JSON.stringify(profile))
    } catch {
      /* storage unavailable */
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    try {
      localStorage.removeItem(KEY)
    } catch {
      /* storage unavailable */
    }
  }, [])

  return <UserContext.Provider value={{ user, register, logout }}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
