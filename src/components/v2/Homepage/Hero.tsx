// components/Hero.tsx

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slides array: each slide has its own image, headline, subtext, CTA, and link
  const slides = [
    {
      headline: 'Innovation That Shapes Global Standards',
      subtext: 'Altibbe, a global innovation brand, powers advanced health transparency and ethical trade ecosystems for nations and producers.',
      cta: 'Discover Altibbe',
      ctaLink: '/about',
    },
    {
      headline: 'Transparency That Builds Trust',
      subtext: 'AI-powered reporting, structured for governments and producers, aligned to national goals.',
      cta: 'Explore Hedamo Report',
      ctaLink: '/hedamo/report',
    },
    {
      headline: 'Intelligence for Policy & Markets',
      subtext: 'Turning supply chain data into actionable insights for policy-makers and trade leaders.',
      cta: 'Discover Hedamo AI',
      ctaLink: '/hedamo/ai',
    },
    {
      headline: 'Clarity at Every Scan',
      subtext: 'QR-linked gateway connecting consumers, compliance bodies, and global markets.',
      cta: 'Explore Hedamo Code',
      ctaLink: '/hedamo/code',
    },
    {
      headline: 'Driving Change in Key Markets',
      subtext: 'From CEPA-aligned UAE to USDA-backed USA, we empower nations to lead with integrity.',
      cta: 'See Market Strategies',
      ctaLink: '/hedamo/services',
    },
  ];

  // Auto text change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per text
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hemoPageVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#1a1a1a]/40 mix-blend-multiply z-0" />

      {/* Main hero content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            key={slides[currentIndex].headline}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg"
            style={{ color: '#fff', textShadow: '0 2px 8px #000a, 0 1px 0 #D4AF37' }}
          >
            {slides[currentIndex].headline}
          </motion.h1>

          <motion.p
            key={slides[currentIndex].subtext}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-sans text-white leading-relaxed mb-8 max-w-4xl mx-auto drop-shadow"
            style={{ color: '#fff', textShadow: '0 1px 4px #000a' }}
          >
            {slides[currentIndex].subtext}
          </motion.p>

          <motion.a
            href={slides[currentIndex].ctaLink}
            key={slides[currentIndex].cta}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-colors duration-300 group shadow-lg border-2 border-white bg-transparent text-white hover:bg-white/10"
            style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
            }}
          >
            {slides[currentIndex].cta}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}