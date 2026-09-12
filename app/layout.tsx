import type { Metadata, Viewport } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import { AppShell } from '@/components/layout/AppShell'
import './globals.scss'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Noxis World — Enter a New Realm',
    template: '%s — Noxis World',
  },
  description:
    'A D&D-themed application template built with Next.js App Router, React 19 and modular SCSS.',
}

export const viewport: Viewport = {
  themeColor: '#0b0a09',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
