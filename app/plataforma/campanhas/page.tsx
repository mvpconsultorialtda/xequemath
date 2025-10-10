'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FeatureLockOverlay from '../../components/feature-lock-overlay';
import {
  PlusCircle,
  Target,
} from 'lucide-react';
import CampanhaCard from '../../components/campanha-card';

const campanhas = [
    {
        id: 1,
        titulo: "Gamificando a Tabuada",
        criador: "Escola Inovadora",
        descricao: "Uma campanha para desenvolver um jogo que torna o aprendizado da multiplicação uma aventura interativa.",
        percentual: 75,
        meta: "R$ 20.000",
        arrecadado: "R$ 15.000",
        diasRestantes: 12,
        categoria: "Ensino Fundamental"
    },
    {
        id: 2,
        titulo: "Geometria no Metaverso",
        criador: "Prof. Dr. Ricardo Neves",
        descricao: "Explorar conceitos de geometria espacial em um ambiente de realidade virtual imersivo e colaborativo.",
        percentual: 40,
        meta: "R$ 50.000",
        arrecadado: "R$ 20.000",
        diasRestantes: 45,
        categoria: "Ensino Médio e Superior"
    },
];

export default function CampanhasPage() {
  // In a real app, this would be determined by a user session or auth context.
  const isLoggedIn = false;

  const featureName = "Campanhas Educacionais";
  const featureDescription = "Participe, crie e financie jogos educacionais que revolucionam o ensino da matemática. Faça parte da próxima geração de ferramentas de aprendizado.";

  return (
    <div className="relative">
      {!isLoggedIn && (
        <FeatureLockOverlay
          featureName={featureName}
          featureDescription={featureDescription}
        />
      )}
      
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-green-950 to-slate-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <Target className="h-20 w-20 text-green-300" />
            </div>
            <h1 className="font-lora text-5xl sm:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-green-300">
              Campanhas de Inovação
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Apoie e crie a próxima geração de jogos educacionais matemáticos.
            </p>
            <Link href="/plataforma/campanhas/criar">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105">
                <PlusCircle className="mr-3 h-6 w-6" />
                Criar Nova Campanha
              </Button>
            </Link>
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {campanhas.map((campanha) => (
              <CampanhaCard key={campanha.id} campanha={campanha} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
