'use client';

import GlassCard from '../components/glass-card';
import { useState } from 'react';

export default function RequestInvitationPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the API call to a mailing list service
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)]">
      <GlassCard className="max-w-xl w-full p-8 md:p-12 text-center">
        {submitted ? (
          <div>
            <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-300">
              Obrigado!
            </h2>
            <p className="text-slate-300 text-lg">
              Você está na lista! Avisaremos assim que uma vaga for liberada.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-300">
              Junte-se à Revolução da Matemática
            </h2>
            <p className="text-slate-300 mb-8">
              A plataforma está em beta fechado. Deixe seu e-mail abaixo para entrar na lista de espera e ser um dos primeiros a ter acesso.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                required
                className="flex-grow px-4 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors transform hover:scale-105"
              >
                Entrar na Lista
              </button>
            </form>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
