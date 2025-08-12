// src/components/v2/aboutpage/GlobalPresence.tsx
import React from 'react';
import { motion } from 'framer-motion';

const hubs = [
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    focus: 'Policy partnerships, CEPA-aligned engagements',
    color: 'border-emerald-500 bg-emerald-50',
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    focus: 'Standards alignment, USDA/FDA collaboration pathways',
    color: 'border-purple-500 bg-purple-50',
  },
  {
    country: 'India',
    flag: 'IN',
    focus: 'Producer enablement, export preparedness, market access',
    color: 'border-orange-500 bg-orange-50',
  },
  {
    country: 'Kingdom of Saudi Arabia',
    flag: '🇸🇦',
    focus: 'Vision 2030-aligned programs and pilots',
    color: 'border-blue-500 bg-blue-50',
  },
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
            Hubs & Reach
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            We operate from strategic hubs to serve ministries, agencies, and producers across regions.
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Global Hubs</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              {hubs.map((hub, idx) => (
                <motion.div 
                  key={hub.country} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center m-4"
                >
                  <div className="text-4xl mb-2 animate-pulse text-[#E6C77B]">{hub.flag}</div>
                  <div className="text-sm font-semibold text-gray-700 text-center max-w-24">
                    {hub.country}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hubs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {hubs.map((hub, idx) => (
            <motion.div
              key={hub.country}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
              viewport={{ once: true }}
              className={`${hub.color} border-2 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{hub.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{hub.country}</h3>
                  <p className="text-lg font-semibold text-gray-700">{hub.focus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="/contact?type=partnerships"
            className="inline-block bg-[#E6C77B] hover:bg-[#d4b24e] text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg transition-colors duration-300"
          >
            Partner With Altibbe
          </a>
        </motion.div>
      </div>
    </section>
  );
}