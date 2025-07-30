"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function GDPRBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("gdpr-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("gdpr-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("gdpr-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-deep-navy text-white p-4 z-50 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you
            consent to our use of cookies.{" "}
            <a href="/privacy" className="text-warm-orange hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={declineCookies}
            variant="outline"
            size="sm"
            className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"
          >
            Decline
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-warm-orange hover:bg-orange-600 text-black">
            Accept
          </Button>
          <button onClick={declineCookies} className="text-gray-400 hover:text-white ml-2">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
