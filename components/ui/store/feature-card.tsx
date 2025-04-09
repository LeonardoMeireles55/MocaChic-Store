import type React from "react"
import { memo } from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCardComponent({ icon, title, description }: Readonly<FeatureCardProps>) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-amber-50 border border-amber-100 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-600 text-sm">{description}</p>
    </div>
  )
}

const MemoizedFeatureCard = memo(FeatureCardComponent)

export { MemoizedFeatureCard as FeatureCard }
export default MemoizedFeatureCard
