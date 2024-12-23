"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Slide {
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  fullBleed?: boolean;
}

export function HeroCarousel({ slides, fullBleed = true }: HeroCarouselProps) {
  // Add a mounting state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only start the interval after component is mounted
  useEffect(() => {
    if (!isMounted) return;

    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [isMounted]);

  // Don't render anything until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden",
        fullBleed ? "absolute inset-0" : "max-w-7xl mx-auto"
      )}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt={slide.title}
              fill // Replace layout="fill" with fill
              className="object-cover" // Move objectFit to className
              priority={index === 0} // Add priority for first image
            />
          ) : (
            <video
              key={`${slide.src}-${index === currentSlide}`}
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-white">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold tracking-wider mb-4 uppercase">
              {slide.title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl tracking-wide uppercase">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 p-2 text-white mix-blend-difference"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 p-2 text-white mix-blend-difference"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}
