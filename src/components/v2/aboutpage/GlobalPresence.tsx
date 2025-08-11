// src/components/v2/aboutpage/GlobalPresence.tsx
import React from 'react';
import { motion } from 'framer-motion';

const markets = [
  {
    country: 'United Arab Emirates (UAE)',
    flag: '🇦🇪',
    keyFocus: 'Food Security & Innovation',
    description: 'A key market focused on food security and innovation. The UAE relies on imports for ~90% of its food supply, making transparency in sourcing critical.',
    details: 'Altibbe aligns with the UAE\'s National Food Security Strategy 2051 by providing in-depth product verification for imports. Through Hedamo, UAE buyers can leverage their position as major importers to demand high transparency and quality from exporting producers.',
    highlight: 'In the UAE, Altibbe is a partner in progress towards a food-secure future, helping turn import reliance into a strength by guaranteeing trust in every imported product.',
    stats: '90% imports',
    color: 'border-emerald-500 bg-emerald-50'
  },
  {
    country: 'Kingdom of Saudi Arabia (KSA)',
    flag: '🇸🇦',
    keyFocus: 'Vision 2030 & Halal Standards',
    description: 'A market undergoing rapid transformation under Vision 2030. Saudi Arabia is striving to reduce reliance on imports by boosting local production and enforcing higher standards.',
    details: 'Altibbe supports KSA\'s goals by offering halal traceability and transparency tools for products. With Saudi regulators embracing blockchain for halal supply chain tracking, Hedamo\'s affordable system verifies halal integrity end-to-end.',
    highlight: 'In Saudi Arabia, Hedamo\'s comprehensive reviews complement the SFDA\'s stringent standards and the Kingdom\'s halal certification efforts, enabling Saudi buyers to insist on the best.',
    stats: 'Vision 2030',
    color: 'border-blue-500 bg-blue-50'
  },
  {
    country: 'United States (USA)',
    flag: '🇺🇸',
    keyFocus: 'FDA Compliance & Sustainability',
    description: 'A mature market with sophisticated consumers and strict regulations. The U.S. wellness industry is huge and growing, with consumers increasingly seeking organic, ethically-sourced products.',
    details: 'Altibbe helps brands meet and showcase compliance with FDA and USDA organic guidelines, highlighting health and sustainability metrics that resonate with American consumers who value sustainability.',
    highlight: 'In the USA, where health-conscious shoppers scrutinize labels and demand transparency, Altibbe provides an edge through credible ESG-oriented narratives and wellness trend alignment.',
    stats: '78% sustainability',
    color: 'border-purple-500 bg-purple-50'
  },
  {
    country: 'India',
    flag: '🇮🇳',
    keyFocus: 'Traditional Wellness & FSSAI Standards',
    description: 'Altibbe has deep roots in India with an R&D center in Hyderabad. India is a significant market focused on traditional wellness and agricultural sustainability.',
    details: 'We align with India\'s FSSAI regulations, the government\'s promotion of millets (Shree Anna), and encouragement of natural farming practices. Hedamo certification elevates Indian producers\' credibility for both domestic and export markets.',
    highlight: 'In India, Altibbe celebrates the country\'s heritage of health – from Ayurvedic principles to the Millet Mission – by providing a platform for honest storytelling and quality assurance.',
    stats: 'R&D Center',
    color: 'border-orange-500 bg-orange-50'
  }
];

export default function GlobalPresence() {
  return (
    <section id="global-presence" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Global Presence & Markets
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            Altibbe's global reach spans key markets where transparency and health innovation matter most. 
            We understand local needs and provide solutions that empower both producers and consumers worldwide.
          </p>
        </motion.div>

        {/* World Map Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Global Footprint</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              {markets.map((market, idx) => (
                <motion.div 
                  key={market.country} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center m-4"
                >
                  <div className="text-4xl mb-2">{market.flag}</div>
                  <div className="text-sm font-semibold text-gray-700 text-center max-w-20">
                    {market.country.split(' ')[0]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Market Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {markets.map((market, idx) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
              viewport={{ once: true }}
              className={`${market.color} border-2 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{market.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{market.country}</h3>
                  <p className="text-lg font-semibold text-gray-700">{market.keyFocus}</p>
                  <div className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium mt-2">
                    {market.stats}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {market.description}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {market.details}
              </p>
              
              <div className="bg-white/70 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-gray-800 italic leading-relaxed">
                  "{market.highlight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Advantage */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-accent-sage rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-primary-800 mb-6">
            Strategic Market Leverage
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-organic-text-light leading-relaxed mb-6">
              Heavy importers like the UAE and KSA can leverage their buyer power to demand transparency, 
              while producers in India can enhance their export competitiveness. The U.S. market benefits 
              from enhanced consumer trust through credible sustainability narratives.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6"
              >
                <h4 className="font-bold text-primary-800 mb-2">Import Leverage</h4>
                <p className="text-sm text-gray-600">UAE & KSA demanding transparency from exporters</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6"
              >
                <h4 className="font-bold text-primary-800 mb-2">Export Excellence</h4>
                <p className="text-sm text-gray-600">India enhancing global competitiveness</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6"
              >
                <h4 className="font-bold text-primary-800 mb-2">Consumer Trust</h4>
                <p className="text-sm text-gray-600">USA building brand loyalty through transparency</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Partner Worldwide
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Altibbe's global presence means we understand local needs. Whether you're in the Middle East, 
              the Americas, or Asia – we are your partner in cultivating trust, health, and sustainability 
              in every product.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 