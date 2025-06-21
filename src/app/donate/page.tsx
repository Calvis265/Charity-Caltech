import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Gift, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

export default function DonatePage() {
  const donationTiers = [
    {
      amount: '$25',
      impact: 'Provides school supplies for one student for a semester.',
      icon: <DollarSign className="size-8 text-primary" />,
      link: 'https://paypal.me/your-paypal/25USD'
    },
    {
      amount: '$50',
      impact: 'Feeds a student for a month through our feeding program.',
      icon: <DollarSign className="size-8 text-primary" />,
      link: 'https://paypal.me/your-paypal/50USD'
    },
    {
      amount: '$100',
      impact: 'Sponsors a portion of a student\'s annual tuition fees.',
      icon: <DollarSign className="size-8 text-primary" />,
      link: 'https://paypal.me/your-paypal/100USD'
    },
    {
      amount: 'Custom',
      impact: 'Every dollar helps us empower more students. Choose your own amount.',
      icon: <Gift className="size-8 text-primary" />,
      link: 'https://paypal.me/your-paypal'
    },
  ];

  return (
    <div>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Support Our Cause</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your generous donation empowers students, fuels dreams, and builds a better future. Every contribution, no matter the size, makes a difference.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Choose Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {donationTiers.map((tier) => (
              <Card key={tier.amount} className="text-center flex flex-col hover-glow">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full mb-4">
                    {tier.icon}
                  </div>
                  <CardTitle className="font-headline text-3xl">{tier.amount}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tier.impact}</p>
                </CardContent>
                <CardFooter className="justify-center">
                   <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={tier.link} target="_blank" rel="noopener noreferrer">
                      <Heart className="mr-2 h-4 w-4" /> Donate {tier.amount !== 'Custom' && tier.amount}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You will be redirected to our secure payment partner to complete your donation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
             <Image 
                src="https://placehold.co/600x450" 
                alt="Happy student receiving support"
                data-ai-hint="happy student"
                layout="fill"
                objectFit="cover"
             />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-semibold mb-4">Your Donation in Action</h2>
            <p className="text-muted-foreground mb-4">
              Financial contributions are the lifeblood of our organization. They allow us to fund our core programs, from providing scholarships and daily meals to running mentorship and tech training sessions. Your support directly translates into tangible outcomes for our students.
            </p>
            <p className="text-muted-foreground">
              We are committed to transparency and efficiency. Over 90% of every dollar donated goes directly to program services.
            </p>
            <Button asChild className="mt-6">
                <Link href="/about">Learn More About Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-semibold">Other Ways to Give</h2>
            <p className="mt-2 text-muted-foreground">
              Interested in corporate partnerships, in-kind donations, or planned giving? We'd love to discuss how you can support our mission. Please send us a message below.
            </p>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
