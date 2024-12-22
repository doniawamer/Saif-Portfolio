'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Slide {
  type: 'image' | 'video'
  src: string
  title: string
  subtitle: string
}

interface HeroCarouselProps {
  slides: Slide[]
  fullBleed?: boolean
}

export function HeroCarousel({ slides, fullBleed = true }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={cn(
      'relative h-screen w-full overflow-hidden',
      fullBleed ? 'absolute inset-0' : 'max-w-7xl mx-auto'
    )}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
        >
          {slide.type === 'image' ? (
            <img
              src={slide.src}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold tracking-wider mb-4 uppercase">{slide.title}</h1>
            <p className="text-xl tracking-wide uppercase">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white mix-blend-difference"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white mix-blend-difference"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
}

