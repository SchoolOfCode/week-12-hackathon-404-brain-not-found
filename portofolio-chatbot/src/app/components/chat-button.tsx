"use client"

import { MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ChatButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    alert("AI Chat functionality coming soon!")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Chat with AI"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-popover text-popover-foreground px-3 py-1.5 rounded shadow-md text-sm whitespace-nowrap">
          Chat with AI (Coming Soon)
        </div>
      )}
    </div>
  )
}

