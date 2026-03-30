"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { socialLinks } from "@/lib/social-links"

// Custom TikTok Icon
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
        <path d="M188.1 76.7c-7.6 0-14.9-1.3-21.9-3.7v88.3c0 37.3-30.3 67.6-67.6 67.6s-67.6-30.3-67.6-67.6 30.3-67.6 67.6-67.6c5.5 0 10.9.6 16.1 1.8v-31.6c-5.3-.7-10.7-1.1-16.1-1.1-49.7 0-90.1 40.4-90.1 90.1s40.4 90.1 90.1 90.1 90.1-40.4 90.1-90.1V79.9c-3.4.8-6.9 1.3-10.1 1.3z"/>
      </svg>
  )
}

// Social Icons
const socialIcons = [
  { name: "Facebook", icon: Facebook, href: socialLinks.facebook },
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
  { name: "YouTube", icon: Youtube, href: socialLinks.youtube },
  { name: "TikTok", icon: TikTokIcon, href: socialLinks.tiktok },
]

export function Footer() {
  const footerLinks = {
    services: [
      { label: "AI & Business Automation", href: "#services" },
      { label: "Custom Software & Web Development", href: "#services" },
      { label: "Digital Marketing & Growth", href: "#services" },
      { label: "Branding & Content Creation", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    support: [
      { label: "Free Consultation", href: "#contact" },
      { label: "WhatsApp Us", href: "https://wa.me/263771370199" },
      { label: "Email Support", href: "mailto:info@astrocode.co.zw" },
    ],
  }

  return (
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Astro<span className="text-primary">Code</span>
                </span>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We help businesses grow faster using AI, software, and smart digital solutions.
              </p>

              {/* Social Icons */}
              <div className="flex gap-2">
                {socialIcons.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Support (Replaced Training) */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AstroCode. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for growth.
            </p>
          </div>
        </div>
      </footer>
  )
}