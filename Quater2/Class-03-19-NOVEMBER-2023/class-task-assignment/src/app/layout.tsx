import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.css';
// import './globals.css'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}