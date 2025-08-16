import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Hedamo Report',
    description: 'Structured, multilingual transparency reports for agencies and producers.',
    icon: '📄',
  },
  {
    title: 'Hedamo AI',
    description: 'Intelligence for policy, import programs, and compliance planning.',
    icon: '🤖',
  },
  {
    title: 'Hedamo Code',
    description: 'QR-linked consumer clarity in every market.',
    icon: '🔗',
  },
];

export default function WhatWeBuild() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <section id="hedamo-systems" className="py-32 px-6 lg:px-8 bg-white" 
      style={{ scrollMarginTop: '6rem' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-24">
            <h2 className="text-6xl font-light text-gray-900 tracking-tight leading-tight">
              Quiet Systems. Visible Outcomes.
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-6 group-hover:scale-105 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="/hedamo"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-block bg-gray-900 text-white font-medium px-10 py-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-lg"
            >
              Explore the Hedamo System
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}