import { notesData, Chapter } from '@/lib/notesData'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, ChevronLeft, Menu } from 'lucide-react'

interface ChapterPageProps {
  params: Promise<{ topic: string; chapter: string }>;
}

export async function generateStaticParams() {
  const params: { topic: string; chapter: string }[] = []
  
  notesData.forEach((topic) => {
    topic.levels.forEach((level) => {
      level.chapters.forEach((chapter) => {
        if (chapter.isAvailable) {
          params.push({
            topic: topic.id,
            chapter: chapter.id,
          })
        }
      })
    })
  })

  return params
}

export default async function ChapterPage(props: ChapterPageProps) {
  const params = await props.params
  const { topic: topicId, chapter: chapterId } = params

  const topicData = notesData.find((t) => t.id === topicId)
  if (!topicData) notFound()

  let currentChapter: Chapter | null = null
  let currentLevelTitle = ''
  
  // Find current chapter
  topicData.levels.forEach((level) => {
    const chapter = level.chapters.find(c => c.id === chapterId)
    if (chapter) {
      currentChapter = chapter
      currentLevelTitle = level.title
    }
  })

  if (!currentChapter || !currentChapter.isAvailable) {
    notFound()
  }

  // Calculate next and previous chapters for footer navigation
  let allAvailableChapters: { id: string, title: string }[] = []
  topicData.levels.forEach(level => {
    level.chapters.forEach(c => {
      if (c.isAvailable) {
        allAvailableChapters.push({ id: c.id, title: c.title })
      }
    })
  })

  const currentIndex = allAvailableChapters.findIndex(c => c.id === chapterId)
  const prevChapter = currentIndex > 0 ? allAvailableChapters[currentIndex - 1] : null
  const nextChapter = currentIndex < allAvailableChapters.length - 1 ? allAvailableChapters[currentIndex + 1] : null

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-24 bg-[#0a0a0a]">
      
      {/* Sidebar Navigation */}
      <aside className="hidden md:block w-72 shrink-0 border-r border-white/10 p-6 overflow-y-auto h-[calc(100vh-6rem)] sticky top-24 custom-scrollbar">
        <Link href={`/notes/${topicData.id}`} className="inline-flex items-center text-gray-500 hover:text-bio-green transition-colors font-mono text-xs mb-8 group">
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          cd .. /{topicData.id}
        </Link>
        <h3 className="text-white font-bold mb-6 truncate" title={topicData.title}>
          {topicData.title}
        </h3>

        <nav className="space-y-8">
          {topicData.levels.map((level) => (
            <div key={level.id}>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                {level.title}
              </h4>
              <ul className="space-y-2">
                {level.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    {chapter.isAvailable ? (
                      <Link 
                        href={`/notes/${topicData.id}/${chapter.id}`}
                        className={`block text-sm px-3 py-2 rounded-md transition-colors ${
                          chapter.id === chapterId 
                            ? 'bg-bio-green/10 text-bio-green font-medium' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {chapter.title}
                      </Link>
                    ) : (
                      <span className="block text-sm px-3 py-2 text-gray-600 cursor-not-allowed">
                        {chapter.title} (Soon)
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 md:py-12 lg:px-12">
        {/* Mobile Sidebar Toggle (Placeholder functionality) */}
        <div className="md:hidden flex items-center gap-3 text-gray-400 mb-8 border-b border-white/10 pb-4">
          <Menu className="w-5 h-5" />
          <span className="text-sm font-mono truncate">{topicData.title} / {currentLevelTitle}</span>
        </div>

        {/* Breadcrumb */}
        <div className="text-xs font-mono text-bio-green mb-4">
          Learning Paths / {topicData.title} / {currentLevelTitle}
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-8 prose-h2:mt-12 prose-a:text-bio-green hover:prose-a:text-white prose-a:transition-colors max-w-none">
          {/* Note: In a real app we would use react-markdown or next-mdx-remote here. 
              Since content is plaintext/raw markdown mock, we'll render it simply. 
              Ideally we would parse it. For now, since content strings in mock data already have '# H1', 
              we'll do a primitive render. */}
          
          <div className="whitespace-pre-wrap text-gray-200 leading-relaxed font-inter">
            {currentChapter.content}
          </div>
          
          {/* Placeholder extra content to show scrolling */}
          <div className="mt-12 p-6 bg-[#111] rounded-xl border border-white/10">
            <h3 className="text-white text-xl font-bold mb-4 font-inter">Author's Note</h3>
            <p className="text-gray-400 text-base m-0">
              This is a digital garden entry. These notes are living documents and might be updated frequently as I learn and explore more about this topic.
            </p>
          </div>
        </article>

        {/* Footer Navigation (Next / Prev) */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevChapter ? (
            <Link href={`/notes/${topicData.id}/${prevChapter.id}`} className="flex flex-col p-4 rounded-xl border border-white/5 hover:border-bio-green/30 bg-[#111]/50 hover:bg-[#111] transition-all group group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="text-xs text-gray-500 font-mono mb-2 flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform text-bio-green" /> 
                Previous Chapter
              </span>
              <span className="text-gray-200 font-medium truncate">{prevChapter.title}</span>
            </Link>
          ) : <div />}

          {nextChapter ? (
            <Link href={`/notes/${topicData.id}/${nextChapter.id}`} className="flex flex-col items-end text-right p-4 rounded-xl border border-white/5 hover:border-bio-green/30 bg-[#111]/50 hover:bg-[#111] transition-all group group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="text-xs text-gray-500 font-mono mb-2 flex items-center">
                Next Chapter 
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-bio-green" />
              </span>
              <span className="text-gray-200 font-medium truncate">{nextChapter.title}</span>
            </Link>
          ) : <div />}
        </div>
      </main>

    </div>
  )
}
