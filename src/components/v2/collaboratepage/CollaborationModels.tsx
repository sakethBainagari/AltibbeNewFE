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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function CollaborationModels() {
  return (
    <section 
      id="flexible-engagement" 
      className="py-24 px-6 bg-gradient-to-b from-white via-slate-50/20 to-white" 
      style={{ scrollMarginTop: '6rem' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-8"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              textShadow: '0 1px 3px rgba(0,0,0,0.03)'
            }}
          >
            <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent font-medium">
              Flexible Engagement
            </span>
            <span className="block mt-2">Models</span>
          </motion.h2>
        </motion.div>

        {/* Models Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {models.map((model, idx) => (
            <motion.div
              key={model.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="group bg-white border-2 border-slate-200/40 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:shadow-slate-500/8 transition-all duration-500 text-center relative overflow-hidden"
              style={{
                boxShadow: '0 2px 15px rgba(0,0,0,0.04)',
              }}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-slate-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon */}
                <motion.div 
                  className="inline-block text-5xl lg:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {model.icon}
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-xl lg:text-2xl font-medium text-slate-800 mb-4 leading-tight group-hover:text-emerald-800 transition-colors duration-300"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {model.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors duration-300 max-w-sm"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}
                >
                  {model.description}
                </p>

                {/* Decorative bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}