"use client"

import { Brain, Globe, TrendingUp, Palette, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI & Business Automation",
    description:
        "We design intelligent systems that automate your operations, reduce manual work, and help your business scale faster with less effort.",
    points: ["Process Automation", "AI Integration", "CRM Systems", "Workflow Optimization"],
    cta: "Automate My Business",
    bg: "/images/it.jpg",
  },
  {
    icon: Globe,
    title: "Custom Software & Web Solutions",
    description:
        "From high-converting websites to powerful business systems, we build technology that attracts customers and drives growth.",
    points: ["Websites & Web Apps", "Ecommerce Platforms", "Custom Systems", "Mobile Apps"],
    cta: "Start My Project",
    bg: "/images/automation.jpg",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth & Marketing",
    description:
        "We help you attract the right audience, generate quality leads, and turn traffic into paying customers.",
    points: ["Paid Ads", "SEO", "Lead Generation", "Growth Strategy"],
    cta: "Grow My Business",
    bg: "/images/content.jpg",
  },
  {
    icon: Palette,
    title: "Branding & Content",
    description:
        "Build a strong, professional brand and create content that captures attention and converts your audience into loyal customers.",
    points: ["Brand Identity", "Design", "Content Creation", "Video & Media"],
    cta: "Build My Brand",
    bg: "/images/design.jpg",
  },
]

export function Services() {
  return (
      <section id="services" className="py-24 md:py-32 relative">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
              Our Solutions
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              We Build Technology That Helps Your{" "}
              <span className="text-primary">Business Grow Faster</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-4">
              Whether you're looking to attract more customers, automate operations, or build powerful digital systems — we provide the tools and expertise to make it happen.
            </p>

            <p className="text-sm text-muted-foreground">
              Limited availability — we only take a few clients each month
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (
                <Card
                    key={service.title}
                    className="
                group relative overflow-hidden rounded-2xl border border-border
                bg-background/80 backdrop-blur

                shadow-md hover:shadow-2xl

                transition-all duration-500 ease-out

                hover:-translate-y-2
                hover:scale-[1.03]
                active:scale-[0.98]
              "
                >

                  {/* Background Image */}
                  <div
                      className="
                  absolute inset-0 bg-cover bg-center
                  opacity-10 group-hover:opacity-20
                  transition-all duration-700
                  group-hover:scale-110
                "
                      style={{ backgroundImage: `url(${service.bg})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

                  {/* Glow Effect */}
                  <div
                      className="
                  absolute inset-0 rounded-2xl pointer-events-none
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  shadow-[0_0_40px_rgba(59,130,246,0.25)]
                "
                  />

                  {/* Content */}
                  <CardHeader className="text-center pt-8 relative z-10">

                    <div
                        className="
                    w-14 h-14 mx-auto rounded-xl
                    bg-gradient-to-tr from-primary to-primary/80
                    flex items-center justify-center mb-4 shadow-lg

                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                  "
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <CardTitle className="text-xl text-foreground">
                      {service.title}
                    </CardTitle>

                  </CardHeader>

                  <CardContent className="text-center px-6 pb-8 transition-all duration-500 group-hover:-translate-y-1 relative z-10">

                    <p className="text-muted-foreground mb-5">
                      {service.description}
                    </p>

                    {/* Key Points */}
                    <ul className="mb-6 space-y-2">
                      {service.points.map((point) => (
                          <li key={point} className="text-sm text-muted-foreground">
                            • {point}
                          </li>
                      ))}
                    </ul>

                    <Link
                        href={`https://wa.me/263771370199?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                    >
                      <Button
                          className="
                      w-full bg-gradient-to-r from-primary to-primary/90 text-white
                      transition-all duration-300
                      group-hover:shadow-lg
                    "
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
            ))}

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Not sure what you need? Let’s figure it out together.
            </p>

            <Link href="https://wa.me/263771370199?text=Hi%20I%20need%20help%20with%20my%20business" target="_blank">
              <Button size="lg" className="px-8">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

        </div>
      </section>
  )
}