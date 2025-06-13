"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type VisibilityContextType = {
  showTimeRemaining: boolean
  toggleTimeRemaining: () => void
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined)

export function VisibilityProvider({ children }: { children: ReactNode }) {
  // Inicializa com o valor do localStorage, se disponível
  const [showTimeRemaining, setShowTimeRemaining] = useState(true)

  // Carrega a preferência do usuário ao montar o componente
  useEffect(() => {
    const savedPreference = localStorage.getItem("showTimeRemaining")
    if (savedPreference !== null) {
      setShowTimeRemaining(savedPreference === "true")
    }
  }, [])

  const toggleTimeRemaining = () => {
    const newValue = !showTimeRemaining
    setShowTimeRemaining(newValue)
    // Salva a preferência do usuário
    localStorage.setItem("showTimeRemaining", String(newValue))
  }

  return (
    <VisibilityContext.Provider value={{ showTimeRemaining, toggleTimeRemaining }}>
      {children}
    </VisibilityContext.Provider>
  )
}

export function useVisibility() {
  const context = useContext(VisibilityContext)
  if (context === undefined) {
    throw new Error("useVisibility must be used within a VisibilityProvider")
  }
  return context
}
