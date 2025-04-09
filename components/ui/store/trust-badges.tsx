import type React from "react"

interface TrustBadgeProps {
  icon: React.ReactNode
  title: string
  description: string
}

const TrustBadge = ({ icon, title, description }: Readonly<TrustBadgeProps>) => {
  return (
    <div className="flex flex-col items-center text-center p-3">
      <div className="bg-amber-100 p-2 rounded-full mb-2">{icon}</div>
      <h3 className="text-sm font-medium text-amber-900">{title}</h3>
      <p className="text-xs text-amber-700/70 mt-1">{description}</p>
    </div>
  )
}

export default TrustBadge