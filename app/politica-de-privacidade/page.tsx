import { Breadcrumbs } from '@/components/ui/basic/breadcrumbs'
import { Footer } from '@/components/ui/basic/footer'
import { NavWithScroll } from '@/components/ui/basic/nav-with-scroll'
import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidade | Moça Chic Fortaleza',
  description: 'Conheça nossa política de privacidade e como protegemos seus dados pessoais.'
}

const PrivacyPolicyPage = () => {
  const whatsappNumber = '5592994128570'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className='flex min-h-screen flex-col bg-amber-50/70'>
      <NavWithScroll isHome={false} />
      <main className='flex-1'>
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Política de Privacidade', href: '/politica-de-privacidade' }
          ]}
        />

        <div className='container mx-auto px-4 py-12 md:py-16'>
          <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10'>
            <h1 className='text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8'>
              Política de Privacidade
            </h1>

            <div className='prose prose-amber max-w-none'>
              <p className='mb-4'>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

              <p className='mb-4'>
                A Moça Chic Fortaleza está comprometida em proteger sua privacidade. Esta Política
                de Privacidade explica como coletamos, usamos, divulgamos, transferimos e
                armazenamos suas informações. Por favor, reserve um momento para se familiarizar com
                nossas práticas de privacidade.
              </p>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>
                Informações que coletamos
              </h2>

              <p className='mb-4'>
                Podemos coletar vários tipos de informações quando você interage com nosso site,
                incluindo:
              </p>

              <ul className='list-disc pl-6 mb-6'>
                <li>
                  Informações pessoais como nome, endereço de e-mail, número de telefone e endereço
                  de entrega
                </li>
                <li>Informações sobre seus pedidos e transações</li>
                <li>Informações sobre como você usa nosso site</li>
                <li>Preferências e interesses de compra</li>
              </ul>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>
                Como usamos suas informações
              </h2>

              <p className='mb-4'>Usamos as informações que coletamos para:</p>

              <ul className='list-disc pl-6 mb-6'>
                <li>Processar seus pedidos e fornecer os produtos solicitados</li>
                <li>
                  Comunicar-nos com você sobre seus pedidos, produtos, serviços e ofertas
                  promocionais
                </li>
                <li>Melhorar nosso site, produtos e serviços</li>
                <li>Personalizar sua experiência de compra</li>
                <li>Cumprir obrigações legais</li>
              </ul>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>
                Compartilhamento de informações
              </h2>

              <p className='mb-4'>
                Não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar
                suas informações com:
              </p>

              <ul className='list-disc pl-6 mb-6'>
                <li>Prestadores de serviços que nos ajudam a operar nosso negócio</li>
                <li>Parceiros de entrega para entregar seus pedidos</li>
                <li>Autoridades governamentais quando exigido por lei</li>
              </ul>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>
                Seus direitos
              </h2>

              <p className='mb-4'>Você tem o direito de:</p>

              <ul className='list-disc pl-6 mb-6'>
                <li>Acessar as informações pessoais que temos sobre você</li>
                <li>Corrigir informações imprecisas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Optar por não receber comunicações de marketing</li>
              </ul>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>Segurança</h2>

              <p className='mb-4'>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas
                informações contra acesso não autorizado, perda ou alteração.
              </p>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>Contato</h2>

              <p className='mb-4'>
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus
                direitos, entre em contato conosco pelo e-mail mocachicfortaleza@gmail.com ou pelo
                WhatsApp (92) 99412-8570.
              </p>

              <h2 className='text-2xl font-serif font-bold text-amber-800 mt-8 mb-4'>
                Alterações nesta política
              </h2>

              <p className='mb-4'>
                Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você
                revise esta página regularmente para estar ciente de quaisquer alterações.
              </p>

              <p className='mt-8'>
                Ao utilizar nosso site, você concorda com os termos desta Política de Privacidade.
              </p>
            </div>

            <div className='mt-10 flex justify-center'>
              <Link
                href='/'
                className='inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer
        whatsappLink={whatsappLink}
        brandName='Moça Chic Fortaleza'
        description='Loja de fábrica especializada em moda feminina com peças exclusivas, elegantes e sofisticadas.'
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
export default PrivacyPolicyPage