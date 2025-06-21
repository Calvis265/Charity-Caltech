import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', avatar: 'https://placehold.co/100x100', hint: 'woman portrait' },
  { name: 'Bob Williams', role: 'Director of Programs', avatar: 'https://placehold.co/100x100', hint: 'man smiling' },
  { name: 'Charlie Brown', role: 'Head of Mentorship', avatar: 'https://placehold.co/100x100', hint: 'person glasses' },
  { name: 'Diana Miller', role: 'Volunteer Coordinator', avatar: 'https://placehold.co/100x100', hint: 'woman smiling' },
];

const partners = [
  { name: 'Global Tech Inc.', logo: 'https://placehold.co/150x50', hint: 'company logo' },
  { name: 'Community Foundation', logo: 'https://placehold.co/150x50', hint: 'foundation logo' },
  { name: 'Future Leaders Group', logo: 'https://placehold.co/150x50', hint: 'group logo' },
  { name: 'Edu-Innovate', logo: 'https://placehold.co/150x50', hint: 'innovate logo' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Caltech</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our journey, our mission, and the people driving our passion for education forward.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
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
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
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
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
      </section>

      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
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
    </div>
  );
}
