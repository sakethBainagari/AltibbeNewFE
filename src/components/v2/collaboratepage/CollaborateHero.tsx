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
            Collaborate for a{' '}
            <em className="not-italic text-green-600">Healthier Future</em>
          </motion.h1>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-4xl text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            Collaboration is key to Altibbe's impact. We believe in joining hands with those 
            who share our vision for a transparent and healthier world.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Whether you're a forward-thinking brand seeking to verify your products, a government 
            body aiming to enhance national health standards, or a tech partner with complementary 
            solutions – Altibbe is eager to explore synergies. Together, we can amplify trust and 
            drive innovation in the health ecosystem.
          </motion.p>
        </motion.div>

        {/* Collaboration Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Partnerships</h3>
            <p className="text-gray-600 text-sm">
              Partner with like-minded organizations to extend the reach of transparency
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Government Alliances</h3>
            <p className="text-gray-600 text-sm">
              Collaborate with institutions and regulators to support public health goals
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Producer Engagement</h3>
            <p className="text-gray-600 text-sm">
              Guide brands to improve products and gain global recognition
            </p>
          </div>
        </motion.div>

        {/* FULL-WIDTH HERO IMAGE with organic clippath */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full max-h-[60vh] overflow-hidden"
        >
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <clipPath id="organicCollabShape" clipPathUnits="userSpaceOnUse">
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
              href="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&h=400&q=80"
              width="800"
              height="400"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#organicCollabShape)"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
} 