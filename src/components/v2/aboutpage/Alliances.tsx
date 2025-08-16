import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  // Elegant placeholder logos with sophisticated designs
  <svg key="1" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
    <circle cx="40" cy="40" r="20" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <circle cx="40" cy="40" r="8" fill="#9CA3AF"/>
  </svg>,
  <svg key="2" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
    <rect x="20" y="20" width="40" height="40" rx="8" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <rect x="30" y="30" width="20" height="20" rx="4" fill="#9CA3AF"/>
  </svg>,
  <svg key="3" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
    <polygon points="40,20 60,60 20,60" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <polygon points="40,30 50,50 30,50" fill="#9CA3AF"/>
  </svg>,
  <svg key="4" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
    <ellipse cx="40" cy="40" rx="24" ry="16" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <ellipse cx="40" cy="40" rx="12" ry="8" fill="#9CA3AF"/>
  </svg>,
  <svg key="5" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
    <rect x="25" y="25" width="30" height="30" rx="6" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <rect x="32" y="32" width="16" height="16" rx="3" fill="#9CA3AF"/>
  </svg>,
  <svg key="6" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="none" stroke="#D1D5DB" strokeWidth="1"/>
    <circle cx="40" cy="30" r="8" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <path d="M25 55 C25 45, 55 45, 55 55" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    <circle cx="40" cy="30" r="3" fill="#9CA3AF"/>
  </svg>
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Alliances() {
  return (
    <section id="alliances" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-slate-50 relative overflow-hidden">
  {/* ...existing code... */}

      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-16 h-16 border border-gray-300 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 border border-amber-300 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-slate-300 rounded-xl -rotate-6"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight">
              Working With
              <span className="block font-extralight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Institutions
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            We collaborate with ministries, standards bodies, and nominated entities to localize Hedamo for national goals—food security, consumer protection, and export growth.
          </motion.p>
        </motion.div>

        {/* Partner logos grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                variants={logoVariants}
                className="group cursor-pointer"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200/50 hover:shadow-md hover:border-gray-300/60 transition-all duration-500 hover:-translate-y-1">
                  <div className="opacity-60 group-hover:opacity-90 transition-opacity duration-500 filter grayscale group-hover:grayscale-0">
                    {logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="/collaborate"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-4 px-10 rounded-2xl text-lg shadow-lg transition-all duration-300 border border-blue-500/20 backdrop-blur-sm">
              <span className="flex items-center space-x-2">
                <span>Explore Collaboration Models</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
    </section>
  );
}