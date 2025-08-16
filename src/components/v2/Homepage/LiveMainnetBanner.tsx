// LiveMainnetBanner.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LiveMainnetBanner() {
  return (
    <section
      className="relative w-full min-h-[calc(var(--vh,1vh)*70)] md:min-h-[calc(var(--vh,1vh)*80)] z-10 bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')"
      }}
    >
      {/* Enhanced glassy overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/60 backdrop-blur-sm" />

      {/* Text block – top-left */}
      <div className="relative z-10 flex flex-col items-start p-[clamp(2rem,6vw,4rem)] w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4vw,3rem)] font-light text-[#0B5345] mb-6 leading-tight tracking-wide"
          style={{ 
            fontFamily: '"Playfair Display", "Georgia", serif', 
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: '1.1'
          }}
        >
          Hedamo Advisory – Precision Insights for Decision-Makers
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl"
          style={{ 
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
            fontWeight: 400,
            lineHeight: '1.6',
            letterSpacing: '0.01em'
          }}
        >
          Powered by Hedamo AI, our advisory service delivers tailored intelligence to national agencies, trade bodies, and producers — enabling faster, data-backed decisions.
        </motion.div>

        <motion.a
          href="/hedamo/advisory"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center text-[#0B5345] text-lg border border-[#0B5345] hover:bg-[#0B5345] hover:text-white transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-sm px-8 py-3 shadow-lg group"
          style={{
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}
        >
          <span className="flex items-center w-full">
            <span className="transition-transform duration-300 group-hover:translate-x-72">
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </span>
            <span className="transition-transform duration-300 group-hover:-translate-x-8">
              Learn About Hedamo Advisory
            </span>
          </span>
        </motion.a>
      </div>
    </section>
  );
}