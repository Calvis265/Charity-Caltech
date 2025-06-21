
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Caltech',
  description: 'Admin section for Caltech',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
