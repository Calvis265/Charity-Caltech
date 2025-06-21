import Link from 'next/link';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
  ];
  return (
    <footer className="bg-secondary/70 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-2">Caltech</h3>
            <p className="text-sm text-muted-foreground">Empowering Futures, One Student at a Time.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-primary">Programs</Link></li>
              <li><Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">Donate</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get Involved</h4>
            <ul className="space-y-1">
              <li><Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary">Volunteer</Link></li>
              <li><Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary">Mentor</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <address className="not-italic text-sm text-muted-foreground">
              <p>123 Education Lane, Knowledge City, 12345</p>
              <p>Email: <a href="mailto:info@caltech.org" className="hover:text-primary">info@caltech.org</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Caltech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary" aria-label={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
