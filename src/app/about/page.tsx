
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const founders = [
  { 
    name: 'Calvis Onyango', 
    role: 'Co-Founder & CEO', 
    avatar: 'https://placehold.co/128x128.png', 
    description: 'Calvis is the visionary behind Caltech, driven by a lifelong passion for education and a belief in its power to transform lives. He leads the organization with a focus on strategic growth and impactful programs.'
  },
  { 
    name: 'Merceline Onyango', 
    role: 'Co-Founder & Director of Programs', 
    avatar: 'https://placehold.co/128x128.png', 
    description: 'Merceline provides the operational backbone for Caltech. Her expertise in program management and community outreach ensures that our initiatives are effective, sustainable, and truly meet the needs of our students.'
  },
];

const teamMembers = [
  { name: 'Charlie Brown', role: 'Head of Mentorship', avatar: 'https://placehold.co/100x100' },
  { name: 'Diana Miller', role: 'Volunteer Coordinator', avatar: 'https://placehold.co/100x100' },
  { name: 'David Lee', role: 'Technology Lead', avatar: 'https://placehold.co/100x100' },
  { name: 'Sophia Chen', role: 'Community Manager', avatar: 'https://placehold.co/100x100' },
];

const partners = [
  { name: 'Global Tech Inc.', logo: 'https://placehold.co/150x50' },
  { name: 'Community Foundation', logo: 'https://placehold.co/150x50' },
  { name: 'Future Leaders Group', logo: 'https://placehold.co/150x50' },
  { name: 'Edu-Innovate', logo: 'https://placehold.co/150x50' },
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
                fill
                className="object-cover"
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
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <Card key={founder.name} className="flex flex-col items-center text-center p-6 shadow-lg hover-glow">
                <Avatar className="w-28 h-28 mb-4 border-2 border-primary">
                  <AvatarImage src={founder.avatar} alt={founder.name} />
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
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center p-6 shadow-lg hover-glow">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h4 className="font-headline font-semibold text-lg">{member.name}</h4>
                <p className="text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                 <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={150}
                    height={50}
                    className="object-contain"
                  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
