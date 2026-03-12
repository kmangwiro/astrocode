"use client"

import { useState } from "react"
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { socialLinks, contactInfo } from "@/lib/social-links"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github
} from "lucide-react"

const socialIcons = [
  { name: "Facebook", icon: Facebook, href: socialLinks.facebook },
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  { name: "Twitter", icon: Twitter, href: socialLinks.twitter },
  { name: "YouTube", icon: Youtube, href: socialLinks.youtube },
  { name: "GitHub", icon: Github, href: socialLinks.github },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`
    },
    {
      icon: Globe,
      label: "Website",
      value: contactInfo.website,
      href: `https://${contactInfo.website}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.address,
      href: null
    }
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your business? Reach out and let&apos;s discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel>First Name</FieldLabel>
                      <Input 
                        placeholder="John" 
                        required 
                        className="bg-background"
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Last Name</FieldLabel>
                      <Input 
                        placeholder="Doe" 
                        required 
                        className="bg-background"
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="bg-background"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Company</FieldLabel>
                    <Input 
                      placeholder="Your Company" 
                      className="bg-background"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={5} 
                      required 
                      className="bg-background resize-none"
                    />
                  </Field>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                        target={item.label === "Website" ? "_blank" : undefined}
                        rel={item.label === "Website" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-sm text-muted-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
