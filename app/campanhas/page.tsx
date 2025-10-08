'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import AdminControls from "@/app/components/admin-controls";
import Navigation from "@/app/components/navigation";
import {
  PlusCircle,
  Divide,
  Sigma,
  Triangle,
} from "lucide-react";

export default function JogosPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const jogosEducacionais = [
    {
      id: 1,
      titulo: "Frações Divertidas",
      criador: "Equipe XEQUEMATH",
      meta: "R$ 30.000",
      arrecadado: "R$ 22.450",
      percentual: 75,
      diasRestantes: 15,
      icone: <Divide className="h-16 w-16" />,
      descricao:
        "Um jogo de tabuleiro que ensina frações de forma divertida e interativa, ideal para crianças do ensino fundamental.",
      categoria: "Aritmética",
      faixaEtaria: "7-10 anos",
    },
    {
      id: 2,
      titulo: "Álgebra em Ação",
      criador: "Prof. Carlos Mendes",
      meta: "R$ 25.000",
      arrecadado: "R$ 18.750",
      percentual: 75,
      diasRestantes: 12,
      icone: <Sigma className="h-16 w-16" />,
      descricao: "Um jogo de cartas que transforma equações algébricas em desafios divertidas para adolescentes.",
      categoria: "Álgebra",
      faixaEtaria: "12-15 anos",
    },
    {
      id: 3,
      titulo: "Geometria Espacial",
      criador: "Matemática Aplicada",
      meta: "R$ 35.000",
      arrecadado: "R$ 17.500",
      percentual: 50,
      diasRestantes: 21,
      icone: <Triangle className="h-16 w-16" />,
      descricao:
        "Um jogo que utiliza realidade aumentada para ensinar conceitos de geometria espacial de forma interativa.",
      categoria: "Geometria",
      faixaEtaria: "14-17 anos",
    },
  ];

  const [filteredJogos, setFilteredJogos] = useState(jogosEducacionais);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/request-invitation');
    } else {
      setFilteredJogos(jogosEducacionais);
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center py-12 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
            <p className="text-xl">Verificando acesso...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Jogos Educacionais</h1>
          <p className="text-white text-xl mb-8">
            Descubra e apoie jogos que transformam o aprendizado de matemática em uma experiência divertida e envolvente
            para estudantes de todas as idades.
          </p>

          <Link
            href="/campanhas/criar"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
          >
            <PlusCircle className="inline-block mr-2 h-5 w-5" />
            Criar Novo Jogo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJogos.map((jogo) => (
            <div
              key={jogo.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 relative p-6 flex flex-col items-center text-center text-white"
            >
               <div className="mb-4">{jogo.icone}</div>
                <h3 className="text-2xl font-serif mb-2">{jogo.titulo}</h3>
                <p className="text-sm text-blue-200 mb-4">por {jogo.criador}</p>
                <p className="text-sm mb-4">{jogo.descricao}</p>
                <div className="w-full bg-blue-900/50 rounded-full h-2.5 mb-4">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${jogo.percentual}%` }}></div>
                </div>
                <div className="flex justify-between w-full text-sm">
                    <span>{jogo.arrecadado} de {jogo.meta}</span>
                    <span>{jogo.diasRestantes} dias restantes</span>
                </div>
            </div>
          ))}
        </div>

        <AdminControls />
      </div>
    </main>
  );
}
