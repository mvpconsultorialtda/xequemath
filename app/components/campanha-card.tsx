"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, BrainCircuit, Divide, Sigma, Triangle, CircleDollarSign } from "lucide-react"
import { useVisibility } from "@/app/context/visibility-context"

interface CampanhaCardProps {
  campanha: {
    id: number
    titulo: string
    criador: string
    meta: string
    arrecadado: string
    percentual: number
    diasRestantes: number
    imagem?: string
    descricao: string
    categoria: string
  }
}

export default function CampanhaCard({ campanha }: CampanhaCardProps) {
  const [showExpandedImage, setShowExpandedImage] = useState(false)
  const { showTimeRemaining } = useVisibility()

  const handleMouseEnter = () => {
    setShowExpandedImage(true)
  }

  const handleMouseLeave = () => {
    setShowExpandedImage(false)
  }

  // Função para obter o ícone com base no título ou categoria
  const getCampanhaIcon = () => {
    const title = campanha.titulo.toLowerCase()

    if (title.includes("fração") || title.includes("dose certa")) {
      return <Divide className="h-16 w-16 text-green-400" />
    } else if (title.includes("álgebra") || title.includes("canvas")) {
      return <Sigma className="h-16 w-16 text-green-400" />
    } else if (title.includes("geometria") || title.includes("caçadora")) {
      return <Triangle className="h-16 w-16 text-green-400" />
    } else if (title.includes("financeira") || title.includes("calorias")) {
      return <CircleDollarSign className="h-16 w-16 text-green-400" />
    } else if (title.includes("dungeons") || title.includes("exantor")) {
      return <BrainCircuit className="h-16 w-16 text-green-400" />
    } else {
      return <Calculator className="h-16 w-16 text-green-400" />
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden relative">
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="w-full h-48 bg-gradient-to-b from-blue-700/50 to-blue-900/50 flex items-center justify-center">
          {getCampanhaIcon()}
        </div>

        {showExpandedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setShowExpandedImage(false)}
          >
            <div
              className="relative bg-amber-900/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-amber-500 max-w-2xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => setShowExpandedImage(false)}
              >
                ✕
              </button>
              <div className="w-full h-[50vh] flex flex-col items-center justify-center">
                {getCampanhaIcon()}
                <p className="text-white mt-4 text-xl">{campanha.titulo}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{campanha.titulo}</CardTitle>
        <CardDescription className="text-white/80">por {campanha.criador}</CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>{campanha.arrecadado}</span>
            <span>{campanha.meta}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${campanha.percentual}%` }}></div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span>{campanha.percentual}% financiado</span>
          {showTimeRemaining && <span>{campanha.diasRestantes} dias restantes</span>}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-orange-600 hover:bg-orange-700">Apoiar Projeto</Button>
      </CardFooter>
    </Card>
  )
}
