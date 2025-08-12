import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipNote() {
  return (
    <section id="leadership-note" className="py-20 px-6 bg-gradient-to-b from-white to-[#f9f8f6] relative" style={{ scrollMarginTop: '6rem' }}>
      {/* Crest Watermark */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none opacity-10">
        {/* Replace with your SVG crest if available */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#E6C77B" strokeWidth="6" fill="none" />
          <text x="50%" y="54%" textAnchor="middle" fill="#E6C77B" fontSize="32" fontWeight="bold" dy=".3em">A</text>
        </svg>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            A Note from Our Founder
          </h2>
          <blockquote className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed mb-8 border-l-4 border-[#E6C77B] pl-6 bg-white/80 rounded-xl inline-block">
            Altibbe began with a simple belief: truth should be effortless to find. Our task is to make good data usable—by ministries, by buyers, by families—so decisions are sound and dignity is preserved. We build with care, so others can lead with confidence.
          </blockquote>
          {/* Signature graphic (SVG) */}
          <div className="flex justify-center mt-6">
            <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30 Q 30 10, 60 30 T 110 30" stroke="#E6C77B" strokeWidth="3" fill="none" />
              <text x="70" y="28" textAnchor="middle" fill="#E6C77B" fontSize="18" fontFamily="cursive">Shams Ahmed</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
