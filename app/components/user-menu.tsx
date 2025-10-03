
"use client";

import Link from "next/link";
import { User } from "lucide-react";

export default function UserMenu() {

  return (
    <div className="relative">
        <Link href="/login" className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-3 py-2">
            <User className="h-5 w-5 text-white" />
            <span className="text-white hidden md:inline">Login</span>
        </Link>
    </div>
  );
}
