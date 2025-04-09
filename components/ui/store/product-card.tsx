import { Button } from "@/components/ui/basic/button"
import { cn } from "@/lib/utils"
import { Product } from "@/types/product"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: Product
  isAnimating: boolean
  animationDirection: "left" | "right" | null
  isHovered: boolean
  setIsHovered: (value: string | null) => void
  getWhatsAppLink: (product: Product) => string
  priority: boolean
}

const ProductCard = ({
  product,
  isAnimating,
  animationDirection,
  isHovered,
  setIsHovered,
  getWhatsAppLink,
  priority,
}: ProductCardProps) => {
  return (
    <article
      className={cn(
        "group max-w-[280px] md:max-w-[300px] overflow-hidden rounded-xl border border-amber-100 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-amber-300",
        isAnimating && "transform transition-transform duration-500",
        isAnimating && animationDirection === "right" && "animate-slide-left",
        isAnimating && animationDirection === "left" && "animate-slide-right",
      )}
      onMouseEnter={() => setIsHovered(product.description)}
      onMouseLeave={() => setIsHovered(null)}
      aria-label={`Produto: ${product.name}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content={product.name} />
      <meta itemProp="description" content={product.description} />
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content={product.price} />
        <meta itemProp="priceCurrency" content="BRL" />
        <meta
          itemProp="availability"
          content={product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"}
        />
      </div>

      <div className="relative aspect-[2/3] overflow-hidden">
        <div className="absolute top-1 md:top-2 right-2 md:right-2 z-10">
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md">
            {product.category ?? "New"}
          </span>
        </div>

        <Image
          src={product?.image ? product.image : "/placeholder.svg"}
          alt={(product?.alt ?? product?.name) || "Produto"}
          width={550}
          height={600}
          className={cn(
            "h-full w-full object-cover transition-all duration-700 group-hover:scale-110",
            isAnimating ? "transition-all duration-500 ease-in-out filter blur-[1px] motion-safe:blur-sm" : "",
          )}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center">
            <Link
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-full"
            >
              <Button className="bg-white flex flex-row text-[10px] md:text-[12px] text-amber-800 hover:bg-amber-50 rounded-full px-4 md:px-6 py-1.5 md:py-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ShoppingBag className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                {product.inStock ? "Comprar" : "Consultar"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-3 md:p-6 text-center bg-gradient-to-b from-amber-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-serif text-amber-900 text-base md:text-xl transition-colors duration-300 hover:text-amber-700">
          {product.name}
        </h3>

        <p className="mt-2 text-xs md:text-sm text-amber-700/50 line-clamp-2 md:line-clamp-3 transition-all duration-300">
          {product.description}
        </p>

        <div className="mt-3 md:mt-4 gap-1 md:gap-2 flex items-center justify-center">
          <span className="font-extralight text-[10px] mt-2 md:mt-1 md:text-xs line-through px-0.5 md:px-3 py-0 md:py-1 rounded-full shadow-sm bg-amber-100 text-amber-600">
            {(+product.price + (+product.price * 10) / 100).toFixed(2)}
          </span>
          <Link href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
            <span className="font-medium text-white text-[8px] md:text-xs bg-gradient-to-r from-amber-600 to-amber-400 px-2 md:px-2 py-1 md:py-1.5 rounded-full shadow-sm">
              R${product.price}
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard