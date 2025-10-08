'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sparkles,
  Calculator,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Bot,
  MessageSquare,
  CastleIcon as ChessKnight,
} from 'lucide-react';
import Navigation from '@/components/navigation';

export default function AssistentePage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate protection: check for the session flag.
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      // If not logged in, redirect to the invitation request page.
      router.push('/request-invitation');
    }
  }, [router]);

  // The rest of your page component remains the same.
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
       </div>
    </main>
  );
}
