
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { PenSquare } from 'lucide-react';

const stories = [
  {
    title: 'From Village School to University Scholar',
    studentName: 'Calvis O.',
    image: 'https://placehold.co/600x400',
    excerpt: 'Thanks to Caltech\'s sponsorship, Calvis was able to complete his high school education and secure a scholarship to study computer science at a top university. He is now a role model in his community.',
  },
  {
    title: 'A Mentor\'s Guidance Lights the Way',
    studentName: 'David L.',
    image: 'https://placehold.co/600x400',
    excerpt: 'Struggling with his studies and future prospects, David was paired with a mentor through our program. With personalized guidance, he discovered a passion for engineering and is now excelling in his vocational training.',
  },
    {
    title: 'Nourishing Minds, Fueling Dreams',
    studentName: 'Amina S.',
    image: 'https://placehold.co/600x400',
    excerpt: 'Amina\'s concentration in class improved dramatically after joining our school feeding program. Proper nutrition gave her the energy to learn and play, and she now consistently ranks at the top of her class.',
  },
];

export default function SuccessStoriesPage() {
  return (
    <div>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Success Stories</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Read the inspiring journeys of students whose lives have been transformed through our programs and your support.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold">Share a Story</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Use our story builder to help craft and share a new success story.</p>
            <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/success-stories/generate">
                <PenSquare className="mr-2 h-5 w-5" />
                Create a Success Story
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.title} className="flex flex-col overflow-hidden shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={story.image}
                      alt={`Image for ${story.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="font-headline text-xl">{story.title}</CardTitle>
                    <p className="text-sm text-primary font-medium mt-1">{story.studentName}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <p className="text-muted-foreground">{story.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
