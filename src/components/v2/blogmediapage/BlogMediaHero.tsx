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
    <section id="blog-media" className="w-full min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#f9fafb] relative overflow-hidden" style={{ scrollMarginTop: '8rem' }}>
      {/* Professional background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[#3182ce]/20 to-[#0d7377]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 right-20 w-16 h-16 border border-[#e2e8f0] rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border border-[#3182ce]/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 relative z-10">
        {/* LEFT-ALIGNED TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left mb-16"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl font-light text-[#2d3748] mb-6 tracking-tight leading-tight font-['Playfair_Display',Georgia,serif]"
            >
              Insights, Updates &
              <span className="block font-extralight bg-gradient-to-r from-[#3182ce] via-[#0d7377] to-[#38a169] bg-clip-text text-transparent">
                Global Perspectives
              </span>
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#0d7377] to-[#38a169] rounded-full"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-medium text-[#2d3748] mb-8 max-w-5xl leading-relaxed font-['Playfair_Display',Georgia,serif]"
          >
            Explore Altibbe's thought leadership, Hedamo breakthroughs, and market insights from around the world.
          </motion.h2>

          {/* Description */}
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-lg md:text-xl text-[#4a5568] leading-relaxed mb-12 font-normal font-['Inter','Helvetica_Neue',Arial,sans-serif]"
          >
            From national food security strategies to AI-driven supply chain innovation, our articles, press features, and updates offer decision-makers and industry leaders a clear view into the trends shaping global trade transparency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-6"
          >
            {/* Primary CTA */}
            <a 
              href="#articles" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0d7377] to-[#38a169] hover:from-[#0a5d61] hover:to-[#38a169] text-white font-medium rounded-xl text-lg shadow-lg transition-all duration-300 backdrop-blur-sm font-['Inter','Helvetica_Neue',Arial,sans-serif]"
            >
              <span className="flex items-center space-x-2">
                <span>Read Latest Articles</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA */}
            <a 
              href="https://linkedin.com/company/altibbe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[#0d7377]/5 text-[#0d7377] hover:text-[#0a5d61] font-medium rounded-xl text-lg transition-all duration-300 border-2 border-[#e2e8f0] hover:border-[#0d7377]/30 font-['Inter','Helvetica_Neue',Arial,sans-serif]"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Follow Us on LinkedIn</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* FULL-WIDTH HERO IMAGE PLACEHOLDER */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="w-full max-h-[60vh] overflow-hidden mb-16"
        >
         
        </motion.div>
      </div>
    </section>
  );
}