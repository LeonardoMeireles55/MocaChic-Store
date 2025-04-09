import type { Metadata, Viewport } from "next"
import { Bodoni_Moda_SC, Montserrat } from "next/font/google"
import type React from "react"

import { ThemeProvider } from "@/components/ui/basic/theme-provider"
import { MetaPixel } from "@/components/seo/meta-pixel"
import { GoogleAnalytics } from "@/components/seo/google-analytics"
import { SimpleChatbot } from "@/components/ui/actions/simple-chatbot"
import { JsonLd } from "@/components/seo/json-ld"
import "./globals.css"
import { Suspense } from "react"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#78350f",
}

export const metadata: Metadata = {
  title: "Moça Chic Fortaleza | Moda Feminina Elegante e Sofisticada",
  description:
    "Loja de roupas femininas em Fortaleza com peças exclusivas, elegantes e sofisticadas. Entrega para todo o Brasil. Atendimento personalizado via WhatsApp.",
  generator: "Next.js",
  applicationName: "Moça Chic Fortaleza",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Loja de roupas femininas",
    "Moda feminina Fortaleza",
    "Roupas femininas em Fortaleza",
    "Vestidos elegantes",
    "Moda feminina sofisticada",
    "Roupas femininas exclusivas",
    "Moda feminina Ceará",
    "Comprar roupas femininas online",
  ],
  authors: [{ name: "Leonardo Nogueira Meireles", url: "https://mocachicfortaleza.com.br" }],
  creator: "Leonardo Nogueira Meireles",
  publisher: "Moça Chic Fortaleza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mocachicfortaleza.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moça Chic Fortaleza | Moda Feminina Elegante e Sofisticada",
    description:
      "Loja de roupas femininas em Fortaleza com peças exclusivas, elegantes e sofisticadas. Entrega para todo o Brasil.",
    url: "https://mocachicfortaleza.com.br",
    siteName: "Moça Chic Fortaleza",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moça Chic Fortaleza - Moda Feminina",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moça Chic Fortaleza | Moda Feminina Elegante e Sofisticada",
    description:
      "Loja de roupas femininas em Fortaleza com peças exclusivas, elegantes e sofisticadas. Entrega para todo o Brasil.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "shopping",
}

const bodoniModa = Bodoni_Moda_SC({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-bodoni",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const whatsappNumber = "5592994128570"
  const storeName = "Moça Chic Fortaleza"
  const storeAddress = "Avenida Jurunas, AF-25, Cidade Nova, Manaus"
  const storeEmail = "mocachicfortaleza@gmail.com"
  const storePhone = "(92) 99412-8570"

  return (
    <html lang="pt-BR" className={`${bodoniModa.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="dPmicEnxCz0l0WnoVE1W8Ye0y63x5fiqE_cNcAo5icA" />
        <link rel="canonical" href="https://mocachicfortaleza.com.br" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <JsonLd storeName={storeName} storeAddress={storeAddress} storeEmail={storeEmail} storePhone={storePhone} />
          {children}
        </ThemeProvider>
        <Suspense fallback={null}>
          <MetaPixel />
          <GoogleAnalytics />
        </Suspense>
        <SimpleChatbot whatsappNumber={whatsappNumber} storeName={storeName} />
      </body>
    </html>
  )
}
