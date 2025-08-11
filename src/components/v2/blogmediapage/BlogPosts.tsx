// src/components/v2/blogmediapage/BlogPosts.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';
import { blogService, BlogPost, formatDate } from '../../../services/blogService';
import { isSanityConfigured } from '../../../services/sanityClient';

const contentTypes = [
  {
    title: 'Educational Articles',
    description: 'Covering detox science, mindful nutrition, and evidence-based wellness tips',
    icon: '📚',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Altibbe News',
    description: 'Announcements of milestones or new partnerships',
    icon: '📰',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Impact Stories',
    description: 'Successes and case studies of Altibbe clients',
    icon: '🌟',
    color: 'bg-amber-50 border-amber-200'
  },
  {
    title: 'Social Highlights',
    description: 'Embedded Instagram posts or tweets showcasing day-to-day engagement and tips',
    icon: '📱',
    color: 'bg-purple-50 border-purple-200'
  }
];

export default function BlogPosts() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sanityConfigured, setSanityConfigured] = useState(false);

  useEffect(() => {
    // Check if Sanity is configured
    setSanityConfigured(isSanityConfigured());

    // Handle ESC key to close modal
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPost) {
        setSelectedPost(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedPost]);

  // Fetch blogs from service (will use static blogs until Sanity is set up)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const blogData = await blogService.getAllBlogs();
        setBlogs(blogData);
      } catch (err) {
        setError('Failed to fetch blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    // Close modal if clicking on overlay (not content)
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Loading skeleton component
  const BlogCardSkeleton = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="animate-pulse h-48 w-full bg-gray-200"></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="h-6 w-full mb-3 bg-gray-200 rounded"></div>
        <div className="h-4 w-full mb-2 bg-gray-200 rounded"></div>
        <div className="h-4 w-3/4 mb-4 bg-gray-200 rounded"></div>
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="blog-posts" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Blog Content
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
              On our blog, you'll find articles that range from science-backed wellness tips to deep dives into 
              food transparency. Our team and guest experts share knowledge on topics that connect tradition 
              and innovation. Whether you're curious about how blockchain can combat food fraud or looking 
              for sustainable nutrition advice, our posts aim to enlighten and empower.
            </p>
          </motion.div>

          {/* Content Types Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contentTypes.map((type, idx) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                viewport={{ once: true }}
                className={`${type.color} border rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Latest Posts */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Posts</h3>
            
            {error && (
              <div className="text-center mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
                  <p className="text-red-600">⚠️ {error}</p>
                  <p className="text-red-500 text-sm mt-2">Showing fallback content - Sanity not yet configured</p>
                </div>
              </div>
            )}
            
            {!error && (
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-2">
                  Click on any post to read the full article with in-depth insights and expert analysis.
                </p>
                {sanityConfigured ? (
                  <span className="text-sm text-green-600 font-semibold">
                    🔥 Connected to Sanity CMS - Live content from your admin!
                  </span>
                ) : (
                  <span className="text-sm text-blue-600 font-semibold">
                    ✨ Showing sample content - Configure Sanity to connect your admin writer!
                  </span>
                )}
              </div>
            )}
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {loading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, idx) => (
                  <BlogCardSkeleton key={idx} />
                ))
              ) : (
                // Actual blog posts
                blogs.slice(0, 6).map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                    onClick={() => handlePostClick(post)}
                  >
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=250&q=80';
                      }}
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span 
                          className="text-xs font-semibold uppercase tracking-wide"
                          style={{ color: post.category.color || '#10B981' }}
                        >
                          {post.category.icon} {post.category.title}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {post.author.image && (
                            <img 
                              src={post.author.image} 
                              alt={post.author.name}
                              className="w-5 h-5 rounded-full"
                            />
                          )}
                          <span className="text-xs text-gray-500">{post.author.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="text-center">
              <ArrowButton href="/blog-media" classname="px-8 py-3 text-lg">
                See All Posts
              </ArrowButton>
            </div>
          </motion.div>

          {/* Global Stories Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-16 bg-accent-sage rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Stories from Around the World
            </h3>
            <p className="text-lg text-organic-text-light leading-relaxed">
              We feature stories from around the world – like how a small organic farm in India achieved 
              a Hedamo Gold label, or how policy changes in the EU might affect ingredient transparency. 
              Don't miss our Impact Stories where we spotlight producers who transformed their businesses 
              with Altibbe's guidance, or communities benefiting from better transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.imageAlt || selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
              {/* Meta Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span 
                    className="text-sm font-semibold uppercase tracking-wide px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: selectedPost.category.color || '#10B981',
                      color: 'white'
                    }}
                  >
                    {selectedPost.category.icon} {selectedPost.category.title}
                  </span>
                  <span className="text-sm text-gray-500">{selectedPost.readTime}</span>
                </div>
                <span className="text-sm text-gray-500">{formatDate(selectedPost.publishedAt)}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {selectedPost.title}
              </h1>

              {/* Author */}
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
                {selectedPost.author.image && (
                  <img 
                    src={selectedPost.author.image} 
                    alt={selectedPost.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{selectedPost.author.name}</p>
                  {selectedPost.author.title && (
                    <p className="text-sm text-gray-600">{selectedPost.author.title}</p>
                  )}
                </div>
              </div>

              {/* Excerpt */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {selectedPost.content && selectedPost.content.length > 0 ? (
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: blogService.richTextToHtml(selectedPost.content) 
                    }} 
                  />
                ) : (
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      This is a comprehensive article that dives deep into the topic. Our expert team has researched 
                      and compiled valuable insights to help you understand the latest developments in health and wellness.
                    </p>
                    <p>
                      At Altibbe, we believe in the power of combining traditional wisdom with modern science. This 
                      approach allows us to provide you with well-rounded perspectives on health transparency and 
                      wellness innovation.
                    </p>
                    <p>
                      Stay tuned for more in-depth content as we continue to expand our knowledge base and share 
                      valuable insights with our community.
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              {selectedPost.tags && selectedPost.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 