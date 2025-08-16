import React from 'react';
import { motion } from 'framer-motion';

const hubs = [
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    focus: 'Policy partnerships, CEPA-aligned engagements',
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    focus: 'Standards alignment, USDA/FDA collaboration pathways',
  },
  {
    country: 'India',
    flag: 'IN',
    focus: 'Producer enablement, export preparedness, market access',
  },
  {
    country: 'Kingdom of Saudi Arabia',
    flag: '🇸🇦',
    focus: 'Vision 2030-aligned programs and pilots',
  },
];

export default function GlobalPresence() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
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

  return (
    <section 
      id="global-presence" 
      className="py-32 px-6 lg:px-8 bg-white" 
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
          <motion.div variants={itemVariants} className="mb-24">
            <h2 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Hubs & Reach
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
              We operate from strategic hubs to serve ministries, agencies, and producers across regions.
            </p>
          </motion.div>

          {/* Global Hubs Overview */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-gray-50 rounded-lg p-12">
              <h3 className="text-2xl font-light text-gray-900 mb-12 text-center">
                Our Global Hubs
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {hubs.map((hub, idx) => (
                  <motion.div
                    key={hub.country}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-3">{hub.flag}</div>
                    <div className="text-sm font-medium text-gray-700 leading-tight">
                      {hub.country}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hub Details */}
          <motion.div variants={containerVariants} className="space-y-8 mb-20">
            {hubs.map((hub, idx) => (
              <motion.div
                key={hub.country}
                variants={itemVariants}
                className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors duration-200"
              >
                <div className="flex items-start gap-6">
                  <div className="text-2xl">{hub.flag}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {hub.country}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {hub.focus}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="/contact?type=partnerships"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="inline-block bg-gray-900 text-white font-medium px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Partner With Altibbe
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}