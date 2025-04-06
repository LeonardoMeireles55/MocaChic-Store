import { TestimonialCard } from "@/components/testimonial-card"

interface Testimonial {
  name: string
  testimonial: string
}

interface TestimonialsSectionProps {
  subtitle: string
  title: string
  testimonials: Testimonial[]
}

export function TestimonialsSection({ subtitle, title, testimonials }: Readonly<TestimonialsSectionProps>) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-50/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-amber-700 font-medium mb-3">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 relative">
            <span className="relative">
              {title}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-300 rounded-full"></span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index + testimonial.name}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

