
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/50">
      <header className="flex h-16 items-center justify-between border-b bg-background px-6">
        <h1 className="font-headline text-xl font-bold text-primary">Admin Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to Site</Link>
        </Button>
      </header>
      <main className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, Admin!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is your dashboard. You can manage your website content from here.</p>
            <p className="text-muted-foreground mt-4">
              (This is a placeholder page. Functionality to be added.)
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
