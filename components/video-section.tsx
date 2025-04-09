import type React from "react"
import { YouTubeVideo } from "./youtube-video"

interface VideoSectionProps {
  videoId: string
  title: string
  description: string
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoId, title, description }) => {
  return (
    <section className="py-12 bg-amber-100 relative overflow-hidden">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-top opacity-30"></div>
      <div className="absolute inset-0 elegant-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-block bg-amber-100/90 px-3 py-1 rounded-full text-amber-800 text-xs font-medium mb-2 shadow-sm">
            {title}
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl leading-tight drop-shadow-md">
            Conheça Nossa Coleção
          </h2>
          <p className="text-amber-50/90 text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-3">{description}</p>
        </div>
        <YouTubeVideo videoId={videoId} title={title} />
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
      <div className="absolute -bottom-8 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-16 -right-16 w-64 h-64 bg-amber-700/10 rounded-full blur-2xl"></div>
    </section>
  )
}
