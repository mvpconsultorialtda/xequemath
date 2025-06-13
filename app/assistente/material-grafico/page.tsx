"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, ImageIcon, Download, RefreshCw, ChevronLeft, Palette, Layers, Grid3X3, Box } from "lucide-react"
import Navigation from "@/components/navigation"

export default function MaterialGraficoPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("cartas")
  const [showResults, setShowResults] = useState(false)
  const [generationLogs, setGenerationLogs] = useState<string[]>([])
  const [generationProgress, setGenerationProgress] = useState(0)
  const logsEndRef = useRef<HTMLDivElement>(null)

  const generationMessages = [
    "Analisando descrição...",
    "Definindo estilo visual...",
    "Criando composição básica...",
    "Criando...",
  ]

  useEffect(() => {
    // Scroll para o final dos logs quando novos logs são adicionados
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [generationLogs])

  const handleGenerate = () => {
    setIsGenerating(true)
    setGenerationLogs([])
    setGenerationProgress(0)
    setShowResults(false)

    // Simular o processo de geração com logs
    let currentLog = 0
    const totalDuration = 22000 // 22 segundos
    const intervalTime = totalDuration / generationMessages.length

    const interval = setInterval(() => {
      if (currentLog < generationMessages.length) {
        setGenerationLogs((prev) => [...prev, generationMessages[currentLog]])
        setGenerationProgress(Math.round(((currentLog + 1) / generationMessages.length) * 100))
        currentLog++
      } else {
        clearInterval(interval)
        setIsGenerating(false)
        setShowResults(true)
      }
    }, intervalTime)
  }

  const handleReset = () => {
    setShowResults(false)
    setGenerationLogs([])
    setGenerationProgress(0)
  }

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

            <TabsContent value="tabuleiro">
              <div className={`${showResults ? "hidden" : "block"}`}>
                <Card className="bg-white/5 border-none text-white">
                  <CardHeader>
                    <CardTitle>Gerador de Tabuleiros</CardTitle>
                    <CardDescription className="text-white/80">
                      Crie tabuleiros personalizados para seu jogo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="board-theme">Tema do Jogo</Label>
                      <Input
                        id="board-theme"
                        placeholder="Ex: Fantasia medieval, ficção científica, piratas..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="board-layout">Tipo de Layout</Label>
                      <Input
                        id="board-layout"
                        placeholder="Ex: Hexagonal, caminho linear, mapa de cidade..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="board-description">Descrição Detalhada</Label>
                      <textarea
                        id="board-description"
                        rows={4}
                        placeholder="Descreva em detalhes o que você quer que apareça no tabuleiro..."
                        className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/50 rounded-md p-3"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="board-style">Estilo Visual</Label>
                      <Input
                        id="board-style"
                        placeholder="Ex: Cartoon, realista, pixel art, aquarela..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
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
                          <Sparkles className="mr-2 h-4 w-4" /> Gerar Tabuleiro
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
                        <div className="aspect-video bg-gradient-to-b from-orange-600/50 to-purple-700/50 flex items-center justify-center p-8">
                          <p className="text-white/70">Visualização do tabuleiro gerado</p>
                        </div>
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

            <TabsContent value="personagens">
              <div className={`${showResults ? "hidden" : "block"}`}>
                <Card className="bg-white/5 border-none text-white">
                  <CardHeader>
                    <CardTitle>Gerador de Personagens</CardTitle>
                    <CardDescription className="text-white/80">
                      Crie ilustrações de personagens para seu jogo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="character-type">Tipo de Personagem</Label>
                      <Input
                        id="character-type"
                        placeholder="Ex: Guerreiro, mago, pirata, alienígena..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="character-features">Características</Label>
                      <Input
                        id="character-features"
                        placeholder="Ex: Armadura pesada, cabelo longo, cicatriz no rosto..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="character-description">Descrição Detalhada</Label>
                      <textarea
                        id="character-description"
                        rows={4}
                        placeholder="Descreva em detalhes o personagem que você quer criar..."
                        className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/50 rounded-md p-3"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="character-style">Estilo Visual</Label>
                      <Input
                        id="character-style"
                        placeholder="Ex: Cartoon, realista, pixel art, anime..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
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
                          <Sparkles className="mr-2 h-4 w-4" /> Gerar Personagem
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
                        <div className="aspect-square bg-gradient-to-b from-orange-600/50 to-purple-700/50 flex items-center justify-center p-8">
                          <p className="text-white/70">Visualização do personagem gerado</p>
                        </div>
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

            <TabsContent value="componentes">
              <div className={`${showResults ? "hidden" : "block"}`}>
                <Card className="bg-white/5 border-none text-white">
                  <CardHeader>
                    <CardTitle>Gerador de Componentes</CardTitle>
                    <CardDescription className="text-white/80">
                      Crie tokens, peças, dados e outros componentes para seu jogo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="component-type">Tipo de Componente</Label>
                      <Input
                        id="component-type"
                        placeholder="Ex: Token, peão, dado, moeda, recurso..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="component-theme">Tema</Label>
                      <Input
                        id="component-theme"
                        placeholder="Ex: Fantasia medieval, ficção científica, steampunk..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="component-description">Descrição Detalhada</Label>
                      <textarea
                        id="component-description"
                        rows={4}
                        placeholder="Descreva em detalhes o componente que você quer criar..."
                        className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/50 rounded-md p-3"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="component-style">Estilo Visual</Label>
                      <Input
                        id="component-style"
                        placeholder="Ex: Cartoon, realista, minimalista, detalhado..."
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
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
                          <Sparkles className="mr-2 h-4 w-4" /> Gerar Componente
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
                        <div className="aspect-square bg-gradient-to-b from-orange-600/50 to-purple-700/50 flex items-center justify-center p-8">
                          <p className="text-white/70">Visualização do componente gerado</p>
                        </div>
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

        {/* Planos */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-white text-3xl font-serif mb-4">Aumente seu Limite de Criações</h2>
          <p className="text-white text-lg mb-6">
            Com o plano Profissional, você tem acesso a 5 gerações por mês. Com o plano Criador, você tem acesso a 50
            gerações por mês, além de prioridade na fila de geração.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/assistente"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
            >
              Ver Planos
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
