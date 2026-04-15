import { Poppins } from 'next/font/google'
import './globals.css'
import ScrollToTop from './ScrollToTop'
import QuoteFormProvider from './QuoteFormProvider'
import FloatingUI from '../components/FloatingUI'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://alkemeins.com/architecture'),
  title: {
    template: '%s | ALKEME Insurance Services',
    default: 'Architecture Insurance | ALKEME Insurance Services',
  },
  description: 'ALKEME Insurance Services provides specialized architecture firm insurance including professional liability (E&O), general liability, cyber coverage, and more for design professionals nationwide.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ALKEME Insurance Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ALKEME Insurance Services — Architecture Firm Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for architecture firms, design professionals, and engineering practices across all 50 states.',
    images: ['https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alkemeins.com/architecture/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        <ScrollToTop />
        <QuoteFormProvider />
        <FloatingUI />
        {children}
      </body>
    </html>
  )
}
