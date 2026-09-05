import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'VELORA - Premium Kitchen Storage',
  description: 'The modular kitchen organization system. Intelligent. Premium. Expandable.',
  keywords: ['storage', 'kitchen', 'organization', 'premium', 'design'],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-velora-dark text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
