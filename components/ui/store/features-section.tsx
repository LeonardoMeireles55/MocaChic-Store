import type React from "react"
import { FeatureCard } from "@/components/ui/store/feature-card"
import { memo } from "react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesSectionProps {
  features: Feature[]
}

function FeaturesSectionComponent({ features }: Readonly<FeaturesSectionProps>) {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const MemoizedFeaturesSection = memo(FeaturesSectionComponent)

export { MemoizedFeaturesSection as FeaturesSection }
export default MemoizedFeaturesSection
