"use client"

import { useState } from "react"
import { Mail, Phone, Globe, MapPin, Send, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { socialLinks, contactInfo } from "@/lib/social-links"

// Custom WhatsApp Icon
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
        <path d="M16 2C8.268 2 2 8.268 2 16c0 3.003.988 5.785 2.643 8.06L2 30l6.106-2.646C10.243 29.012 13.116 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.341 19.259c-.296.832-1.73 1.595-2.382 1.707-.635.112-1.38.159-5.07-1.896-4.25-2.318-6.95-6.05-7.146-6.356-.195-.306-1.602-2.383-1.602-4.547 0-2.164 1.115-3.232 1.512-3.65.396-.419.883-.544 1.175-.544.292 0 .583.004.838.012.271.008.635-.104.993.77.346.857 1.179 2.958 1.28 3.173.104.214.174.46.035.744-.139.285-.249.46-.483.717-.235.258-.49.573-.701.766-.217.192-.444.404-.067.79.378.386 1.684 2.798 3.627 4.523 2.489 2.276 4.202 2.93 4.796 3.25.595.321.945.273 1.292.164.348-.108 1.124-.455 1.282-.893.157-.437.157-.812.11-.894z"/>
      </svg>
  )
}

// Custom TikTok Icon
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
        <path d="M188.1 76.7c-7.6 0-14.9-1.3-21.9-3.7v88.3c0 37.3-30.3 67.6-67.6 67.6s-67.6-30.3-67.6-67.6 30.3-67.6 67.6-67.6c5.5 0 10.9.6 16.1 1.8v-31.6c-5.3-.7-10.7-1.1-16.1-1.1-49.7 0-90.1 40.4-90.1 90.1s40.4 90.1 90.1 90.1 90.1-40.4 90.1-90.1V79.9c-3.4.8-6.9 1.3-10.1 1.3z"/>
      </svg>
  )
}

// Only keep the social icons you want
const socialIcons = [
  { name: "Facebook", icon: Facebook, href: socialLinks.facebook },
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
  { name: "YouTube", icon: Youtube, href: socialLinks.youtube },
  { name: "TikTok", icon: TikTokIcon, href: socialLinks.tiktok },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
    { icon: Globe, label: "Website", value: contactInfo.website, href: `https://${contactInfo.website}` },
    { icon: MapPin, label: "Location", value: contactInfo.address, href: null },
  ]

  return (
      <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Let's Build the Future Together
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to transform your business? Reach out and let's discuss how we can help.
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
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel>First Name</FieldLabel>
                          <Input placeholder="John" required className="bg-background" />
                        </Field>
                        <Field>
                          <FieldLabel>Last Name</FieldLabel>
                          <Input placeholder="Doe" required className="bg-background" />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel>Email</FieldLabel>
                        <Input type="email" placeholder="john@example.com" required className="bg-background" />
                      </Field>
                      <Field>
                        <FieldLabel>Company</FieldLabel>
                        <Input placeholder="Your Company" className="bg-background" />
                      </Field>
                      <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea placeholder="Tell us about your project..." rows={5} required className="bg-background resize-none" />
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
                {contactItems.map(item => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.href ? (
                            <a href={item.href} className="text-foreground hover:text-primary transition-colors font-medium" target={item.label === "Website" ? "_blank" : undefined} rel={item.label === "Website" ? "noopener noreferrer" : undefined}>
                              {item.value}
                            </a>
                        ) : (
                            <div className="text-foreground font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-12">
                <a href="https://wa.me/263771370199?text=Hi%20I%20want%20to%20grow%20my%20business%20with%20AstroCode" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                  <Button size="lg" variant="outline" className="gap-2 h-14 w-full flex justify-center items-center">
                    <WhatsappIcon className="w-5 h-5 text-green-500" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm text-muted-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialIcons.map(social => (
                      <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" aria-label={social.name}>
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