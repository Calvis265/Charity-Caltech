'use client';

import { usePathname } from 'next/navigation';
import { MainLayout } from '@/components/layout/main-layout';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (isAdminRoute) {
    // For admin routes, we don't want the main header and footer.
    return <>{children}</>;
  }

  // For all other routes, use the main layout with header and footer.
  return <MainLayout>{children}</MainLayout>;
}
