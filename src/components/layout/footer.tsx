'use client';

import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Instagram, Youtube, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsMounted(true);
  }, []);

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, href: '#' },
  ];
  
  return (
    <footer className="bg-secondary/70 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="font-headline text-lg font-semibold">Caltech</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Empowering Futures, One Student at a Time.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-primary">Programs</Link></li>
              <li><Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">Donate</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary">Volunteer</Link></li>
              <li><Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary">Mentor</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Location</h4>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              {isMounted ? (
                 <iframe
                  src="https://maps.google.com/maps?q=123%20Education%20Lane,%20Knowledge%20City&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location of Caltech"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-muted animate-pulse"></div>
              )}
            </div>
             <address className="not-italic text-sm text-muted-foreground mt-2">
              <p>123 Education Lane, Knowledge City, 12345</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {year} Caltech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
