"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function RequestInvitationPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, insira um endereço de e-mail.");
      return;
    }
    // Simple email format validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    setError("");
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 p-4">
      <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20">
        {isSubmitted ? (
          <div className="text-center text-white">
            <CheckCircle className="mx-auto h-16 w-16 text-green-400 mb-6" />
            <h1 className="text-3xl font-serif font-bold mb-3">Convite Solicitado!</h1>
            <p className="text-lg text-white/90">
              Sua solicitação de convite foi recebida com sucesso. Fique de olho no seu e-mail, nossa equipe entrará em contato em breve.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-serif font-bold text-white">Acesso Restrito</h1>
              <p className="text-lg text-white/80 mt-2">
                Para acessar esta funcionalidade, por favor, solicite um convite.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-white/10 text-white placeholder:text-gray-400 border-white/30 focus:border-green-400 focus:ring-green-400"
                  disabled={isLoading}
                />
              </div>
               {error && <p className="text-sm text-red-400">{error}</p>}
              <Button 
                type="submit" 
                className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-full transition-all duration-300 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  "Solicitar Convite"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
