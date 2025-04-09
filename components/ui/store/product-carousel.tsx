"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import Loading from "../basic/loading"
import type { Product } from "@/types/product"
import CarouselControls from "@/components/ui/store/carousel-controls"
import ProductCard from "@/components/ui/store/product-card"

interface ProductCarouselProps {
  products: Product[]
  whatsappLink: string
}

const ProductCarousel = ({ products = [], whatsappLink }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<"left" | "right" | null>(null)
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300) 

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(timer)
    }
  }, [])

  const visibleProducts = useMemo(() => {
    if (!products || products.length === 0) return []

    const displayCount = isMobile ? 1 : Math.min(4, products.length)
    return Array.from({ length: displayCount }, (_, i) => {
      const index = (currentIndex + i) % products.length
      return products[index]
    })
  }, [currentIndex, isMobile, products])

  const handleSlideTransition = useCallback(
    (direction: "left" | "right", newIndex?: number) => {
      if (isAnimating || !products.length) return

      setIsAnimating(true)
      setAnimationDirection(direction)

      if (typeof newIndex === "number") {
        setCurrentIndex(newIndex)
      } else {
        setCurrentIndex((prevIndex) => {
          if (direction === "right") {
            return prevIndex === products.length - 1 ? 0 : prevIndex + 1
          } else {
            return prevIndex === 0 ? products.length - 1 : prevIndex - 1
          }
        })
      }

      setTimeout(() => {
        setIsAnimating(false)
        setAnimationDirection(null)
      }, 600)
    },
    [isAnimating, products.length],
  )

  const nextSlide = useCallback(() => handleSlideTransition("right"), [handleSlideTransition])
  const prevSlide = useCallback(() => handleSlideTransition("left"), [handleSlideTransition])

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return
      handleSlideTransition(index > currentIndex ? "right" : "left", index)
    },
    [currentIndex, handleSlideTransition],
  )

  const getWhatsAppLink = useCallback(
    (product: Product) => {
      const message = `Olá! Gostaria de saber mais sobre o produto: "${product.name} - ${product.description}"`
      const encodedMessage = encodeURIComponent(message)
      return `${whatsappLink}?text=${encodedMessage}`
    },
    [whatsappLink],
  )

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-amber-600">Nenhum produto disponível no momento.</p>
      </div>
    )
  }

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4" aria-label="Carrossel de produtos">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            className={cn(
              "flex items-center justify-center gap-6 md:gap-8 py-4 md:py-8 transition-all duration-500",
              isAnimating && "opacity-95",
            )}
          >
            {visibleProducts.map((product, idx) => (
              <ProductCard
                key={`${product.id}-${idx}`}
                product={product}
                isAnimating={isAnimating}
                animationDirection={animationDirection}
                isHovered={isHovered === product.description}
                setIsHovered={setIsHovered}
                getWhatsAppLink={getWhatsAppLink}
                priority={idx === 0}
              />
            ))}
          </div>

          <CarouselControls
            currentIndex={currentIndex}
            productsCount={products.length}
            isAnimating={isAnimating}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            goToSlide={goToSlide}
          />
        </>
      )}
    </section>
  )
}



export default ProductCarousel
