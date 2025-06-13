"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/app/context/auth-context"
import { User, LogOut, Settings, BookOpen, ShoppingBag, CreditCard, ChevronDown, GraduationCap } from "lucide-react"

export default function UserMenu() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-3 py-2"
      >
        <img
          src={user.avatar || "/placeholder.svg"}
          alt={user.name}
          className="w-8 h-8 rounded-full border-2 border-green-500"
        />
        <span className="text-white hidden md:inline">{user.name}</span>
        <ChevronDown className="h-4 w-4 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-blue-900 border border-blue-700 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-4 border-b border-blue-700">
            <p className="text-white font-medium">{user.name}</p>
            <p className="text-white/70 text-sm truncate">{user.email}</p>
            {user.location && <p className="text-white/70 text-sm">{user.location}</p>}
          </div>

          <div className="py-2">
            <Link
              href="/meu-perfil"
              className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-4 w-4 mr-3" />
              Meu Perfil
            </Link>
            <Link
              href="/meus-jogos"
              className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <GraduationCap className="h-4 w-4 mr-3" />
              Meus Jogos XEQUEMATH
            </Link>
            <Link
              href="/meu-progresso"
              className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-4 w-4 mr-3" />
              Meu Progresso
            </Link>
            <Link
              href="/meus-pedidos"
              className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag className="h-4 w-4 mr-3" />
              Meus Pedidos
            </Link>
            <Link
              href="/pagamentos"
              className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <CreditCard className="h-4 w-4 mr-3" />
              Pagamentos
            </Link>
            <Link
              href="/configuracoes"
              className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-4 w-4 mr-3" />
              Configurações
            </Link>
          </div>

          <div className="border-t border-blue-700 py-2">
            <button
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-blue-800 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
