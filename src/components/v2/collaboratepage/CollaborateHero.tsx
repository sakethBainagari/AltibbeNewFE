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
      el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    });

    // reveal with stagger
    els.forEach((el, idx) =>
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + idx * 150)
    );
  }, []);

  return (
    <section id="collaborate" className="w-full min-h-screen" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left mb-16"
        >
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Partner with Us to Shape the Future of Trade Transparency
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-green-700 mb-6"
          >
            From national agencies to forward-thinking producers, join us in building global trust through data, AI, and innovation.
          </motion.h2>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-4xl text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            Collaboration is at the heart of Altibbe’s mission. Together, we can align with national goals, meet international compliance standards, and unlock market opportunities through the Hedamo system.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a href="/contact" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Start a Strategic Dialogue →</a>
            <a href="/hedamo" className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Learn About Hedamo System →</a>
          </div>
        </motion.div>

        {/* FULL-WIDTH HERO IMAGE with organic clippath */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full max-h-[60vh] overflow-hidden"
        >
          
        </motion.div>
      </div>
    </section>
  );
} 