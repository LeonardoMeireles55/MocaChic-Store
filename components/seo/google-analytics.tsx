'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views when route changes
    if (window.gtag) {
      window.gtag('config', 'G-BT4QHBSH8N', {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-BT4QHBSH8N'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BT4QHBSH8N');
        `}
      </Script>
    </>
  )
}
