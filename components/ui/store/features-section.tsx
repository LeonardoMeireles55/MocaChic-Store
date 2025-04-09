import { FeatureCard } from '@/components/ui/store/feature-card'
import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeaturesSectionProps {
  features: Feature[]
}

export function FeaturesSection({ features }: Readonly<FeaturesSectionProps>) {
  return (
    <section id='features' className='py-16 bg-white'>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard
              key={`${index}_${feature.title}`}
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
