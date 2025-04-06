import type React from "react"
import Link from "next/link"
import { Phone, Clock, MapPin, CreditCard, Mail, Facebook, Instagram } from "lucide-react"

interface FooterProps {
  whatsappLink: string
  brandName: string
  description: string
  address: string
  email: string
  phone: string
  schedules: string[]
  paymentMethods: string[]
  copyrightText: string
}

export function Footer({
  whatsappLink,
  brandName,
  description,
  address,
  email,
  phone,
  schedules,
  paymentMethods,
  copyrightText,
}: Readonly<FooterProps>) {
  return (
    <footer id='footer' className="bg-stone-900 text-stone-300 py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-amber-700 h-6 w-1 mr-3 rounded-full"></span>
              {brandName}
            </h3>
            <p className="text-stone-400 mb-6 leading-relaxed">{description}</p>
            <div className="flex items-start text-stone-400 mb-4">
              <MapPin className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p>{address}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-amber-700 h-6 w-1 mr-3 rounded-full"></span>
              Horário de Atendimento
            </h3>
            <ul className="space-y-4 text-stone-400">
              {schedules.map((schedule, index) => (
                <li key={index} className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>{schedule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-amber-700 h-6 w-1 mr-3 rounded-full"></span>
              Formas de Pagamento
            </h3>
            <ul className="space-y-4 text-stone-400">
              {paymentMethods.map((method, index) => (
                <li key={index} className="flex items-center">
                  <CreditCard className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-amber-700 h-6 w-1 mr-3 rounded-full"></span>
              Contato
            </h3>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                <Link
                  href={whatsappLink}
                  className="hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-amber-500 flex-shrink-0" />
                <Link href={`mailto:${email}`} className="hover:text-amber-400 transition-colors">
                  {email}
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="bg-stone-800 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-stone-800 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500">
            &copy; {new Date().getFullYear()} {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}

