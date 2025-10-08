
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, CastleIcon as ChessKnight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [pathname]);

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mb-16">
      <Link href="/" className="text-white text-5xl font-serif font-bold flex items-center">
        <ChessKnight className="h-10 w-10 mr-2" />
        XEQUEMATH
      </Link>
      <div className="flex items-center gap-6 md:gap-8 mt-8 md:mt-0">
        <div className="flex gap-6 md:gap-8">
          <Link
            href="/campanhas"
            className={`text-white text-xl hover:underline ${pathname === "/campanhas" ? "underline" : ""}`}>
            Jogos Educacionais
          </Link>
          <Link
            href="/educadores"
            className={`text-white text-xl hover:underline ${pathname === "/educadores" ? "underline" : ""}`}>
            Educadores
          </Link>
          <Link
            href="/assistente"
            className={`text-white text-xl hover:underline ${pathname === "/assistente" ? "underline" : ""}`}>
            Assistente
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button onClick={handleLogout} variant="secondary">Logout</Button>
            </>
          ) : (
            <Link href="/login" className="text-white text-xl hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
