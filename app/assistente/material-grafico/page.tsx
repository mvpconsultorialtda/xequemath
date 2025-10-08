'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ImageIcon, Download, RefreshCw, ChevronLeft, Palette, Layers, Grid3X3, Box } from "lucide-react";
import Navigation from "@/components/navigation";

export default function MaterialGraficoPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("cartas");
  const [showResults, setShowResults] = useState(false);
  const [generationLogs, setGenerationLogs] = useState<string[]>([]);
  const [generationProgress, setGenerationProgress] = useState(0);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Protection Check
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/request-invitation');
    }
  }, [router]);

  const generationMessages = [
    "Analisando descrição...",
    "Definindo estilo visual...",
    "Criando composição básica...",
    "Criando...",
  ];

  useEffect(() => {
    // Scroll para o final dos logs quando novos logs são adicionados
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [generationLogs]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGenerationLogs([]);
    setGenerationProgress(0);
    setShowResults(false);

    // Simular o processo de geração com logs
    let currentLog = 0;
    const totalDuration = 22000; // 22 segundos
    const intervalTime = totalDuration / generationMessages.length;

    const interval = setInterval(() => {
      if (currentLog < generationMessages.length) {
        setGenerationLogs((prev) => [...prev, generationMessages[currentLog]]);
        setGenerationProgress(Math.round(((currentLog + 1) / generationMessages.length) * 100));
        currentLog++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        setShowResults(true);
      }
    }, intervalTime);
  };

  const handleReset = () => {
    setShowResults(false);
    setGenerationLogs([]);
    setGenerationProgress(0);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Back Button */}
        <div className="mb-6">
          <Link href="/assistente">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para Assistente
            </Button>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="flex justify-center mb-4">
            <Palette className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-serif mb-4">Criador de Material Gráfico</h1>
          <p className="text-white text-xl mb-6">
            Crie ilustrações, cartas, tabuleiros e componentes visuais para seu jogo de tabuleiro com a ajuda da nossa
            IA. Basta descrever o que você precisa e nosso assistente gerará o material gráfico para você.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12">
          <Tabs defaultValue="cartas" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 bg-white/10 mb-6">
              <TabsTrigger value="cartas" className="text-white data-[state=active]:bg-orange-600">
                <Layers className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Cartas</span>
              </TabsTrigger>
              <TabsTrigger value="tabuleiro" className="text-white data-[state=active]:bg-orange-600">
                <Grid3X3 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Tabuleiro</span>
              </TabsTrigger>
              <TabsTrigger value="personagens" className="text-white data-[state=active]:bg-orange-600">
                <ImageIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Personagens</span>
              </TabsTrigger>
              <TabsTrigger value="componentes" className="text-white data-[state=active]:bg-orange-600">
                <Box className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline">Componentes</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cartas">
              <div className={`${showResults ? "hidden" : "block"}`}>
                <Card className="bg-white/5 border-none text-white">
                  <CardHeader>
                    <CardTitle>Gerador de Cartas</CardTitle>
                    <CardDescription className="text-white/80">
                      Crie cartas personalizadas para seu jogo de tabuleiro
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-theme">Tema do Jogo</Label>
                      <Input
                        id="card-theme"
                        placeholder="Ex: Fantasia medieval, ficção científica, piratas..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-type">Tipo de Carta</Label>
                      <Input
                        id="card-type"
                        placeholder="Ex: Carta de personagem, item, ação, evento..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-description">Descrição Detalhada</Label>
                      <textarea
                        id="card-description"
                        rows={4}
                        placeholder="Descreva em detalhes o que você quer que apareça na carta..."
                        className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/50 rounded-md p-3"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-style">Estilo Visual</Label>
                      <Input
                        id="card-style"
                        placeholder="Ex: Cartoon, realista, pixel art, aquarela..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>

                    {isGenerating && (
                      <div className="mt-4">
                        <div className="mb-2 flex justify-between">
                          <span>Progresso</span>
                          <span>{generationProgress}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${generationProgress}%` }}
                          ></div>
                        </div>

                        <div className="bg-black/30 rounded-lg p-3 h-40 overflow-y-auto font-mono text-sm">
                          {generationLogs.map((log, index) => (
                            <div key={index} className="text-green-400">
                              &gt; {log}
                            </div>
                          ))}
                          <div ref={logsEndRef} />
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Gerando...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" /> Gerar Carta
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className={`${showResults ? "block" : "hidden"}`}>
                <Card className="bg-white/5 border-none text-white">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Resultado</CardTitle>
                      <Button variant="ghost" className="text-white hover:bg-white/10" onClick={handleReset}>
                        <RefreshCw className="mr-2 h-4 w-4" /> Nova Geração
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="bg-white/10 rounded-lg overflow-hidden mb-4">
                        <img src="/princesa.png" alt="Carta da Princesa" className="max-w-full h-auto max-h-[600px]" />
                      </div>
                      <div className="flex justify-center mt-4">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          <Download className="h-4 w-4 mr-2" /> Baixar Imagem
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white hover:bg-white/10"
                      onClick={handleReset}
                    >
                      Voltar
                    </Button>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      <Sparkles className="mr-2 h-4 w-4" /> Gerar Variações
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
