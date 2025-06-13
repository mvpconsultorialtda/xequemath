import AdminControls from "@/app/components/admin-controls"
import Navigation from "@/app/components/navigation"
import Link from "next/link"
import { BookOpen, Calculator, BrainCircuit, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-serif mb-6">Aprenda matemática jogando</h1>
          <p className="text-white text-xl md:text-2xl mb-12">
            Descubra jogos educacionais que transformam o aprendizado de matemática em uma experiência divertida e
            envolvente.
          </p>
          <Link
            href="/campanhas"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl font-medium px-12 py-4 rounded-full transition-colors"
          >
            Explorar Jogos Educacionais
          </Link>
        </div>

        {/* Áreas da Matemática */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Aritmética</h3>
            <p className="text-white/80">Operações básicas, frações, decimais e porcentagens</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Álgebra</h3>
            <p className="text-white/80">Equações, funções, matrizes e sistemas lineares</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BrainCircuit className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Geometria</h3>
            <p className="text-white/80">Formas, áreas, volumes e trigonometria</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Matemática Financeira</h3>
            <p className="text-white/80">Juros, investimentos e educação financeira</p>
          </div>
        </div>

        {/* Game Characters - Usando tag img padrão com URL direta */}
        <div className="flex justify-center items-end mt-6">
          <div className="w-full max-w-4xl rounded-xl shadow-lg bg-white/10 p-8 flex flex-col items-center">
            <Calculator className="h-32 w-32 text-green-400 mb-4" />
            <h3 className="text-white text-2xl font-bold mb-2">Aprenda matemática com diversão</h3>
            <p className="text-white/80 text-center">
              Nossos jogos educacionais transformam conceitos matemáticos em experiências interativas e envolventes
            </p>
          </div>
        </div>
      </div>

      <AdminControls />
    </main>
  )
}
