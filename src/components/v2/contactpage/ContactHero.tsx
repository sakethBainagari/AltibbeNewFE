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
  <section className="relative pt-20 pb-8 mt-16 px-4 md:px-8 lg:px-32 min-h-screen bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-lg text-center flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-poppins text-4xl md:text-5xl font-bold text-yellow-900 mb-4"
        >
          Let’s Start the Conversation
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-poppins text-xl md:text-2xl text-yellow-800 mb-6 font-medium"
        >
          From government agencies to global producers, we’re here to explore how transparency can work for your goals.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-lg md:text-xl text-yellow-700 mb-8"
        >
          Whether you’re seeking a national pilot, sector-wide adoption, or product-specific reporting, our team will connect you with the right experts to design a solution tailored to your needs.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <a
            href="/contact#form"
            className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
          >
            Book a Strategic Meeting
          </a>
          <a
            href="/contact#form?type=pilot"
            className="bg-white border border-yellow-700 text-yellow-700 hover:bg-yellow-50 font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
          >
            Request a Pilot Program
          </a>
        </div>
      </div>
      {/* Image Suggestion: Elegant meeting table with digital dashboards in the background; gold-accent world map overlay. */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Replace with actual image if available */}
        <img
          src="/altibbeLogoForNavBar.png"
          alt="Elegant meeting table with digital dashboards and gold-accent world map"
          className="opacity-30 w-full max-w-2xl object-contain"
        />
      </div>
    </section>
  );
} 