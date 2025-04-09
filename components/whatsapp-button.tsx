"use client"

import { Phone } from "lucide-react"
import Link from "next/link"

interface WhatsAppButtonProps {
  whatsappNumber: string
  fixed?: boolean
}

export function WhatsAppButton({ whatsappNumber, fixed = true }: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        fixed ? "fixed bottom-6 left-6" : ""
      } z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Phone className="h-7 w-7" />
    </Link>
  )
}
