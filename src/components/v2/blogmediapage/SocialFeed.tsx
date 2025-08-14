// src/components/v2/blogmediapage/SocialFeed.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    name: "Instagram",
    url: "https://instagram.com/altibbe"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/altibbe"
  }
];

const posts = {
  Instagram: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      caption: "Celebrating transparency in food supply!",
      url: "https://instagram.com/altibbe"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      caption: "Hedamo pilot launch in UAE.",
      url: "https://instagram.com/altibbe"
    }
  ],
  LinkedIn: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      caption: "Altibbe partners with UAE trade authorities.",
      url: "https://linkedin.com/company/altibbe"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
      caption: "AI-powered product transparency for global markets.",
      url: "https://linkedin.com/company/altibbe"
    }
  ]
};

export default function SocialFeed() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <section className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          Follow Our Journey
        </motion.h2>
        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative px-6 py-2 font-semibold text-lg transition-colors duration-200 ${activeTab === tab.name ? 'text-yellow-700' : 'text-gray-500 hover:text-yellow-700'}`}
              style={{ outline: 'none' }}
            >
              {tab.name}
              {activeTab === tab.name && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {posts[activeTab].map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + post.id * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-50 aspect-square flex flex-col justify-end"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 px-5 py-2 rounded-lg bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-600 transition text-center"
                >
                  View Post
                </a>
              </div>
              <div className="relative z-10 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium">
                {post.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
