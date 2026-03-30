"use client"

import {ArrowRight, Lightbulb, MessageCircle, Rocket} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import Link from "next/link"

const steps = [
    {
        icon: MessageCircle,
        title: "Free Consultation",
        description:
            "We start with a quick chat to understand your business, your goals, and the challenges you're facing.",
    },
    {
        icon: Lightbulb,
        title: "Strategy & Build",
        description:
            "We design the right solution for your business and build systems that solve your problems and drive growth.",
    },
    {
        icon: Rocket,
        title: "Launch & Growth",
        description:
            "We launch your solution and help you scale, attract more clients, and improve your business performance.",
    },
]

export function Steps() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">

            {/* Brighter Background Glow */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"/>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
                        How It Works
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Simple Process. <span className="text-primary">Powerful Results.</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        We make it easy for you to grow your business with technology — no complexity, no stress.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {steps.map((step, index) => (
                        <Card
                            key={step.title}
                            className="
              group relative overflow-hidden rounded-2xl border border-border
              bg-background/80 backdrop-blur

              shadow-md hover:shadow-2xl

              transition-all duration-500 ease-out

              hover:-translate-y-3
              hover:scale-[1.04]
              active:scale-[0.98]

              before:absolute before:inset-0 before:rounded-2xl
              before:bg-primary/0 before:opacity-0
              before:transition-all before:duration-500

              hover:before:bg-primary/10 hover:before:opacity-100
              "
                        >

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none
              opacity-0 group-hover:opacity-100
              transition duration-500
              shadow-[0_0_45px_rgba(59,130,246,0.3)]"/>

                            <CardContent className="p-8 text-center relative z-10">

                                {/* Step Badge */}
                                <div className="
                inline-flex items-center justify-center
                w-10 h-10 rounded-full
                bg-primary/10 text-primary font-bold text-sm
                border border-primary/20 mb-4
                transition group-hover:scale-110
                ">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="
                w-14 h-14 mx-auto rounded-xl
                bg-gradient-to-tr from-primary to-primary/80
                flex items-center justify-center mb-4 shadow-lg

                transition-all duration-500
                group-hover:scale-110 group-hover:rotate-3
                ">
                                    <step.icon className="w-7 h-7 text-white"/>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>

                            </CardContent>
                        </Card>
                    ))}

                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <p className="text-muted-foreground mb-4">
                        Ready to grow your business with the right technology?
                    </p>

                    <Link
                        href="https://wa.me/263771370199?text=Hi%20I%20want%20to%20grow%20my%20business%20using%20your%20services"
                        target="_blank">
                        <Button size="lg" className="px-8 shadow-lg hover:shadow-xl transition-all">
                            Get Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}