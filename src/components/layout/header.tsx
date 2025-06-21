"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, GraduationCap, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#programs', label: 'Programs' },
  { href: '/#get-involved', label: 'Get Involved' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="font-bold font-headline text-xl text-primary">Caltech</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isActive = isHomePage && pathname === new URL(link.href, 'http://a').pathname

              return (
                 <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="hidden md:flex items-center gap-2 ml-4">
             <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" /> Donate
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
                <Link href="/admin/login">
                    <LogIn className="h-5 w-5" />
                    <span className="sr-only">Admin Login</span>
                </Link>
            </Button>
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <GraduationCap className="h-7 w-7 text-primary" />
                    <span className="font-bold font-headline text-xl text-primary">Caltech</span>
                  </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </div>
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                         'text-foreground'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto pt-6 border-t">
                   <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                      <Heart className="mr-2 h-4 w-4" /> Donate Now
                    </Link>
                  </Button>
                   <Button asChild variant="outline" size="lg" className="w-full mt-4">
                    <Link href="/admin/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogIn className="mr-2 h-4 w-4" /> Admin Login
                    </Link>
                  </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
