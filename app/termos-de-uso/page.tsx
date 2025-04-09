

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Home, Phone } from "lucide-react"
import Link from "next/link"
import { HeaderWithScroll } from '@/components/headerWithScroll'

export const metadata = {
  title: "Termos de Uso | Moça Chic Fortaleza",
  description: "Conheça nossos termos de uso e condições para utilização dos nossos serviços e produtos.",
}

export default function TermsOfUsePage() {


  const whatsappNumber = "5592994128570"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  const menuItems = [
    { name: "Início", id: "home", href: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Contato", id: "footer", icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-amber-50/70">
      <Header scrollToSection={HeaderWithScroll} imageSrc="/images/nav_bar_logo.png" menuItems={menuItems} />
      <main className="flex-1">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Termos de Uso", href: "/termos-de-uso" },
          ]}
        />

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8">Termos de Uso</h1>

            <div className="prose prose-amber max-w-none">
              <p className="mb-4">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

              <p className="mb-4">
                Bem-vindo à Moça Chic Fortaleza. Ao acessar e utilizar nosso site, você concorda com os seguintes termos
                e condições. Por favor, leia-os cuidadosamente.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">1. Aceitação dos Termos</h2>

              <p className="mb-4">
                Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se
                você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nosso site.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">2. Alterações nos Termos</h2>

              <p className="mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                imediatamente após a publicação no site. Seu uso continuado do site após tais alterações constitui sua
                aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">3. Uso do Site</h2>

              <p className="mb-4">
                Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de
                terceiros ou restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">4. Produtos e Preços</h2>

              <p className="mb-4">
                Todos os produtos exibidos em nosso site estão sujeitos à disponibilidade. Os preços estão sujeitos a
                alterações sem aviso prévio. Fazemos todo o possível para exibir com precisão as características dos
                produtos, incluindo cores, mas não podemos garantir que seu dispositivo exibirá as cores com precisão.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">5. Pedidos e Pagamentos</h2>

              <p className="mb-4">
                Ao fazer um pedido, você está fazendo uma oferta para comprar os produtos. Reservamo-nos o direito de
                aceitar ou recusar seu pedido. O pagamento deve ser feito no momento do pedido. Aceitamos várias formas
                de pagamento, conforme indicado em nosso site.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">6. Entrega</h2>

              <p className="mb-4">
                Enviamos para todos os municípios do Amazonas e estados vizinhos, aéreo, rodoviário, porto e correios.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">7. Política de Devolução</h2>

              <p className="mb-4">
                Se você não estiver satisfeito com sua compra, entre em contato conosco dentro de 7 dias após o
                recebimento para discutir a devolução ou troca. Os produtos devem ser devolvidos em sua condição
                original, com todas as etiquetas e embalagens.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">8. Propriedade Intelectual</h2>

              <p className="mb-4">
                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é
                propriedade da Moça Chic Fortaleza e está protegido por leis de direitos autorais. Você não pode
                reproduzir, distribuir, modificar ou criar trabalhos derivados de qualquer parte do site sem nossa
                permissão prévia por escrito.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">
                9. Limitação de Responsabilidade
              </h2>

              <p className="mb-4">
                Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais,
                consequenciais, especiais ou punitivos decorrentes do uso ou incapacidade de usar nosso site ou
                produtos.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">10. Lei Aplicável</h2>

              <p className="mb-4">
                Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa
                decorrente destes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>

              <h2 className="text-2xl font-serif font-bold text-amber-800 mt-8 mb-4">11. Contato</h2>

              <p className="mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail
                mocachicfortaleza@gmail.com ou pelo WhatsApp (92) 99412-8570.
              </p>

              <p className="mt-8">Ao utilizar nosso site, você concorda com estes Termos de Uso.</p>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer
        whatsappLink={whatsappLink}
        brandName="Moça Chic Fortaleza"
        description="Loja de fábrica especializada em moda feminina com peças exclusivas, elegantes e sofisticadas."
        address="Avenida Jurunas, AF-25, Cidade Nova, Manaus"
        email="mocachicfortaleza@gmail.com"
        phone="(92) 99412-8570"
        schedules={["Segunda a Sexta: 09h às 18h", "Sábado: 09h às 17h"]}
        paymentMethods={["Pix", "Cartão de Crédito", "À Vista"]}
        copyrightText="Moça Chic Fortaleza. Todos os direitos reservados."
        showPrivacyLinks={true}
      />
    </div>
  )
}
