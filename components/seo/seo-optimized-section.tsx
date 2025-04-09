import Link from 'next/link'

export function SeoOptimizedSection() {
  return (
    <section className='py-12 bg-amber-50 relative overflow-hidden'>
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-bottom opacity-15"></div>
      <div className='container px-4 md:px-6 max-w-4xl mx-auto '>
        <div className='prose prose-amber mx-auto '>
          <h2 className='text-2xl font-serif font-bold text-amber-900 text-center mb-6'>
            Moça Chic Fortaleza - Moda Elegante e Sofisticada
          </h2>

          <p className='text-amber-800/80 mb-4'>
            A <strong>Moça Chic Fortaleza</strong> é uma loja especializada em{' '}
            <em>moda feminina</em> que oferece peças exclusivas, elegantes e sofisticadas para
            mulheres que valorizam qualidade e estilo. Localizada em Manaus, nossa loja atende
            clientes de todo o Brasil com um serviço personalizado e atencioso.
          </p>

          <p className='text-amber-800/80 mb-4'>
            Nossa <strong>coleção de roupas femininas</strong> inclui vestidos, conjuntos, macacões
            e muito mais, todos cuidadosamente selecionados para garantir a máxima qualidade e
            estilo. Cada peça é escolhida pensando na mulher moderna que busca elegância sem abrir
            mão do conforto.
          </p>

          <p className='text-amber-800/80 mb-4'>
            Na <strong>Moça Chic Fortaleza</strong>, acreditamos que a moda deve ser acessível e
            inclusiva. Por isso, oferecemos peças para todos os tipos de corpo e ocasiões, desde o
            casual dia a dia até eventos especiais. Nossa equipe está sempre disponível para
            oferecer consultoria de moda personalizada via WhatsApp, ajudando você a encontrar o
            look perfeito para qualquer ocasião.
          </p>

          <h3 className='text-xl font-serif font-bold text-amber-800 mt-6 mb-3'>
            Por que escolher a Moça Chic Fortaleza?
          </h3>

          <ul className='list-disc pl-6 text-amber-800/80 mb-4'>
            <li>Peças exclusivas e de alta qualidade</li>
            <li>Atendimento personalizado via WhatsApp</li>
            <li>Entrega rápida para todo o Brasil</li>
            <li>Variedade de estilos para todas as ocasiões</li>
            <li>Preços acessíveis com diversas formas de pagamento</li>
          </ul>

          <p className='text-amber-800/80 mb-4'>
            Visite nossa <strong>loja de roupas femininas</strong> online e descubra por que somos
            referência em <em>moda feminina em Fortaleza</em>. Siga-nos nas redes sociais...
          </p>

          <div className='mt-8 text-center'>
            <Link
              href='https://wa.me/5592994128570'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            >
              Entre em contato conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
