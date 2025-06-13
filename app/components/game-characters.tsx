"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function GameCharacters() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [useDirectUrl, setUseDirectUrl] = useState(false)

  useEffect(() => {
    // Tenta carregar a imagem da pasta public primeiro
    const img = new Image()
    img.src = "/game-characters.png"

    img.onload = () => {
      setImageLoaded(true)
    }

    img.onerror = () => {
      // Se falhar, usa a URL direta
      console.log("Erro ao carregar imagem da pasta public, usando URL direta")
      setUseDirectUrl(true)
    }

    // Timeout de segurança para garantir que algo seja exibido
    const timeout = setTimeout(() => {
      if (!imageLoaded) {
        setUseDirectUrl(true)
      }
    }, 2000)

    return () => clearTimeout(timeout)
  }, [imageLoaded])

  if (useDirectUrl) {
    return (
      <div className="flex justify-center items-end mt-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/game-characters-DJJ6eNR3wTxAcXFnDRpJAtJa9gMt9P.png"
          alt="Game characters - wizard, knight and monster with treasure"
          className="w-full max-w-4xl"
        />
      </div>
    )
  }

  return (
    <div className="flex justify-center items-end mt-6">
      {imageLoaded ? (
        <Image
          src="/game-characters.png"
          alt="Game characters - wizard, knight and monster with treasure"
          width={768}
          height={300}
          className="w-full max-w-4xl"
          priority
        />
      ) : (
        <div className="w-full max-w-4xl h-[300px] flex items-center justify-center">
          <p className="text-white">Carregando personagens...</p>
        </div>
      )}
    </div>
  )
}
