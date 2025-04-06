'use client'

import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/button'
import { cn } from '@/lib/utils'

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface ProductCarouselProps {
  products: Product[]
  whatsappLink: string
}

export function ProductCarousel({ products, whatsappLink }: Readonly<ProductCarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setAnimationDirection('right')
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => {
      setIsAnimating(false)
      setAnimationDirection(null)
    }, 600) // Increased animation duration for smoother transition
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setAnimationDirection('left')
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsAnimating(false)
      setAnimationDirection(null)
    }, 600) // Increased animation duration for smoother transition
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setAnimationDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
      setAnimationDirection(null)
    }, 600) // Increased animation duration for smoother transition
  }

  const visibleProducts = []
  const displayCount = isMobile ? 1 : 4

  for (let i = 0; i < displayCount; i++) {
    const index = (currentIndex + i) % products.length
    visibleProducts.push(products[index])
  }

  return (
    <div className='relative w-full max-w-7xl mx-auto px-4'>
      <div className={cn(
        'flex items-center justify-center gap-6 md:gap-8 py-4 md:py-8 transition-all duration-500',
        isAnimating && 'opacity-95'
      )}>
        {/* Products */}
        {visibleProducts.map((product, idx) => (
          <div
            key={`${product.id}-${idx}`}
            className={cn(
              'group max-w-xs md:max-w-sm overflow-hidden rounded-xl border border-amber-100 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-amber-300',
              isAnimating && 'transform transition-transform duration-500',
              isAnimating && animationDirection === 'right' && 'animate-slide-left',
              isAnimating && animationDirection === 'left' && 'animate-slide-right',
            )}
          >
            <div className='relative aspect-[2/3] md:aspect-[2/4] overflow-hidden'>
              <div className='absolute top-2 md:top-4 right-2 md:right-4 z-10'>
                <span className='bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md'>
                  Novo
                </span>
              </div>

              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                width={550}
                height={600}
                className={cn(
                  'h-full w-full object-cover transition-all duration-700 group-hover:scale-110',
                  isAnimating ? 'transition-all duration-500 ease-in-out filter blur-[1px] motion-safe:blur-sm' : ''
                )}
                priority={idx === 0} // Prioritize loading the first image
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center'>
                  <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
                    <Button className='bg-white flex flex-row text-[10px] md:text-[12px] text-amber-800 hover:bg-amber-50 rounded-full px-4 md:px-6 py-1.5 md:py-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                      <ShoppingBag className='mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4' />
                      Detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 text-center bg-gradient-to-b from-amber-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <h3 className='font-serif text-amber-900 text-base md:text-xl transition-colors duration-300 hover:text-amber-700'>
                {product.name}
              </h3>
              <div className='mt-1 md:mt-2 gap-1 md:gap-2 flex items-center justify-center'>
                <span className='font-extralight text-[10px] md:text-xs line-through px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-sm text-stone-500'>
                  {product.price}
                </span>
                <span className='font-medium text-white text-xs md:text-md bg-gradient-to-r from-amber-700 to-amber-600 px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm'>
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        disabled={isAnimating}
        className='absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 md:p-3 text-amber-800 shadow-md hover:bg-white hover:text-amber-900 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed'
        aria-label='Produto anterior'
      >
        <ChevronLeft className='h-4 w-4 md:h-6 md:w-6' />
      </Button>
      <Button
        onClick={nextSlide}
        disabled={isAnimating}
        className='absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 md:p-3 text-amber-800 shadow-md hover:bg-white hover:text-amber-900 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed'
        aria-label='Próximo produto'
      >
        <ChevronRight className='h-4 w-4 md:h-6 md:w-6' />
      </Button>

      {/* Dots */}
      <div className='mt-8 flex justify-center gap-2'>
        {products.map((_, idx) => (
          <Button
            key={idx}
            onClick={() => goToSlide(idx)}
            disabled={isAnimating}
            className={cn(
              'h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed',
              currentIndex === idx
                ? 'bg-gradient-to-r from-amber-800 to-amber-700 w-8 shadow-md'
                : 'bg-amber-200 w-3 hover:bg-amber-300 hover:scale-110'
            )}
            aria-label={`Ir para produto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
