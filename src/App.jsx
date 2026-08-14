import { Routes, Route } from "react-router-dom"
import { ToastProvider } from "./components/Toast"
import { UserProvider } from "./context/UserContext"
import { LanguageProvider } from "./context/LanguageContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Rules from "./pages/Rules"
import Status from "./pages/Status"
import Faq from "./pages/Faq"

export default function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <UserProvider>
          <div className="relative flex min-h-screen flex-col bg-ink-900">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/status" element={<Status />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </UserProvider>
      </ToastProvider>
    </LanguageProvider>
  )
}
