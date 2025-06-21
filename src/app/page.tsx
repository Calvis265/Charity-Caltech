
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Utensils, Users, Laptop } from 'lucide-react';

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const heroSlides = [
    {
      imageSrc: "https://placehold.co/1600x900",
      alt: "Children learning in a classroom",
      title: "Empowering Futures, One Student at a Time",
      subtitle: "Providing access to quality education, mentorship, and support for students in need.",
    },
    {
      imageSrc: "https://placehold.co/1600x900",
      alt: "A student celebrating their graduation",
      title: "Building a Foundation for Success",
      subtitle: "Our programs equip students with the skills and confidence to achieve their dreams.",
    },
    {
      imageSrc: "https://placehold.co/1600x900",
      alt: "Community members working together",
      title: "Join Us in Making a Difference",
      subtitle: "Your support can change a life. Become a part of our mission to create a brighter future.",
    },
  ];

  const programs = [
    {
      icon: <BookOpen className="size-10 text-primary" />,
      title: 'Education Sponsorships',
      description: 'We provide comprehensive scholarships to brilliant but needy students from primary school to university.',
    },
    {
      icon: <Utensils className="size-10 text-primary" />,
      title: 'School Feeding Programs',
      description: "Our feeding programs provide daily meals to students, combating malnutrition and improving concentration.",
    },
    {
      icon: <Users className="size-10 text-primary" />,
      title: 'Mentorship & Guidance',
      description: 'We connect our students with experienced mentors for academic, career, and psycho-social support.',
    },
    {
      icon: <Laptop className="size-10 text-primary" />,
      title: 'Tech Training & Digital Literacy',
      description: 'We offer coding bootcamps and digital literacy workshops to equip students for the modern workforce.',
    },
  ];

  const testimonials = [
    {
      quote: 'Caltech changed my life. The sponsorship allowed me to pursue my dreams without financial worry. I am forever grateful.',
      name: 'Calvis Onyango',
      role: 'University Student',
      avatar: 'https://placehold.co/100x100',
    },
    {
      quote: "Volunteering as a mentor has been an incredibly rewarding experience. Seeing the impact on these young lives is priceless.",
      name: 'Merceline Onyango',
      role: 'Volunteer Mentor',
      avatar: 'https://placehold.co/100x100',
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
                    fill
                    className="absolute inset-0 z-0 brightness-50 object-cover"
                    priority={index === 0}
                  />
                  <div className="relative z-10 p-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/donate">Donate Now</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-primary/80 hover:bg-primary border-none text-primary-foreground" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-primary/80 hover:bg-primary border-none text-primary-foreground" />
        </Carousel>
      </section>

      {/* About Section Snippet */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-semibold mb-4">Our Story: Empowering Dreams</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2015, Caltech started with a simple idea: every child deserves quality education. We've grown from a small community initiative into an organization supporting hundreds, breaking the cycle of poverty and building brighter futures.
            </p>
            <Button asChild>
                <Link href="/about">Read Our Full Story</Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
             <Image 
                src="https://placehold.co/600x400" 
                alt="Founder talking to students"
                fill
                className="object-cover"
             />
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Programs</h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a range of programs designed to provide holistic support to our students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {programs.map((program, index) => (
              <Card key={index} className="flex flex-col text-center shadow-lg hover-glow">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-headline font-bold">You Can Make a Difference</h2>
             <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
               Join our community of supporters and help us change lives. Your time, skills, and generosity can create lasting impact.
             </p>
             <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/get-involved">Volunteer or Mentor</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/donate">Donate Today</Link>
                </Button>
             </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
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
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
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
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/success-stories">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
