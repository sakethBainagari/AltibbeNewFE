// src/components/v2/hedamopage/HedamoHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HedamoHero() {
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
    <section id="hedamo-system" className="relative py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="text-left mb-16">
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(4rem,6vw,6rem)] leading-none tracking-tight text-green-700 font-bold"
          >
            Hedamo System
          </motion.h1>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-[clamp(1.5rem,2vw,2rem)] text-green-600 font-medium"
          >
            Comprehensive Transparency Solution
          </motion.p>
        </div>

        {/* Enhanced Introduction content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Hedamo</strong> – an exclusive service brand powered by Altibbe – provides a comprehensive range of review and 
            labeling solutions tailored for organic farms, food producers, and health-focused brands. Built on an 
            uncompromising commitment to health, quality, and sustainability, Hedamo sets the benchmark for transparency 
            in products.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Hedamo is changing the narrative around health products through meaningful collaboration and innovative 
            technology, positioning itself as a <strong>global pioneer</strong> in product transparency for the health and wellness industry.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our flagship system combines advanced technology, rigorous analysis, and ongoing support to deliver 
            unparalleled transparency that builds trust from farm to consumer.
          </p>
        </motion.div>

        {/* Key Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Platinum Standards</h3>
            <p className="text-gray-600 text-sm">A NEW ERA OF TRANSPARENCY</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Global Compliance</h3>
            <p className="text-gray-600 text-sm">ADAPTING TO GLOBAL MARKETS</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="font-bold text-lg text-gray-800 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">ADVANCED TECHNOLOGY</p>
          </div>
        </motion.div>

        {/* full-width hero image with organic clippath */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full max-h-[60vh] overflow-hidden"
        >
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <clipPath id="organicShape" clipPathUnits="userSpaceOnUse">
                <path d="
                  M50,80 
                  C120,40 180,20 260,30 
                  C340,40 400,60 480,45
                  C560,30 620,50 720,80
                  C750,90 780,110 800,140
                  L800,320
                  C780,340 740,360 680,370
                  C620,380 560,375 480,365
                  C400,355 340,350 260,360
                  C180,370 120,380 60,375
                  C30,372 10,360 0,340
                  L0,120
                  C15,100 30,85 50,80
                  Z
                " />
              </clipPath>
            </defs>

            <image
              href="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&h=400&q=80"
              width="800"
              height="400"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#organicShape)"
            />
          </svg>
        </motion.div>

      </div>
    </section>
  );
} 