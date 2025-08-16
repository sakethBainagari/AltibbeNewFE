// src/components/v2/collaboratepage/CollaborateHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CollaborateHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [headingRef.current, taglineRef.current].filter(Boolean) as HTMLElement[];

    // initial state
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // reveal with stagger
    els.forEach((el, idx) =>
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 + idx * 200)
    );
  }, []);

  return (
    <section 
      id="collaborate" 
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-white relative overflow-hidden" 
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight tracking-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              textShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <span className="block">Partner with Us to</span>
            <span className="block bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent font-medium">
              Shape the Future
            </span>
            <span className="block">of Trade Transparency</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-emerald-700 mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            From national agencies to forward-thinking producers, join us in building global trust through data, AI, and innovation.
          </motion.h2>

          {/* Body Text */}
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto font-light"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Collaboration is at the heart of Altibbe's mission. Together, we can align with national goals, meet international compliance standards, and unlock market opportunities through the Hedamo system.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              href="/contact"
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 40px rgba(52, 168, 83, 0.25)'
              }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] justify-center"
              style={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Start a Strategic Dialogue
              <motion.span 
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                initial={{ x: 0 }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a 
              href="/hedamo"
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 40px rgba(52, 168, 83, 0.15)'
              }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-emerald-600 text-emerald-700 font-medium text-lg hover:bg-emerald-50 transition-all duration-300 min-w-[240px] justify-center"
              style={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Learn About Hedamo System
              <motion.span 
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                initial={{ x: 0 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 1.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="mt-16 relative"
        >
          {/* Subtle divider line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto opacity-60"></div>
          
          {/* Optional: Space for hero image if needed later */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="w-full max-h-[50vh] overflow-hidden mt-8"
          >
            {/* Hero image space reserved */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}