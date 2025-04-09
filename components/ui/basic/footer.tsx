import { Clock, CreditCard, Facebook, FileText, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

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
  showPrivacyLinks?: boolean
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
  showPrivacyLinks = false
}: Readonly<FooterProps>) {
  return (
    <footer id='footer' className='bg-stone-900 text-stone-300 py-16'>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          <div>
            <h3 className='text-xl font-semibold text-white mb-6 flex items-center'>
              <span className='bg-amber-700 h-6 w-1 mr-3 rounded-full'></span>
              {brandName}
            </h3>
            <p className='text-stone-400 mb-6 leading-relaxed'>{description}</p>
            <div className='flex items-start text-stone-400 mb-4'>
              <MapPin className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5' />
              <p>{address}</p>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-white mb-6 flex items-center'>
              <div className='bg-amber-700 h-6 w-1 mr-3 rounded-full' />
              Horário de Atendimento
            </h3>
            <ul className='space-y-4 text-stone-400'>
              {schedules.map((schedule, index) => (
                <li key={index + schedule} className='flex items-center'>
                  <Clock className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0' />
                  <span>{schedule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-white mb-6 flex items-center'>
              <div className='bg-amber-700 h-6 w-1 mr-3 rounded-full' />
              Formas de Pagamento
            </h3>
            <ul className='space-y-4 text-stone-400'>
              {paymentMethods.map((method, index) => (
                <li key={index + method} className='flex items-center'>
                  <CreditCard className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0' />
                  <span>{method}</span>
                </li>
              ))}
            </ul>

            {showPrivacyLinks && (
              <div className='mt-8'>
                <h4 className='text-lg font-semibold text-white mb-4'>Informações Legais</h4>
                <ul className='space-y-3 text-stone-400'>
                  <li className='flex items-center'>
                    <FileText className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0' />
                    <Link
                      href='/politica-de-privacidade'
                      className='hover:text-amber-400 transition-colors'
                    >
                      Política de Privacidade
                    </Link>
                  </li>
                  <li className='flex items-center'>
                    <FileText className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0' />
                    <Link href='/termos-de-uso' className='hover:text-amber-400 transition-colors'>
                      Termos de Uso
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <h3 className='text-xl font-semibold text-white mb-6 flex items-center'>
              <div className='bg-amber-700 h-6 w-1 mr-3 rounded-full' />
              Contato
            </h3>
            <ul className='space-y-4 text-stone-400'>
              <li className='flex items-center'>
                <Phone className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0' />
                <Link
                  href={whatsappLink}
                  className='hover:text-amber-400 transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  WhatsApp: {phone}
                </Link>
              </li>
              <li className='flex items-center'>
                <Mail className='mr-3 h-5 w-5 text-amber-500 flex-shrink-0' />
                <Link href={`mailto:${email}`} className='hover:text-amber-400 transition-colors'>
                  {email}
                </Link>
              </li>
            </ul>
            <div className='mt-6 flex space-x-4'>
              <Link
                href='https://www.instagram.com/mocachicfortaleza/'
                className='bg-stone-800 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300'
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Facebook className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.instagram.com/mocachicfortaleza'
                className='bg-stone-800 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-stone-800 text-center'>
          <p className='text-stone-500'>
            &copy; {new Date().getFullYear()} {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}
