import React from 'react';
import { motion } from 'framer-motion';

// Example JSON data for countries (expand as needed)
const countries = [
  {
    name: 'UAE',
    type: 'Primary',
    description: 'CEPA-aligned, pioneering health transparency and digital trade.',
    flag: '🇦🇪',
  },
  {
    name: 'USA',
    type: 'Primary',
    description: 'USDA-backed, advancing organic standards and market access.',
    flag: '🇺🇸',
  },
  {
    name: 'KSA',
    type: 'Primary',
    description: 'Vision 2030, driving innovation in food and wellness.',
    flag: '🇸🇦',
  },
  {
    name: 'India',
    type: 'Primary',
    description: 'Major producer, global leader in sustainable agriculture.',
    flag: '🇮🇳',
  },
  {
    name: 'Singapore',
    type: 'Secondary',
    description: 'Gateway to Asia, high standards for food safety.',
    flag: '🇸🇬',
  },
  {
    name: 'UK',
    type: 'Secondary',
    description: 'Emphasizing traceability and consumer trust.',
    flag: '🇬🇧',
  },
  // Add more countries as needed
];

export default function MarketTiles() {
  return (
    <section className="bg-[#F8F9FA] py-16 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#0B5345]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Strategic Value for Nations
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((country, idx) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 shadow-md flex flex-col items-center border-2 border-black bg-white`}
            >
              <span className="text-4xl mb-2">{country.flag}</span>
              <h3 className="text-xl font-semibold mb-1 text-[#0B5345]">{country.name}</h3>
              <p className="text-gray-700 text-base mb-2">{country.description}</p>
              {/* Removed Primary/Secondary Country label */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
