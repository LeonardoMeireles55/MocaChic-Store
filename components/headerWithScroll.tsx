// components/HeaderWithScroll.tsx
"use client"

import { Header } from "@/components/header"
import { Phone } from "lucide-react"

export function HeaderWithScroll() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const menuItems = [
    { name: "Início", id: "home", href: "/" },
    { name: "Contato", id: "footer", icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <Header scrollToSection={scrollToSection} imageSrc="/images/nav_bar_logo.png" menuItems={menuItems} />
  )
}
