// src/components/v2/collaboratepage/CollaborationModels.tsx
import React from "react";
import { motion } from "framer-motion";

const models = [
  {
    icon: "📑",
    title: "Government Framework Agreements",
    description: "National-level deployment for imports and exports."
  },
  {
    icon: "🏭",
    title: "Sector-Wide Programs",
    description: "Industry-specific transparency initiatives (e.g., agriculture, fisheries)."
  },
  {
    icon: "🤝",
    title: "Producer Partnerships",
    description: "Hedamo reports for product lines aimed at high-value markets."
  },
  {
    icon: "🏬",
    title: "Retail Integration",
    description: "Hedamo Code for consumer-facing trust and traceability."
  }
];

export default function CollaborationModels() {
  return (
    <section id="collaboration-models" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Flexible Engagement Models
        </h2>
      </motion.div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {models.map((model, idx) => (
          <motion.div
            key={model.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 via-white to-green-50 border border-gray-100 rounded-xl p-8 shadow hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{model.icon}</div>
            <h3 className="font-bold text-primary-800 text-xl mb-2">{model.title}</h3>
            <p className="text-gray-700 text-base">{model.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
