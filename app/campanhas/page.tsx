"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AdminControls from "@/app/components/admin-controls"
import Navigation from "@/app/components/navigation"
import {
  Calculator,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  PlusCircle,
  GraduationCap,
  CastleIcon as ChessKnight,
  Divide,
  Sigma,
  LineChart,
  Triangle,
  CircleDollarSign,
} from "lucide-react"

export default function JogosPage() {
  const jogosEducacionais = [
    {
      id: 1,
      titulo: "Frações Divertidas",
      criador: "Equipe XEQUEMATH",
      meta: "R$ 30.000",
      arrecadado: "R$ 22.450",
      percentual: 75,
      diasRestantes: 15,
      icone: <Divide className="h-16 w-16" />,
      descricao:
        "Um jogo de tabuleiro que ensina frações de forma divertida e interativa, ideal para crianças do ensino fundamental.",
      categoria: "Aritmética",
      faixaEtaria: "7-10 anos",
    },
    {
      id: 2,
      titulo: "Álgebra em Ação",
      criador: "Prof. Carlos Mendes",
      meta: "R$ 25.000",
      arrecadado: "R$ 18.750",
      percentual: 75,
      diasRestantes: 12,
      icone: <Sigma className="h-16 w-16" />,
      descricao: "Um jogo de cartas que transforma equações algébricas em desafios divertidas para adolescentes.",
      categoria: "Álgebra",
      faixaEtaria: "12-15 anos",
    },
    {
      id: 3,
      titulo: "Geometria Espacial",
      criador: "Matemática Aplicada",
      meta: "R$ 35.000",
      arrecadado: "R$ 17.500",
      percentual: 50,
      diasRestantes: 21,
      icone: <Triangle className="h-16 w-16" />,
      descricao:
        "Um jogo que utiliza realidade aumentada para ensinar conceitos de geometria espacial de forma interativa.",
      categoria: "Geometria",
      faixaEtaria: "14-17 anos",
    },
    {
      id: 4,
      titulo: "Matemática Financeira",
      criador: "Educação Financeira Brasil",
      meta: "R$ 40.000",
      arrecadado: "R$ 28.000",
      percentual: 70,
      diasRestantes: 8,
      icone: <CircleDollarSign className="h-16 w-16" />,
      descricao:
        "Um jogo de tabuleiro que ensina conceitos de matemática financeira, juros e investimentos para jovens.",
      categoria: "Matemática Financeira",
      faixaEtaria: "15-18 anos",
    },
    {
      id: 5,
      titulo: "Aventuras com Números",
      criador: "Aprender Brincando",
      meta: "R$ 20.000",
      arrecadado: "R$ 12.000",
      percentual: 60,
      diasRestantes: 18,
      icone: <Calculator className="h-16 w-16" />,
      descricao:
        "Um jogo de aventura que ensina operações básicas de matemática para crianças em fase de alfabetização matemática.",
      categoria: "Aritmética",
      faixaEtaria: "5-8 anos",
    },
    {
      id: 6,
      titulo: "Matrizes e Determinantes",
      criador: "Matemática Avançada",
      meta: "R$ 45.000",
      arrecadado: "R$ 22.500",
      percentual: 50,
      diasRestantes: 25,
      icone: <LineChart className="h-16 w-16" />,
      descricao:
        "Um jogo estratégico que ensina o conceito de matrizes e determinantes para estudantes do ensino médio.",
      categoria: "Álgebra",
      faixaEtaria: "16-18 anos",
    },
  ]

  const [filteredJogos, setFilteredJogos] = useState(jogosEducacionais)
  const [activeFilter, setActiveFilter] = useState("todos")
  const [isLoading, setIsLoading] = useState(true)

  // Extrair categorias únicas
  const categorias = ["todos", ...Array.from(new Set(jogosEducacionais.map((jogo) => jogo.categoria.toLowerCase())))]

  const handleFilterChange = (filtro: string) => {
    setActiveFilter(filtro)

    if (filtro === "todos") {
      setFilteredJogos(jogosEducacionais)
    } else if (filtro === "populares") {
      // Ordenar por percentual de financiamento (decrescente)
      setFilteredJogos([...jogosEducacionais].sort((a, b) => b.percentual - a.percentual))
    } else if (filtro === "recentes") {
      // Ordenar por dias restantes (decrescente - assumindo que jogos mais recentes têm mais dias)
      setFilteredJogos([...jogosEducacionais].sort((a, b) => b.diasRestantes - a.diasRestantes))
    } else if (filtro === "ultimos-dias") {
      // Ordenar por dias restantes (crescente)
      setFilteredJogos([...jogosEducacionais].sort((a, b) => a.diasRestantes - b.diasRestantes))
    } else {
      // Filtrar por categoria
      setFilteredJogos(jogosEducacionais.filter((jogo) => jogo.categoria.toLowerCase() === filtro))
    }
  }

  // Inicializar com todos os jogos
  useEffect(() => {
    setFilteredJogos(jogosEducacionais)
    // Simular um pequeno atraso para garantir que o componente esteja pronto
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Jogos Educacionais</h1>
          <p className="text-white text-xl mb-8">
            Descubra e apoie jogos que transformam o aprendizado de matemática em uma experiência divertida e envolvente
            para estudantes de todas as idades.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              className={`${activeFilter === "todos" ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("todos")}
            >
              Todos os Jogos
            </Button>
            <Button
              className={`${activeFilter === "populares" ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("populares")}
            >
              Mais Populares
            </Button>
            <Button
              className={`${activeFilter === "recentes" ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("recentes")}
            >
              Recém Lançados
            </Button>
            <Button
              className={`${activeFilter === "ultimos-dias" ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("ultimos-dias")}
            >
              Últimos Dias
            </Button>
          </div>

          {/* Filtros por categoria */}
          {categorias.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categorias
                .filter((cat) => cat !== "todos")
                .map((categoria) => (
                  <Button
                    key={categoria}
                    className={`${activeFilter === categoria ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-4 py-1 text-sm rounded-full`}
                    onClick={() => handleFilterChange(categoria)}
                  >
                    {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                  </Button>
                ))}
            </div>
          )}

          <Link
            href="/campanhas/criar"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
          >
            <PlusCircle className="inline-block mr-2 h-5 w-5" />
            Criar Novo Jogo
          </Link>
        </div>

        {/* Jogos Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredJogos.map((jogo) => (
              <div
                key={jogo.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 relative"
              >
                <div className="absolute top-4 right-4 z-10">
                  <ChessKnight className="h-6 w-6 text-green-400" />
                </div>
                <div className="h-48 relative overflow-hidden bg-gradient-to-b from-blue-700/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-green-400">{jogo.icone}</div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {jogo.faixaEtaria}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center">
                      {jogo.categoria === "Aritmética" ? (
                        <Calculator className="h-5 w-5 text-green-400 mr-2" />
                      ) : jogo.categoria === "Álgebra" ? (
                        <BookOpen className="h-5 w-5 text-green-400 mr-2" />
                      ) : jogo.categoria === "Geometria" ? (
                        <BrainCircuit className="h-5 w-5 text-green-400 mr-2" />
                      ) : (
                        <Lightbulb className="h-5 w-5 text-green-400 mr-2" />
                      )}
                      <span className="text-white text-sm">{jogo.categoria}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold mb-1">{jogo.titulo}</h3>
                  <p className="text-white/80 text-sm mb-3">por {jogo.criador}</p>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">{jogo.descricao}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/80">{jogo.arrecadado}</span>
                      <span className="text-white/80">{jogo.meta}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${jogo.percentual}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-white/80">{jogo.percentual}% financiado</span>
                      <span className="text-white/80">{jogo.diasRestantes} dias restantes</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <GraduationCap className="mr-2 h-4 w-4" /> Apoiar Projeto
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl relative">
          <div className="absolute top-4 right-4">
            <ChessKnight className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-white text-3xl font-serif mb-4">Tem uma ideia de jogo educacional?</h2>
          <p className="text-white text-lg mb-6">
            Transforme seu conceito em realidade com a ajuda da comunidade. Lance seu jogo e receba financiamento para
            produzi-lo.
          </p>
          <Link
            href="/campanhas/criar"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
          >
            <PlusCircle className="inline-block mr-2 h-5 w-5" />
            Iniciar Meu Projeto
          </Link>
        </div>
      </div>

      <AdminControls />
    </main>
  )
}
