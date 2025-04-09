import React, { useState } from 'react'
import Loading from '../ui/basic/loading'

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
  const [loading, setLoading] = useState(true)

  return (
    <div className='w-full max-w-3xl mx-auto my-6 relative'>
      <div className='relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl border-2 border-amber-200/30'>
        {loading && <Loading />} :
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title ?? 'YouTube video player'}
          onLoad={() => setLoading(false)}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
