import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: '🔒', label: 'Secure Infrastructure' },
  { icon: '📜', label: 'Clear Provenance' },
  { icon: '🗂️', label: 'Review-Ready Datasets' },
];

export default function GovernanceEthics() {
  return (
    <section id="governance-ethics" className="py-24 px-6 bg-gradient-to-b from-[#f9f8f6] to-[#f3f2ee]" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
            <span className="inline-block border-b-4 border-[#E6C77B] pb-2">Governance, Data Care & Ethics</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            <p><span className="font-semibold text-gray-900">Non-partisan & non-promotional:</span> Our reporting frameworks avoid advocacy; we present structured facts.</p>
            <p><span className="font-semibold text-gray-900">Data minimalism:</span> We collect only what’s needed to inform agencies and end-users, with strict handling standards.</p>
            <p><span className="font-semibold text-gray-900">Global adaptability:</span> Designed to align with national goals and international norms without prescribing ideology.</p>
          </div>
        </motion.div>
        <div className="flex justify-center gap-8">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center bg-white/80 rounded-2xl shadow-md border border-[#E6C77B] px-8 py-6 mx-2 min-w-[160px] transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl mb-2 text-[#E6C77B] drop-shadow-sm">{h.icon}</span>
              <span className="text-base font-semibold text-gray-900 text-center tracking-wide">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
