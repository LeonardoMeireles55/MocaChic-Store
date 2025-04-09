import { Star, Phone, Home } from 'lucide-react';

const menuItems = [
  { name: "Início", id: "home", href: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Contato", id: "footer", icon: <Phone className="h-5 w-5" /> },
  { name: "Coleções", id: "colecao", icon: <Star className="h-5 w-5" /> },
  { name: "Depoimentos", id: "testimonials", icon: <Star className="h-5 w-5" /> },
] 

export default menuItems