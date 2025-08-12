// LiveMainnetBanner.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LiveMainnetBanner() {
  return (
    <section
      className="relative w-full min-h-[calc(var(--vh,1vh)*70)] md:min-h-[calc(var(--vh,1vh)*80)] z-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" // High-end business meeting with digital dashboards
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80" />

      {/* text block – top-left */}
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start p-[clamp(1rem,5vw,3rem)] w-full max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#0B5345] mb-4 drop-shadow-lg"
        >
          Hedamo Advisory – Precision Insights for Decision-Makers
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-black mb-6 font-semibold"
        >
          Powered by Hedamo AI, our advisory service delivers tailored intelligence to national agencies, trade bodies, and producers — enabling faster, data-backed decisions.
        </motion.div>
        <motion.a
          href="/hedamo/advisory"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-2 inline-flex items-center button-text text-[#0B5345] text-lg border-b border-[#0B5345] pb-1 hover:border-b-2 hover:pb-[2px] transition-all bg-white/80 rounded-full px-6 py-2 font-semibold shadow-lg"
        >
          Learn About Hedamo Advisory
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}