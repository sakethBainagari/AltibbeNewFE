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
    }, 5000); // 5 seconds per text
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/altibbeHomePageVideoSlowmoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay using professional color palette */}
      <div className="absolute inset-0 bg-[#0d7377]/70 mix-blend-multiply z-0" />

      {/* Main hero content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            key={slides[currentIndex].headline}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-poppins text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            style={{ 
              color: '#ffffff', 
              textShadow: '0 2px 8px rgba(13, 115, 119, 0.8), 0 1px 0 #0d7377', 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 700 
            }}
          >
            {slides[currentIndex].headline}
          </motion.h1>

          <motion.p
            key={slides[currentIndex].subtext}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-4xl mx-auto drop-shadow"
            style={{ 
              color: '#f7fafc', 
              textShadow: '0 1px 4px rgba(13, 115, 119, 0.6)', 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 500 
            }}
          >
            {slides[currentIndex].subtext}
          </motion.p>

          <motion.a
            href={slides[currentIndex].ctaLink}
            key={slides[currentIndex].cta}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group bg-transparent border-2 hover:bg-[#38a169]/20 transition-all duration-300 px-8 py-4 relative overflow-hidden inline-flex items-center font-bold text-white text-base md:text-lg shadow-lg rounded-none"
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '2px solid #38a169',
              fontFamily: '"Editorial New","Untitled Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 400,
              fontSize: '21px',
              lineHeight: '21px',
              fontStyle: 'normal'
            }}
          >
            <span className="flex items-center space-x-3 w-full">
              <span className={`transform transition-transform duration-300 ${slides[currentIndex].cta === 'Discover Altibbe' ? 'group-hover:translate-x-40' : slides[currentIndex].cta === 'Explore Hedamo Report' ? 'group-hover:translate-x-56' : slides[currentIndex].cta === 'Discover Hedamo AI' ? 'group-hover:translate-x-48' : slides[currentIndex].cta === 'Explore Hedamo Code' ? 'group-hover:translate-x-52' : slides[currentIndex].cta === 'See Market Strategies' ? 'group-hover:translate-x-52' : 'group-hover:translate-x-68'}`}>
                →
              </span>
              <span className="transform transition-transform duration-300 group-hover:-translate-x-8">
                {slides[currentIndex].cta}
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}