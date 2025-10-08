'use client';

import GlassCard from '../../components/glass-card';
import FeatureLockOverlay from '../../components/feature-lock-overlay';
import { Gem, Shield, Star, Crown } from 'lucide-react';

const storeItems = [
  {
    icon: <Star className="w-16 h-16 mb-4 text-yellow-400" />,
    name: 'Avatar de Estrela Cadente',
    price: 500,
  },
  {
    icon: <Shield className="w-16 h-16 mb-4 text-sky-400" />,
    name: 'Borda de Perfil Lendária',
    price: 1200,
  },
  {
    icon: <Crown className="w-16 h-16 mb-4 text-amber-500" />,
    name: 'Tema "Realeza"',
    price: 2500,
  },
  {
    icon: <Gem className="w-16 h-16 mb-4 text-fuchsia-400" />,
    name: 'Pacote de Ícones de Gema',
    price: 800,
  },
];

export default function PermutasPage() {
  // In a real app, this would be determined by a user session or auth context.
  const isLoggedIn = false;

  const featureName = "Permutas & Recompensas";
  const featureDescription = "Use os pontos ganhos em desafios para trocar por itens, avatares e vantagens exclusivas. Personalize sua experiência na plataforma!";

  return (
    <div className="relative">
      {!isLoggedIn && (
        <FeatureLockOverlay
          featureName={featureName}
          featureDescription={featureDescription}
        />
      )}

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-lora text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-purple-300">
              Permutas & Recompensas
            </h1>
            <p className="text-xl text-slate-300">
              Seu esforço é recompensado. Use pontos para trocar por itens e vantagens exclusivas.
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {storeItems.map((item, index) => (
              <GlassCard key={index} className="p-6 flex flex-col items-center text-center border-slate-700">
                {item.icon}
                <h3 className="font-bold text-xl mb-2 text-white">{item.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Gem className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-lg text-amber-400">{item.price} Pontos</span>
                </div>
                <button className="w-full bg-slate-800 hover:bg-purple-600 text-white font-medium py-3 rounded-full transition-colors">
                  Desbloquear
                </button>
              </GlassCard>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
