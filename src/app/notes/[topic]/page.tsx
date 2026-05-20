import { notesData } from '@/lib/notesData'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Lock, Layout, Server, BookOpen, Layers } from 'lucide-react'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'layout':
      return <Layout className="w-12 h-12 text-bio-green" />
    case 'server':
      return <Server className="w-12 h-12 text-bio-green" />
    default:
      return <BookOpen className="w-12 h-12 text-bio-green" />
  }
}

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return notesData.map((topic) => ({
    topic: topic.id,
  }))
}

export default async function TopicPage(props: TopicPageProps) {
  const params = await props.params
  const { topic: topicId } = params

  const topicData = notesData.find((t) => t.id === topicId)

  if (!topicData) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/notes" className="inline-flex items-center text-gray-500 hover:text-bio-green transition-colors font-mono text-sm mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          cd .. /notes
        </Link>
        
        {/* Topic Header Area */}
        <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 pb-12 border-b border-white/10">
          <div className="bg-white/5 w-24 h-24 rounded-2xl flex items-center justify-center border border-white/5 shrink-0">
            {getIcon(topicData.icon)}
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{topicData.title}</h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-2xl">{topicData.description}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
              <span className="flex items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Layers className="w-4 h-4 mr-2 text-bio-green" />
                {topicData.levelRange}
              </span>
              <span className="flex items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <BookOpen className="w-4 h-4 mr-2 text-bio-green" />
                {topicData.totalChapters} Chapters
              </span>
            </div>
          </div>
        </header>

        {/* Timeline / Roadmap Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
          {topicData.levels.map((level, index) => (
            <div key={level.id} className="relative">
              {/* Level Node on Timeline */}
              <div className="absolute -left-[45px] md:-left-[77px] mt-1.5 w-6 h-6 rounded-full bg-[#111] border-2 border-bio-green shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10" />

              <h2 className="text-2xl font-bold text-white mb-8 inline-block bg-white/5 px-4 py-2 rounded-lg border border-white/10">{level.title}</h2>
              
              <div className="grid gap-6">
                {level.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className="relative">
                     {/* Chapter Connection Line connecting level to chapter cards */}
                     <div className="absolute -left-[35px] md:-left-[68px] top-1/2 w-4 md:w-8 h-px bg-white/10" />
                     
                     <Link href={chapter.isAvailable ? `/notes/${topicData.id}/${chapter.id}` : '#'} className={`block ${!chapter.isAvailable && 'cursor-not-allowed opacity-60'}`}>
                       <div className={`p-6 rounded-xl border transition-all duration-300 ${chapter.isAvailable ? 'bg-[#111]/80 hover:border-bio-green/50 border-white/10 hover:shadow-lg' : 'bg-black/40 border-white/5'}`}>
                         <div className="flex items-center justify-between">
                           <div>
                             <span className="text-xs font-mono text-gray-500 mb-2 block">
                               Chapter {index + 1}.{chapterIndex + 1}
                             </span>
                             <h3 className={`text-xl font-bold ${chapter.isAvailable ? 'text-gray-200' : 'text-gray-500'}`}>
                               {chapter.title}
                             </h3>
                           </div>
                           
                           <div className="shrink-0 ml-4">
                             {chapter.isAvailable ? (
                               <CheckCircle2 className="w-6 h-6 text-bio-green" />
                             ) : (
                               <div className="flex items-center text-xs font-mono text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                 <Lock className="w-3 h-3 mr-2" /> Coming Soon
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
                     </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
