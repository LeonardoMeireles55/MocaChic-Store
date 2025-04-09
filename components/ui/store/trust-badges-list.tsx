import TrustBadge from "@/components/ui/store/trust-badges"
import { Shield, Truck, CreditCard, Clock } from "lucide-react"

const TrustBadgesList = () => {
  const badges = [
    {
      icon: <Shield className="h-5 w-5 text-amber-700" />,
      title: "Compra Segura",
      description: "Seus dados protegidos",
    },
    {
      icon: <Truck className="h-5 w-5 text-amber-700" />,
      title: "Entrega Rápida",
      description: "Para todo o Brasil",
    },
    {
      icon: <CreditCard className="h-5 w-5 text-amber-700" />,
      title: "Pagamento Seguro",
      description: "Múltiplas formas de pagamento",
    },
    {
      icon: <Clock className="h-5 w-5 text-amber-700" />,
      title: "Atendimento",
      description: "Seg-Sex: 9h-18h | Sáb: 9h-17h",
    },
  ]

  return (
    <section className="py-6 bg-white border-y border-amber-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <TrustBadge
              key={badge.title}
              icon={badge.icon}
              title={badge.title}
              description={badge.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


export default TrustBadgesList