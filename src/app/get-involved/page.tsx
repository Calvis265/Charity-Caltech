import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, UserCheck, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <div>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Get Involved</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            You have the power to change a life. Join our community of supporters and make a lasting impact.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-last lg:order-first">
               <Image 
                  src="https://placehold.co/600x450" 
                  alt="Volunteers working together"
                  data-ai-hint="volunteers smiling"
                  fill
                  className="object-cover"
               />
            </div>
            <div className="max-w-xl">
              <div className="mb-4">
                <HeartHandshake className="size-12 text-primary" />
              </div>
              <h2 className="text-3xl font-headline font-semibold mb-4">Become a Volunteer</h2>
              <p className="text-muted-foreground mb-6">
                Lend your time and skills to support our cause. Volunteers are the backbone of our organization, helping with everything from administrative tasks to event planning and community outreach. Whether you can give a few hours a week or a few days a month, your contribution is invaluable.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Sign Up to Volunteer
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 md:mt-24">
            <div className="max-w-xl">
              <div className="mb-4">
                <UserCheck className="size-12 text-primary" />
              </div>
              <h2 className="text-3xl font-headline font-semibold mb-4">Become a Mentor</h2>
              <p className="text-muted-foreground mb-6">
                Share your knowledge and experience to guide a young mind. As a mentor, you can provide one-on-one support to a student, helping them with their studies, career choices, and personal development. This is a chance to make a direct and profound impact on an individual's life journey.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Apply to be a Mentor
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x450" 
                alt="Mentor guiding a student"
                data-ai-hint="mentor student"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-semibold mb-4">Other Ways to Help</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Every act of kindness contributes to our mission. Explore more ways you can support our students.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="font-headline">Donate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Your financial support helps us fund our programs and reach more students in need.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="font-headline">Partner With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>We collaborate with corporations and foundations to create impactful partnerships.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="font-headline">Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Follow us on social media and share our stories to raise awareness about our cause.</CardDescription>
                </CardContent>
              </Card>
            </div>
        </div>
      </section>
    </div>
  );
}
