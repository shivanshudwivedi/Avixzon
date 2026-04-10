import { QuoteForm } from "@/components/quote-form";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-5 md:px-8 py-16 md:py-24 lg:py-28">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Reach Out</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Contact Us.</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Ready to move? Have questions? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

          {/* Contact sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-7 shadow-sm">
              <h2 className="text-xl font-bold mb-5 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground text-sm mb-7 leading-relaxed">
                Available to answer your questions and support all your moving and logistics needs.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <a href="tel:+14377752592" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      (437) 775 2592
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">Mon–Fri 9 am–5 pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:avixzon@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      avixzon@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Office</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      617-1050 Markham Road<br />
                      Scarborough, ON M1H 2Y7<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-6 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-2.5">
                  <Link
                    href="https://www.facebook.com/share/16dDPPY9WX"
                    className="p-2 rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/avixzoncanada?igsh=Ox03bDIqNTNtbGxs"
                    className="p-2 rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-card rounded-2xl border border-border p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Service Areas
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We proudly serve the entire Greater Toronto Area including Toronto, Mississauga,
                Brampton, Markham, Vaughan, and surrounding regions.
              </p>
            </div>
          </div>

          {/* Quote form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
