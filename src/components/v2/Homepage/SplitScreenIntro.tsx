// SplitScreenIntro.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

export default function SplitScreenIntro() {
  return (
    <section className="bg-white z-10">
      <div className="flex flex-col lg:flex-row">
        {/* 1️⃣  LEFT : Image half */}
        <div
          className="w-full lg:w-1/2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[auto] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560761098-21f5722ecb14?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* 2️⃣  RIGHT : Text half with vertical cards */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-[clamp(1rem,6vw,4rem)] bg-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 text-[#0B5345] text-left"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The Hedamo System – <br></br>AI Powered Transparency
          </motion.h2>
          <div className="flex flex-col gap-8 mb-10">
            {/* Hedamo Report */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] rounded-xl p-6 shadow-md flex flex-col items-center"
            >
              <span className="mb-4">
                {/* Minimal line icon for report */}
                <svg width="40" height="40" fill="none" stroke="#0B5345" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-[#0B5345]">Hedamo Report</h3>
              <p className="text-gray-700 text-base text-center">Structured transparency reports for governments, agencies, and producers.</p>
            </motion.div>
            {/* Hedamo AI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] rounded-xl p-6 shadow-md flex flex-col items-center"
            >
              <span className="mb-4">
                {/* Minimal line icon for AI brain */}
                <svg width="40" height="40" fill="none" stroke="#0B5345" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-[#0B5345]">Hedamo AI</h3>
            </motion.div>
            {/* Hedamo Code */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] rounded-xl p-6 shadow-md flex flex-col items-center"
            >
              <span className="mb-4">
                {/* Minimal line icon for QR code */}
                <svg width="40" height="40" fill="none" stroke="#0B5345" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2z"/></svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-[#0B5345]">Hedamo Code</h3>
              <p className="text-gray-700 text-base text-center">QR-enabled gateway for consumers, retailers, and regulators.</p>
            </motion.div>
          </div>
           {/* Button removed as requested */}
        </div>
      </div>
    </section>
  );
}