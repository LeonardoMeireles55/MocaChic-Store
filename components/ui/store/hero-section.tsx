import { Button } from '@/components/ui/basic/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'

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
  secondaryButtonText
}: Readonly<HeroSectionProps>) {
  return (
    <section className="bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-center py-24 md:py-36 relative overflow-hidden">
      <div className='absolute inset-0 elegant-overlay'></div>
      <div className='container px-4 md:px-6 relative z-10'>
        <div className='flex flex-col items-start space-y-8 text-left max-w-2xl animate-fade-in'>
          <div className='inline-block bg-amber-100/90 px-4 py-1.5 rounded-full text-amber-800 text-sm font-medium mb-2 shadow-sm animate-slide-up'>
            {badge}
          </div>
          <h1
            className='font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md animate-slide-up'
            style={{ animationDelay: '0.1s' }}
          >
            {title}
          </h1>
          <p
            className='text-amber-50/90 md:text-xl leading-relaxed max-w-xl animate-slide-up'
            style={{ animationDelay: '0.2s' }}
          >
            {description}
          </p>
          <div
            className='flex flex-col sm:flex-row gap-4 mt-4 animate-slide-up'
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href={`${whatsappLink}?text=Olá! Gostaria de saber mais sobre os produtos da MocaChic.`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='bg-green-600 from-green-600 to-green-500 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base hover:translate-y-[-2px]'>
                <Phone className='mr-2 h-4 w-4' />
                {primaryButtonText}
              </Button>
            </Link>
            <Link href='#colecao'>
              <Button className='bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300 text-base hover:translate-y-[-2px]'>
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-900/30 to-transparent'></div>
      <div className='absolute -bottom-10 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl'></div>
      <div className='absolute top-20 -right-20 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl'></div>
    </section>
  )
}
