import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Linkedin } from "lucide-react";
import { Link, useParams } from "wouter";
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
const blogPostsArray: BlogPost[] = postsData as BlogPost[];
const blogPosts: Record<string, BlogPost> = Object.fromEntries(
  blogPostsArray.map(post => [post.slug, post])
);

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0EA5E9] to-[#7C3AED]">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="outline" className="bg-white/20 text-white border-white/30">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const text = `${post.title} - ${post.excerpt}`;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
      'width=600,height=400'
    );
  };

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
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Blog
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            )}
            
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
                <span className="font-semibold">{post.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
                <span>By {post.author}</span>
              </div>

              {/* Share Button */}
              <div className="flex gap-3 pb-6 border-b">
                <Button
                  onClick={shareOnLinkedIn}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 
                prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
            <p className="text-gray-600 mb-4">
              Join the conversation! Share your thoughts and questions below.
            </p>
            
            {/* Placeholder for comments - in production, integrate with a service like Disqus or Giscus */}
            <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
              <p>Comments section coming soon!</p>
              <p className="text-sm mt-2">
                In the meantime, feel free to <Link href="/#contact"><a className="text-purple-600 hover:underline">contact me</a></Link> directly.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-white/80">
          <p>© 2025 RAIX - Cyber & AI Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

