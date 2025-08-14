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
    title: "KSA’s Vision 2030 and Food Transparency",
    summary:
      "Exploring opportunities for strategic supply chain transformation in the Kingdom of Saudi Arabia, aligning with Vision 2030 and new import-export verification frameworks.",
    link: "/blog/ksa-vision2030",
    category: "Policy"
  },
  {
    title: "From Farm to Fork – India’s Digital Agri Revolution",
    summary:
      "How India’s Digital Public Infrastructure and smart traceability tools are unlocking premium markets and strengthening export credibility.",
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
    title: "The Consumer’s New Right to Know",
    summary:
      "How end-users worldwide are demanding, and receiving, clear and accessible product origin, impact, and safety data.",
    link: "/blog/consumer-rights",
    category: "Hedamo Updates"
  }
];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = !selectedCategory || selectedCategory === "All"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          Latest Articles
        </motion.h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 ${selectedCategory === cat || (!selectedCategory && cat === "All") ? 'bg-primary-700 text-white border-primary-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-primary-50 hover:text-primary-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid - BlogPosts UI style */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              {/* Placeholder image for BlogGrid articles */}
              <img
                src={`https://source.unsplash.com/400x250/?business,technology,food,market&sig=${idx}`}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                    {article.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Altibbe Editorial</span>
                  <a
                    href={article.link}
                    className="px-5 py-2 rounded-lg bg-primary-700 text-white font-semibold shadow hover:bg-primary-800 transition text-center"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
