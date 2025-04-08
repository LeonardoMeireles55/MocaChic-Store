'use client'

import { CallToAction } from '@/components/call-to-action'
import { FeaturedCollection } from '@/components/featured-collection'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { VideoSection } from '@/components/video-section'
import type { Product } from '@/types/product'
import { Phone, Star } from 'lucide-react'
import { useCallback } from 'react'

export default function LandingPage() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const whatsappNumber = '5592994128570'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  const menuItems = [
    { name: 'Coleções', id: 'colecao', icon: <Star className='h-5 w-5' /> },
    { name: 'Contato', id: 'footer', icon: <Phone className='h-5 w-5' /> }
  ]

  const products: Product[] = [
    {
      id: 1,
      name: 'Vestido Mocha',
      description: 'Elegante vestido em tom mocha, perfeito para ocasiões especiais',
      price: '70.99',
      image: '/images/products/mocha-70.99.jpeg'
    },
    {
      id: 2,
      name: 'Conjunto Ester',
      description: 'Conjunto versátil e elegante para diversas ocasiões',
      price: '45.00',
      image: '/images/products/Cojunto Ester-45.jpeg'
    },
    {
      id: 3,
      name: 'Macacão Sofia',
      description: 'Macacão moderno e sofisticado para um visual descontraído',
      price: '70.00',
      image: '/images/products/Macacão Sofia-70.jpeg'
    },
    {
      id: 4,
      name: 'Vestido Alana',
      description: 'Vestido delicado e feminino para momentos especiais',
      price: '44.99',
      image: '/images/products/Vestido Alana-44,99.jpeg'
    },
    {
      id: 5,
      name: 'Vestido Aline',
      description: 'Vestido elegante com design contemporâneo',
      price: '70.00',
      image: '/images/products/Vestido Aline-70.jpeg'
    },
    {
      id: 6,
      name: 'Vestido Kelly',
      description: 'Vestido sofisticado para destacar sua beleza natural',
      price: '65.00',
      image: '/images/products/Vestido Kelly-65.jpeg'
    },
    {
      id: 7,
      name: 'Vestido Sayo',
      description: 'Vestido moderno com design exclusivo',
      price: '70.00',
      image: '/images/products/Vestido sayo-70.jpeg'
    }
  ]

  // Features data
  // const features = [
  //   {
  //     icon: <ShoppingBag className="h-8 w-8 text-amber-700" />,
  //     title: "Entrega Rápida",
  //     description: "Receba suas peças favoritas em até 3 dias úteis em toda Manaus.",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         className="h-8 w-8 text-amber-700"
  //       >
  //         <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
  //       </svg>
  //     ),
  //     title: "Qualidade Premium",
  //     description: "Selecionamos cuidadosamente cada peça para garantir o melhor para você.",
  //   },
  //   {
  //     icon: <Phone className="h-8 w-8 text-amber-700" />,
  //     title: "Atendimento Personalizado",
  //     description: "Consultoria de moda via WhatsApp para encontrar o look perfeito.",
  //   },
  // ]

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
    <div className='flex min-h-screen flex-col bg-amber-50/70'>
      <Header
        scrollToSection={scrollToSection}
        imageSrc='/images/nav_bar_logo.png'
        menuItems={menuItems}
      />
      <main className='flex-1'>
        <HeroSection
          whatsappLink={whatsappLink}
          badge='Nova Coleção 2025'
          title='Elegância para Todas as Ocasiões'
          description='Descubra nossa loja e coleção de peças atemporais e modernas que celebram a feminilidade e a confiança.'
          primaryButtonText='Compre Agora'
          secondaryButtonText='Ver Coleção'
        />
        <FeaturedCollection
          products={products}
          whatsappLink={whatsappLink}
          title='Coleção em Destaque'
        />
        <VideoSection 
          videoId="VYIr1YTZr_g"
          title="Conheça Nossa Coleção"
          description="Assista ao nosso comercial e descubra as últimas tendências da moda feminina."
        />
        <CallToAction
          whatsappLink={whatsappLink}
          title='Pronta para Elevar seu Estilo?'
          description='Entre em contato conosco pelo WhatsApp para conselhos de estilo personalizados, consultas de disponibilidade ou para fazer um pedido.'
          buttonText='Fale Conosco pelo WhatsApp'
          scheduleText='Nossa equipe está disponível de Segunda a Sexta: 09h às 18h. Sábado: 09h às 17h.'
        />
        <TestimonialsSection
          subtitle='Experiências Reais'
          title='O Melhor Para Você'
          testimonials={testimonials}
        />
      </main>
      <Footer
        whatsappLink={whatsappLink}
        brandName='Moça Chic Fortaleza'
        description='Loja de fabrica'
        address='Avenida Jurunas, AF-25, Cidade Nova, Manaus'
        email='mocachicfortaleza@gmail.com'
        phone='(92) 99412-8570'
        schedules={['Segunda a Sexta: 09h às 18h', 'Sábado: 09h às 17h']}
        paymentMethods={['Pix', 'Cartão de Crédito', 'À Vista']}
        copyrightText='Moça Chic Fortaleza. Todos os direitos reservados.'
      />
    </div>
  )
}
