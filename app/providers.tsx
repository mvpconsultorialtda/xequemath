'use client';

import { SessionProvider } from 'next-auth/react';
import { VisibilityProvider } from '@/app/context/visibility-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <VisibilityProvider>
        {children}
      </VisibilityProvider>
    </SessionProvider>
  );
}
