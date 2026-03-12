import Image from "next/image"
import { Rocket, Users, Shield, Target, Zap, Award } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Rocket,
      title: "Innovation-Driven",
      description: "We leverage cutting-edge technologies to deliver solutions that keep you ahead of the curve."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand and meet your unique needs."
    },
    {
      icon: Shield,
      title: "Scalable & Secure",
      description: "Our solutions are built to grow with your business while maintaining the highest security standards."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "We focus on delivering measurable outcomes that drive real business value."
    }
  ]

  const stats = [
    { icon: Zap, value: "50+", label: "Projects" },
    { icon: Users, value: "30+", label: "Clients" },
    { icon: Award, value: "5+", label: "Years" },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              We are a collective of <span className="text-primary">passionate techies</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At AstroCode, we are bound together by our deep tech knowledge, our human-centric 
              mindset, and a passion for using technology and digital solutions to drive business 
              transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              In our collective, there is always room for more people with that delicious 
              combination of technical expertise and infectious energy. We believe in creating 
              solutions that not only work but inspire.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <Image 
                src="/images/about-team.jpg"
                alt="AstroCode Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">AstroCode</h3>
                    <p className="text-sm text-muted-foreground">Innovating the Future Through Technology</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
