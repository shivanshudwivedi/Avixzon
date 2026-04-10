import { QuoteForm } from "@/components/quote-form";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-5 md:px-8 py-16 md:py-24 lg:py-32">
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Reach Out</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Contact Us.</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          Ready to move? Have questions? We&apos;re here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="space-y-8 lg:col-span-1">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              We are available to answer your questions and provide support for all your moving and logistics needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(437) 775 2592</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9am-5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">avixzon@gmail.com</p>
                  <p className="text-sm text-muted-foreground">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">
                    617-1050 Markham Road<br />
                    Scarborough, ON<br />
                    Canada<br />
                    M1H 2Y7
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.faceook.com/share/16dDPPY9WX" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/avixzoncanada?igsh=Ox03bDIqNTNtbGxs" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-muted/50 rounded-xl border border-border/50">
            <h3 className="font-semibold mb-2">Service Areas</h3>
            <p className="text-sm text-muted-foreground">
              We proudly serve the entire Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Markham, Vaughan, and surrounding regions.
            </p>
          </div>
        </div>

        {/* Quote Form */}
        <div className="lg:col-span-2">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
