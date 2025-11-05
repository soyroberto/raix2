import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import postsData from "@/generated/posts.json";

// Blog post type
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

// Load posts from generated JSON
const blogPosts: BlogPost[] = postsData as BlogPost[];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0EA5E9] to-[#7C3AED]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" onClick={scrollToTop}>
            <img
              src="/raix-logo.svg"
              alt="RAIX Logo"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:bg-white/20 bg-white/10">
                Blog
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              RAIX Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Insights on Copilot Studio, Cybersecurity, and AI for Australian Businesses
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-white/20 hover:bg-white/30 text-white border-white/30"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white/95 hover:bg-white transition-all hover:shadow-xl cursor-pointer group"
              >
                {post.image && (
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
                    <span className="font-semibold">{post.category}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-purple-50 text-purple-600">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-white/80">
                No blog posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-6">
        <div className="container mx-auto px-4 text-center text-white/80">
          <p>© 2025 RAIX - Cyber & AI Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

