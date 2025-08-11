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
    <section id="contact" className="relative w-full min-h-screen" style={{ scrollMarginTop: '6rem' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&h=1080&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 flex items-center min-h-screen">
        {/* CENTER-ALIGNED TEXT */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mx-auto max-w-4xl"
        >
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Contact <em className="not-italic text-green-400">Us</em>
          </motion.h1>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
          >
            Have questions or need support? We're here to help. 
            Reach out and let's build a healthier future together.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-white/80 leading-relaxed"
          >
            Whether you're a producer looking to get your products reviewed, a partner interested in collaboration, 
            or a consumer with questions about transparency – we're ready to assist you on your health journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 