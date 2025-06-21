
'use client';

import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Instagram, Youtube, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

const WhatsappIcon = () => (
    <svg
      className="h-5 w-5"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>WhatsApp</title>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.51 7.24c.24-.02.48.02.68.14.2.1.34.28.42.5.08.22.1.47.08.72-.02.25-.1.48-.22.7l-.2.35c-.14.24-.04.5.22.72.57.51 1.02.93 1.54 1.28l.45.28c.24.12.5.06.7-.12.06-.06.12-.12.18-.18.2-.24.45-.38.75-.42.3-.04.6.06.82.26.22.2.34.48.36.78.02.3-.06.6-.22.84l-.08.12c-.44.62-1.04 1.1-1.74 1.42s-1.46.48-2.28.42c-.82-.06-1.6-.3-2.3-.72s-1.3-.98-1.78-1.64c-.48-.65-.8-1.38-1-2.18-.18-.8-.15-1.6.08-2.38.24-.78.68-1.48 1.25-2.08.23-.24.48-.44.75-.62.27-.18.55-.3.85-.36h.18z" />
    </svg>
  );

export function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialLinks = [
    { name: 'WhatsApp', icon: <WhatsappIcon />, href: 'https://wa.me/254757056917' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/calvisonyango/' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/calvisnyang' },
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
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label={social.name}>
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
                  src="https://maps.google.com/maps?q=Kibera%2C%20Nairobi%2C%20Kenya&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
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
              <p>Kibera, Nairobi, Kenya</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Caltech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
