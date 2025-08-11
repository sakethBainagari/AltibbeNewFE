// SplitScreenIntro.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function SplitScreenIntro() {
  return (
    <section className="bg-primary-900 text-accent-mint z-10">
      <div className="flex flex-col lg:flex-row">
        {/* 1️⃣  LEFT : Image half */}
        <div
          className="w-full lg:w-1/2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[auto] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560761098-21f5722ecb14?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Organic farming/health image
          }}
        />

        {/* 2️⃣  RIGHT : Text half */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-[clamp(1rem,6vw,4rem)]">
      {/* Altibbe Health Ecology */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-tight"
            >
              Altibbe Health Ecology
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="body-text text-[0.875rem] sm:text-[1rem] leading-[1.6] mt-3 text-accent-mint/90"
            >
              Our mission, Health for Humanity, drives every innovation at Altibbe – from empowering virtuous producers to highlighting sustainable practices – all to build a healthier, more transparent future.
            </motion.p>
            <a href="/about" className="btn-mono inline-flex items-center overflow-hidden group">
              <span className="flex items-center space-x-3">
                <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                  →
                </span>
                <span className="transform transition-transform duration-300 group-hover:-translate-x-8">
                  Learn About Our Mission
                </span>
              </span>
            </a>
          </motion.div>

          {/* Hedamo Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight"
            >
              Be Transparent, Get a Hedamo Review
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="body-text text-[1rem] leading-[1.6] mt-3 text-accent-mint/90"
            >
              Altibbe's Hedamo sub-brand provides comprehensive product review and labeling solutions for organic farms, food producers, and natural product innovators. Our Platinum, Gold, and Green labels backed by in-depth reports set the benchmark for transparency and quality.
            </motion.p>
            <a href="/hedamo" className="btn-mono inline-flex items-center overflow-hidden group">
              <span className="flex items-center space-x-3">
                <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                  →
                </span>
                <span className="transform transition-transform duration-300 group-hover:-translate-x-8">
                  Know More About Hedamo
                </span>
              </span>
            </a>
          </motion.div>

          {/* Transparency Reporting & Verification */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight"
            >
              Transparency Reporting & On-Site Verification
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
              className="body-text text-[1rem] leading-[1.6] mt-3 text-accent-mint/90"
            >
              Consulting for organic farms with tailored strategies, health-centered product reporting that highlights innovation and differentiation, and global market access guidance to help products meet international standards and reach new markets.
            </motion.p>
            <a href="/services" className="btn-mono inline-flex items-center overflow-hidden group">
              <span className="flex items-center space-x-3">
                <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                  →
                </span>
                <span className="transform transition-transform duration-300 group-hover:-translate-x-8">
                  Explore Our Services
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}