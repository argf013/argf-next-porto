'use client'

import { useState, useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Inner component that uses useSearchParams
function LoadingIndicatorInner() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    // Untuk page refresh
    const handleStartLoading = () => setIsLoading(true)
    const handleStopLoading = () => setTimeout(() => setIsLoading(false), 300)

    window.addEventListener('beforeunload', handleStartLoading)
    window.addEventListener('DOMContentLoaded', handleStopLoading)

    // Untuk navigasi route
    const handleRouteChangeStart = () => setIsLoading(true)
    const handleRouteChangeComplete = () => setTimeout(() => setIsLoading(false), 300)

    // Event router Next.js
    document.addEventListener('nextjs:route-change-start', handleRouteChangeStart)
    document.addEventListener('nextjs:route-change-complete', handleRouteChangeComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStartLoading)
      window.removeEventListener('DOMContentLoaded', handleStopLoading)
      document.removeEventListener('nextjs:route-change-start', handleRouteChangeStart)
      document.removeEventListener('nextjs:route-change-complete', handleRouteChangeComplete)
    }
  }, [])

  // Reset loading state when pathname or searchParams change
  // This works as a fallback
  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  if (!isLoading) return null
  return (
    <div className='fixed top-0 left-0 w-full h-1 bg-transparent z-50'>
      <div className='h-full bg-white animate-progress-bar'></div>
    </div>
  )
}

// Wrapper component that doesn't directly use useSearchParams
export default function LoadingIndicator() {
  return (
    <Suspense fallback={null}>
      <LoadingIndicatorInner />
    </Suspense>
  )
}
