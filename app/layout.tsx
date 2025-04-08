import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda_SC, Montserrat } from 'next/font/google'
import type React from 'react'

import { ThemeProvider } from '@/components/theme-provider'
import { MetaPixel } from '@/components/meta-pixel'
import { GoogleAnalytics } from '@/components/google-analytics'
import { SimpleChatbot } from '@/components/simple-chatbot'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Moça Chic Fortaleza',
  description: 'Loja de roupas femininas em Fortaleza, Ceará',
  generator: 'Next.js',
  applicationName: 'Moça Chic Fortaleza',
  referrer: 'origin-when-cross-origin',
  keywords: ['Loja de roupas femininas', 'Moda feminina', 'Roupas femininas em Fortaleza'],
  authors: [{ name: 'Leonardo Nogueira Meireles' }],
  creator: 'Leonardo Nogueira Meireles',
  publisher: 'Leonardo Nogueira Meireles',
  icons: {
    icon: '/favicon.ico',
  },
}

const bodoniModa = Bodoni_Moda_SC({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
  variable: '--font-bodoni',
  display: 'swap'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const whatsappNumber = '5592994128570'
  const storeName = 'Moça Chic Fortaleza'

  return (
    <html
      lang='pt-BR'
      className={`${bodoniModa.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className='font-sans'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <MetaPixel />
        <GoogleAnalytics />
        <SimpleChatbot whatsappNumber={whatsappNumber} storeName={storeName} />
      </body>
    </html>
  )
}
