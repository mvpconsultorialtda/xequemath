import GlassCard from '../components/glass-card';
import { BarChart3, Users, ClipboardCopy, Lock } from 'lucide-react';
import Link from 'next/link';

const educatorFeatures = [
  {
    icon: <BarChart3 className="w-10 h-10 mb-4 text-green-400" />,
    title: 'Acompanhamento em Tempo Real',
    description: 'Monitore o progresso dos alunos, identifique dificuldades e celebre conquistas com dashboards intuitivos.',
  },
  {
    icon: <Users className="w-10 h-10 mb-4 text-orange-400" />,
    title: 'Gestão de Turmas Simplificada',
    description: 'Crie turmas, organize seus alunos e distribua atividades com apenas alguns cliques.',
  },
  {
    icon: <ClipboardCopy className="w-10 h-10 mb-4 text-sky-400" />,
    title: 'Relatórios Detalhados',
    description: 'Gere relatórios completos sobre o desempenho individual e da turma para otimizar seu plano de ensino.',
  },
];

export default function EducatorsPage() {
  return (
    <div className="container mx-auto">
      <section className="text-center py-20 md:py-32">
        <h1 className="font-lora text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-green-300">
          Transforme sua Sala de Aula
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-12">
          A Xequemate oferece as ferramentas que você precisa para criar um ambiente de aprendizado dinâmico, engajador e eficaz.
        </p>
      </section>

      <section className="relative py-16">
         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex flex-col justify-center items-center text-center p-4 rounded-2xl">
            <Lock className="w-16 h-16 text-green-400 mb-4" />
            <h2 className="font-lora text-3xl font-bold text-white mb-2">Uma Ferramenta Exclusiva para Educadores</h2>
            <p className="max-w-xl text-slate-200 mb-6">Nossas ferramentas de gestão e acompanhamento são parte de uma plataforma fechada. Solicite seu convite para ter acesso e revolucionar seu método de ensino.</p>
            <Link href="/request-invitation">
                <button className='bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
                    Solicitar Acesso de Educador
                </button>
            </Link>
        </div>

        <div className="text-center mb-16">
            <h2 className="font-lora text-4xl font-bold text-white">Recursos para o Educador Moderno</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 blur-sm pointer-events-none">
          {educatorFeatures.map((feature, index) => (
            <GlassCard key={index} className="p-8 flex flex-col items-center text-center">
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
