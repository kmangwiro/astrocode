"use client"

import { Brain, Globe, TrendingUp, Palette, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    href: "/services/web-development",
    description: "Professional, high-converting websites that attract customers and grow your business online.",
    features: [
      "Custom Business Websites",
      "Mobile-Responsive & SEO-Ready",
      "Free Domain",
      "Fast Delivery",
      "Conversion Optimized"
    ],
    price: "Starting from $60",
    cta: "Get Your Website",
    stats: "50+ websites delivered"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Increase leads, traffic, and sales with targeted marketing strategies.",
    features: [
      "Social Media Management",
      "Facebook & Google Ads",
      "Content Creation",
      "Lead Generation",
      "Growth Strategy"
    ],
    price: "From $50/month",
    cta: "Start Growing",
    stats: "30+ businesses boosted"
  },
  {
    icon: Brain,
    title: "IT Consulting & Automation",
    href: "/services/it-consulting",
    description: "Smart IT consulting and automation solutions to scale your business.",
    features: [
      "WhatsApp Chatbots",
      "CRM Systems",
      "Automation Tools",
      "AI Integration",
      "Process Optimization"
    ],
    price: "From $50 per consultation", // ✅ flexible
    cta: "Consult Now",
    stats: "20+ businesses assisted"
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    href: "/services/branding-design",
    description: "Affordable, professional branding services for small businesses and startups.",
    features: [
      "Logo Design ($20+)",
      "Business Cards ($15+)",
      "Flyers & Posters ($10+)",
      "Social Media Posts ($10+)",
      "Marketing Materials ($25+)"
    ],
    price: "Starting from $10", // base for smallest product
    cta: "Get Designs",
    stats: "100+ designs created"
  }
]

export function Services() {
  return (
      <section id="services" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
              IT Consultancy & Design Services
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Solutions That Grow Your <span className="text-primary">Business</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-4">
              AstroCode provides expert web development, IT consulting, digital marketing, and branding services for startups and small businesses.
            </p>

            <p className="text-sm text-muted-foreground">
              ⚡ Limited slots available this week — act fast!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
                <Card
                    key={service.title}
                    className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader className="pt-6 pb-3 text-center">

                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary flex items-center justify-center mb-4 shadow-md">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title → clickable for SEO */}
                    <CardTitle className="text-xl text-foreground">
                      <Link href={service.href} className="hover:text-primary transition">
                        {service.title}
                      </Link>
                    </CardTitle>

                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>

                    <p className="text-xs text-primary mt-2 font-medium">
                      {service.stats}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-primary font-bold text-lg mb-2 text-center">
                      {service.price}
                    </p>

                    <p className="text-xs text-muted-foreground text-center mb-4">
                      Affordable pricing for beginners & small businesses
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                        href={`https://wa.me/263771370199?text=Hi%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}