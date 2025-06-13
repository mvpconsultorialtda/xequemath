import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Calculator,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Bot,
  MessageSquare,
  CastleIcon as ChessKnight,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function AssistentePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Bot className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Assistente Matemático</h1>
          <p className="text-white text-xl mb-8">
            Seu companheiro inteligente para criação, aprendizado e ensino de matemática. Tire dúvidas, receba sugestões
            e crie materiais educacionais personalizados.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors">
            <Sparkles className="mr-2 h-5 w-5" /> Conversar com o Assistente
          </Button>
        </div>

        {/* Recursos do Assistente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <Calculator className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Resolução de Problemas</h3>
              <p className="text-white/80 mb-4">
                Obtenha explicações passo a passo para problemas matemáticos, desde aritmética básica até cálculo
                avançado. Nosso assistente mostra o processo completo de resolução, ajudando no entendimento dos
                conceitos.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Resolver Problemas</Button>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <BookOpen className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Criação de Exercícios</h3>
              <p className="text-white/80 mb-4">
                Gere exercícios personalizados para diferentes níveis de ensino e tópicos matemáticos. Ideal para
                professores que desejam criar materiais didáticos adaptados às necessidades de seus alunos.
              </p>
              <Link href="/assistente/exercicios">
                <Button className="bg-green-600 hover:bg-green-700">Criar Exercícios</Button>
              </Link>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <BrainCircuit className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Design de Jogos Educacionais</h3>
              <p className="text-white/80 mb-4">
                Receba sugestões para criar jogos educacionais matematicamente precisos e pedagogicamente eficazes.
                Nosso assistente ajuda a desenvolver mecânicas de jogo que reforçam conceitos matemáticos.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Desenvolver Jogos</Button>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <Lightbulb className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Explicações Conceituais</h3>
              <p className="text-white/80 mb-4">
                Obtenha explicações claras e acessíveis sobre conceitos matemáticos complexos. Nosso assistente adapta
                as explicações ao nível de conhecimento do usuário, usando analogias e exemplos práticos.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Explorar Conceitos</Button>
            </div>
          </Card>
        </div>

        {/* Demo Interativa */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16 relative">
          <div className="absolute top-4 right-4">
            <ChessKnight className="h-8 w-8 text-green-400" />
          </div>
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Experimente o Assistente</h2>

          <div className="bg-white/5 rounded-lg p-6 mb-6">
            <div className="flex items-start mb-6">
              <div className="bg-green-600 p-2 rounded-full mr-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-lg p-4 max-w-3xl">
                <p className="text-white">
                  Olá! Sou o Assistente Matemático da XEQUEMATH. Como posso ajudar você hoje? Posso resolver problemas,
                  explicar conceitos, criar exercícios ou ajudar no design de jogos educacionais.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-600 p-2 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-lg p-4 max-w-3xl">
                <p className="text-white">
                  Como posso explicar o conceito de frações para alunos do 4º ano de forma divertida?
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-600 p-2 rounded-full mr-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-lg p-4 max-w-3xl">
                <p className="text-white">
                  Ótima pergunta! Para explicar frações para alunos do 4º ano de forma divertida, você pode usar estas
                  abordagens:
                </p>
                <ul className="list-disc list-inside text-white mt-2 space-y-1">
                  <li>Use alimentos como pizza ou chocolate para demonstrações práticas de divisão em partes iguais</li>
                  <li>
                    Crie um jogo de cartas onde cada carta representa uma fração e os alunos precisam encontrar
                    equivalências
                  </li>
                  <li>Utilize blocos de construção coloridos para representar frações visualmente</li>
                  <li>
                    Faça uma "caça ao tesouro" de frações, onde os alunos precisam encontrar objetos que representem
                    frações específicas
                  </li>
                </ul>
                <p className="text-white mt-2">
                  Uma atividade específica seria o "Jogo da Pizza Fracionada": crie círculos de papel representando
                  pizzas e divida-os em diferentes frações. Os alunos podem "montar pedidos" combinando diferentes
                  frações para formar pizzas inteiras ou frações específicas.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite sua pergunta matemática aqui..."
                  className="w-full px-4 py-3 pl-4 pr-12 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="absolute right-1 top-1 bg-green-600 hover:bg-green-700 rounded-full h-10 w-10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Planos */}
        <div className="mb-16">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Planos do Assistente</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white relative">
              <div className="absolute top-4 right-4">
                <ChessKnight className="h-6 w-6 text-green-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription className="text-white/80">Para estudantes e pais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">Grátis</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>10 perguntas por dia</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Resolução de problemas básicos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Explicações de conceitos fundamentais</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Começar Grátis</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-b from-blue-900/80 to-blue-700/80 backdrop-blur-sm border-2 border-green-400/50 text-white relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                Popular
              </div>
              <div className="absolute top-4 left-4">
                <ChessKnight className="h-6 w-6 text-green-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Educador</CardTitle>
                <CardDescription className="text-white/80">Para professores e tutores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">
                  R$ 29,90<span className="text-lg font-normal">/mês</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Perguntas ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Criação de exercícios personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Explicações detalhadas com exemplos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Geração de materiais didáticos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Assinar Agora</Button>
              </CardFooter>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white relative">
              <div className="absolute top-4 right-4">
                <ChessKnight className="h-6 w-6 text-green-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Institucional</CardTitle>
                <CardDescription className="text-white/80">Para escolas e instituições</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">
                  R$ 99,90<span className="text-lg font-normal">/mês</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Todas as funcionalidades do plano Educador</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Acesso para até 10 educadores</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Criação de currículos personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Análise de desempenho dos alunos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Contatar Vendas</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl relative">
          <div className="absolute top-4 right-4">
            <ChessKnight className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-white text-3xl font-serif mb-6">O que Dizem Nossos Usuários</h2>
          <blockquote className="text-white text-lg italic mb-6">
            "O Assistente Matemático da XEQUEMATH transformou minhas aulas. Consigo criar exercícios personalizados
            rapidamente e os alunos adoram as explicações interativas. É como ter um especialista em matemática sempre
            disponível!"
          </blockquote>
          <div className="font-medium">
            <p className="text-white">Profa. Mariana Santos</p>
            <p className="text-white/70">Professora de Matemática - Ensino Fundamental II</p>
          </div>
        </div>
      </div>
    </main>
  )
}
