'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GlassCard from '../components/glass-card';
import { Gem, Shield, Star, Crown } from 'lucide-react';

// SIMULAÇÃO: Em um app real, isso viria de um AuthContext, hook, ou sessão.
const useAuth = () => ({
  isAuthenticated: false, // Força o redirecionamento
});

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
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/request-invitation');
    }
  }, [isAuthenticated, router]);

  // Renderiza um placeholder ou null enquanto o redirecionamento ocorre
  if (!isAuthenticated) {
    return <div className="min-h-screen"></div>; // Evita piscar o conteúdo
  }

  return (
    <div className="container mx-auto">
      <section className="text-center py-16">
        <h1 className="font-lora text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-300">
          Permutas
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300">
          Troque seus pontos por itens e vantagens.
        </p>
      </section>

      <section className="py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {storeItems.map((item, index) => (
            <GlassCard key={index} className="p-6 flex flex-col items-center text-center">
              {item.icon}
              <h3 className="font-bold text-xl mb-2 text-white">{item.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                 <Gem className="w-5 h-5 text-amber-400" />
                 <span className="font-bold text-lg text-amber-400">{item.price} Pontos</span>
              </div>
              <button className="w-full bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-3 rounded-full transition-colors">
                Comprar
              </button>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
