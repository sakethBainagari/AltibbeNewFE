import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta-section" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-100 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Bring Next-Generation
            <span className="block font-extralight bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              Transparency to Your Nation
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Request a confidential briefing or explore a pilot tailored to your national objectives.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          {/* Primary CTA */}
          <a
            href="/contact?type=strategic-briefing"
            className="group relative inline-flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-4 px-10 rounded-xl text-lg shadow-lg transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center space-x-2">
                <span>Request Strategic Briefing</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>

          {/* Secondary CTA */}
          <a
            href="/hedamo"
            className="group relative inline-flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-amber-400/50 rounded-xl"></div>
            <div className="relative bg-transparent hover:bg-amber-400/10 text-amber-400 hover:text-amber-300 font-medium py-4 px-10 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm border-2 border-amber-400/50 hover:border-amber-300/70">
              <span className="flex items-center space-x-2">
                <span>Explore Hedamo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20"></div>
    </section>
  );
}