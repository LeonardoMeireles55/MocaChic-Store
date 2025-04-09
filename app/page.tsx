'use client'

import { SeoOptimizedSection } from '@/components/seo/seo-optimized-section'
import { CallToAction } from '@/components/ui/actions/call-to-action'
import { TestimonialsSection } from '@/components/ui/actions/testimonials-section'
import { Breadcrumbs } from '@/components/ui/basic/breadcrumbs'
import { Footer } from '@/components/ui/basic/footer'
import { NavWithScroll } from '@/components/ui/basic/nav-with-scroll'
import { FeaturedCollection } from '@/components/ui/store/featured-collection'
import { HeroSection } from '@/components/ui/store/hero-section'
import { TrustBadges } from '@/components/ui/store/trust-badges'
import { VideoSection } from '@/components/video/video-section'
import whatsAppLink from '@/constants/whatsapp-link'
import type { Product } from '@/types/product'
import { useEffect, useMemo } from 'react'

export default function LandingPage() {
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

  const products: Product[] = [
    {
      id: 1,
      name: 'Conjunto Ester',
      description: 'Conjunto versátil e elegante para diversas ocasiões',
      price: '45.00',
      image: '/images/products/Cojunto-Ester-45.jpeg',
      alt: 'Conjunto Ester - Peça versátil e elegante para diversas ocasiões',
      category: 'Conjuntos',
      inStock: true
    },
    {
      id: 2,
      name: 'Macacão Sofia',
      description: 'Macacão moderno e sofisticado para um visual descontraído',
      price: '70.00',
      image: '/images/products/Macacão-Sofia-70.jpeg',
      alt: 'Macacão Sofia - Peça moderna e sofisticada para um visual descontraído',
      category: 'Macacões',
      inStock: true
    },
    {
      id: 3,
      name: 'Vestido Alana',
      description: 'Vestido delicado e feminino para momentos especiais',
      price: '44.99',
      image: '/images/products/Vestido-Alana-44_99.jpeg',
      alt: 'Vestido Alana - Peça delicada e feminina para momentos especiais',
      category: 'Vestidos',
      inStock: true
    },
    {
      id: 4,
      name: 'Vestido Aline',
      description: 'Vestido elegante com design contemporâneo',
      price: '70.00',
      image: '/images/products/Vestido-Aline-70.jpeg',
      alt: 'Vestido Aline - Peça elegante com design contemporâneo',
      category: 'Vestidos',
      inStock: true
    },
    {
      id: 5,
      name: 'Vestido Kelly',
      description: 'Vestido sofisticado para destacar sua beleza natural',
      price: '70.00',
      image: '/images/products/Vestido-Kelly-65.jpeg',
      alt: 'Vestido Kelly - Peça sofisticada para destacar sua beleza natural',
      category: 'Vestidos',
      inStock: true
    },
    {
      id: 6,
      name: 'Vestido Sayo',
      description: 'Vestido moderno com design exclusivo',
      price: '70.00',
      image: '/images/products/Vestido-Sayo-70.jpeg',
      alt: 'Vestido Sayo - Peça moderna com design exclusivo',
      category: 'Vestidos',
      inStock: true
    }
  ]

  const testimonials = [
    {
      name: 'Maria S.',
      testimonial:
        '"Eu simplesmente adoro a qualidade das roupas! O vestido de verão que comprei se tornou minha escolha preferida para ocasiões especiais. O serviço de WhatsApp tornou o pedido muito conveniente."'
    },
    {
      name: 'Camila R.',
      role: 'Nova Cliente',
      testimonial:
        '"Os conselhos de estilo personalizados que recebi pelo WhatsApp foram incrivelmente úteis. Encontrei peças que combinam perfeitamente com meu estilo e as recebi rapidamente. Com certeza comprarei aqui novamente!"',
      since: '2023'
    },
    {
      name: 'Luisa T.',
      testimonial:
        '"Compro aqui há mais de um ano e sempre fico impressionada com a qualidade e o estilo das coleções. O atendimento ao cliente via WhatsApp é excepcional!"'
    }
  ]

  return (
    <div id='home' className='flex min-h-screen flex-col bg-amber-50/70'>
      <NavWithScroll isHome={true} />
      <main className='flex-1'>
        <Breadcrumbs items={[{ label: 'Início', href: '/' }]} />
        <HeroSection
          whatsappLink={zapNumber}
          badge='Nova Coleção 2025'
          title='Elegância para Todas as Ocasiões'
          description='Descubra nossa loja e coleção de peças atemporais e modernas que celebram a feminilidade e a confiança.'
          primaryButtonText='Compre Agora'
          secondaryButtonText='Ver Coleção'
        />
        <TrustBadges />
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
