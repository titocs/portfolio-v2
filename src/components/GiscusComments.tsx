'use client'

import Giscus from '@giscus/react'

export default function GiscusComments() {
  return (
    <div className="mt-16 border-t border-white/10 pt-10 text-center">
      <Giscus
        id="comments"
        repo="titocs/portfolio-v2"
        repoId="R_kgDORXd5og"
        category="General"
        categoryId="DIC_kwDORXd5os4C3GLN"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="https://titocandraseptio.vercel.app/giscus/theme.css"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
