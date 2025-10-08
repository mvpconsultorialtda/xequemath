'use client';

import Link from 'next/link';
import GlassCard from './glass-card';
import { Lock } from 'lucide-react';

interface FeatureLockOverlayProps {
  featureName: string;
  featureDescription: string;
}

export default function FeatureLockOverlay({ featureName, featureDescription }: FeatureLockOverlayProps) {
  return (
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl z-10 flex items-center justify-center">
      <GlassCard className="max-w-xl w-full p-8 md:p-12 text-center">
        <div className="flex flex-col items-center">
          <Lock className="w-16 h-16 mb-6 text-amber-400" />
          <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-amber-300">
            {featureName} é um Recurso Exclusivo
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            {featureDescription}
          </p>
          <Link href="/request-invitation">
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-full transition-colors transform hover:scale-105 shadow-lg"
            >
              Solicitar Acesso à Plataforma
            </button>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
