
'use client';

import type { Metadata } from 'next';
import { AdminLayoutContent } from '@/components/layout/admin-layout';
import { usePathname } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'Admin - Caltech',
//   description: 'Admin section for Caltech',
// };

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/admin/login' || pathname === '/admin/forgot-password';

  if (isAuthPage) {
    return <div className="bg-muted/40">{children}</div>;
  }
  
  return <AdminLayoutContent>{children}</AdminLayoutContent>;
}
