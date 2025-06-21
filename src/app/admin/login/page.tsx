
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/50 p-4 font-body">
      <div
        className={cn(
          'relative h-[550px] w-full max-w-4xl overflow-hidden rounded-lg bg-card text-card-foreground shadow-2xl animated-glow-border',
          'before:rounded-lg after:rounded-lg'
        )}
        id="container"
      >
        {/* Sign-Up Form */}
        <div
          className={cn(
            'form-container sign-up-container absolute top-0 h-full w-1/2 left-0 opacity-0 z-[1] transition-all duration-700 ease-in-out',
            { 'translate-x-full opacity-100 z-[5]': isSignUp }
          )}
        >
          <form className="bg-card h-full flex justify-center items-center flex-col px-12 text-center">
             <Link href="/" className="mb-6 flex w-fit items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl font-bold text-primary">Caltech</span>
            </Link>
            <h1 className="font-bold font-headline text-3xl mb-3">Create Account</h1>
            <div className="grid gap-4 w-full">
              <div className="grid gap-2 text-left">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Calvis Onyango" required />
              </div>
              <div className="grid gap-2 text-left">
                 <Label htmlFor="signup-email">Email</Label>
                 <Input id="signup-email" type="email" placeholder="calvis@admin.com" required />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" required />
              </div>
            </div>
            <Button className="mt-6 rounded-full px-12 py-3 text-sm font-bold uppercase tracking-wider transition-transform duration-75 ease-in active:scale-95">
              Sign Up
            </Button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div
          className={cn(
            'form-container sign-in-container absolute top-0 h-full w-1/2 left-0 z-[2] transition-all duration-700 ease-in-out',
            { 'translate-x-full': isSignUp }
          )}
        >
          <form className="bg-card h-full flex justify-center items-center flex-col px-12 text-center">
             <Link href="/" className="mb-6 flex w-fit items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl font-bold text-primary">Caltech</span>
            </Link>
            <h1 className="font-bold font-headline text-3xl mb-3">Admin Login</h1>
            <div className="grid gap-4 w-full">
                <div className="grid gap-2 text-left">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="calvis@admin.com" required />
                </div>
                <div className="grid gap-2 text-left">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
            </div>
            <Link
              href="/admin/forgot-password"
              className="my-4 text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Forgot your password?
            </Link>
            <Button className="rounded-full px-12 py-3 text-sm font-bold uppercase tracking-wider transition-transform duration-75 ease-in active:scale-95">
              Sign In
            </Button>
          </form>
        </div>

        {/* Overlay Container */}
        <div
          className={cn(
            'overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-50 transition-transform duration-700 ease-in-out',
            { '-translate-x-full': isSignUp }
          )}
        >
          <div
            className={cn(
              'overlay relative -left-full h-full w-[200%] text-primary-foreground transition-transform duration-700 ease-in-out bg-gradient-to-r from-primary to-accent',
              { 'translate-x-1/2': isSignUp }
            )}
          >
            {/* Left Overlay */}
            <div
              className={cn(
                'overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-700 ease-in-out',
                 'translate-x-0',
                { 'translate-x-[-20%]': isSignUp }
              )}
            >
              <h1 className="font-bold font-headline text-3xl mb-3">Welcome Back!</h1>
              <p className="text-sm font-light leading-snug tracking-wide mb-6">
                To keep connected with us please login with your personal info
              </p>
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground rounded-full px-12 py-3 text-sm font-bold uppercase tracking-wider transition-transform duration-75 ease-in active:scale-95" onClick={() => setIsSignUp(false)}>
                Sign In
              </Button>
            </div>
            {/* Right Overlay */}
            <div
              className={cn(
                'overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center top-0 right-0 h-full w-1/2 transition-transform duration-700 ease-in-out',
                'translate-x-0',
                { 'translate-x-[20%]': isSignUp }
              )}
            >
              <h1 className="font-bold font-headline text-3xl mb-3">Hello, Admin!</h1>
              <p className="text-sm font-light leading-snug tracking-wide mb-6">
                Enter your personal details and start your journey with us
              </p>
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground rounded-full px-12 py-3 text-sm font-bold uppercase tracking-wider transition-transform duration-75 ease-in active:scale-95" onClick={() => setIsSignUp(true)}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
