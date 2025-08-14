// src/components/v2/collaboratepage/RegionalFocus.tsx
import React from "react";
import { motion } from "framer-motion";

const regions = [
  {
    icon: "🇦🇪",
    title: "UAE",
    description: "CEPA-driven transparency in imports; Vision 2030 alignment."
  },
  {
    icon: "🇺🇸",
    title: "USA",
    description: "USDA and FDA compliance readiness; consumer trust building."
  },
  {
    icon: "🇸🇦",
    title: "KSA",
    description: "Vision 2030 food security and export expansion goals."
  },
  {
    icon: "🇮🇳",
    title: "India",
    description: "Digital public infrastructure integration for global competitiveness."
  }
];

export default function RegionalFocus() {
  return (
    <section id="regional-focus" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Current Priority Regions
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          We align our collaboration strategies with the unique policy, market, and sustainability priorities of each region we serve.
        </p>
      </motion.div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {regions.map((region, idx) => (
          <motion.div
            key={region.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-gray-100 rounded-xl p-8 shadow hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{region.icon}</div>
            <h3 className="font-bold text-primary-800 text-xl mb-2">{region.title}</h3>
            <p className="text-gray-700 text-base">{region.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
