"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import ArticleCard from "@/components/blog/ArticleCard";
import { blogPosts, getAllCategories } from "@/lib/blogData";

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 6;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_ITEMS);

  const categories = useMemo(() => getAllCategories(), []);

  // Filter and Search Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Separate Featured Post
  const featuredPost = useMemo(() => {
    // Only show featured post if there is no search query
    if (searchQuery) return null;
    
    const fp = filteredPosts.find((p) => p.featured);
    if (!fp) return null;
    
    // Additional check: If a specific category is selected, ensure the featured post belongs to it
    if (selectedCategory !== "All" && fp.category !== selectedCategory) return null;

    return fp;
  }, [filteredPosts, searchQuery, selectedCategory]);

  // Visible Items Logic
  const visiblePosts = useMemo(() => {
    // Exclude featured post from the grid if it's currently being shown at the top
    const postsForGrid = featuredPost
      ? filteredPosts.filter((p) => p.id !== featuredPost.id)
      : filteredPosts;

    return postsForGrid.slice(0, visibleItemsCount);
  }, [filteredPosts, visibleItemsCount, featuredPost]);

  const totalPostsCount = featuredPost 
    ? filteredPosts.length - 1 
    : filteredPosts.length;
  
  const hasMorePosts = totalPostsCount > visibleItemsCount;

  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleItemsCount(INITIAL_ITEMS); // Reset visible items on search
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchQuery(""); // Optionally clear search when changing categories
    setVisibleItemsCount(INITIAL_ITEMS);
  };

  const handleShowMore = () => {
    setVisibleItemsCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-bio-green text-sm font-bold tracking-widest uppercase mb-4">
          Live Feed
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          SYSTEM_LOGS
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Decoding the matrix, one bug at a time. Thoughts on software
          architecture, security, and the future of web.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Filters and Search Divider Line */}
        <div className="w-full h-px bg-white/5 mb-8"></div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-bio-green text-black font-semibold"
                    : "border border-white/10 text-gray-400 hover:text-white hover:border-white/30 bg-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 group z-20">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-bio-green transition-colors duration-300" />
            <input
              type="text"
              placeholder="grep search_query..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-[#111] border border-white/10 text-white rounded-md pl-12 pr-12 py-3 text-sm font-mono focus:outline-none focus:border-bio-green/50 focus:ring-1 focus:ring-bio-green/50 transition-all duration-300 placeholder:text-gray-600 relative z-20"
            />
             <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 border border-white/10 rounded text-[10px] text-gray-500 font-mono flex items-center bg-black z-20">
                ⌘K
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-12">
          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-4">
              <FeaturedArticle post={featuredPost} />
            </div>
          )}

          {/* Empty State */}
          {visiblePosts.length === 0 && !featuredPost && (
            <div className="text-center py-32 border border-white/5 rounded-xl bg-[#0a0a0a]">
              <p className="font-mono text-gray-500 text-lg">
                &gt; No logs found matching criteria.
              </p>
            </div>
          )}

          {/* Article Grid & Show More */}
          {visiblePosts.length > 0 && (
            <div className={`relative ${hasMorePosts ? 'pb-32' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (index % ITEMS_PER_LOAD) * 0.15,
                      ease: "easeOut"
                    }}
                  >
                    <ArticleCard post={post} />
                  </motion.div>
                ))}
              </div>

              {/* Gradient Overlay & Show More Button */}
              {hasMorePosts && (
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-void-black via-void-black/90 to-transparent flex items-end justify-center pb-4 pointer-events-none z-10">
                  <button
                    onClick={handleShowMore}
                    className="pointer-events-auto px-8 py-3 bg-bio-green/10 text-bio-green border border-bio-green/30 hover:bg-bio-green hover:text-black font-semibold rounded-md font-mono transition-all duration-300 flex items-center justify-center space-x-2 w-full md:w-auto backdrop-blur-sm"
                  >
                    <span>Show More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
