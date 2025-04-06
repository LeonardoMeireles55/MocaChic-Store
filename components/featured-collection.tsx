import { ProductCarousel } from "@/components/product-carousel"
import type { Product } from "@/types/product"

interface FeaturedCollectionProps {
  products: Product[]
  whatsappLink: string
  title: string
}

export function FeaturedCollection({ products, whatsappLink }: Readonly<FeaturedCollectionProps>) {
  return (
    <section id="colecao" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
            <div className="absolute inset-0 bg-[url('/images/nav_bar_logo.png?height=540&width=960')] bg-bottom opacity-5"></div>
        <div className="flex flex-col items-center mb-16">
          <span className="text-amber-700 font-medium mb-3">Coleção de Verão 2025</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 relative">
            <span className="relative">
              Elegância e Conforto
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-300 rounded-full"></span>
            </span>
          </h2>
          </div>
        <ProductCarousel products={products} whatsappLink={whatsappLink} />
      </div>
    </section>
  )
}

