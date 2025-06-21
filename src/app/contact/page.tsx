import { Phone, Mail, MapPin } from 'lucide-react';
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

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question, a suggestion, or want to get involved, please reach out.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-headline font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form, and our team will get back to you as soon as possible.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">Kibera, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
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
                  <h3 className="font-semibold">WhatsApp Us</h3>
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
                  <h3 className="font-semibold">Call Us</h3>
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
