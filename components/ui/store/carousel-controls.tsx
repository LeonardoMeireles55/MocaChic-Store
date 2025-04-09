import { Button } from "@/components/ui/basic/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselControlsProps {
  currentIndex: number
  productsCount: number
  isAnimating: boolean
  prevSlide: () => void
  nextSlide: () => void
  goToSlide: (index: number) => void
}

const CarouselControls = ({
  currentIndex,
  productsCount,
  isAnimating,
  prevSlide,
  nextSlide,
  goToSlide,
}: CarouselControlsProps) => {
  return (
    <>
      <Button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 md:p-3 text-amber-800 shadow-md hover:bg-white hover:text-amber-900 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="Produto anterior"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>
      <Button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 md:p-3 text-amber-800 shadow-md hover:bg-white hover:text-amber-900 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="Próximo produto"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Navegação do carrossel">
        {Array.from({ length: productsCount }).map((_, idx) => (
          <Button
            key={`dot-${idx} + ${currentIndex}`}
            onClick={() => goToSlide(idx)}
            disabled={isAnimating}
            className={cn(
              "h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
              currentIndex === idx
                ? "bg-gradient-to-r from-amber-800 to-amber-700 w-8 shadow-md"
                : "bg-amber-200 w-3 hover:bg-amber-300 hover:scale-110",
            )}
            role="tab"
            aria-selected={currentIndex === idx}
            aria-label={`Ir para produto ${idx + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default CarouselControls