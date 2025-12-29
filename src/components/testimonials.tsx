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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipe = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="flex justify-center items-center h-[450px] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full px-4"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-2xl text-center mx-auto max-w-3xl relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
               <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1.5 shadow-md">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>

                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic text-foreground/90">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col items-center">
                  <cite className="not-italic font-bold text-lg text-primary">
                    {testimonials[currentIndex].name}
                  </cite>
                  <span className="text-muted-foreground text-sm font-medium">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => swipe(-1)}
          className="p-3 rounded-full bg-background border border-input shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => swipe(1)}
          className="p-3 rounded-full bg-background border border-input shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
