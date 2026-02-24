import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";
import { Clock, Star } from "lucide-react";

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a] group h-[400px]">
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-20">
        <span className="sr-only">Read {post.title}</span>
      </Link>
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden bg-black flex items-center justify-center">
            {/* Using a placeholder gradient for now since we lack actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-bio-green/20 to-black mix-blend-overlay z-10"></div>
             {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x600/101010/10b981?text=${encodeURIComponent(post.title)}&font=Roboto`;
                }}
              />
            ) : (
                <div className="w-full h-full bg-[#111] flex items-center justify-center">
                    <span className="text-bio-green/20 text-4xl font-mono">IMG_NULL</span>
                </div>
            )}
        </div>

        {/* Content Section */}
        <div className="relative w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <Star className="absolute top-6 right-6 w-16 h-16 text-white/5 z-0" strokeWidth={1} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-bio-green text-black text-xs font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
                Featured
              </span>
              <div className="flex items-center text-gray-400 text-sm font-mono">
                <Clock className="w-4 h-4 mr-1.5" />
                {post.readTime}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-bio-green transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-bio-green text-xs font-mono bg-bio-green/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-bio-green text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
