import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  Palette, 
  TrendingUp, 
  Code, 
  Globe,
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Target
} from "lucide-react"

const trainingPrograms = [
  {
    id: "application-development",
    icon: Code,
    title: "Application Development",
    description: "Master full-stack web and mobile development with modern frameworks and industry best practices. Build real-world applications from scratch.",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    image: "/images/training/app-development.jpg",
    modules: [
      "HTML, CSS & JavaScript Fundamentals",
      "React & Next.js Framework",
      "Node.js & Express Backend",
      "Database Design & Management (SQL & NoSQL)",
      "REST APIs & GraphQL",
      "Mobile Development with React Native",
      "Version Control with Git & GitHub",
      "Deployment & DevOps Basics",
      "Authentication & Security",
      "Real-world Capstone Project"
    ],
    outcomes: [
      "Build full-stack web applications from scratch",
      "Create mobile apps for iOS & Android",
      "Design and implement scalable databases",
      "Deploy applications to cloud platforms",
      "Work professionally in development teams"
    ]
  },
  {
    id: "graphics-design",
    icon: Palette,
    title: "Graphics & UI/UX Design",
    description: "Learn professional design tools and create stunning visual experiences that captivate users and build strong brand identities.",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    image: "/images/training/design.jpg",
    modules: [
      "Design Principles & Color Theory",
      "Typography & Layout Design",
      "Adobe Photoshop Mastery",
      "Adobe Illustrator for Vector Graphics",
      "Figma for UI/UX Design",
      "Wireframing & Prototyping",
      "Brand Identity Design",
      "Social Media Graphics",
      "Motion Graphics & Animation Basics",
      "Portfolio Development"
    ],
    outcomes: [
      "Create professional brand identities",
      "Design intuitive user interfaces",
      "Build interactive prototypes",
      "Master industry-standard design tools",
      "Develop a compelling portfolio"
    ]
  },
  {
    id: "data-science",
    icon: Brain,
    title: "Data Science & AI",
    description: "Dive deep into machine learning, data analysis, and artificial intelligence technologies. Transform data into actionable business insights.",
    duration: "16 Weeks",
    level: "Intermediate to Advanced",
    image: "/images/training/data-science.jpg",
    modules: [
      "Python Programming Fundamentals",
      "Statistics & Probability for Data Science",
      "Data Manipulation with Pandas & NumPy",
      "Data Visualization with Matplotlib & Seaborn",
      "SQL for Data Analysis",
      "Machine Learning Algorithms",
      "Supervised & Unsupervised Learning",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Real-world AI Projects"
    ],
    outcomes: [
      "Analyze complex datasets effectively",
      "Build and deploy machine learning models",
      "Create AI-powered applications",
      "Work with real-world data problems",
      "Understand and implement deep learning"
    ]
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "Master SEO, social media marketing, content strategy, and growth hacking techniques to drive business growth and engagement.",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    image: "/images/training/digital-marketing.jpg",
    modules: [
      "Digital Marketing Fundamentals",
      "SEO & Keyword Research",
      "Content Marketing Strategy",
      "Social Media Marketing & Management",
      "Google Ads & PPC Campaigns",
      "Facebook & Instagram Advertising",
      "Email Marketing Automation",
      "Analytics & Data-Driven Marketing",
      "Conversion Rate Optimization",
      "Personal Branding & Influencer Marketing"
    ],
    outcomes: [
      "Plan and execute marketing campaigns",
      "Optimize websites for search engines",
      "Manage social media presence effectively",
      "Analyze and improve marketing ROI",
      "Build personal or business brands"
    ]
  },
  {
    id: "digital-transformation",
    icon: Globe,
    title: "Digital Transformation & IT",
    description: "Learn cloud technologies, system administration, IT consulting, and enterprise digital transformation strategies.",
    duration: "10 Weeks",
    level: "Beginner to Advanced",
    image: "/images/training/digital-transformation.jpg",
    modules: [
      "IT Fundamentals & Networking",
      "Cloud Platforms (AWS/Azure/GCP)",
      "Linux System Administration",
      "DevOps Practices & CI/CD",
      "Containerization with Docker",
      "Kubernetes Basics",
      "Cybersecurity Fundamentals",
      "IT Project Management",
      "Enterprise System Integration",
      "Digital Strategy & Consulting"
    ],
    outcomes: [
      "Manage cloud infrastructure",
      "Implement DevOps practices",
      "Secure enterprise systems",
      "Lead digital transformation projects",
      "Provide IT consulting services"
    ]
  }
]

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience"
  },
  {
    icon: BookOpen,
    title: "Hands-On Projects",
    description: "Apply your skills to real projects that you can add to your portfolio"
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive a recognized certificate upon successful completion"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Choose from weekend or evening classes to fit your lifestyle"
  },
  {
    icon: Target,
    title: "Career Support",
    description: "Get job placement assistance and career guidance"
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Access course materials and updates even after completion"
  }
]

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/services/training.jpg"
            alt="Tech Training Programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Education & Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Learn Tech Skills That <span className="text-primary">Matter</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Join our comprehensive training programs and gain the skills you need to succeed in the tech industry. 
              All courses taught by industry professionals with real-world experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#programs">
                <Button size="lg" className="gap-2 h-14 px-8">
                  View Programs <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/#contact">
                <Button size="lg" variant="outline" className="h-14 px-8">
                  Contact Us
                </Button>
              </Link>

              {/* ✅ WhatsApp Button */}
              <Link
                  href="https://wa.me/263771370199?text=Hi%20I%20want%20to%20learn%20with%20AstroCode"
                  target="_blank"
              >
                <Button size="lg" className="gap-2 h-14 px-8">
                  Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Learn With AstroCode?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide everything you need to succeed in your tech journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-6 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Training Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted programs designed to take you from beginner to professional. 
              Each program includes hands-on projects and industry certification.
            </p>
          </div>

          <div className="space-y-12">
            {trainingPrograms.map((program, index) => (
              <Card 
                key={program.title} 
                id={program.id}
                className="overflow-hidden bg-card/50 border-border hover:border-primary/30 transition-all scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-64 lg:h-auto min-h-[300px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image 
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                        <program.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1 text-sm text-foreground font-semibold bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 text-primary" /> {program.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <CardTitle className="text-2xl md:text-3xl">{program.title}</CardTitle>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {program.level}
                      </span>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-6">
                      {program.description}
                    </CardDescription>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Course Curriculum
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {program.modules.map((module) => (
                          <div key={module} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        What You Will Achieve
                      </h4>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link href="/#contact">
                        <Button className="gap-2">
                          Enroll Now <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>

                      {/* ✅ WhatsApp Quick Enroll */}
                      <Link
                          href={`https://wa.me/263771370199?text=Hi%20I%20want%20to%20enroll%20in%20${encodeURIComponent(program.title)}`}
                          target="_blank"
                      >
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                          WhatsApp Enroll
                        </Button>
                      </Link>
                    </div>


                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Contact us today to learn more about our programs, schedules, and enrollment process. 
              Corporate training packages are also available for businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="gap-2 h-14 px-8">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/#services">
                <Button size="lg" variant="outline" className="h-14 px-8">
                  View Our Services
                </Button>
              </Link>

              {/* ✅ WhatsApp CTA */}
              <Link
                  href="https://wa.me/263771370199?text=Hi%20I%20want%20to%20join%20AstroCode%20training"
                  target="_blank"
              >
                <Button size="lg" className="gap-2 h-14 px-8">
                  Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
