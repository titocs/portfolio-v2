import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  post: BlogPost;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <div className="group flex flex-col h-full bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden hover:border-bio-green/30 transition-colors duration-300">
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read {post.title}</span>
      </Link>

      {/* Image Container */}
      <div className="relative h-48 w-full bg-black overflow-hidden flex-shrink-0">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10 opacity-60"></div>
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/600x400/101010/10b981?text=${encodeURIComponent(post.title)}&font=Roboto`;
            }}
          />
        ) : (
          <div className="w-full h-full bg-[#151515] flex items-center justify-center">
            <span className="text-bio-green/20 text-2xl font-mono">IMG_NULL</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-5 relative z-20">
        <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-3">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-100 mb-3 line-clamp-2 leading-snug group-hover:text-bio-green transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex gap-2 text-xs font-mono text-gray-500 truncate mr-2">
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="hover:text-bio-green transition-colors">{tag}</span>
            ))}
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-bio-green transition-colors flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
