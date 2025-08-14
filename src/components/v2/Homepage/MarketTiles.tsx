import React from 'react';
import { motion } from 'framer-motion';

import { InfiniteMovingCards } from '../../ui/infinite-moving-cards';

// Example JSON data for countries (expand as needed)
const countries = [
  {
    name: 'UAE',
    code: 'AE',
    type: 'Primary',
    description: 'CEPA-aligned, pioneering health transparency and digital trade.',
    flag: '🇦🇪',
  },
  {
    name: 'USA',
    code: 'US',
    type: 'Primary',
    description: 'USDA-backed, advancing organic standards and market access.',
    flag: '🇺🇸',
  },
  {
    name: 'KSA',
    code: 'SA',
    type: 'Primary',
    description: 'Vision 2030, driving innovation in food and wellness.',
    flag: '🇸🇦',
  },
  {
    name: 'India',
    code: 'IN',
    type: 'Primary',
    description: 'Major producer, global leader in sustainable agriculture.',
    flag: '🇮🇳',
  },
  {
    name: 'Singapore',
    code: 'SG',
    type: 'Secondary',
    description: 'Gateway to Asia, high standards for food safety.',
    flag: '🇸🇬',
  },
  {
    name: 'UK',
    code: 'GB',
    type: 'Secondary',
    description: 'Emphasizing traceability and consumer trust.',
    flag: '🇬🇧',
  },
  // Add more countries as needed
];

export default function MarketTiles() {
  return (
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E3E6EA] z-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-poppins text-4xl md:text-5xl font-semibold mb-14 text-[#0B5345] drop-shadow-lg tracking-tight"
        >
          Strategic Value for Nations
        </motion.h2>
        <InfiniteMovingCards
          items={countries.map((country) => ({
            name: country.name,
            code: country.code,
            description: country.description,
            flag: country.flag,
          }))}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="mt-8"
        />
      </div>
    </section>
  );
}
