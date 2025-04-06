import type { Metadata } from 'next'
import {  Bodoni_Moda_SC } from 'next/font/google'

import './globals.css'
import Head from 'next/head'

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
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={bodoniModa.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
