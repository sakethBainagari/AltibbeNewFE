// src/components/v2/blogmediapage/PressHighlights.tsx
import React from "react";
import { motion } from "framer-motion";

const pressEntries = [
  {
    publication: "Gulf News",
    headline: "AI Transparency in UAE’s Food Imports",
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

export default function PressHighlights() {
  return (
    <section className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          Media & Press
        </motion.h2>
        <ul className="space-y-6">
          {pressEntries.map((entry, idx) => (
            <motion.li
              key={entry.headline}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <span className="font-semibold text-primary-700 text-lg mr-2">{entry.publication}</span>
                <span className="text-gray-800 font-medium">– {entry.headline}</span>
              </div>
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 px-5 py-2 rounded-lg bg-primary-700 text-white font-semibold shadow hover:bg-primary-800 transition text-center"
              >
                Read Article →
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
