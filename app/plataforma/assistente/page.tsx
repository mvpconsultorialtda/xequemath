'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming this is a custom component
import { Card } from '@/components/ui/card'; // Assuming this is a custom component
import {
  Sparkles,
  Calculator,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Bot,
} from 'lucide-react';
import FeatureLockOverlay from '../../components/feature-lock-overlay';

export default function AssistentePage() {
  // In a real app, this would be determined by a user session or auth context.
  const isLoggedIn = false;

  const featureName = "Assistente de IA";
  const featureDescription = "Crie, aprenda e ensine matemática com um companheiro inteligente. Gere materiais, tire dúvidas e receba sugestões personalizadas para suas aulas.";

  return (
    <div className="relative">
      {!isLoggedIn && (
        <FeatureLockOverlay
          featureName={featureName}
          featureDescription={featureDescription}
        />
      )}
      
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <Bot className="h-20 w-20 text-sky-300" />
            </div>
            <h1 className="font-lora text-5xl sm:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-300">
              Assistente IA
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Seu parceiro inteligente para criação, aprendizado e ensino de matemática.
            </p>
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105">
              <Sparkles className="mr-3 h-6 w-6" />
              Começar a Criar
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1: Problem Solving */}
            <Card className="bg-slate-800/50 border border-slate-700 p-6 flex flex-col items-center text-center">
              <Calculator className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-3 text-white">Resolução de Problemas</h3>
              <p className="text-slate-300">
                Obtenha explicações passo a passo para problemas complexos, do básico ao avançado.
              </p>
            </Card>

            {/* Feature 2: Exercise Creation */}
            <Card className="bg-slate-800/50 border border-slate-700 p-6 flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-3 text-white">Criação de Exercícios</h3>
              <p className="text-slate-300">
                Gere listas de exercícios personalizadas para qualquer tópico ou nível de habilidade.
              </p>
            </Card>

            {/* Feature 3: Game Design */}
            <Card className="bg-slate-800/50 border border-slate-700 p-6 flex flex-col items-center text-center">
              <BrainCircuit className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-3 text-white">Design de Jogos</h3>
              <p className="text-slate-300">
                Receba sugestões para criar jogos educacionais matematicamente precisos e engajadores.
              </p>
            </Card>

             {/* Feature 4: Conceptual Explanations */}
             <Card className="bg-slate-800/50 border border-slate-700 p-6 flex flex-col items-center text-center">
              <Lightbulb className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-3 text-white">Explicações de Conceitos</h3>
              <p className="text-slate-300">
                Entenda teorias complexas com analogias e exemplos práticos adaptados para você.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border border-slate-700 p-6 flex flex-col items-center text-center">
                <Link href="/plataforma/assistente/material-grafico" className="w-full h-full flex flex-col items-center">
                    <Sparkles className="h-12 w-12 mb-4 text-green-400" />
                    <h3 className="text-2xl font-bold mb-3 text-white">Material Gráfico</h3>
                    <p className="text-slate-300">
                        Crie peças gráficas e materiais de apoio para suas aulas e campanhas.
                    </p>
                </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
