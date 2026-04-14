"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80",
    alt: "Premium rental car on an open road",
    eyebrow: "Car Rentals",
    title: "Your perfect ride, ready when you are.",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern moving truck serving the Greater Toronto Area",
    eyebrow: "Transportation",
    title: "Dedicated fleet. Reliable logistics.",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80",
    alt: "Professional movers carefully handling boxes and furniture",
    eyebrow: "Moving Services",
    title: "Every move treated with white-glove care.",
  },
  {
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=2000&q=80",
    alt: "Professional packing with quality materials",
    eyebrow: "Packing & Crating",
    title: "Packed securely. Delivered safely.",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
    alt: "Cargo aircraft ready for international freight",
    eyebrow: "Air Freight",
    title: "Fast global shipping for urgent cargo.",
  },
  {
    src: "https://images.unsplash.com/photo-1519121785383-3229633bb50e?auto=format&fit=crop&w=2000&q=80",
    alt: "Container ship at sea for ocean freight",
    eyebrow: "Ocean Freight",
    title: "Cost-effective shipping across the seas.",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80",
    alt: "Customs documents and brokerage paperwork",
    eyebrow: "Customs Brokerage",
    title: "Seamless cross-border documentation.",
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80",
    alt: "Organised secure warehouse storage facility",
    eyebrow: "Warehousing",
    title: "Climate-controlled storage you can trust.",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80",
    alt: "Professional cleaning team at work",
    eyebrow: "Cleaning Services",
    title: "Move out — spotless. Move in — perfect.",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
    alt: "Skilled manpower team ready to help",
    eyebrow: "Manpower Services",
    title: "Skilled hands for every heavy lift.",
  },
];

const INTERVAL_MS = 5000;

export function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir < 0 ? 80 : -80 }),
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "clamp(340px, 60vh, 700px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Avixzon services gallery"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`cap-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="absolute bottom-0 left-0 right-0 px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14 text-white pointer-events-none"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-2">
            {slides[current].eyebrow}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            {slides[current].title}
          </h3>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white hover:bg-black/55 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white hover:bg-black/55 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide counter */}
      <div className="absolute top-5 right-6 sm:right-10 text-white/60 text-xs font-semibold tabular-nums tracking-wider select-none">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 flex gap-1.5"
        role="tablist"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/50 ${
              i === current ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}: ${slides[i].eyebrow}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <motion.div
            key={`prog-${current}`}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
            className="h-full bg-white/45"
          />
        </div>
      )}
    </section>
  );
}
