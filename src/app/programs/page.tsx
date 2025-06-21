import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Utensils, Users, Laptop, Feather, Heart } from 'lucide-react';
import Link from 'next/link';

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

export default function ProgramsPage() {
  return (
    <div>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Programs</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the various ways we are making a tangible impact in the lives of students and their communities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
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
    </div>
  );
}
