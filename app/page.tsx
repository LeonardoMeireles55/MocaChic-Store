'use client'

import { SeoOptimizedSection } from '@/components/seo/seo-optimized-section'
import { CallToAction } from '@/components/ui/actions/call-to-action'
import { TestimonialsSection } from '@/components/ui/actions/testimonials-section'
import { Footer } from '@/components/ui/basic/footer'
import { NavWithScroll } from '@/components/ui/basic/nav-with-scroll'
import { FeaturedCollection } from '@/components/ui/store/featured-collection'
import { HeroSection } from '@/components/ui/store/hero-section'
import { VideoSection } from '@/components/video/video-section'
import products from '@/constants/products'
import testimonials from '@/constants/testimonials'
import whatsAppLink from '@/constants/whatsapp-link'
import { useEffect, useMemo } from 'react'
import TrustBadgesList from '../components/ui/store/trust-badges-list';

const LandingPage = () => {
  // Improve SEO with page view tracking
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view')
    }
  }, [])

  const zapNumber = useMemo(() => whatsAppLink('5592994128570'), [])

  return (
    <div id='home' className='flex min-h-screen flex-col bg-amber-50/70'>
      <NavWithScroll isHome={true} />
      <main className='flex-1'>
        <HeroSection
          whatsappLink={zapNumber}
          badge='Nova Coleção 2025'
          title='Elegância para Todas as Ocasiões'
          description='Descubra nossa loja e coleção de peças atemporais e modernas que celebram a feminilidade e a confiança.'
          primaryButtonText='Compre Agora'
          secondaryButtonText='Ver Coleção'
        />
        <TrustBadgesList />
        <FeaturedCollection
          products={products}
          whatsappLink={zapNumber}
          title='Coleção em Destaque'
        />
        <VideoSection
          videoId='VYIr1YTZr_g'
          title='Conheça Nossa Coleção'
          description='Assista ao nosso comercial e descubra as últimas tendências da moda feminina.'
        />
        <CallToAction
          whatsappLink={zapNumber}
          title='Pronta para Elevar seu Estilo?'
          description='Entre em contato conosco pelo WhatsApp para conselhos de estilo personalizados, consultas de disponibilidade ou para fazer um pedido.'
          buttonText='Fale Conosco pelo WhatsApp'
          scheduleText='Nossa equipe está disponível de Segunda a Sexta: 09h às 18h. Sábado: 09h às 17h.'
        />
        <TestimonialsSection
          id='testimonials'
          subtitle='Experiências Reais'
          title='O Melhor Para Você'
          testimonials={testimonials}
        />
        <SeoOptimizedSection />
      </main>
      <Footer
        whatsappLink={zapNumber}
        brandName='Moça Chic Fortaleza'
        description='Loja de fábrica especializada em moda feminina com peças exclusivas, elegantes e sofisticadas. Atendimento personalizado e entrega para todo o Brasil.'
        address='Avenida Jurunas, AF-25, Cidade Nova, Manaus'
        email='mocachicfortaleza@gmail.com'
        phone='(92) 99412-8570'
        schedules={['Segunda a Sexta: 09h às 18h', 'Sábado: 09h às 17h']}
        paymentMethods={['Pix', 'Cartão de Crédito', 'À Vista']}
        copyrightText='Moça Chic Fortaleza. Todos os direitos reservados.'
        showPrivacyLinks={true}
      />
    </div>
  )
}
export default LandingPage