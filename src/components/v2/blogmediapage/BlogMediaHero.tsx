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
    <section id="blog-media" className="w-full min-h-screen" style={{ scrollMarginTop: '6rem' }}>
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
            Insights & <em className="not-italic text-green-600">Inspiration</em>
          </motion.h1>
          <motion.p
            ref={taglineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-4xl text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            Stay informed with Altibbe's latest insights, research, and success stories. 
            Our Blog & Media section brings you expert articles, industry updates, and 
            a glimpse into our community initiatives – all driven by our mission to 
            educate and inspire for Health for Humanity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            This isn't just news – it's curated knowledge aligning with Altibbe's ethos, 
            showcasing our thought leadership and active community presence.
          </motion.p>
        </motion.div>

        {/* Content Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Posts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On our blog, you'll find articles that range from science-backed wellness tips to deep dives into 
              food transparency. Our team and guest experts share knowledge on topics like 
              <strong className="text-green-600"> 'Time-Tested Detox Practices: The Science Behind Nature's Healing Powers'</strong> 
              and <strong className="text-green-600">'Rediscovering Ancient Wisdom for Modern Health'</strong>, 
              connecting the dots between tradition and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're curious about how blockchain can combat food fraud or looking for sustainable 
              nutrition advice, our posts aim to enlighten and empower.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media & Community</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond our articles, get a live peek into our community through our social media feed. 
              From Instagram highlights of organic farms we visit, to quick tips and news shared on 
              X (Twitter) and LinkedIn, the Blog & Media page keeps you connected with Altibbe in real time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Follow the hashtag <strong className="text-green-600">#TransparentHealth</strong> to see our 
              ongoing conversation about honest wellness.
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
              <clipPath id="organicBlogShape" clipPathUnits="userSpaceOnUse">
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
              href="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400&q=80"
              width="800"
              height="400"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#organicBlogShape)"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
} 