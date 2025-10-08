'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/app/components/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function CriarJogoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    meta: '',
    categoria: '',
    faixaEtaria: '',
  });

  // Protection Check
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar a lógica de envio para o backend
    console.log('Dados do formulário:', formData);
    alert('Jogo enviado para aprovação!');
    router.push('/campanhas');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 flex justify-center items-center">
        <div className="text-white text-xl">Verificando acesso...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 mt-12 border border-white/20">
          <h1 className="text-white text-4xl font-serif mb-6 text-center">Criar Novo Jogo Educacional</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="titulo" className="text-white">Título do Jogo</Label>
              <Input id="titulo" value={formData.titulo} onChange={handleInputChange} required className="bg-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="descricao" className="text-white">Descrição</Label>
              <Textarea id="descricao" value={formData.descricao} onChange={handleInputChange} required className="bg-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="meta" className="text-white">Meta de Arrecadação (R$)</Label>
              <Input id="meta" type="number" value={formData.meta} onChange={handleInputChange} required className="bg-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="categoria" className="text-white">Categoria</Label>
              <Input id="categoria" value={formData.categoria} onChange={handleInputChange} required className="bg-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="faixaEtaria" className="text-white">Faixa Etária</Label>
              <Input id="faixaEtaria" value={formData.faixaEtaria} onChange={handleInputChange} required className="bg-white/20 text-white" />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Enviar para Aprovação</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
