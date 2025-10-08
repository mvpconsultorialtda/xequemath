import Link from 'next/link';
import GlassCard from '../components/glass-card';
import { LayoutDashboard, Bot, ShoppingCart, Target } from 'lucide-react';

const platformSections = [
  {
    href: '/plataforma/assistente',
    label: 'Assistente',
    icon: <Bot className="w-12 h-12 mb-4 text-sky-400" />,
    description: 'Gerencie materiais e interaja com a IA.'
  },
  {
    href: '/plataforma/campanhas',
    label: 'Campanhas',
    icon: <Target className="w-12 h-12 mb-4 text-green-400" />,
    description: 'Crie e acompanhe campanhas de aprendizado.'
  },
  {
    href: '/plataforma/permutas',
    label: 'Permutas',
    icon: <ShoppingCart className="w-12 h-12 mb-4 text-orange-400" />,
    description: 'Troque itens e personalize sua experiência.'
  },
];

export default function PlatformPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <div className="text-center mb-16">
        <h1 className="font-lora text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-green-300">
          Sua Plataforma
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
          Bem-vindo(a) ao seu centro de controle. Acesse todas as ferramentas da Xequemate em um só lugar.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {platformSections.map((section) => (
          <Link href={section.href} key={section.href}>
            <GlassCard className="p-8 flex flex-col items-center text-center hover:border-green-400/50 transition-all duration-300 h-full">
              {section.icon}
              <h3 className="font-bold text-2xl mb-3 text-white">{section.label}</h3>
              <p className="text-slate-300">{section.description}</p>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
