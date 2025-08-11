import { client, urlFor, isSanityConfigured } from './sanityClient'

// Blog post interface
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any[] // Sanity's rich text content
  image: string
  imageAlt?: string
  publishedAt: string
  category: {
    title: string
    slug: string
    icon?: string
    color?: string
  }
  author: {
    name: string
    title?: string
    image?: string
  }
  readTime?: string
  tags?: string[]
  featured?: boolean
}

// Sample blog data for fallback/demo
const SAMPLE_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Science Behind Natural Detox: Ancient Wisdom Meets Modern Research',
    slug: 'science-behind-natural-detox',
    excerpt: 'Discover how time-tested detox practices are backed by cutting-edge science and how they can transform your wellness journey.',
    content: [],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=400&q=80',
    imageAlt: 'Natural herbs and detox ingredients',
    publishedAt: '2024-03-15T10:00:00Z',
    category: {
      title: 'Educational Articles',
      slug: 'educational-articles',
      icon: '📚',
      color: '#10B981'
    },
    author: {
      name: 'Dr. Sarah Chen',
      title: 'Chief Health Officer',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80'
    },
    readTime: '5 min read',
    tags: ['detox', 'wellness', 'natural health'],
    featured: true
  },
  {
    id: '2',
    title: 'Rediscovering Ancient Wisdom for Modern Health Challenges',
    slug: 'ancient-wisdom-modern-health',
    excerpt: 'Explore how traditional healing practices are being validated by modern science and integrated into contemporary wellness approaches.',
    content: [],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&h=400&q=80',
    imageAlt: 'Traditional medicinal herbs and modern lab equipment',
    publishedAt: '2024-03-10T14:30:00Z',
    category: {
      title: 'Thought Leadership',
      slug: 'thought-leadership',
      icon: '🧠',
      color: '#8B5CF6'
    },
    author: {
      name: 'Shams Ahmed',
      title: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
    },
    readTime: '7 min read',
    tags: ['traditional medicine', 'innovation', 'research'],
    featured: false
  },
  {
    id: '3',
    title: 'How Blockchain Technology is Revolutionizing Food Transparency',
    slug: 'blockchain-food-transparency',
    excerpt: 'Understanding how distributed ledger technology is creating unprecedented levels of transparency in our food supply chain.',
    content: [],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&h=400&q=80',
    imageAlt: 'Digital network representing blockchain food tracking',
    publishedAt: '2024-03-05T09:15:00Z',
    category: {
      title: 'Technology',
      slug: 'technology',
      icon: '💻',
      color: '#06B6D4'
    },
    author: {
      name: 'Altibbe Team',
      title: 'Health Innovation Team'
    },
    readTime: '6 min read',
    tags: ['blockchain', 'transparency', 'food safety'],
    featured: false
  },
  {
    id: '4',
    title: 'Building Trust Through Transparency: Our Partnership Success Stories',
    slug: 'partnership-success-stories',
    excerpt: 'Real-world examples of how our transparency solutions have helped brands build consumer trust and improve their supply chains.',
    content: [],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&h=400&q=80',
    imageAlt: 'Business professionals shaking hands',
    publishedAt: '2024-02-28T16:45:00Z',
    category: {
      title: 'Impact Stories',
      slug: 'impact-stories',
      icon: '🌟',
      color: '#F59E0B'
    },
    author: {
      name: 'Altibbe Team',
      title: 'Health Innovation Team'
    },
    readTime: '4 min read',
    tags: ['partnerships', 'success stories', 'transparency'],
    featured: false
  },
  {
    id: '5',
    title: 'Mindful Nutrition: The Art of Eating with Intention',
    slug: 'mindful-nutrition-eating-intention',
    excerpt: 'Learn how mindful eating practices can transform your relationship with food and improve your overall health and well-being.',
    content: [],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&h=400&q=80',
    imageAlt: 'Beautiful healthy meal arranged mindfully',
    publishedAt: '2024-02-20T11:20:00Z',
    category: {
      title: 'Health Tips',
      slug: 'health-tips',
      icon: '🌿',
      color: '#059669'
    },
    author: {
      name: 'Dr. Sarah Chen',
      title: 'Chief Health Officer',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80'
    },
    readTime: '8 min read',
    tags: ['mindful eating', 'nutrition', 'wellness'],
    featured: true
  },
  {
    id: '6',
    title: 'The Future of Health: AI-Powered Personalized Wellness',
    slug: 'ai-powered-personalized-wellness',
    excerpt: 'Exploring how artificial intelligence is enabling truly personalized health recommendations based on individual biology and lifestyle.',
    content: [],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400&q=80',
    imageAlt: 'AI and health technology concept',
    publishedAt: '2024-02-15T13:10:00Z',
    category: {
      title: 'Altibbe News',
      slug: 'altibbe-news',
      icon: '📰',
      color: '#3B82F6'
    },
    author: {
      name: 'Shams Ahmed',
      title: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
    },
    readTime: '6 min read',
    tags: ['AI', 'personalization', 'future health'],
    featured: false
  }
]

// Blog service class
class BlogService {
  // Get all blog posts
  async getAllBlogs(): Promise<BlogPost[]> {
    if (!isSanityConfigured()) {
      console.log('Sanity not configured, using sample blogs')
      return SAMPLE_BLOGS
    }

    try {
      const query = `*[_type == "blogPost" && published == true] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        content,
        "image": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        publishedAt,
        readTime,
        featured,
        tags,
        "category": category->{title, "slug": slug.current, icon, "color": color.hex},
        "author": author->{name, title, "image": image.asset->url}
      }`

      const posts = await client.fetch(query)
      
      return posts.map((post: any) => ({
        id: post._id,
        title: post.title,
        slug: post.slug?.current || '',
        excerpt: post.excerpt || '',
        content: post.content || [],
        image: post.image || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400&q=80',
        imageAlt: post.imageAlt || post.title,
        publishedAt: post.publishedAt,
        category: post.category || { title: 'Uncategorized', slug: 'uncategorized' },
        author: post.author || { name: 'Altibbe Team' },
        readTime: post.readTime || '5 min read',
        tags: post.tags || [],
        featured: post.featured || false
      }))
    } catch (error) {
      console.error('Error fetching blogs from Sanity:', error)
      return SAMPLE_BLOGS
    }
  }

  // Get featured blog posts
  async getFeaturedBlogs(): Promise<BlogPost[]> {
    const allBlogs = await this.getAllBlogs()
    return allBlogs.filter(blog => blog.featured)
  }

  // Get blog by slug
  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    if (!isSanityConfigured()) {
      return SAMPLE_BLOGS.find(blog => blog.slug === slug) || null
    }

    try {
      const query = `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
        _id,
        title,
        slug,
        excerpt,
        content,
        "image": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        publishedAt,
        readTime,
        featured,
        tags,
        "category": category->{title, "slug": slug.current, icon, "color": color.hex},
        "author": author->{name, title, "image": image.asset->url}
      }`

      const post = await client.fetch(query, { slug })
      
      if (!post) return null

      return {
        id: post._id,
        title: post.title,
        slug: post.slug?.current || '',
        excerpt: post.excerpt || '',
        content: post.content || [],
        image: post.image || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400&q=80',
        imageAlt: post.imageAlt || post.title,
        publishedAt: post.publishedAt,
        category: post.category || { title: 'Uncategorized', slug: 'uncategorized' },
        author: post.author || { name: 'Altibbe Team' },
        readTime: post.readTime || '5 min read',
        tags: post.tags || [],
        featured: post.featured || false
      }
    } catch (error) {
      console.error('Error fetching blog by slug:', error)
      return SAMPLE_BLOGS.find(blog => blog.slug === slug) || null
    }
  }

  // Get blogs by category
  async getBlogsByCategory(categorySlug: string): Promise<BlogPost[]> {
    const allBlogs = await this.getAllBlogs()
    return allBlogs.filter(blog => blog.category.slug === categorySlug)
  }

  // Convert Sanity rich text to HTML (simplified)
  richTextToHtml(content: any[]): string {
    if (!content || !Array.isArray(content)) return ''
    
    return content.map(block => {
      if (block._type === 'block') {
        const text = block.children?.map((child: any) => child.text).join('') || ''
        
        switch (block.style) {
          case 'h1':
            return `<h1 class="text-3xl font-bold text-gray-900 mb-4">${text}</h1>`
          case 'h2':
            return `<h2 class="text-2xl font-bold text-gray-900 mb-3">${text}</h2>`
          case 'h3':
            return `<h3 class="text-xl font-bold text-gray-900 mb-2">${text}</h3>`
          case 'blockquote':
            return `<blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-700 my-4">${text}</blockquote>`
          default:
            return `<p class="text-gray-700 mb-4 leading-relaxed">${text}</p>`
        }
      }
      
      if (block._type === 'image') {
        const imageUrl = urlFor(block.asset).width(800).height(400).url()
        return `<img src="${imageUrl}" alt="${block.alt || ''}" class="w-full h-64 object-cover rounded-lg my-6" />`
      }
      
      return ''
    }).join('')
  }
}

// Export singleton instance
export const blogService = new BlogService()

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
} 