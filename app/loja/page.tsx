"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Search,
  Filter,
  ShoppingCart,
  Calculator,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  PlusCircle,
  Divide,
  Sigma,
  Triangle,
  CircleDollarSign,
  LineChart,
} from "lucide-react"
import Navigation from "@/components/navigation"

// Adicione uma função para obter ícones com base na categoria do produto
const getProductIcon = (categoria: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Aritmética: <Calculator size={80} className="text-green-400" />,
    Álgebra: <BookOpen size={80} className="text-green-400" />,
    Geometria: <BrainCircuit size={80} className="text-green-400" />,
    "Matemática Financeira": <Lightbulb size={80} className="text-green-400" />,
  }
  return iconMap[categoria] || <Calculator size={80} className="text-green-400" />
}

export default function LojaPage() {
  const produtos = [
    {
      id: 1,
      titulo: "Frações Divertidas",
      criador: "Equipe XEQUEMATH",
      preco: "R$ 89,90",
      avaliacao: 4.8,
      numAvaliacoes: 124,
      icone: <Divide className="h-16 w-16" />,
      descricao:
        "Um jogo de tabuleiro que ensina frações de forma divertida e interativa, ideal para crianças do ensino fundamental.",
      categoria: "Aritmética",
      estoque: 15,
      lancamento: "2023-03-15",
      faixaEtaria: "7-10 anos",
    },
    {
      id: 2,
      titulo: "Álgebra em Ação",
      criador: "Prof. Carlos Mendes",
      preco: "R$ 119,90",
      avaliacao: 4.6,
      numAvaliacoes: 87,
      icone: <Sigma className="h-16 w-16" />,
      descricao: "Um jogo de cartas que transforma equações algébricas em desafios divertidos para adolescentes.",
      categoria: "Álgebra",
      estoque: 8,
      lancamento: "2023-05-20",
      faixaEtaria: "12-15 anos",
    },
    {
      id: 3,
      titulo: "Geometria Espacial",
      criador: "Matemática Aplicada",
      preco: "R$ 149,90",
      avaliacao: 4.7,
      numAvaliacoes: 103,
      icone: <Triangle className="h-16 w-16" />,
      descricao:
        "Um jogo que utiliza realidade aumentada para ensinar conceitos de geometria espacial de forma interativa.",
      categoria: "Geometria",
      estoque: 12,
      lancamento: "2023-02-10",
      faixaEtaria: "14-17 anos",
    },
    {
      id: 4,
      titulo: "Matemática Financeira",
      criador: "Educação Financeira Brasil",
      preco: "R$ 129,90",
      avaliacao: 4.9,
      numAvaliacoes: 156,
      icone: <CircleDollarSign className="h-16 w-16" />,
      descricao:
        "Um jogo de tabuleiro que ensina conceitos de matemática financeira, juros e investimentos para jovens.",
      categoria: "Matemática Financeira",
      estoque: 5,
      lancamento: "2023-01-05",
      faixaEtaria: "15-18 anos",
    },
    {
      id: 5,
      titulo: "Aventuras com Números",
      criador: "Aprender Brincando",
      preco: "R$ 79,90",
      avaliacao: 4.5,
      numAvaliacoes: 92,
      icone: <Calculator className="h-16 w-16" />,
      descricao:
        "Um jogo de aventura que ensina operações básicas de matemática para crianças em fase de alfabetização matemática.",
      categoria: "Aritmética",
      estoque: 20,
      lancamento: "2023-04-12",
      faixaEtaria: "5-8 anos",
    },
    {
      id: 6,
      titulo: "Matrizes e Determinantes",
      criador: "Matemática Avançada",
      preco: "R$ 139,90",
      avaliacao: 4.7,
      numAvaliacoes: 118,
      icone: <LineChart className="h-16 w-16" />,
      descricao:
        "Um jogo estratégico que ensina o conceito de matrizes e determinantes para estudantes do ensino médio.",
      categoria: "Álgebra",
      estoque: 10,
      lancamento: "2023-06-01",
      faixaEtaria: "16-18 anos",
    },
  ]

  const [filteredProdutos, setFilteredProdutos] = useState(produtos)
  const [activeFilter, setActiveFilter] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  // Extrair categorias únicas
  const categorias = ["todos", ...Array.from(new Set(produtos.map((produto) => produto.categoria.toLowerCase())))]

  const handleFilterChange = (filtro: string) => {
    setActiveFilter(filtro)
    applyFilters(filtro, searchTerm)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    applyFilters(activeFilter, term)
  }

  const applyFilters = (categoria: string, termo: string) => {
    let filtered = [...produtos]

    // Aplicar filtro de categoria
    if (categoria !== "todos") {
      filtered = filtered.filter((produto) => produto.categoria.toLowerCase() === categoria)
    }

    // Aplicar filtro de busca
    if (termo) {
      const termLower = termo.toLowerCase()
      filtered = filtered.filter(
        (produto) =>
          produto.titulo.toLowerCase().includes(termLower) ||
          produto.descricao.toLowerCase().includes(termLower) ||
          produto.criador.toLowerCase().includes(termLower),
      )
    }

    setFilteredProdutos(filtered)
  }

  // Inicializar com todos os produtos
  useEffect(() => {
    setFilteredProdutos(produtos)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Loja de Jogos Educacionais XEQUEMATH</h1>
          <p className="text-white text-xl mb-8">
            Descubra jogos educacionais de matemática para todas as idades e níveis de ensino. Transforme o aprendizado
            em diversão!
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Buscar jogos educacionais..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute left-4 top-3.5 text-white/70" size={20} />
            </div>
            <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-6">
              <Filter size={20} className="mr-2" /> Filtros
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
              <ShoppingCart size={20} className="mr-2" /> Carrinho
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              className={`${activeFilter === "todos" ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("todos")}
            >
              Todos os Jogos
            </Button>
            {categorias
              .filter((cat) => cat !== "todos")
              .map((categoria) => (
                <Button
                  key={categoria}
                  className={`${activeFilter === categoria ? "bg-green-600" : "bg-transparent border-white"} hover:bg-green-700 text-white px-6 py-2 rounded-full`}
                  onClick={() => handleFilterChange(categoria)}
                >
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </Button>
              ))}
          </div>
        </div>

        {/* Jogos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProdutos.length > 0 ? (
            filteredProdutos.map((produto) => (
              <div
                key={produto.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20"
              >
                <div className="h-48 relative overflow-hidden bg-gradient-to-b from-blue-700/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-green-400">{produto.icone}</div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {produto.faixaEtaria}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold mb-1">{produto.titulo}</h3>
                  <p className="text-white/80 text-sm mb-3">por {produto.criador}</p>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">{produto.descricao}</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-2xl font-bold">{produto.preco}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-300 mr-1">★</span>
                      <span className="text-white">
                        {produto.avaliacao} ({produto.numAvaliacoes})
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Comprar</Button>
                    <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                      <ShoppingCart size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white text-xl">Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-white text-3xl font-serif mb-4">Crie seu Jogo Educacional XEQUEMATH</h2>
          <p className="text-white text-lg mb-6">
            Você é um educador ou desenvolvedor? Crie e publique seu próprio jogo educacional de matemática na nossa
            plataforma XEQUEMATH.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/meus-jogos/criar"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
            >
              <PlusCircle className="inline-block mr-2 h-5 w-5" />
              Criar Jogo Educacional
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
