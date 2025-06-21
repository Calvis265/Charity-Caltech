'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/50 p-4">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto mb-4 flex w-fit items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">Caltech</span>
          </Link>
          <CardTitle className="font-headline text-2xl">Forgot Password?</CardTitle>
          <CardDescription>
            Enter your email below to receive a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="calvis@admin.com" required />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center border-t pt-6">
          <Button variant="link" size="sm" asChild>
            <Link href="/admin/login">Back to Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
