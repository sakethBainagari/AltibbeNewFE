// src/components/v2/blogmediapage/BlogGrid.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Policy",
  "AI & Tech",
  "Market Insights",
  "Sustainability",
  "Hedamo Updates"
];

const articles = [
  {
    title: "How AI is Transforming Global Trade Compliance",
    summary:
      "An in-depth look at how Hedamo AI enables governments to execute policy-aligned product transparency at scale, reducing delays, boosting compliance, and fostering market confidence.",
    link: "/blog/ai-global-trade",
    category: "AI & Tech"
  },
  {
    title: "KSA's Vision 2030 and Food Transparency",
    summary:
      "Exploring opportunities for strategic supply chain transformation in the Kingdom of Saudi Arabia, aligning with Vision 2030 and new import-export verification frameworks.",
    link: "/blog/ksa-vision2030",
    category: "Policy"
  },
  {
    title: "From Farm to Fork – India's Digital Agri Revolution",
    summary:
      "How India's Digital Public Infrastructure and smart traceability tools are unlocking premium markets and strengthening export credibility.",
    link: "/blog/india-agri",
    category: "Market Insights"
  },
  {
    title: "USDA-Aligned Digital Reporting for U.S. Markets",
    summary:
      "Why real-time, digital-native transparency reports are the next frontier for agricultural compliance and consumer confidence in the United States.",
    link: "/blog/usda-digital",
    category: "Sustainability"
  },
  {
    title: "Trade Integrity in the Age of AI",
    summary:
      "Global perspectives on the role of AI in creating fairer, safer, and more accountable trade ecosystems.",
    link: "/blog/trade-integrity-ai",
    category: "AI & Tech"
  },
  {
    title: "The Consumer's New Right to Know",
    summary:
      "How end-users worldwide are demanding, and receiving, clear and accessible product origin, impact, and safety data.",
    link: "/blog/consumer-rights",
    category: "Hedamo Updates"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = !selectedCategory || selectedCategory === "All"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <section id="latest-articles" className="py-24 px-6 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Latest
              <span className="block font-extralight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat || (!selectedCategory && cat === "All") 
                  ? 'bg-green-600 text-white shadow-md border border-green-600' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-600 hover:shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.title}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Article Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <img
                      src={`https://source.unsplash.com/600x400/?business,technology,food,market&sig=${idx}`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-green-600 text-xs font-medium px-3 py-1.5 rounded-full border border-green-200/50">
                        {article.category}
                      </span>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 font-light">
                      {article.summary}
                    </p>
                  </div>

                  {/* Article Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-light">Altibbe Editorial</span>
                    
                    <a
                      href={article.link}
                      className="group/link inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-300"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}