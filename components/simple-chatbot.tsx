"use client"

import { useState, useCallback } from "react"
import { MessageCircle, X } from "lucide-react"

interface SimpleChatbotProps {
  whatsappNumber: string
  storeName: string
}

export function SimpleChatbot({ whatsappNumber, storeName }: SimpleChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleWhatsAppClick = useCallback(() => {
    const cleanNumber = whatsappNumber.replace(/\D/g, "")
    const defaultMessage = encodeURIComponent(`Olá! Gostaria de saber mais sobre os produtos da ${storeName}.`)
    window.open(`https://wa.me/${cleanNumber}?text=${defaultMessage}`, "_blank", "noopener,noreferrer")
  }, [whatsappNumber, storeName])

  return (
    <div className="fixed bottom-6 right-6 z-50" role="dialog" aria-label="Chat de atendimento">
      {isOpen && (
        <div
          className="mb-2 mr-1 md:mb-5 w-[280px] sm:w-72 rounded-xl bg-white p-4 shadow-xl absolute bottom-12 right-0 sm:-left-74 border border-amber-100"
          role="dialog"
          aria-label="Janela de chat"
        >
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <h3 className="text-xs sm:text-sm font-medium text-amber-900">{storeName}</h3>
            <button
              onClick={toggleChat}
              className="text-amber-600 hover:text-amber-800 transition-colors p-1 rounded-full hover:bg-amber-50"
              aria-label="Fechar chat"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
          <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
            <div className="rounded-lg bg-amber-50/50 p-2 sm:p-3 border border-amber-100">
              <p className="text-xs sm:text-sm text-amber-900">
                Olá! Bem-vinda à {storeName}. Como posso ajudar você hoje?
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-2 sm:p-3 border border-amber-100">
              <p className="text-xs sm:text-sm text-amber-900">
                Para falar com nossa equipe de vendas, clique no botão abaixo:
              </p>
              <div className="mt-2 sm:mt-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-green-500 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all hover:bg-green-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
                >
                  Iniciar conversa no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition-all hover:scale-105 hover:bg-amber-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
        aria-expanded={isOpen}
      >
        <MessageCircle
          className={`h-5 w-5 md:h-7 md:w-7 ${!isOpen ? "animate-[ping_2s_ease-in-out_infinite]" : ""}`}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
