
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, CastleIcon as ChessKnight } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mb-16">
      <Link href="/" className="text-white text-4xl font-serif font-bold flex items-center">
        <ChessKnight className="h-8 w-8 mr-2" />
        XEQUEMATH
      </Link>
      <div className="flex items-center gap-8 mt-10 md:mt-0">
        <div className="flex gap-8 justify-center">
          <Link
            href="/campanhas"
            className={`text-white text-lg hover:underline ${pathname === "/campanhas" ? "underline" : ""}`}>
            Jogos Educacionais
          </Link>
          <Link
            href="/servicos"
            className={`text-white text-lg hover:underline ${pathname === "/servicos" ? "underline" : ""}`}>
            Educadores
          </Link>
          <Link
            href="/assistente"
            className={`text-white text-lg hover:underline ${pathname === "/assistente" ? "underline" : ""}`}>
            Assistente
          </Link>
        </div>

        <Link href="/login" className="text-white text-lg hover:underline ml-4">
          Login
        </Link>
      </div>
    </nav>
  );
}

export { Navigation };
