"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Utensils, Users, Laptop, Feather, HeartHandshake } from 'lucide-react';

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const heroSlides = [
    {
      imageSrc: "https://placehold.co/1600x900",
      imageHint: "children learning",
      alt: "Children learning in a classroom",
      title: "Empowering Futures, One Student at a Time",
      subtitle: "Providing access to quality education, mentorship, and support for students in need.",
    },
    {
      imageSrc: "https://placehold.co/1600x900",
      imageHint: "student graduation",
      alt: "A student celebrating their graduation",
      title: "Building a Foundation for Success",
      subtitle: "Our programs equip students with the skills and confidence to achieve their dreams.",
    },
    {
      imageSrc: "https://placehold.co/1600x900",
      imageHint: "community support",
      alt: "Community members working together",
      title: "Join Us in Making a Difference",
      subtitle: "Your support can change a life. Become a part of our mission to create a brighter future.",
    },
  ];

  const programs = [
    {
      icon: <BookOpen className="size-8 text-primary" />,
      title: 'Education Sponsorship',
      description: 'Providing full scholarships to bright and needy students.',
      link: '/programs',
    },
    {
      icon: <Utensils className="size-8 text-primary" />,
      title: 'Feeding Programs',
      description: 'Ensuring students have the nutrition they need to learn.',
      link: '/programs',
    },
    {
      icon: <Users className="size-8 text-primary" />,
      title: 'Mentorship',
      description: 'Connecting students with mentors for guidance and support.',
      link: '/programs',
    },
    {
      icon: <Laptop className="size-8 text-primary" />,
      title: 'Tech Training',
      description: 'Equipping students with modern digital skills for the future.',
      link: '/programs',
    },
  ];

  const testimonials = [
    {
      quote: 'Caltech changed my life. The sponsorship allowed me to pursue my dreams without financial worry. I am forever grateful.',
      name: 'Calvis Onyango',
      role: 'University Student',
      avatar: 'https://placehold.co/100x100',
      hint: 'student smiling'
    },
    {
      quote: "Volunteering as a mentor has been an incredibly rewarding experience. Seeing the impact on these young lives is priceless.",
      name: 'John Smith',
      role: 'Volunteer Mentor',
      avatar: 'https://placehold.co/100x100',
      hint: 'man portrait'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       <section className="relative w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.alt}
                    data-ai-hint={slide.imageHint}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 brightness-50"
                    priority={index === 0}
                  />
                  <div className="relative z-10 p-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/donate">Donate Now</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-primary/80 hover:bg-primary border-none text-primary-foreground" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-primary/80 hover:bg-primary border-none text-primary-foreground" />
        </Carousel>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To break the cycle of poverty by providing comprehensive support to needy students, enabling them to achieve their full potential and become leaders in their communities. We believe every child deserves a chance to succeed, regardless of their background.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <Card key={program.title} className="text-center flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="font-headline">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline" asChild>
                    <Link href={program.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card shadow-lg">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center mt-6">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6">Make a Difference Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your contribution can change a life. Join us in our mission to create a brighter future for students in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/get-involved">
                <HeartHandshake className="mr-2" />
                Become a Volunteer
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline">
              <Link href="/success-stories">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
