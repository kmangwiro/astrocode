import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-sans'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'AstroCode | Leading IT Consultancy & Digital Solutions Company',

  description:
      'AstroCode is a leading IT consultancy specializing in web development, digital marketing, AI solutions, and custom software development. We help businesses transform through innovative and scalable technology solutions.',

  keywords: [
    // Core Services
    'IT consultancy',
    'IT consulting services',
    'technology consulting',
    'digital transformation',
    'custom software development',

    // Development
    'web development',
    'website development',
    'full stack development',
    'frontend development',
    'backend development',

    // Marketing
    'digital marketing',
    'SEO services',
    'search engine optimization',
    'social media marketing',
    'online marketing',

    // Advanced Tech
    'artificial intelligence',
    'machine learning',
    'AI solutions',
    'automation systems',

    // Branding & UX
    'UI UX design',
    'product design',
    'web design',

    // Business intent keywords
    'IT company',
    'software company',
    'tech solutions provider',

    // Location (VERY IMPORTANT for ranking)
    'IT consultancy Zimbabwe',
    'web development Zimbabwe',
    'digital marketing Zimbabwe',
    'software development Harare'
  ],
  authors: [{ name: 'AstroCode' }],
  verification: {
    google: "JsQ3B16_imB4eTNublhp_48CCCb0pSh0nUjh4xeq5J8",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/astrocode_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/astrocode_16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/astrocode_128x128.png',
  },

  openGraph: {
    title: 'AstroCode | IT Consultancy & Digital Transformation Experts',
    description:
        'Transform your business with AstroCode — experts in IT consulting, web development, AI, and digital marketing solutions.',
    type: 'website',
  },
};

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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
