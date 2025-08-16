import React from "react";
import { motion } from "framer-motion";

export default function CollaborationCTA() {
  return (
    <section 
      id="collaborate-cta" 
      className="py-24 bg-white text-slate-800 relative overflow-hidden" 
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-8 leading-tight"
          style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            textShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
        >
          <span className="block mb-2">Let's Build the Future of</span>
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent font-medium">
            Transparency Together
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-12 text-slate-600 leading-relaxed font-light max-w-3xl mx-auto"
          style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
          }}
        >
          Whether you represent a government, an industry body, or a market-leading producer, our team is ready to co-create a transparency roadmap tailored to your objectives.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          {/* Primary CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ 
              y: -3,
              boxShadow: '0 15px 40px rgba(52, 168, 83, 0.25)'
            }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 rounded-full font-medium shadow-lg transition-all duration-300 min-w-[280px]"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            <span className="relative overflow-hidden">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Book an Introductory Meeting
              </span>
              <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Book an Introductory Meeting
              </span>
            </span>
            <motion.span 
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
              initial={{ x: 0 }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Secondary CTA Button */}
          <motion.a
            href="/contact?type=pilot"
            whileHover={{ 
              y: -3,
              boxShadow: '0 10px 30px rgba(52, 168, 83, 0.15)'
            }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className="group inline-flex items-center justify-center bg-transparent border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-full hover:bg-emerald-50 hover:border-emerald-700 hover:text-emerald-800 transition-all duration-300 font-medium text-lg min-w-[280px]"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Request a Pilot Program
            <motion.span 
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
              initial={{ x: 0 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}