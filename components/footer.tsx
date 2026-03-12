import Link from "next/link"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github
} from "lucide-react"
import { socialLinks } from "@/lib/social-links"

const socialIcons = [
  { name: "Facebook", icon: Facebook, href: socialLinks.facebook },
  { name: "Instagram", icon: Instagram, href: socialLinks.instagram },
  { name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
  { name: "Twitter", icon: Twitter, href: socialLinks.twitter },
  { name: "YouTube", icon: Youtube, href: socialLinks.youtube },
  { name: "GitHub", icon: Github, href: socialLinks.github },
]

export function Footer() {
  const footerLinks = {
    services: [
      { label: "AI & Machine Learning", href: "/services/data-science-ai" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Software Development", href: "/services/software-development" },
    ],
    training: [
      { label: "Application Development", href: "/training" },
      { label: "Graphics & UI/UX Design", href: "/training" },
      { label: "Data Science & AI", href: "/training" },
      { label: "Digital Marketing", href: "/training" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
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
              Where Technology Meets Excellence. Building intelligent, scalable digital solutions.
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
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Training</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
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
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
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
            Powered by <span className="text-primary">Innovation</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
