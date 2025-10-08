'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ImageIcon, BarChart, Wand2, MessageSquare, Lightbulb, CastleIcon as ChessKnight } from "lucide-react"

export default function AssistenteIAPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/request-invitation');
    }
  }, [router]);

  const recursos = [
    {
      titulo: "Geração de Imagens",
      descricao:
        "Crie artes conceituais, ilustrações de cartas e designs de tabuleiros a partir de descrições textuais.",
      icon: <ImageIcon className="h-12 w-12 text-orange-400" />,
      exemplo: "/placeholder-du2ym.png",
    },
    {
      titulo: "Balanceamento de Jogos",
      descricao: "Analise e otimize as mecânicas do seu jogo para garantir uma experiência equilibrada e divertida.",
      icon: <BarChart className="h-12 w-12 text-orange-400" />,
      exemplo: "/placeholder-qm0z8.png",
    },
    {
      titulo: "Geração de Regras",
      descricao: "Crie e refine regras de jogos com base em seus conceitos e mecânicas desejadas.",
      icon: <Wand2 className="h-12 w-12 text-orange-400" />,
      exemplo: "/placeholder-bp3v6.png",
    },
    {
      titulo: "Assistente de Design",
      descricao: "Obtenha sugestões personalizadas para melhorar o design e a jogabilidade do seu jogo.",
      icon: <MessageSquare className="h-12 w-12 text-orange-400" />,
      exemplo: "/placeholder-g44vt.png",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row justify-between items-center mb-16">
          <Link href="/" className="text-white text-5xl font-serif font-bold flex items-center">
            <ChessKnight className="h-10 w-10 mr-2" />
            XEQUEMATH
          </Link>
          <div className="flex gap-6 md:gap-8 mt-4 md:mt-0">
            <Link href="/campanhas" className="text-white text-xl hover:underline">
              Campanhas
            </Link>
            <Link href="/loja" className="text-white text-xl hover:underline">
              Loja
            </Link>
            <Link href="/lojas" className="text-white text-xl hover:underline">
              Lojas
            </Link>
            <Link href="/servicos" className="text-white text-xl hover:underline">
              Serviços
            </Link>
            <Link href="/assistente-ia" className="text-white text-xl hover:underline underline">
              Assistente IA
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Assistente de IA para Criadores</h1>
          <p className="text-white text-xl mb-8">
            Potencialize sua criatividade com nossos assistentes de inteligência artificial. Gere protótipos visuais,
            equilibre mecânicas e receba sugestões personalizadas para seus jogos.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors">
            Experimentar Agora
          </Button>
        </div>

        {/* Recursos de IA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {recursos.map((recurso, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                  <div className="mb-4">{recurso.icon}</div>
                  <h3 className="text-2xl font-serif mb-2">{recurso.titulo}</h3>
                  <p className="text-white/80 mb-4">{recurso.descricao}</p>
                  <Button className="bg-orange-600 hover:bg-orange-700">Explorar</Button>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-purple-600/50 flex items-center justify-center">
                  <div className="p-8">
                    {index === 0 ? (
                      <ImageIcon size={100} className="text-white/40" />
                    ) : index === 1 ? (
                      <BarChart size={100} className="text-white/40" />
                    ) : index === 2 ? (
                      <Wand2 size={100} className="text-white/40" />
                    ) : (
                      <MessageSquare size={100} className="text-white/40" />
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Demo Interativa */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Experimente o Assistente de IA</h2>

          <div className="bg-white/5 rounded-lg p-6 mb-6">
            <h3 className="text-white text-xl mb-4">Descreva seu conceito de jogo:</h3>
            <textarea
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Ex: Um jogo de estratégia sobre construção de civilizações em um mundo pós-apocalíptico..."
            ></textarea>
            <div className="flex justify-end mt-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Sparkles className="mr-2 h-4 w-4" /> Gerar Sugestões
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-white text-xl mb-4">Mecânicas Sugeridas:</h3>
              <ul className="text-white/90 space-y-2">
                <li>• Coleta de recursos em um mapa hexagonal</li>
                <li>• Sistema de construção por cartas</li>
                <li>• Mecânica de worker placement</li>
                <li>• Gestão de recursos escassos</li>
                <li>• Alianças temporárias entre jogadores</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-white text-xl mb-4">Conceito Visual:</h3>
              <div className="w-full h-48 bg-gradient-to-b from-amber-700/50 to-amber-900/50 rounded-lg flex items-center justify-center">
                <Lightbulb size={80} className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
