"use client"

import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhyUs() {
  const reasons = [
    {
      title: "Innovation-Driven Approach",
      description: "We stay at the forefront of technology, bringing you the latest innovations and best practices to grow your business."
    },
    {
      title: "Client-Focused Solutions",
      description: "Every solution is tailored to your goals, ensuring maximum ROI and measurable business impact."
    },
    {
      title: "Scalable & Secure Systems",
      description: "Our architectures grow with you while maintaining enterprise-grade security and reliability."
    },
    {
      title: "Results-Oriented Strategy",
      description: "We measure success by your success—more leads, more conversions, and more revenue."
    },
    {
      title: "End-to-End Digital Solutions",
      description: "From strategy to deployment and beyond, we provide full support to ensure your digital growth."
    },
    {
      title: "Dedicated Expert Team",
      description: "Decades of combined experience across web, mobile, AI, and digital marketing to power your success."
    }
  ]

  return (
      <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Visual */}
                <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

                  {/* Code-like decoration */}
                  <div className="absolute inset-8 flex flex-col gap-4 font-mono text-sm">
                    <div className="text-muted-foreground">
                      <span className="text-primary">const</span> <span className="text-foreground">astrocode</span> = {"{"}
                    </div>
                    <div className="pl-6 text-muted-foreground">
                      <span className="text-primary">mission</span>: <span className="text-emerald-400">&quot;Grow your business&quot;</span>,
                    </div>
                    <div className="pl-6 text-muted-foreground">
                      <span className="text-primary">approach</span>: <span className="text-emerald-400">&quot;Innovation-first&quot;</span>,
                    </div>
                    <div className="pl-6 text-muted-foreground">
                      <span className="text-primary">commitment</span>: <span className="text-emerald-400">&quot;100% client success&quot;</span>,
                    </div>
                    <div className="pl-6 text-muted-foreground">
                      <span className="text-primary">delivery</span>: <span className="text-emerald-400">&quot;Results, always&quot;</span>
                    </div>
                    <div className="text-muted-foreground">{"}"}</div>
                    <div className="mt-4 text-muted-foreground">
                      <span className="text-primary">export default</span> <span className="text-foreground">astrocode</span>;
                    </div>
                  </div>

                  {/* Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-xl shadow-primary/20">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Why Choose AstroCode</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Technology that <span className="text-primary">drives real results</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We combine technical excellence with business strategy to create solutions
                that deliver measurable growth and more paying customers.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {reasons.map((reason) => (
                    <div key={reason.title} className="flex gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{reason.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <Button size="lg" className="gap-2 h-14 px-8">
                    Start Your Project <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a
                    href="https://wa.me/263771370199?text=Hi%20I%20want%20to%20grow%20my%20business%20with%20AstroCode"
                    target="_blank"
                    className="inline-block"
                >
                  <Button size="lg" variant="outline" className="h-14 px-8">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}