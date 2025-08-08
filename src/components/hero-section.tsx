"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll('.char')
      
      // Set initial state
      gsap.set(chars, {
        y: 100,
        opacity: 0
      })

      // Animate characters with stagger
      gsap.fromTo(chars, 
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.03,
          delay: 0.5
        }
      )
    }
  }, [])

  const renderAnimatedText = (text: string) => {
    return text.split(' ').map((word, wordIndex) => (
      <div
        key={wordIndex}
        className="inline-block overflow-hidden"
        style={{ display: 'inline-block' }}
      >
        {word.split('').map((char, charIndex) => (
          <span
            key={`${wordIndex}-${charIndex}`}
            className="char inline-block"
          >
            {char}
          </span>
        ))}
        {wordIndex < text.split(' ').length - 1 && (
          <span className="char inline-block">&nbsp;</span>
        )}
      </div>
    ))
  }

  return (
    <section className="relative min-h-screen flex items-end">
      {/* Interactive Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* This is where you can add interactive background effects like particles, animations, etc. */}
        <div className="absolute inset-0 opacity-30">
          {/* Placeholder for interactive background - add your effects here */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm">
            🚀 YouTube Growth Toolkit
          </Badge>

          {/* Animated Headline */}
          <div className="hero-headline mb-3 mt-12 lg:mt-16">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <div className="mb-1">
                {renderAnimatedText("My Video Was Dead.")}
              </div>
              <div className="text-primary">
                {renderAnimatedText("This Fixed It in 10 Minutes.")}
              </div>
            </h1>
          </div>

          {/* Subhead */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl leading-relaxed">
            I thought the algorithm just buried my upload — but it turns out I was making 3 tiny mistakes. 
            This $20 toolkit helped me fix them fast. Now I use it every time something flops.
          </p>

          {/* Beginner-friendly note */}
          <p className="italic text-muted-foreground text-base sm:text-lg mb-4">
            "Built for beginners. No fluff, no guesswork — just a fast fix that works."
          </p>

          {/* CTA Button */}
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Try it out
          </Button>
        </div>
      </div>
    </section>
  )
} 