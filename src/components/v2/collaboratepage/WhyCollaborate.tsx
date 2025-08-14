// src/components/v2/collaboratepage/WhyCollaborate.tsx
import React from "react";
import { motion } from "framer-motion";

const bullets = [
  {
    icon: "📜",
    title: "Policy Alignment",
    description: "Compliant with CEPA, USDA, MOCCAE, and other global frameworks."
  },
  {
    icon: "🤖",
    title: "AI-Driven Insights",
    description: "Turn supply chain data into actionable intelligence."
  },
  {
    icon: "🌍",
    title: "Market Access",
    description: "Meet the transparency demands of high-value markets."
  },
  {
    icon: "⚡",
    title: "Speed & Scale",
    description: "Deploy rapidly without costly infrastructure changes."
  },
  {
    icon: "🏅",
    title: "Global Credibility",
    description: "Leverage Altibbe’s international reputation as a standard-bearer."
  }
];

export default function WhyCollaborate() {
  return (
    <section id="why-collaborate" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Collaborate with Altibbe
        </h2>
      </motion.div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {bullets.map((bullet, idx) => (
          <motion.div
            key={bullet.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 via-white to-blue-50 border border-gray-100 rounded-xl p-8 shadow hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{bullet.icon}</div>
            <h3 className="font-bold text-primary-800 text-xl mb-2">{bullet.title}</h3>
            <p className="text-gray-700 text-base">{bullet.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
