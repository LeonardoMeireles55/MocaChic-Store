"use client"

import { Header } from "@/components/ui/basic/header"
import { Heart, Home, Phone, Star } from "lucide-react"
import { JSX } from 'react'

type NavWithScrollProps = {
  isHome: boolean;
};

export function NavWithScroll({ isHome }: Readonly<NavWithScrollProps>): JSX.Element {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    
    if (isHome) {
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = '/'
    }
  }

  const menuItems = [
    { name: "Início", id: "home", href: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Contato", id: "footer", icon: <Phone className="h-5 w-5" /> },
    { name: "Coleções", id: "colecao", icon: <Star className="h-5 w-5" /> },
    { name: "Depoimentos", id: "testimonials", icon: <Heart className="h-5 w-5" /> },
  ]

  return (
    <Header
      scrollToSection={scrollToSection}
      imageSrc="/images/nav_bar_logo.png"
      menuItems={menuItems}
    />
  )
}
