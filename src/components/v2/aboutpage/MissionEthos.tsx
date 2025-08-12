// src/components/v2/aboutpage/MissionEthos.tsx

import React from 'react';
import { motion } from 'framer-motion';


function MissionEthos() {
  return (
    <section id="mission-ethos" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mission & Ethos
          </h2>
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              <strong>Why we exist.</strong> Health, trade, and trust are inseparable. Altibbe creates clarity in product information so citizens, agencies, and markets can act with confidence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed mb-6"
            >
              <strong>How we work.</strong> We blend modern science with practical wisdom—translating complex supply chains into clear, accessible data for decision-makers and consumers.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              <strong>What we uphold.</strong> Integrity over noise; service over spectacle. Our systems are designed to be unbiased, efficient, and globally adaptable.
            </motion.p>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🔎</div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">
              Clarity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We make product information clear and accessible for all.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">
              Stewardship
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We act as responsible caretakers of health, trust, and the environment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">
              Dignity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We honor the dignity of every person in our ecosystem.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">📏</div>
            <h3 className="text-2xl font-bold mb-3 text-purple-600">
              Rigor
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We uphold the highest standards in our data and systems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold mb-3 text-amber-600">
              Practicality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We focus on solutions that work in the real world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionEthos;