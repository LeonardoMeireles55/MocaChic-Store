import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/button"

interface HeroSectionProps {
  whatsappLink: string
  badge: string
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

export function HeroSection({
  whatsappLink,
  badge,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="bg-[url('/images/simple_logo.png?height=1080&width=1920')] opacity-90 bg-cover bg-center py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/40"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start space-y-6 text-left max-w-2xl">
          <div className="inline-block bg-amber-100/90 px-4 py-1 rounded-full text-amber-800 text-sm font-medium mb-2 animate-fade-in">
            {badge}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          <p className="text-amber-50/90 md:text-xl leading-relaxed max-w-xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base">
                <Phone className="mr-2 h-4 w-4" />
                {primaryButtonText}
              </Button>
            </Link>
            <Link href="#colecao">
              <Button
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300 text-base"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

