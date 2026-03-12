import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  Globe, 
  Palette, 
  TrendingUp, 
  Code, 
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  GraduationCap
} from "lucide-react"

const services = {
  "data-science-ai": {
    icon: Brain,
    title: "Data Science, Machine Learning & AI",
    description: "We turn data into powerful business intelligence. Our team of data scientists and AI engineers develop cutting-edge solutions that transform raw data into actionable insights.",
    heroDescription: "Harness the power of artificial intelligence and machine learning to drive innovation and make data-driven decisions.",
    image: "/images/services/data-science-ai.jpg",
    features: [
      "Predictive Analytics",
      "AI Automation",
      "Machine Learning Models",
      "Data Visualization & Dashboards",
      "Business Intelligence Solutions",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning Solutions"
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Improve decision-making accuracy",
      "Automate repetitive tasks",
      "Gain competitive advantage",
      "Unlock hidden patterns in your data",
      "Scale operations efficiently"
    ],
    process: [
      { step: "Discovery", description: "We analyze your data landscape and identify opportunities" },
      { step: "Strategy", description: "Develop a tailored AI/ML roadmap for your business" },
      { step: "Development", description: "Build and train custom models using your data" },
      { step: "Deployment", description: "Integrate solutions seamlessly into your workflow" },
      { step: "Optimization", description: "Continuously improve model performance" }
    ],
    training: {
      title: "Data Science & AI Training",
      duration: "16 Weeks",
      topics: ["Python Programming", "Statistics & Probability", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "Data Visualization", "Real-world Projects"]
    }
  },
  "digital-transformation": {
    icon: Globe,
    title: "Technology & Digital Transformation",
    description: "Modernize your business with future-ready technology. We help organizations embrace digital innovation to improve efficiency and competitiveness.",
    heroDescription: "Transform your business operations with cutting-edge technology solutions that drive growth and efficiency.",
    image: "/images/services/digital-transformation.jpg",
    features: [
      "IT Consulting",
      "Cloud Integration",
      "System Modernization",
      "Process Automation",
      "Digital Strategy Development",
      "Legacy System Migration",
      "API Development & Integration",
      "DevOps Implementation"
    ],
    benefits: [
      "Streamline business processes",
      "Reduce time-to-market",
      "Improve customer experience",
      "Increase operational efficiency",
      "Enable remote work capabilities",
      "Future-proof your technology stack"
    ],
    process: [
      { step: "Assessment", description: "Evaluate current systems and identify gaps" },
      { step: "Planning", description: "Create a comprehensive transformation roadmap" },
      { step: "Implementation", description: "Execute migration and modernization" },
      { step: "Training", description: "Ensure team adoption and competency" },
      { step: "Support", description: "Provide ongoing maintenance and optimization" }
    ],
    training: {
      title: "Digital Transformation & IT Training",
      duration: "10 Weeks",
      topics: ["Cloud Platforms (AWS/Azure)", "DevOps Practices", "IT Infrastructure", "Cybersecurity Basics", "System Administration", "Project Management"]
    }
  },
  "design": {
    icon: Palette,
    title: "Graphics, UI/UX & Creative Design",
    description: "Design that converts and builds brand authority. Our creative team crafts visually stunning experiences that engage users and strengthen your brand.",
    heroDescription: "Create memorable visual experiences that captivate your audience and drive conversions.",
    image: "/images/services/design.jpg",
    features: [
      "Brand Identity Design",
      "Logo & Corporate Branding",
      "UI/UX Design",
      "Social Media Graphics",
      "Marketing Materials",
      "Web & Mobile App Design",
      "Motion Graphics",
      "Print Design"
    ],
    benefits: [
      "Strengthen brand recognition",
      "Improve user engagement",
      "Increase conversion rates",
      "Stand out from competitors",
      "Build customer trust",
      "Create consistent brand experience"
    ],
    process: [
      { step: "Research", description: "Understand your brand, audience, and goals" },
      { step: "Concept", description: "Develop creative concepts and mood boards" },
      { step: "Design", description: "Create high-fidelity designs and prototypes" },
      { step: "Feedback", description: "Iterate based on your input" },
      { step: "Delivery", description: "Provide production-ready assets" }
    ],
    training: {
      title: "Graphics & UI/UX Design Training",
      duration: "8 Weeks",
      topics: ["Design Principles & Color Theory", "Adobe Photoshop & Illustrator", "Figma & Prototyping", "Brand Identity Design", "UI/UX Best Practices", "Portfolio Development"]
    }
  },
  "digital-marketing": {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "We help you dominate the digital space. Our marketing experts create data-driven strategies that attract, engage, and convert your target audience.",
    heroDescription: "Accelerate your growth with strategic digital marketing that delivers measurable results.",
    image: "/images/services/digital-marketing.jpg",
    features: [
      "Social Media Marketing",
      "SEO Optimization",
      "Paid Advertising Campaigns",
      "Content Strategy",
      "Lead Generation Systems",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Rate Optimization"
    ],
    benefits: [
      "Increase brand visibility",
      "Generate qualified leads",
      "Improve ROI on ad spend",
      "Build loyal customer base",
      "Track and measure success",
      "Stay ahead of competitors"
    ],
    process: [
      { step: "Audit", description: "Analyze current marketing performance" },
      { step: "Strategy", description: "Develop targeted marketing plan" },
      { step: "Execution", description: "Launch campaigns across channels" },
      { step: "Analysis", description: "Monitor and measure results" },
      { step: "Optimization", description: "Continuously improve performance" }
    ],
    training: {
      title: "Digital Marketing Training",
      duration: "6 Weeks",
      topics: ["SEO & Content Marketing", "Social Media Strategy", "Google Ads & PPC", "Email Marketing Automation", "Analytics & Reporting", "Personal Branding"]
    }
  },
  "software-development": {
    icon: Code,
    title: "Custom Web & Enterprise Software",
    description: "Scalable solutions tailored to your business. Our development team builds robust, secure, and high-performance software that grows with your organization.",
    heroDescription: "Build powerful software solutions that streamline operations and drive business growth.",
    image: "/images/services/software-development.jpg",
    features: [
      "Business Websites",
      "E-Commerce Platforms",
      "Web Applications",
      "Enterprise Systems",
      "Custom Software Development",
      "Mobile Applications",
      "API Development",
      "Database Design"
    ],
    benefits: [
      "Automate business processes",
      "Improve operational efficiency",
      "Scale with your business",
      "Secure sensitive data",
      "Enhance customer experience",
      "Gain competitive edge"
    ],
    process: [
      { step: "Requirements", description: "Define project scope and specifications" },
      { step: "Architecture", description: "Design system architecture and technology stack" },
      { step: "Development", description: "Build using agile methodology" },
      { step: "Testing", description: "Comprehensive QA and security testing" },
      { step: "Launch", description: "Deploy and provide ongoing support" }
    ],
    training: {
      title: "Application Development Training",
      duration: "12 Weeks",
      topics: ["HTML, CSS & JavaScript", "React & Next.js Framework", "Node.js & Express Backend", "Database Design & SQL", "REST APIs & GraphQL", "Deployment & DevOps"]
    }
  }
}

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/training">
                <Button size="lg" variant="outline" className="gap-2">
                  <GraduationCap className="w-4 h-4" /> Learn This Skill
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                What We Offer
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Benefits for Your Business
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <Card key={step.step} className="relative bg-card/50 border-border">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="overflow-hidden bg-primary/5 border-primary/20">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src="/images/services/training.jpg"
                  alt="Training Program"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm font-medium">Training Available</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {service.training.title}
                </h3>
                <p className="text-primary font-medium mb-4">{service.training.duration} Program</p>
                <p className="text-muted-foreground mb-6">
                  Want to learn these skills yourself? Join our comprehensive training program taught by industry professionals.
                </p>
                <ul className="space-y-2 mb-6">
                  {service.training.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link href="/training">
                  <Button className="gap-2">
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how we can help transform your business with {service.title.toLowerCase()}.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="gap-2">
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
