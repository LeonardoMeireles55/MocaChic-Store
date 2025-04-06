import type { Metadata } from 'next'
import { Bodoni_Moda_SC, Montserrat } from 'next/font/google'
import type React from 'react'

import { ThemeProvider } from '@/components/theme-provider'
import Head from 'next/head'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moça Chic Fortaleza',
  description: 'Loja de roupas femininas em Fortaleza, Ceará',
  generator: 'Next.js',
  applicationName: 'Moça Chic Fortaleza',
  referrer: 'origin-when-cross-origin',
  keywords: ['Loja de roupas femininas', 'Moda feminina', 'Roupas femininas em Fortaleza'],
  authors: [{ name: 'Leonardo Nogueira Meireles' }],
  creator: 'Leonardo Nogueira Meireles',
  publisher: 'Leonardo Nogueira Meireles'
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
  return (
    <html
      lang='pt-BR'
      className={`${bodoniModa.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='font-sans'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
