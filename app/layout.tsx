import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const lora = Lora({ subsets: ["latin"], display: 'swap', weight: ["400", "700"], variable: '--font-lora' });

export const metadata: Metadata = {
  title: "Xequemate - Futurista & Engajador",
  description: "A plataforma de matemática reimaginada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased text-slate-200`}>
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 -z-50" />
        <Header />
        <main className="pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8">
            <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
