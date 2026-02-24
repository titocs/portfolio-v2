import { redis } from '@/lib/redis'
import { NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: NextRequest, { params }: any) {
  // Wait for params to be ready if needed, though usually params are passed as second arg
  // In Next.js 15, params is a promise in layouts/pages, but in API routes?
  // Docs say params is the second argument context.
  // const slug = params.slug
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }

  // Increment view count
  const views = await redis.incr(`views:${slug}`)

  return NextResponse.json({ views })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: NextRequest, { params }: any) {
  const { slug } = await params;
  
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }

  const views = await redis.get<number>(`views:${slug}`) ?? 0

  return NextResponse.json({ views })
}
