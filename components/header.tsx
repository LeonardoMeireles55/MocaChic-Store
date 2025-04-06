import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"
interface HeaderProps {
  imageSrc: string
  menuItems: {name: string, id: string, icon?: React.ReactNode}[]
  scrollToSection: (sectionId: string) => void
}

export function Header({ imageSrc, menuItems }: Readonly<HeaderProps>) {
  return (
    <header className="border-b border-amber-200 bg-white py-4 sticky top-0 z-50 shadow-sm">
            <div className="absolute inset-0 bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="text-2xl font-semibold text-amber-800 relative group">

          <span className="relative z-10">
              <Image src={imageSrc} alt="Logo" width={200} height={200}  />
            </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300 z-0"></span>
        </div>
        <nav className="space-x-8 md:flex hidden">
          {menuItems.map((item) => (
            
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-lg font-extralight underline text-amber-700 hover:text-amber-800 transition-colors relative group flex items-center gap-1"
            > 
              {item.icon}
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4 hidden">
          <Link href="#" className="text-stone-600 hover:text-amber-800 transition-colors">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favoritos</span>
          </Link>
          <Link href="#" className="text-stone-600 hover:text-amber-800 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Sacola</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

