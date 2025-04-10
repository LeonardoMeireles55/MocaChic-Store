'use client'

import type React from 'react'

import { Heart, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
interface HeaderProps {
  imageSrc: string
  menuItems: { name: string; id: string; icon: React.ReactNode }[]
  scrollToSection: (sectionId: string) => void
}

const Header = ({ imageSrc, menuItems, scrollToSection }: Readonly<HeaderProps>) => {
  return (
    <header className='border-b border-amber-200/50 bg-white/95 py-4 sticky top-0 z-50 shadow-sm backdrop-blur-md'>
      <div className="absolute inset-0 bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      <div className='container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between'>
        <div className='text-2xl font-semibold text-amber-800 relative group'>
          <span className='relative z-10 transition-transform duration-500 hover:scale-105'>
            <Image
              src={imageSrc || '/placeholder.svg'}
              alt='Logo'
              width={100}
              height={100}

              style={{ width: 'auto', height: 'auto' }}
              className='drop-shadow-sm'
            />
          </span>
        </div>
        <nav className='md:space-x-8 space-x-4 flex flex-row md:flex-row'>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[6px] md:text-lg font-extralight text-amber-700 hover:text-amber-800 transition-all duration-300
               relative group flex items-center gap-1 after:content-[''] after:absolute after:-bottom-1
               after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
        <div className='items-center space-x-4 hidden'>
          <Link href='#' className='text-stone-600 hover:text-amber-800 transition-colors'>
            <Heart className='h-5 w-5' />
            <span className='sr-only'>Favoritos</span>
          </Link>
          <Link href='#' className='text-stone-600 hover:text-amber-800 transition-colors'>
            <ShoppingBag className='h-5 w-5' />
            <span className='sr-only'>Sacola</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header