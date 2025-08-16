// src/components/v2/blogmediapage/PressHighlights.tsx
import React from "react";
import { motion } from "framer-motion";

const pressEntries = [
  {
    publication: "Gulf News",
    headline: "AI Transparency in UAE's Food Imports",
    link: "https://gulfnews.com/business/uae-food-transparency"
  },
  {
    publication: "AgriTech Today",
    headline: "Hedamo Brings Clarity to Complex Supply Chains",
    link: "https://agritechtoday.com/hedamo-supplychains"
  },
  {
    publication: "Trade & Export Journal",
    headline: "Digital Trust as a Strategic Export Tool",
    link: "https://tradeexportjournal.com/digital-trust-export-tool"
  },
  {
    publication: "Sustainability Leaders Forum",
    headline: "How AI Transparency Shapes Global ESG Goals",
    link: "https://sustainabilityleadersforum.com/ai-transparency-esg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
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

export default function PressHighlights() {
  return (
    <section id="media-press" className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
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
              Media &
              <span className="block font-extralight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Press
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Press Entries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {pressEntries.map((entry, idx) => (
            <motion.div
              key={entry.headline}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white border border-gray-200/60 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      <span className="inline-block bg-green-50 text-green-700 font-medium text-sm px-4 py-2 rounded-full border border-green-200/50">
                        {entry.publication}
                      </span>
                      <div className="w-full sm:w-auto">
                        <h3 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-tight">
                          {entry.headline}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md min-w-[140px]"
                    >
                      <span className="flex items-center space-x-2">
                        <span>Read Article</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-40"></div>
        </div>
      </div>
    </section>
  );
}