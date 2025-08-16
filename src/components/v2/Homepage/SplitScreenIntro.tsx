// SplitScreenIntro.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

export default function SplitScreenIntro() {
  return (
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-[#ffffff] via-[#f9fafb] to-[#f7fafc] z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center"
        >
          <h2 
            className="text-4xl md:text-5xl font-light mb-12 text-[#0d7377] tracking-tight text-left leading-tight"
            style={{ 
              fontFamily: '"Playfair Display", "Georgia", serif', 
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: '1.1'
            }}
          >
            The Hedamo System – <br />AI Powered Transparency
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Hedamo Report */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white border border-[#e2e8f0] rounded-lg p-8 shadow-lg flex flex-col items-center h-80 hover:shadow-xl transition-shadow duration-300"
            >
              <span className="mb-6 p-3 bg-[#0d7377]/5 rounded-full">
                <svg width="40" height="40" fill="none" stroke="#0d7377" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="3"/>
                  <path d="M8 8h8M8 12h8M8 16h4"/>
                </svg>
              </span>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-3 text-[#2d3748] text-center"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                  fontWeight: 500,
                  letterSpacing: '-0.01em'
                }}
              >
                Hedamo Report
              </h3>
              <p 
                className="text-base md:text-lg text-[#4a5568] text-center leading-relaxed flex-1 flex items-center"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                Structured transparency reports for governments, agencies, and producers.
              </p>
            </motion.div>

            {/* Hedamo AI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white border border-[#e2e8f0] rounded-lg p-8 shadow-lg flex flex-col items-center h-80 hover:shadow-xl transition-shadow duration-300"
            >
              <span className="mb-6 p-3 bg-[#0d7377]/5 rounded-full">
                <svg width="40" height="40" fill="none" stroke="#0d7377" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
              </span>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-3 text-[#2d3748] text-center"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                  fontWeight: 500,
                  letterSpacing: '-0.01em'
                }}
              >
                Hedamo AI
              </h3>
              <p 
                className="text-base md:text-lg text-[#4a5568] text-center leading-relaxed flex-1 flex items-center"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                AI-powered decision-making and insights for producers, governments, and consumers.
              </p>
            </motion.div>

            {/* Hedamo Code */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-white border border-[#e2e8f0] rounded-lg p-8 shadow-lg flex flex-col items-center h-80 hover:shadow-xl transition-shadow duration-300"
            >
              <span className="mb-6 p-3 bg-[#0d7377]/5 rounded-full">
                <svg width="40" height="40" fill="none" stroke="#0d7377" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="6" height="6"/>
                  <rect x="14" y="4" width="6" height="6"/>
                  <rect x="4" y="14" width="6" height="6"/>
                  <path d="M14 14h2v2h-2zM18 18h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2z"/>
                </svg>
              </span>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-3 text-[#2d3748] text-center"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                  fontWeight: 500,
                  letterSpacing: '-0.01em'
                }}
              >
                Hedamo Code
              </h3>
              <p 
                className="text-base md:text-lg text-[#4a5568] text-center leading-relaxed flex-1 flex items-center"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                QR-enabled gateway for consumers, retailers, and regulators.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}