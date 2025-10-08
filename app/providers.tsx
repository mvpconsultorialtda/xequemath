'use client';

import { VisibilityProvider } from '@/app/context/visibility-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <VisibilityProvider>
      {children}
    </VisibilityProvider>
  );
}
