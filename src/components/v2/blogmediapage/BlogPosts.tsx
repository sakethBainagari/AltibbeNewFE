// src/components/v2/blogmediapage/BlogPosts.tsx
import React, { useEffect, useState } from 'react';
import FeaturedPost from './FeaturedPost.tsx';
import BlogGrid from './BlogGrid';
import PressHighlights from './PressHighlights';
import NewsletterCTA from './NewsletterCTA';
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
      <FeaturedPost />
      <BlogGrid />
      <PressHighlights />
  {/* SocialFeed and all community/multimedia/comment sections removed as requested */}
      <NewsletterCTA />
    </>
  );
} 