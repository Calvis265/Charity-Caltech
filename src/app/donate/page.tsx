"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Gift, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { DonationModal } from '@/components/donation-modal';

export default function DonatePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedAmount, setSelectedAmount] = React.useState(0);

  const handleDonateClick = (amount: number | string) => {
    if (amount === 'Custom') {
      setSelectedAmount(0); // Start with 0 for custom to force user input
    } else {
      setSelectedAmount(Number(amount));
    }
    setIsModalOpen(true);
  };

  const donationTiers = [
    {
      amount: '1000',
      impact: 'Provides school supplies for one student for a semester.',
      icon: <Handshake className="size-8 text-primary" />,
    },
    {
      amount: '2500',
      impact: 'Feeds a student for a month through our feeding program.',
      icon: <Handshake className="size-8 text-primary" />,
    },
    {
      amount: '5000',
      impact: 'Sponsors a portion of a student\'s annual tuition fees.',
      icon: <Handshake className="size-8 text-primary" />,
    },
    {
      amount: 'Custom',
      impact: 'Every shilling helps us empower more students. Choose your own amount.',
      icon: <Gift className="size-8 text-primary" />,
    },
  ];

  return (
    <div>
      <DonationModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        amount={selectedAmount}
      />
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
              <Card key={tier.amount} className="text-center flex flex-col hover:scale-105 hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full mb-4">
                    {tier.icon}
                  </div>
                  <CardTitle className="font-headline text-3xl">{tier.amount !== 'Custom' ? `KES ${tier.amount}`: 'Custom'}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tier.impact}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => handleDonateClick(tier.amount)}
                  >
                    <Heart className="mr-2 h-4 w-4" /> Donate {tier.amount !== 'Custom' && `KES ${tier.amount}`}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You can donate securely via M-Pesa. Click a donation amount to start.
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
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-semibold mb-4">Your Donation in Action</h2>
            <p className="text-muted-foreground mb-4">
              Financial contributions are the lifeblood of our organization. They allow us to fund our core programs, from providing scholarships and daily meals to running mentorship and tech training sessions. Your support directly translates into tangible outcomes for our students.
            </p>
            <p className="text-muted-foreground">
              We are committed to transparency and efficiency. Over 90% of every shilling donated goes directly to program services.
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
