import type React from "react"

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl border-2 border-amber-200/30">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title ?? "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
