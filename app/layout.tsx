import type { Metadata } from 'next'
import {Footer, Navbar} from '@/components'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Car E Commerce',
  description: 'Find your card and get it',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
          <Navbar/>
          {children}
          <Footer />
        </body>
    </html>
  )
}
