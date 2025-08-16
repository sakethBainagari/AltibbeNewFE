// src/components/v2/hedamopage/MarketTiles.tsx
import React from 'react';
import { motion } from 'framer-motion';

const countries = [
  { 
    name: 'UAE', 
    code: 'ae', 
    type: 'Primary', 
    description: 'CEPA-aligned, pioneering health transparency and digital trade initiatives.',
    flag: '🇦🇪',
  // Removed stats and highlights
    gradient: 'from-[#0d7377] to-[#38a169]'
  },
  { 
    name: 'USA', 
    code: 'us', 
    type: 'Primary', 
    description: 'USDA-backed initiatives advancing organic standards and market access.',
    flag: '🇺🇸',
  // Removed stats and highlights
    gradient: 'from-[#3182ce] to-[#0d7377]'
  },
  { 
    name: 'KSA', 
    code: 'sa', 
    type: 'Primary', 
    description: 'Vision 2030 alignment, driving innovation in food and wellness sectors.',
    flag: '🇸🇦',
  // Removed stats and highlights
    gradient: 'from-[#38a169] to-[#0d7377]'
  },
  { 
    name: 'India', 
    code: 'in', 
    type: 'Primary', 
    description: 'Major producer hub, global leader in sustainable agriculture practices.',
    flag: '🇮🇳',
  // Removed stats and highlights
    gradient: 'from-[#d69e2e] to-[#0d7377]'
  },
  { 
    name: 'Singapore', 
    code: 'sg', 
    type: 'Secondary', 
    description: 'Gateway to Asia with exceptional food safety and quality standards.',
    flag: '🇸🇬',
  // Removed stats and highlights
    gradient: 'from-[#3182ce] to-[#0d7377]'
  },
  { 
    name: 'Japan', 
    code: 'jp', 
    type: 'Secondary', 
    description: 'Leading innovation in food technology and rigorous quality standards.',
    flag: '🇯🇵',
  // Removed stats and highlights
    gradient: 'from-[#0d7377] to-[#3182ce]'
  },
  { 
    name: 'United Kingdom', 
    code: 'gb', 
    type: 'Secondary', 
    description: 'Emphasis on product traceability and building consumer trust.',
    flag: '🇬🇧',
  // Removed stats and highlights
    gradient: 'from-[#0d7377] to-[#38a169]'
  },
  { 
    name: 'Germany', 
    code: 'de', 
    type: 'Secondary', 
    description: 'European leader in food safety protocols and sustainability initiatives.',
    flag: '🇩🇪',
  // Removed stats and highlights
    gradient: 'from-[#d69e2e] to-[#38a169]'
  },
  { 
    name: 'Australia', 
    code: 'au', 
    type: 'Secondary', 
    description: 'Premium organic exports with world-class biosecurity measures.',
    flag: '🇦🇺',
  // Removed stats and highlights
    gradient: 'from-[#0d7377] to-[#3182ce]'
  },
  { 
    name: 'Canada', 
    code: 'ca', 
    type: 'Secondary', 
    description: 'Robust organic standards with comprehensive market access programs.',
    flag: '🇨🇦',
  // Removed stats and highlights
    gradient: 'from-[#38a169] to-[#0d7377]'
  },
  { 
    name: 'Qatar', 
    code: 'qa', 
    type: 'Secondary', 
    description: 'Rapidly emerging market for health and wellness product innovation.',
    flag: '🇶🇦',
  // Removed stats and highlights
    gradient: 'from-[#3182ce] to-[#38a169]'
  },
  { 
    name: 'Netherlands', 
    code: 'nl', 
    type: 'Secondary', 
    description: 'Agricultural technology hub and leading European export gateway.',
    flag: '🇳🇱',
  // Removed stats and highlights
    gradient: 'from-[#d69e2e] to-[#0d7377]'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function MarketTiles() {
  const primaryMarkets = countries.filter(c => c.type === 'Primary');
  const secondaryMarkets = countries.filter(c => c.type === 'Secondary');

  return (
  <section id="global-presence" className="relative py-32 bg-gradient-to-b from-[#ffffff] to-[#f7fafc] overflow-hidden" style={{ scrollMarginTop: '6rem' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(56,161,105,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(13,115,119,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#f7fafc] to-[#f9fafb] rounded-full text-[#0d7377] font-semibold text-sm mb-6 border border-[#e2e8f0]">
            Global Presence
          </div>
          <h2 className="font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#2d3748] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#0d7377] to-[#3182ce] bg-clip-text text-transparent">
              Regional Services
            </span><br />
            Worldwide Impact
          </h2>
          <p className="text-xl text-[#4a5568] max-w-4xl mx-auto leading-relaxed">
            Tailored solutions for diverse markets, regulatory frameworks, and cultural contexts. 
            Our global network ensures local expertise with international standards.
          </p>
        </motion.div>

        {/* Primary Markets */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-[#0d7377] to-[#38a169] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#2d3748]">Primary Markets</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {primaryMarkets.map((country) => (
              <motion.div
                key={country.name}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative h-full bg-[#ffffff]/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#e2e8f0] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Flag and country */}
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {country.flag}
                      </div>
                      <h4 className="font-bold text-2xl text-[#2d3748] mb-2">{country.name}</h4>
                    </div>

                    {/* Removed stats UI as requested */}

                    {/* Description */}
                    <p className="text-[#4a5568] leading-relaxed mb-6 text-sm flex-grow">
                      {country.description}
                    </p>

                    {/* Removed highlights UI as requested */}

                    {/* CTA */}
                    <motion.a
                      href={`/hedamo/services/${
                        country.code === 'ae' ? 'uae'
                        : country.code === 'us' ? 'usa'
                        : country.code === 'sa' ? 'ksa'
                        : country.code === 'in' ? 'india'
                        : country.code
                      }`}
                      className="group/cta inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-[#0d7377] to-[#38a169] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-[#0a5d61] hover:to-[#38a169] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Explore Strategy</span>
                      <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Secondary Markets */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-[#3182ce] to-[#0d7377] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#2d3748]">Secondary Markets</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {secondaryMarkets.map((country) => (
              <motion.div
                key={country.name}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative h-full bg-[#ffffff]/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#e2e8f0] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Flag and country */}
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {country.flag}
                      </div>
                      <h4 className="font-bold text-xl text-[#2d3748] mb-2">{country.name}</h4>
                    </div>

                    {/* Removed stats UI as requested */}

                    {/* Description */}
                    <p className="text-[#4a5568] leading-relaxed mb-6 text-sm flex-grow">
                      {country.description}
                    </p>

                    {/* Removed highlights UI as requested */}

                    {/* CTA */}
                    <motion.a
                      href={`/hedamo/services/${
                        country.code === 'sg' ? 'singapore'
                        : country.code === 'jp' ? 'japan'
                        : country.code === 'gb' ? 'uk'
                        : country.code === 'de' ? 'germany'
                        : country.code === 'au' ? 'australia'
                        : country.code === 'ca' ? 'canada'
                        : country.code === 'qa' ? 'qatar'
                        : country.code === 'nl' ? 'netherlands'
                        : country.code
                      }`}
                      className="group/cta inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#ffffff] border-2 border-[#0d7377] text-[#0d7377] font-semibold rounded-full hover:bg-[#0d7377] hover:text-white transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Services</span>
                      <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}