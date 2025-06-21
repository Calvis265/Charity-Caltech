"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Utensils, Users, Laptop, HeartHandshake, Feather, Heart, UserCheck, Mail, Phone, MapPin, PenSquare } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';


const WhatsappIcon = () => (
    <svg
      className="h-6 w-6 text-primary"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>WhatsApp</title>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.51 7.24c.24-.02.48.02.68.14.2.1.34.28.42.5.08.22.1.47.08.72-.02.25-.1.48-.22.7l-.2.35c-.14.24-.04.5.22.72.57.51 1.02.93 1.54 1.28l.45.28c.24.12.5.06.7-.12.06-.06.12-.12.18-.18.2-.24.45-.38.75-.42.3-.04.6.06.82.26.22.2.34.48.36.78.02.3-.06.6-.22.84l-.08.12c-.44.62-1.04 1.1-1.74 1.42s-1.46.48-2.28.42c-.82-.06-1.6-.3-2.3-.72s-1.3-.98-1.78-1.64c-.48-.65-.8-1.38-1-2.18-.18-.8-.15-1.6.08-2.38.24-.78.68-1.48 1.25-2.08.23-.24.48-.44.75-.62.27-.18.55-.3.85-.36h.18z" />
    </svg>
  );

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
      icon: <BookOpen className="size-10 text-primary" />,
      title: 'Education Sponsorships',
      description: 'We provide comprehensive scholarships to brilliant but needy students from primary school to university. This covers tuition, uniforms, books, and other essential scholastic materials to ensure they can focus on their studies without financial burdens.',
    },
    {
      icon: <Utensils className="size-10 text-primary" />,
      title: 'School Feeding Programs',
      description: "A nutritious meal can make all the difference in a child's ability to learn. Our feeding programs provide daily meals to students, combating malnutrition and improving concentration and attendance in class.",
    },
    {
      icon: <Users className="size-10 text-primary" />,
      title: 'Mentorship & Guidance',
      description: 'We connect our students with experienced mentors from various professional fields. Mentors provide academic support, career guidance, and psycho-social support, helping students navigate life\'s challenges and plan for their future.',
    },
    {
      icon: <Laptop className="size-10 text-primary" />,
      title: 'Tech Training & Digital Literacy',
      description: 'In today\'s digital world, tech skills are essential. We offer coding bootcamps, digital literacy workshops, and access to computer labs to equip students with the skills needed for the modern workforce.',
    },
    {
      icon: <Feather className="size-10 text-primary" />,
      title: 'Girl Empowerment',
      description: 'This program specifically focuses on empowering young girls through education, mentorship, and workshops on leadership, health, and rights. We aim to create a generation of confident and capable young women.',
    },
    {
      icon: <Heart className="size-10 text-primary" />,
      title: 'Community Support',
      description: 'We believe in holistic development, which includes supporting the communities our students come from. We engage in projects that improve school infrastructure and provide resources for parents and guardians.',
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
      name: 'Merceline Onyango',
      role: 'Volunteer Mentor',
      avatar: 'https://placehold.co/100x100',
      hint: 'woman portrait'
    },
  ];

  const founders = [
    { 
      name: 'Calvis Onyango', 
      role: 'Co-Founder & CEO', 
      avatar: 'https://placehold.co/100x100', 
      hint: 'man smiling',
      description: 'Calvis is the visionary behind Caltech, driven by a lifelong passion for education and a belief in its power to transform lives. He leads the organization with a focus on strategic growth and impactful programs.'
    },
    { 
      name: 'Merceline Onyango', 
      role: 'Co-Founder & Director of Programs', 
      avatar: 'https://placehold.co/100x100', 
      hint: 'woman portrait',
      description: 'Merceline provides the operational backbone for Caltech. Her expertise in program management and community outreach ensures that our initiatives are effective, sustainable, and truly meet the needs of our students.'
    },
  ];

  const teamMembers = [
    { name: 'Charlie Brown', role: 'Head of Mentorship', avatar: 'https://placehold.co/100x100', hint: 'person glasses' },
    { name: 'Diana Miller', role: 'Volunteer Coordinator', avatar: 'https://placehold.co/100x100', hint: 'woman smiling' },
    { name: 'David Lee', role: 'Technology Lead', avatar: 'https://placehold.co/100x100', hint: 'man tech' },
    { name: 'Sophia Chen', role: 'Community Manager', avatar: 'https://placehold.co/100x100', hint: 'woman community' },
  ];

  const partners = [
    { name: 'Global Tech Inc.', logo: 'https://placehold.co/150x50', hint: 'company logo' },
    { name: 'Community Foundation', logo: 'https://placehold.co/150x50', hint: 'foundation logo' },
    { name: 'Future Leaders Group', logo: 'https://placehold.co/150x50', hint: 'group logo' },
    { name: 'Edu-Innovate', logo: 'https://placehold.co/150x50', hint: 'innovate logo' },
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

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Caltech was founded in 2015 with a simple yet powerful idea: that every child, regardless of their circumstances, deserves access to quality education. What started as a small community initiative to help a handful of students has grown into a multi-faceted organization supporting hundreds of young learners across the region.
            </p>
            <p className="text-muted-foreground">
              We've witnessed firsthand how education can break the cycle of poverty, open doors to new opportunities, and empower individuals to build better futures for themselves and their communities. Our journey is fueled by the success of our students and the generosity of our supporters.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
             <Image 
                src="https://placehold.co/600x400" 
                alt="Founder talking to students"
                data-ai-hint="happy children group"
                layout="fill"
                objectFit="cover"
             />
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">To break the cycle of poverty by providing comprehensive support to needy students, enabling them to achieve their full potential and become leaders in their communities.</p>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">A world where every child has the opportunity to receive a quality education and the support system needed to thrive, creating a more equitable and prosperous society for all.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <Card key={founder.name} className="flex flex-col items-center text-center p-6 shadow-lg">
                <Avatar className="w-28 h-28 mb-4 border-2 border-primary">
                  <AvatarImage src={founder.avatar} alt={founder.name} data-ai-hint={founder.hint} />
                  <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{founder.name}</CardTitle>
                  <p className="text-primary font-semibold">{founder.role}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">{founder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center p-6 shadow-lg">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h4 className="font-headline font-semibold text-lg">{member.name}</h4>
                <p className="text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                 <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    data-ai-hint={partner.hint}
                    width={150}
                    height={50}
                    objectFit="contain"
                  />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Programs</h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the various ways we are making a tangible impact in the lives of students and their communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programs.map((program, index) => (
              <Card key={index} className="flex flex-col shadow-lg">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-center">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">Your support makes these programs possible.</p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-headline font-bold">Get Involved</h2>
             <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
               You have the power to change a life. Join our community of supporters and make a lasting impact.
             </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-last lg:order-first">
               <Image 
                  src="https://placehold.co/600x450" 
                  alt="Volunteers working together"
                  data-ai-hint="volunteers smiling"
                  layout="fill"
                  objectFit="cover"
               />
            </div>
            <div className="max-w-xl">
              <div className="mb-4">
                <HeartHandshake className="size-12 text-primary" />
              </div>
              <h3 className="text-3xl font-headline font-semibold mb-4">Become a Volunteer</h3>
              <p className="text-muted-foreground mb-6">
                Lend your time and skills to support our cause. Volunteers are the backbone of our organization, helping with everything from administrative tasks to event planning and community outreach. Whether you can give a few hours a week or a few days a month, your contribution is invaluable.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/#contact">
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
              <h3 className="text-3xl font-headline font-semibold mb-4">Become a Mentor</h3>
              <p className="text-muted-foreground mb-6">
                Share your knowledge and experience to guide a young mind. As a mentor, you can provide one-on-one support to a student, helping them with their studies, career choices, and personal development. This is a chance to make a direct and profound impact on an individual's life journey.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/#contact">
                  <Mail className="mr-2 h-4 w-4" /> Apply to be a Mentor
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x450" 
                alt="Mentor guiding a student"
                data-ai-hint="mentor student"
                layout="fill"
                objectFit="cover"
              />
            </div>
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
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/success-stories">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h2>
             <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
               We'd love to hear from you. Whether you have a question, a suggestion, or want to get involved, please reach out.
             </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-headline font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Fill out the form, and our team will get back to you as soon as possible.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Our Office</h4>
                  <p className="text-muted-foreground">Kibera, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:calvisonyango265@gmail.com" className="text-muted-foreground hover:text-primary">
                    calvisonyango265@gmail.com
                  </a>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <WhatsappIcon />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp Us</h4>
                  <a href="https://wa.me/254757056917" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    +254 757 056 917
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+254757056917" className="text-muted-foreground hover:text-primary">
                    +254 757 056 917
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
