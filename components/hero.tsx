"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"
import { useEffect, useState } from "react"

// Stats data
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
]

// Animated Counter Component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}{suffix}</span>
}

export function Hero() {
  return (
      <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
          aria-label="Hero Section"
      >
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
              src="/images/hero-bg.jpg"
              alt="Technology Background showing digital innovation"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
              Helping Zimbabwean Businesses Grow Online
            </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              We Don&apos;t Just Build Websites, We Bring You Customers Online
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              We help Zimbabwean businesses grow their online presence, attract more clients, and increase sales using websites, marketing, and automation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="https://wa.me/263771370199?text=Hi%20I%20need%20a%20website%20for%20my%20business">
                <Button size="lg" className="h-14 px-8 text-lg">
                  Get Website Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="#services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                  View Services
                </Button>
              </Link>

              <Link href="/training">
                <Button size="lg" className="h-14 px-8 text-lg">
                  Learn With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust & Urgency */}
            <p className="text-sm text-muted-foreground mb-12">
              Build your business or learn the skills to start your own.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
              {stats.map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      {/* Static fallback for SEO */}
                      <noscript>{stat.value}{stat.suffix}</noscript>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Structured Data for Hero Section */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AstroCode",
                url: "https://www.astrocode.co.zw",
                logo: "https://www.astrocode.co.zw/astrocode_128x128.png",
                sameAs: [
                  "https://www.facebook.com/astrocode",
                  "https://www.instagram.com/astrocode",
                  "https://www.youtube.com/@astrocode",
                  "https://www.tiktok.com/@astrocode"
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Harare",
                  addressCountry: "Zimbabwe"
                }
              })
            }}
        />
      </section>
  )
}