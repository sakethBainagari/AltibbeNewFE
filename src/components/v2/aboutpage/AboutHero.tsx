// src/components/v2/aboutpage/AboutHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
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
    <section id="about-altibbe" className="relative w-full min-h-screen" style={{ scrollMarginTop: '6rem' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&h=1080&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 flex items-center min-h-screen">
        {/* LEFT-ALIGNED TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left max-w-4xl"
        >
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About <em className="not-italic text-green-400">Altibbe</em>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-green-300 mb-4">
              Health for Humanity
            </h2>
            <div className="w-24 h-1 bg-green-400 mb-6"></div>
          </motion.div>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white leading-relaxed mb-6"
          >
            Born from a vision of a healthier, more transparent world, Altibbe stands for 
            <strong className="text-green-400"> Health for Humanity</strong> – a commitment to empower every consumer and producer 
            through honesty, innovation, and ancient wisdom.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg text-white/90 leading-relaxed"
          >
            We bridge the gap between ancestral health knowledge and cutting-edge technology to restore trust 
            in what we consume, positioning Altibbe as not just a business, but a movement for good.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 