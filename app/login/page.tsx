'use client';

import GlassCard from '../components/glass-card';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle standard login logic
    console.log(`Logging in with: ${email}`);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Initiating Google login');
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)]">
      <GlassCard className="max-w-md w-full p-8">
        <h2 className="font-lora text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-300">
          Acesse sua Conta
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
           <div className="text-right">
              <Link href="/forgot-password">
                <span className="text-sm text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Esqueceu sua senha?
                </span>
              </Link>
            </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-slate-800/80 px-2 text-slate-400 backdrop-blur-sm">OU</span>
          </div>
        </div>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-3 rounded-full transition-colors flex items-center justify-center gap-3"
          >
            {/* SVG for Google Icon would go here */}
            <span>Login com Google</span>
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
