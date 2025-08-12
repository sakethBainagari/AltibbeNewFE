import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  // Placeholder SVGs for partner logos (monochrome)
  <svg key="1" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="12" fill="#E6E6E6"/><circle cx="30" cy="30" r="16" fill="#BDBDBD"/></svg>,
  <svg key="2" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="12" fill="#E6E6E6"/><rect x="15" y="15" width="30" height="30" rx="6" fill="#BDBDBD"/></svg>,
  <svg key="3" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="12" fill="#E6E6E6"/><polygon points="30,15 45,45 15,45" fill="#BDBDBD"/></svg>,
  <svg key="4" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="12" fill="#E6E6E6"/><ellipse cx="30" cy="30" rx="16" ry="10" fill="#BDBDBD"/></svg>,
  <svg key="5" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="12" fill="#E6E6E6"/><rect x="20" y="20" width="20" height="20" rx="4" fill="#BDBDBD"/></svg>,
];

export default function Alliances() {
  return (
    <section id="alliances" className="py-20 px-6 bg-[#f9f8f6]" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Working With Institutions
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            We collaborate with ministries, standards bodies, and nominated entities to localize Hedamo for national goals—food security, consumer protection, and export growth.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
              className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-4"
            >
              {logo}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/collaborate"
            className="inline-block bg-[#E6C77B] hover:bg-[#bfa14a] text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg transition-colors duration-300 border-2 border-[#E6C77B]"
          >
            Explore Collaboration Models
          </a>
        </div>
      </div>
    </section>
  );
}
