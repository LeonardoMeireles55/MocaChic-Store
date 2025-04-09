import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: Readonly<BreadcrumbsProps>) {
  return (
    <nav
      aria-label='Breadcrumb'
      className='bg-white/80 backdrop-blur-sm py-2 border-b border-amber-100'
    >
      <div className='container px-4 md:px-6'>
        <ol className='flex items-center space-x-1 text-sm'>
          <li>
            <Link
              href='/'
              className='flex items-center text-amber-700 hover:text-amber-900 transition-colors'
              aria-label='Página inicial'
            >
              <Home className='h-4 w-4' />
              <span className='sr-only'>Início</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index + item.href} className='flex items-center'>
              <ChevronRight className='h-4 w-4 text-amber-400' />
              <Link
                href={item.href}
                className={`ml-1 text-amber-700 hover:text-amber-900 transition-colors ${
                  index === items.length - 1 ? 'font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
