// SplitScreenIntro.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

export default function SplitScreenIntro() {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E3E6EA] z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT : Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <div className="rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560761098-21f5722ecb14?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Global trade, digital transparency, government innovation"
              className="object-cover max-h-[32rem] w-full min-h-[24rem] mix-blend-multiply"
            />
          </div>
        </motion.div>
        {/* RIGHT : Text + Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-semibold mb-8 text-[#0B5345] drop-shadow-lg tracking-tight text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Hedamo System – <br />AI Powered Transparency
          </h2>
          <div className="grid grid-cols-1 gap-8 mb-8">
            {/* Hedamo Report */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black rounded-xl p-6 shadow-xl flex flex-col items-center"
            >
              <span className="mb-4">
                <svg width="40" height="40" fill="none" stroke="#0B5345" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-2 text-[#0B5345]" style={{ fontFamily: 'Poppins, sans-serif' }}>Hedamo Report</h3>
              <p className="font-poppins text-base md:text-lg text-gray-700 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Structured transparency reports for governments, agencies, and producers.</p>
            </motion.div>
            {/* Hedamo AI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black rounded-xl p-6 shadow-xl flex flex-col items-center"
            >
              <span className="mb-4">
                <svg width="40" height="40" fill="none" stroke="#0B5345" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-2 text-[#0B5345]" style={{ fontFamily: 'Poppins, sans-serif' }}>Hedamo AI</h3>
            </motion.div>
            {/* Hedamo Code */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black rounded-xl p-6 shadow-xl flex flex-col items-center"
            >
              <span className="mb-4">
                <svg width="40" height="40" fill="none" stroke="#0B5345" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2z"/></svg>
              </span>
              <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-2 text-[#0B5345]" style={{ fontFamily: 'Poppins, sans-serif' }}>Hedamo Code</h3>
              <p className="font-poppins text-base md:text-lg text-gray-700 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>QR-enabled gateway for consumers, retailers, and regulators.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}