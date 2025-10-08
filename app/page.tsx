import Link from 'next/link';
import GlassCard from './components/glass-card';
import { Gem, Puzzle, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="w-10 h-10 mb-4 text-cyan-400" />,
    title: 'Engajamento Acelerado',
    description: 'Nossa abordagem gamificada transforma o aprendizado em uma aventura cativante.',
    className: 'md:col-span-2', // For asymmetrical grid
  },
  {
    icon: <Puzzle className="w-10 h-10 mb-4 text-teal-400" />,
    title: 'Desafios Reais',
    description: 'Problemas que se conectam com o mundo real, desenvolvendo o raciocínio crítico.',
    className: '',
  },
  {
    icon: <Users className="w-10 h-10 mb-4 text-fuchsia-400" />,
    title: 'Para Educadores',
    description: 'Ferramentas poderosas para acompanhar o progresso e personalizar a jornada do aluno.',
    className: '',
  },
  {
    icon: <Gem className="w-10 h-10 mb-4 text-amber-400" />,
    title: 'Recompensas Valiosas',
    description: 'Conquistas e itens digitais que motivam e recompensam o esforço e a dedicação.',
    className: 'md:col-span-2',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32">
        <h1 className="font-lora text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-300">
          A faísca da matemática, reinventada.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-12">
          Uma plataforma de matemática gamificada, projetada para engajamento, não para memorização.
        </p>
        <Link href="/request-invitation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            Descubra a Plataforma
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard key={index} className={`p-8 flex flex-col items-center text-center ${feature.className}`}>
              {feature.icon}
              <h3 className="font-bold text-2xl mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
