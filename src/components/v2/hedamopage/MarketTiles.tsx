import React from 'react';
import { motion } from 'framer-motion';

const countries = [
  { name: 'UAE', code: 'ae', type: 'Primary', description: 'CEPA-aligned, pioneering health transparency and digital trade.', flag: '🇦🇪' },
  { name: 'USA', code: 'us', type: 'Primary', description: 'USDA-backed, advancing organic standards and market access.', flag: '🇺🇸' },
  { name: 'KSA', code: 'sa', type: 'Primary', description: 'Vision 2030, driving innovation in food and wellness.', flag: '🇸🇦' },
  { name: 'India', code: 'in', type: 'Primary', description: 'Major producer, global leader in sustainable agriculture.', flag: '🇮🇳' },
  { name: 'Singapore', code: 'sg', type: 'Secondary', description: 'Gateway to Asia, high standards for food safety.', flag: '🇸🇬' },
  { name: 'Japan', code: 'jp', type: 'Secondary', description: 'Innovation in food tech and quality standards.', flag: '🇯🇵' },
  { name: 'United Kingdom', code: 'gb', type: 'Secondary', description: 'Emphasizing traceability and consumer trust.', flag: '🇬🇧' },
  { name: 'Germany', code: 'de', type: 'Secondary', description: 'Leader in food safety and sustainability.', flag: '🇩🇪' },
  { name: 'Australia', code: 'au', type: 'Secondary', description: 'Premium organic exports and biosecurity.', flag: '🇦🇺' },
  { name: 'Canada', code: 'ca', type: 'Secondary', description: 'Strong organic standards and market access.', flag: '🇨🇦' },
  { name: 'Qatar', code: 'qa', type: 'Secondary', description: 'Emerging market for health and wellness.', flag: '🇶🇦' },
  { name: 'Netherlands', code: 'nl', type: 'Secondary', description: 'Agri-tech hub and export leader.', flag: '🇳🇱' },
];

export default function MarketTiles() {
  return (
    <section id="regions" className="bg-[#F8F9FA] py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#0B5345]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Services by Region
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country, idx) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`rounded-xl p-7 shadow-md flex flex-col items-center border-2 ${country.type === 'Primary' ? 'border-[#D4AF37] bg-white' : 'border-[#0B5345] bg-[#F8F9FA]'}`}
            >
              <span className="text-5xl mb-3">{country.flag}</span>
              <h3 className="text-xl font-semibold mb-1 text-[#0B5345]">{country.name}</h3>
              <p className="text-gray-700 text-base mb-4">{country.description}</p>
              <a
                href={`/hedamo/services/${
                  country.code === 'ae' ? 'uae'
                  : country.code === 'us' ? 'usa'
                  : country.code === 'sa' ? 'ksa'
                  : country.code === 'in' ? 'india'
                  : country.code === 'sg' ? 'singapore'
                  : country.code === 'jp' ? 'japan'
                  : country.code === 'gb' ? 'uk'
                  : country.code === 'de' ? 'germany'
                  : country.code === 'au' ? 'australia'
                  : country.code === 'ca' ? 'canada'
                  : country.code === 'qa' ? 'qatar'
                  : country.code === 'nl' ? 'netherlands'
                  : country.code // fallback
                }`}
                className="mt-auto inline-block px-5 py-2 rounded-full bg-[#0B5345] text-white font-semibold shadow hover:bg-[#176655] transition"
              >
                Explore {country.name} Strategy &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
