'use client'

import { Header } from '@/components/ui/basic/header'
import { Heart, Home, Phone, Star, Truck } from 'lucide-react'
import { JSX } from 'react'

type NavWithScrollProps = {
  isHome: boolean
}

export function NavWithScroll({ isHome }: Readonly<NavWithScrollProps>): JSX.Element {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

  if (isHome) {
    if (element && element.id == 'shipping' || element?.id == 'contacts') {
      element.scrollIntoView({ behavior: 'smooth' })
      element.classList.add('highlight')

      setTimeout(() => {
        element.classList.remove('highlight')
      }, 1500)
    }
    else if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    window.location.href = '/'
  }
}


  const menuItems = [
    { name: 'Início', id: 'home', href: '/', icon: <Home className='h-5 w-5' /> },
    { name: 'Contato', id: 'contacts', icon: <Phone className='h-5 w-5' /> },
    { name: 'Coleções', id: 'colections', icon: <Star className='h-5 w-5' /> },
    { name: 'Depoimentos', id: 'testimonials', icon: <Heart className='h-5 w-5' /> },
    { name: 'Envios', id: 'shipping', icon: <Truck className='h-5 w-5' /> }
  ]

  return (
    <Header
      scrollToSection={scrollToSection}
      imageSrc='/images/nav_bar_logo.png'
      menuItems={menuItems}
    />
  )
}
