import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CastleIcon as ChessKnight } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center">
      <div className="container max-w-md px-4 py-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-white text-4xl font-serif font-bold flex items-center justify-center">
            <ChessKnight className="h-8 w-8 mr-2" />
            XEQUEMATH
          </Link>
          <div className="flex justify-center gap-8 mt-6">
            <Link href="/campanhas" className="text-white text-sm hover:underline">
              Jogos Educacionais
            </Link>
            <Link href="/loja" className="text-white text-sm hover:underline">
              Loja
            </Link>
            <Link href="/servicos" className="text-white text-sm hover:underline">
              Educadores
            </Link>
            <Link href="/assistente" className="text-white text-sm hover:underline">
              Assistente
            </Link>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Bem-vindo(a)</CardTitle>
            <CardDescription className="text-white/80">
              Entre na sua conta para acessar jogos educacionais e recursos de matemática
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 bg-white/10 mb-6">
                <TabsTrigger value="login" className="text-white data-[state=active]:bg-green-600">
                  Login
                </TabsTrigger>
                <TabsTrigger value="cadastro" className="text-white data-[state=active]:bg-green-600">
                  Cadastro
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Senha</Label>
                        <Link href="/recuperar-senha" className="text-sm text-white/80 hover:text-white">
                          Esqueceu a senha?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Entrar
                    </Button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/30" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-blue-600 px-2 text-white/80">Ou continue com</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      Microsoft
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cadastro">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-register">Email</Label>
                      <Input
                        id="email-register"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Você é</Label>
                      <select
                        id="role"
                        className="w-full px-3 py-2 bg-white/20 border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <option value="" className="bg-blue-800">
                          Selecione...
                        </option>
                        <option value="student" className="bg-blue-800">
                          Estudante
                        </option>
                        <option value="teacher" className="bg-blue-800">
                          Professor
                        </option>
                        <option value="parent" className="bg-blue-800">
                          Pai/Responsável
                        </option>
                        <option value="developer" className="bg-blue-800">
                          Desenvolvedor
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-register">Senha</Label>
                      <Input
                        id="password-register"
                        type="password"
                        placeholder="••••••••"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-confirm">Confirmar Senha</Label>
                      <Input
                        id="password-confirm"
                        type="password"
                        placeholder="••••••••"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Criar Conta
                    </Button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/30" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-blue-600 px-2 text-white/80">Ou continue com</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      Microsoft
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-white/80">
              Ao entrar, você concorda com nossos{" "}
              <Link href="/termos" className="text-white hover:underline">
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-white hover:underline">
                Política de Privacidade
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
