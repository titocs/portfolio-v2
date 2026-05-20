import { blogPosts } from '@/lib/blogData'
import { notFound } from 'next/navigation'
import ViewCounter from '@/components/ViewCounter'
import GiscusComments from '@/components/GiscusComments'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock } from 'lucide-react'

// Generate static params for all our dummy posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id, // We are using 'id' as the slug parameter here
  }))
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost(props: BlogPostProps) {
  const params = await props.params
  const { slug } = params
  
  // Find the post by its ID (which is used as the slug)
  const post = blogPosts.find((p) => p.id === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-bio-green transition-colors font-mono text-sm mb-10 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          cd .. /blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm font-mono">
              <Clock className="w-4 h-4 mr-1.5" />
              {post.readTime}
            </div>
          </div>
        
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-bio-green">
              <Image
                src="/images/profile-foto.webp"
                alt="Tito Candraseptio"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-white font-medium text-lg">Tito Candra Septio</p>
              <p className="text-gray-400 text-sm font-mono">Author</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-mono pb-8 border-b border-white/10">
            <span>{post.date}</span>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-bio-green">{tag}</span>
              ))}
            </div>
            <span className="text-gray-600">|</span>
            <ViewCounter slug={slug} />
          </div>
        </header>

        {/* Since we don't have real markdown files, we'll mock the body content for now using the excerpt */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
           <p className="text-xl text-gray-300 leading-relaxed mb-8">
             {post.excerpt}
           </p>
           
           <h2 className="text-2xl font-bold font-mono text-white mt-12 mb-6">Placeholder Content</h2>
           <p className="text-gray-400 leading-relaxed mb-6">
             This is placeholder text because we are currently using dummy data. In the future, this section will fetch real markdown or MDX files containing the full body of the article.
           </p>
           <p className="text-gray-400 leading-relaxed mb-6">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
           <div className="bg-[#111] p-6 rounded-lg border border-white/10 my-8">
             <code className="text-bio-green font-mono text-sm">
                // Example Code Block<br/>
                function initializeHack() {'{'}<br/>
                &nbsp;&nbsp;console.log("Accessing mainframe...");<br/>
                {'}'}
             </code>
           </div>
        </div>

        <GiscusComments />
      </div>
    </article>
  )
}
