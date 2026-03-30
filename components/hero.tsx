"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

// Stats data
const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 80, suffix: "+", label: "Businesses Served" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Technology Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            </div>

            {/* Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">
              🇿🇼 Helping Zimbabwean Businesses Grow with Technology
            </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                        We Build Smart Technology That Helps Your Business Grow Faster
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                        From AI-powered automation to custom software and digital systems, we help you attract more customers, streamline operations, and increase revenue.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        <Link href="https://wa.me/263771370199?text=Hi%20I%20am%20interested%20in%20growing%20my%20business%20using%20your%20services.%20Can%20we%20talk?">
                            <Button size="lg" className="h-14 px-8 text-lg">
                                Get Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>

                        <Link href="#services">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                View Solutions
                            </Button>
                        </Link>
                    </div>

                    {/* Micro Trust */}
                    <p className="text-xs text-muted-foreground mb-10">
                        No commitment • Free consultation • Quick response
                    </p>

                    {/* Trust Line */}
                    <p className="text-sm text-muted-foreground mb-12">
                        Trusted by businesses across Zimbabwe to build systems that drive growth.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center group">
                                <div className="text-3xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    <noscript>{stat.value}{stat.suffix}</noscript>
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}