import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingIndicator from '@/components/LoadingIndicator'
import RoutePrefetcher from '@/components/RoutePrefetcher'

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Muhamad Arfa Alghiffari',
  description: 'Portfolio of Muhamad Arfa Alghiffari',
  verification: {
    google: 'biIcBHI_vrSkVt38Uvtc2FAKMj5T4CyrdeE2hPyCCAE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${geistSans.className} ${geistSans.variable} ${geistMono.className} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <LoadingIndicator />
        <RoutePrefetcher />
        <div className='pt-16'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}