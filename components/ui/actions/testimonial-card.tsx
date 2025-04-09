interface TestimonialCardProps {
  name: string
  testimonial: string
}

export function TestimonialCard({ name, testimonial }: Readonly<TestimonialCardProps>) {
  return (
    <div className='rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 shadow-md border border-amber-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1'>
      <div className='flex items-center space-x-4 mb-6'>
        <div className='h-16 w-16 rounded-full bg-amber-200 flex items-center justify-center ring-4 ring-amber-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 text-amber-700'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
            <circle cx='12' cy='7' r='4' />
          </svg>
        </div>
        <div>
          <h3 className='font-medium text-stone-800 text-lg'>{name}</h3>
          <div className='flex items-center mt-1'>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i + testimonial[i]}
                className='w-4 h-4 text-amber-500 fill-current'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className='text-stone-600 leading-relaxed'>{testimonial}</p>
    </div>
  )
}
