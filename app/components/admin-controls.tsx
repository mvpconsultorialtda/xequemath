"use client"

import { Button } from "@/components/ui/button"
import { useVisibility } from "@/app/context/visibility-context"
import { EyeOff, Eye } from "lucide-react"

export default function AdminControls() {
  const { showTimeRemaining, toggleTimeRemaining } = useVisibility()

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Button
        onClick={toggleTimeRemaining}
        className="bg-blue-800 hover:bg-blue-700 text-white rounded-full shadow-lg"
        title={showTimeRemaining ? "Ocultar tempo restante" : "Mostrar tempo restante"}
      >
        {showTimeRemaining ? <EyeOff size={20} /> : <Eye size={20} />}
      </Button>
    </div>
  )
}
