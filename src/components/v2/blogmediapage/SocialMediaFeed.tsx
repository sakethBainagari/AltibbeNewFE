// src/components/v2/blogmediapage/SocialMediaFeed.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

const socialPosts = [
  {
    platform: 'Instagram',
    content: 'Behind-the-scenes look at Hedamo verification at an organic farm in California',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&h=300&q=80',
    timestamp: '2 hours ago',
    hashtags: ['#TransparentHealth', '#OrganicFarm', '#HedamoVerified']
  },
  {
    platform: 'Instagram',
    content: 'Weekly wellness tip: Start your morning with organic herbal tea for natural detox',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=300&q=80',
    timestamp: '1 day ago',
    hashtags: ['#WellnessTip', '#OrganicTea', '#HealthyLiving']
  },
  {
    platform: 'Instagram',
    content: 'Celebrating another producer who achieved Hedamo Gold certification',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=300&h=300&q=80',
    timestamp: '3 days ago',
    hashtags: ['#HedamoGold', '#ProducerSuccess', '#CleanLabel']
  },
  {
    platform: 'Twitter',
    content: 'New EU regulations on ingredient transparency could reshape the wellness industry. Here\'s what producers need to know...',
    timestamp: '4 hours ago',
    hashtags: ['#FoodPolicy', '#TransparentHealth', '#EURegulations']
  },
  {
    platform: 'LinkedIn',
    content: 'Exciting partnership announcement: Altibbe collaborates with leading organic distributors across North America',
    timestamp: '2 days ago',
    hashtags: ['#Partnership', '#OrganicDistribution', '#Expansion']
  },
  {
    platform: 'Twitter',
    content: 'Quick fact: 73% of consumers are willing to pay more for products with transparent sourcing. #TransparentHealth',
    timestamp: '1 week ago',
    hashtags: ['#ConsumerTrends', '#Transparency', '#Wellness']
  }
];

const multimediaContent = [
  {
    type: 'Video',
    title: 'How to Read Organic Labels: A 3-Minute Guide',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&h=225&q=80',
    duration: '3:42'
  },
  {
    type: 'Infographic',
    title: 'The Journey of a Hedamo Review',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=225&q=80',
    description: 'Visual guide to our review process'
  },
  {
    type: 'Interview',
    title: 'Producer Spotlight: From Local Farm to Global Recognition',
    thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&h=225&q=80',
    duration: '12:15'
  }
];

export default function SocialMediaFeed() {
  return (
    <section id="social-media" className="py-20 px-6 bg-gray-50" style={{ scrollMarginTop: '6rem' }}>
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
            Latest from Our Community
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            Beyond our articles, get a live peek into our community through our social media feed. 
            From Instagram highlights of organic farms we visit, to quick tips and news shared on 
            X (Twitter) and LinkedIn, the Blog & Media page keeps you connected with Altibbe in real time.
          </p>
          <div className="mt-6">
            <span className="text-green-600 font-semibold text-lg">
              Follow #TransparentHealth to see our ongoing conversation about honest wellness
            </span>
          </div>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socialPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    post.platform === 'Instagram' ? 'bg-pink-500' : 
                    post.platform === 'Twitter' ? 'bg-blue-500' : 'bg-blue-700'
                  }`}></div>
                  <span className="font-semibold text-gray-800">{post.platform}</span>
                </div>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              
              {post.image && (
                <img
                  src={post.image}
                  alt="Social media post"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {post.content}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {post.hashtags.map((hashtag, hashIdx) => (
                  <span
                    key={hashIdx}
                    className="text-xs text-green-600 hover:text-green-700 cursor-pointer"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multimedia Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Multimedia Content
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore videos, interviews, and infographics in our media section – for visual and quick 
            learning about key topics like reading labels or the journey of a Hedamo review.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {multimediaContent.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  {item.duration && (
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Engagement CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-primary-900 text-accent-mint rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Join the Conversation
          </h3>
          <p className="text-lg mb-6 text-accent-mint/90 leading-relaxed max-w-3xl mx-auto">
            Leave a comment on our blog, or tag us on social media with your thoughts and healthy finds. 
            We love to hear from our community as we build this transparent future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ArrowButton href="/blog" classname="bg-primary-600 hover:bg-primary-500 text-accent-mint">
              Read Our Blog
            </ArrowButton>
            <ArrowButton href="https://instagram.com/altibbe" classname="bg-transparent border-2 border-accent-mint text-accent-mint hover:bg-accent-mint hover:text-primary-900">
              Follow on Instagram
            </ArrowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 