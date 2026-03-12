"use client"

import { 
  Brain, 
  Globe, 
  Palette, 
  TrendingUp, 
  Code, 
  ArrowRight,
  GraduationCap,
  BookOpen,
  Clock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Brain,
    title: "Data Science, Machine Learning & AI",
    description: "We turn data into powerful business intelligence.",
    features: [
      "Predictive Analytics",
      "AI Automation",
      "Machine Learning Models",
      "Data Visualization & Dashboards",
      "Business Intelligence Solutions"
    ],
    slug: "data-science-ai",
    image: "/images/services/data-science-ai.jpg"
  },
  {
    icon: Globe,
    title: "Technology & Digital Transformation",
    description: "Modernize your business with future-ready technology.",
    features: [
      "IT Consulting",
      "Cloud Integration",
      "System Modernization",
      "Process Automation",
      "Digital Strategy Development"
    ],
    slug: "digital-transformation",
    image: "/images/services/digital-transformation.jpg"
  },
  {
    icon: Palette,
    title: "Graphics, UI/UX & Creative Design",
    description: "Design that converts and builds brand authority.",
    features: [
      "Brand Identity Design",
      "Logo & Corporate Branding",
      "UI/UX Design",
      "Social Media Graphics",
      "Marketing Materials"
    ],
    slug: "design",
    image: "/images/services/design.jpg"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "We help you dominate the digital space.",
    features: [
      "Social Media Marketing",
      "SEO Optimization",
      "Paid Advertising Campaigns",
      "Content Strategy",
      "Lead Generation Systems"
    ],
    slug: "digital-marketing",
    image: "/images/services/digital-marketing.jpg"
  },
  {
    icon: Code,
    title: "Custom Web & Enterprise Software",
    description: "Scalable solutions tailored to your business.",
    features: [
      "Business Websites",
      "E-Commerce Platforms",
      "Web Applications",
      "Enterprise Systems",
      "Custom Software Development"
    ],
    slug: "software-development",
    image: "/images/services/software-development.jpg"
  }
]

const trainingPrograms = [
  {
    icon: Code,
    title: "Application Development",
    description: "Master full-stack web and mobile development with modern frameworks.",
    topics: ["React & Next.js", "Node.js & APIs", "Mobile Development", "Database Design"],
    duration: "12 Weeks",
    slug: "application-development",
    image: "/images/training/app-development.jpg"
  },
  {
    icon: Palette,
    title: "Graphics & UI/UX Design",
    description: "Learn professional design tools and create stunning visual experiences.",
    topics: ["Adobe Creative Suite", "Figma & Prototyping", "Brand Identity", "Motion Graphics"],
    duration: "8 Weeks",
    slug: "graphics-design",
    image: "/images/training/design.jpg"
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    description: "Dive deep into machine learning, data analysis, and AI technologies.",
    topics: ["Python & Statistics", "Machine Learning", "Deep Learning", "Data Visualization"],
    duration: "16 Weeks",
    slug: "data-science",
    image: "/images/training/data-science.jpg"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Master SEO, social media, content strategy, and growth techniques.",
    topics: ["SEO & SEM", "Social Media Marketing", "Content Creation", "Analytics"],
    duration: "6 Weeks",
    slug: "digital-marketing",
    image: "/images/training/digital-marketing.jpg"
  },
  {
    icon: Globe,
    title: "Digital Transformation & IT",
    description: "Learn cloud technologies, system administration, and IT consulting.",
    topics: ["Cloud Platforms (AWS/Azure)", "DevOps Practices", "IT Infrastructure", "Cybersecurity Basics"],
    duration: "10 Weeks",
    slug: "digital-transformation",
    image: "/images/training/digital-transformation.jpg"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Tech Services & Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technology solutions to transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader className="pt-5 pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    Learn more 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Section */}
        <div className="relative">
          {/* Training Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Education & Training</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Learn With Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We don&apos;t just build solutions—we empower the next generation of tech professionals. 
              All our services come with structured training programs.
            </p>
          </div>

          {/* Training Hero Image */}
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-12 group">
            <Image 
              src="/images/services/training.jpg" 
              alt="Tech Training Programs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Transform Your <span className="text-primary">Career</span>
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Join our comprehensive training programs and gain in-demand skills taught by industry professionals with real-world experience.
                </p>
                <Link href="/training">
                  <Button size="lg" className="gap-2 h-14 px-8">
                    Explore All Programs <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Training Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {trainingPrograms.map((program) => (
              <Card 
                key={program.title} 
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
              >
                {/* Program Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <program.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {program.duration}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm line-clamp-2">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 mb-4">
                    {program.topics.slice(0, 3).map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="w-3 h-3 text-primary shrink-0" />
                        <span className="truncate">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/training#${program.slug}`}>
                    <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      Enroll Now 
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
