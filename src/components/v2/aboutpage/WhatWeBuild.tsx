import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Hedamo Report',
    description: 'Structured, multilingual transparency reports for agencies and producers.',
    icon: '📄',
    color: 'bg-green-900 text-white',
  },
  {
    title: 'Hedamo AI',
    description: 'Intelligence for policy, import programs, and compliance planning.',
    icon: '🤖',
    color: 'bg-green-800 text-white',
  },
  {
    title: 'Hedamo Code',
    description: 'QR-linked consumer clarity in every market.',
    icon: '🔗',
    color: 'bg-green-700 text-white',
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiet Systems. Visible Outcomes.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 text-center shadow-lg border-2 border-green-900 ${card.color}`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/hedamo"
            className="inline-block bg-green-900 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg transition-colors duration-300 border-2 border-green-900"
          >
            Explore the Hedamo System
          </a>
        </div>
      </div>
    </section>
  );
}
