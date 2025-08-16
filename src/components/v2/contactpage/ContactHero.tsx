// src/components/v2/contactpage/ContactHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
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
    <section className="relative pt-32 pb-20 mt-16 px-4 md:px-8 lg:px-32 min-h-screen bg-white text-center flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-tight tracking-tight"
          style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
          }}
        >
          <span className="text-emerald-700">Let's Start the Conversation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-emerald-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
          }}
        >
          From government agencies to global producers, we're here to explore how transparency can work for your goals.
        </motion.h2>

        {/* Description */}
        <motion.p
          ref={taglineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-slate-500 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
          style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
          }}
        >
          Whether you're seeking a national pilot, sector-wide adoption, or product-specific reporting, our team will connect you with the right experts to design a solution tailored to your needs.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact#form"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors duration-200 min-w-[220px]"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Book a Strategic Meeting
          </a>

          <a
            href="/contact#form?type=pilot"
            className="inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 min-w-[220px]"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Request a Pilot Program
          </a>
        </motion.div>
      </div>

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img
          src="/altibbeLogoForNavBar.png"
          alt="Elegant meeting table with digital dashboards and gold-accent world map"
          className="w-full max-w-2xl object-contain filter grayscale"
        />
      </div>
    </section>
  );
}