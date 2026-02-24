'use client'

import { useEffect, useState } from 'react'

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    // Fetch view count and increment
    const incrementViews = async () => {
      try {
        const res = await fetch(`/api/views/${slug}`, { method: 'POST' })
        const data = await res.json()
        setViews(data.views)
      } catch (error) {
        console.error('Error fetching views:', error)
      }
    }

    incrementViews()
  }, [slug])

  if (views === null) {
      return <span className="animate-pulse">Loading views...</span>
  }

  return (
    <span className="text-bio-green font-mono">
      {views.toLocaleString()} views
    </span>
  )
}
