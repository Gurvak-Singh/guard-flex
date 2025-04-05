import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Security Measures Every Business Should Implement',
      excerpt: 'Learn the essential security measures that every business should have in place to protect their assets and employees.',
      date: 'Apr 2, 2025',
      author: 'Alex Johnson',
      readTime: '5 min read',
      category: 'Business Security',
      image: 'business-security'
    },
    {
      id: '2',
      title: 'How to Choose the Right Security Guard for Your Event',
      excerpt: 'Finding the right security personnel for your event is crucial. Here\'s what to look for when hiring security for your next event.',
      date: 'Mar 28, 2025',
      author: 'Michael Chen',
      readTime: '7 min read',
      category: 'Event Security',
      image: 'event-security'
    },
    {
      id: '3',
      title: 'Security Industry Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with the latest trends and innovations shaping the security industry this year.',
      date: 'Mar 15, 2025',
      author: 'Sarah Williams',
      readTime: '6 min read',
      category: 'Industry Trends',
      image: 'trends'
    },
    {
      id: '4',
      title: 'Building a Career as a Security Professional',
      excerpt: 'Explore the various career paths and opportunities available in the security industry, and how to advance your career.',
      date: 'Mar 10, 2025',
      author: 'David Reynolds',
      readTime: '8 min read',
      category: 'Career Development',
      image: 'career'
    },
    {
      id: '5',
      title: 'The Role of Technology in Modern Security Solutions',
      excerpt: 'How advanced technology is transforming security operations and creating new opportunities for better protection.',
      date: 'Feb 28, 2025',
      author: 'Sarah Williams',
      readTime: '5 min read',
      category: 'Technology',
      image: 'tech'
    },
    {
      id: '6',
      title: 'Security Guard Licensing Requirements by State',
      excerpt: 'A comprehensive guide to the licensing requirements for security guards across different states.',
      date: 'Feb 20, 2025',
      author: 'Michael Chen',
      readTime: '10 min read',
      category: 'Compliance',
      image: 'licensing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Insights Blog</h1>
            <p className="text-xl text-gray-600">
              Expert advice, industry trends, and security best practices
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    How AI is Revolutionizing Security Monitoring
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Artificial intelligence is changing how we monitor and respond to security threats. 
                    Discover how AI-powered systems are enhancing traditional security measures.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">Apr 4, 2025</span>
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">Sarah Williams</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                  <div>
                    <Link href="/blog/ai-security-monitoring">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-blue-100 h-64 md:h-auto flex items-center justify-center">
                  <div className="text-blue-300 text-8xl font-bold">AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-200">
                  All Topics
                </Button>
                <Button variant="outline" className="border-gray-200">
                  Business Security
                </Button>
                <Button variant="outline" className="border-gray-200">
                  Career
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className={`h-48 bg-${post.image === 'business-security' ? 'blue' : post.image === 'event-security' ? 'green' : post.image === 'trends' ? 'purple' : post.image === 'career' ? 'yellow' : post.image === 'tech' ? 'indigo' : 'red'}-100 flex items-center justify-center`}>
                    <span className={`text-${post.image === 'business-security' ? 'blue' : post.image === 'event-security' ? 'green' : post.image === 'trends' ? 'purple' : post.image === 'career' ? 'yellow' : post.image === 'tech' ? 'indigo' : 'red'}-300 text-6xl font-bold`}>
                      {post.image.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">{post.date}</span>
                      <span className="mr-4">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm font-medium">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-gray-200">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest security insights and tips delivered straight to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
