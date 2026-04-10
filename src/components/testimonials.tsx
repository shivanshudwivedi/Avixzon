"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Avixzon made my move from Toronto to Mississauga completely stress-free. The team was punctual, professional, and handled my fragile items with extreme care. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content: "We used Avixzon for our office relocation. Their packing and crating services were top-notch. Everything arrived at the new location in perfect condition and on time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Interior Designer",
    content: "As an interior designer, I often need reliable transport for furniture. Avixzon is my go-to choice. Their white-glove service is exactly what my clients expect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "International Client",
    content: "Shipping my belongings overseas seemed daunting, but Avixzon's air freight team handled all the customs and logistics seamlessly. Great communication throughout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  const swipe = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) =>
      newDirection === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const t = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-3xl mx-auto px-2 sm:px-4">
      {/* Card — sized by its own content, no overflow-hidden parent clipping */}
      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg text-center relative overflow-hidden">
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Avatar */}
                <div className="mb-5 relative inline-block">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1.5 shadow-md">
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-5 italic text-foreground/90 max-w-xl mx-auto">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Attribution */}
                <cite className="not-italic">
                  <span className="block font-bold text-base text-primary">{t.name}</span>
                  <span className="text-muted-foreground text-sm">{t.role}</span>
                </cite>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={() => swipe(-1)}
          className="p-3 rounded-full bg-card border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring ${
                i === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => swipe(1)}
          className="p-3 rounded-full bg-card border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
