import type { Metadata } from 'next';
import { AdminLayoutContent } from '@/components/layout/admin-layout';

export const metadata: Metadata = {
  title: 'Admin - Caltech',
  description: 'Admin section for Caltech',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayoutContent>{children}</AdminLayoutContent>;
}
