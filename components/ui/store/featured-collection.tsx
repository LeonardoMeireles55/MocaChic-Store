import { memo } from "react"
import ProductCarousel from "@/components/ui/store/product-carousel"
import type { Product } from "@/types/product"

interface FeaturedCollectionProps {
  products: Product[]
  whatsappLink: string
  title: string
}

// Define the component
function FeaturedCollectionComponent({ products, whatsappLink, title }: Readonly<FeaturedCollectionProps>) {
  return (
    <section id="colections" className="py-24 md:py-32 relative overflow-hidden elegant-gradient">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Background and decorative elements */}
        <div className="absolute inset-0 bg-[url('/images/nav_bar_logo.png?height=540&width=960')] bg-bottom opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-50/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-amber-50/80 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl"></div>

        {/* Collection header */}
        <CollectionHeader title={title} />

        {/* Product carousel */}
        <ProductCarousel products={products} whatsappLink={whatsappLink} />
      </div>
    </section>
  )
}

// Extracted header component for better organization
interface CollectionHeaderProps {
  title: string
}

function CollectionHeader({ title }: Readonly<CollectionHeaderProps>) {
  return (
    <div className="flex flex-col items-center mb-16 animate-fade-in">
      <span className="text-amber-700 font-medium rounded-full">{title}</span>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 relative mt-4">
        <span className="relative inline-block">
          Elegância e Conforto
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-300 rounded-full" />
        </span>
      </h2>
      <p className="text-stone-600 mt-6 text-center max-w-2xl">
        Descubra nossa coleção exclusiva de peças que combinam elegância atemporal com o máximo conforto para todas as
        ocasiões.
      </p>
    </div>
  )
}

// Create a memoized version of the component
const MemoizedFeaturedCollection = memo(FeaturedCollectionComponent)

// Export both named export and default export to support both import styles
export { MemoizedFeaturedCollection as FeaturedCollection }
export default MemoizedFeaturedCollection
