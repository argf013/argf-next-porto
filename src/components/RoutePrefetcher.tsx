'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RoutePrefetcher() {
  const router = useRouter()

  useEffect(() => {
    const routes = ['/blog', '/experience', '/projects', '/pixel-gallery']
    routes.forEach(route => {
      router.prefetch(route)
    })
  }, [router])

  return null
}
