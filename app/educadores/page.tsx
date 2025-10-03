
import { Button } from "@/components/ui/button";

export default function ForEducatorsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-gray-900 dark:text-gray-100">
            Capacite seus Alunos com a XEQUEMATH
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-400">
            Oferecemos ferramentas e recursos para educadores transformarem o ensino da matemática.
          </p>
          <Button size="lg" asChild>
            <a href="/request-invitation">Solicite um Convite</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
