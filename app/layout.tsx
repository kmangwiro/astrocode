// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-sans'
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'AstroCode | Web Development & IT Consultancy in Zimbabwe',
  description:
      'AstroCode is a Zimbabwe-based IT consultancy in Harare offering web development, digital marketing, branding, AI solutions, and automation services.',
  metadataBase: new URL('https://www.astrocode.co.zw'), // <-- add this
  keywords: [
    // Core IT & Consultancy
    'IT consultancy Zimbabwe',
    'technology consulting Zimbabwe',
    'IT services Harare',
    'business technology solutions',
    'IT company Zimbabwe',
    'software solutions Harare',
    'IT support Zimbabwe',

    // Development
    'web development Zimbabwe',
    'website development Harare',
    'full stack development Zimbabwe',
    'frontend development Harare',
    'backend development Zimbabwe',
    'mobile app development',
    'ecommerce website development',
    'custom software development',

    // Marketing & Digital
    'digital marketing Zimbabwe',
    'SEO services Harare',
    'search engine optimization Zimbabwe',
    'social media marketing Zimbabwe',
    'online marketing Harare',
    'content marketing Zimbabwe',
    'branding services Zimbabwe',

    // Advanced Tech
    'artificial intelligence Zimbabwe',
    'machine learning solutions',
    'AI automation systems',
    'data analytics Zimbabwe',
    'chatbot development',
    'automation software Zimbabwe',

    // UI / UX / Design
    'UI UX design Zimbabwe',
    'product design Harare',
    'web design Zimbabwe',
    'graphic design services',

    // Business & Commercial Intent
    'tech solutions provider Zimbabwe',
    'IT consulting services for businesses',
    'digital transformation Zimbabwe',
    'technology strategy Zimbabwe',
    'business growth technology solutions',

    // Location-Specific
    'software development Harare',
    'web development Harare',
    'digital marketing Harare',
    'AI solutions Harare',
    'IT services Harare'
  ],
  authors: [{ name: 'AstroCode' }],
  verification: { google: 'JsQ3B16_imB4eTNublhp_48CCCb0pSh0nUjh4xeq5J8' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/astrocode_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/astrocode_16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/astrocode_128x128.png',
  },
  openGraph: {
    title: 'AstroCode | Web Development & IT Consultancy in Zimbabwe',
    description: 'Grow your business with AstroCode — web development, marketing & IT experts in Zimbabwe.',
    url: 'https://www.astrocode.co.zw',
    siteName: 'AstroCode',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AstroCode | IT Consultancy Zimbabwe',
    description: 'Web development, marketing & automation services in Zimbabwe.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0d2818',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Google */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AstroCode",
                url: "https://www.astrocode.co.zw",
                logo: "https://www.astrocode.co.zw/astrocode_128x128.png",
                sameAs: [
                  "https://www.facebook.com/astrocode",
                  "https://www.instagram.com/astrocode",
                  "https://www.youtube.com/@astrocode",
                  "https://www.tiktok.com/@astrocode"
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Harare",
                  addressCountry: "Zimbabwe"
                }
              })
            }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
      {children}
      <Analytics />
      </body>
      </html>
  )
}