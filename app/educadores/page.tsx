
import { Button } from "@/components/ui/button";
import Navigation from "@/app/components/navigation";
import Link from "next/link";

export default function ForEducatorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        <div className="text-center max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6">
            Capacite seus Alunos com a XEQUEMATH
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/80">
            Oferecemos ferramentas e recursos para educadores transformarem o ensino da matemática.
          </p>
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white text-xl font-medium px-12 py-4 rounded-full transition-colors">
            <Link href="/request-invitation">Solicite um Convite</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
