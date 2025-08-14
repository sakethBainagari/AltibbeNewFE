// src/components/v2/blogmediapage/BlogMediaHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BlogMediaHero() {
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
    <section id="blog-media" className="w-full min-h-screen" style={{ scrollMarginTop: '8rem' }}>
      <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-40">
        {/* LEFT-ALIGNED TEXT */}
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
            Insights, Updates & Global Perspectives
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-green-700 mb-6"
          >
            Explore Altibbe’s thought leadership, Hedamo breakthroughs, and market insights from around the world.
          </motion.h2>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-4xl text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            From national food security strategies to AI-driven supply chain innovation, our articles, press features, and updates offer decision-makers and industry leaders a clear view into the trends shaping global trade transparency.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a href="#articles" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Read Latest Articles →</a>
            <a href="https://linkedin.com/company/altibbe" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Follow Us on LinkedIn →</a>
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