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
  title: 'AstroCode | Innovating the Future Through Technology',
  description: 'AstroCode builds intelligent, scalable, and innovative digital solutions that transform businesses. Services include AI/ML, Digital Transformation, UI/UX Design, Digital Marketing, and Custom Software Development.',
  keywords: ['AI', 'Machine Learning', 'Web Development', 'Digital Marketing', 'UI/UX Design', 'Software Development', 'Technology Solutions'],
  authors: [{ name: 'AstroCode' }],
  openGraph: {
    title: 'AstroCode | Technology & Digital Solutions',
    description: 'Transform your business with intelligent, scalable digital solutions.',
    type: 'website',
  },
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
