import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { VT323, Courier_Prime } from 'next/font/google'
import './globals.css'

const vt323 = VT323({
  variable: '--font-vt323',
  weight: '400',
  subsets: ['latin'],
})

const courierPrime = Courier_Prime({
  variable: '--font-courier',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ARCADE_OS // Portfolio Terminal',
  description:
    'A pixel-perfect 8-bit terminal portfolio. Type [npm run dev] to initialize the system.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${vt323.variable} ${courierPrime.variable}`}
    >
      <body className="bg-background font-mono antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
