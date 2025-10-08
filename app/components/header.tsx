'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/permutas', label: 'Permutas' },
  { href: '/educadores', label: 'Educadores' },
  { href: '/assistente', label: 'Assistente' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl flex items-center">
            {/* Replace with Logo Component if available */}
            <span className="font-bold text-xl">XEQUEMATE</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white/80 hover:text-white transition-colors relative py-2`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center space-x-4">
             <Link href="/login">
                <button className='text-white/80 hover:text-white transition-colors'>Login</button>
            </Link>
            <Link href="/request-invitation">
                <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors'>
                    Criar Conta
                </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
