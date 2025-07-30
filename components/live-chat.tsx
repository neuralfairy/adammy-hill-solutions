"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-14 h-14 bg-warm-orange hover:bg-orange-600 text-black shadow-lg"
          >
            <MessageCircle size={24} />
          </Button>
        )}

        {isOpen && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 h-96">
            <div className="bg-warm-orange text-black p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Live Chat Support</h3>
              <button onClick={() => setIsOpen(false)} className="text-black hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 h-64 flex flex-col justify-center items-center text-center">
              <p className="text-gray-600 mb-4">Get instant help with your messaging strategy questions.</p>
              <Button asChild className="bg-warm-orange hover:bg-orange-600 text-black">
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Live Chat
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
