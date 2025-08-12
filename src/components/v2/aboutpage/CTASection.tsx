import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta-section" className="py-20 px-6 bg-[#181A1B] relative" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight"
          style={{ color: '#E6C77B' }}
        >
          Bring Next-Generation Transparency to Your Nation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 mb-10"
        >
          Request a confidential briefing or explore a pilot tailored to your national objectives.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/contact?type=strategic-briefing"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-colors duration-300 border-2 border-green-700"
          >
            Request Strategic Briefing
          </a>
          <a
            href="/hedamo"
            className="inline-block bg-transparent hover:bg-green-50 text-green-700 font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-colors duration-300 border-2 border-green-700"
          >
            Explore Hedamo
          </a>
        </div>
      </div>
    </section>
  );
}
