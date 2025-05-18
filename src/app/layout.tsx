import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black dark:bg-[#0d0c22] dark:text-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
