'use client'

import Giscus from '@giscus/react'

export default function GiscusComments() {
  return (
    <div className="mt-16 border-t border-white/10 pt-10 text-center">
      {/* 
        <Giscus
          id="comments"
          repo="username/repo" // User needs to update this
          repoId="R_kgDORK..." // User needs to update this
          category="General"
          categoryId="DIC_kwDORK..." // User needs to update this
          mapping="pathname"
          term="Welcome to my blog!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark_dimmed"
          lang="en"
          loading="lazy"
        />
      */}
      <p className="text-sm font-mono text-gray-400">
        [System Message: Giscus comments are currently disabled. Please configure your GitHub repository in <code className="text-bio-green">src/components/GiscusComments.tsx</code> to enable them.]
      </p>
    </div>
  )
}
