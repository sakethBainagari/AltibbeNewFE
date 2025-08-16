import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: '🔒', label: 'Secure Infrastructure' },
  { icon: '📜', label: 'Clear Provenance' },
  { icon: '🗂️', label: 'Review-Ready Datasets' },
];

const principles = [
  {
    title: 'Non-partisan & non-promotional',
    description: 'Our reporting frameworks avoid advocacy; we present structured facts.'
  },
  {
    title: 'Data minimalism',
    description: 'We collect only what\'s needed to inform agencies and end-users, with strict handling standards.'
  },
  {
    title: 'Global adaptability',
    description: 'Designed to align with national goals and international norms without prescribing ideology.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function GovernanceEthics() {
  return (
  <section id="governance" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Governance, Data Care &
              <span className="block font-extralight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                Ethics
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-20 transition-all duration-300"></div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-8 py-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]">
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
                    {highlight.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-800 text-center leading-tight tracking-wide">
                    {highlight.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}