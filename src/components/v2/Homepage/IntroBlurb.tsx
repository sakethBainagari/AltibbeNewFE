// IntroBlurb.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function IntroBlurb() {
  return (
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-[#ffffff] via-[#f9fafb] to-[#f7fafc] z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <div className="rounded-lg shadow-xl overflow-hidden bg-white p-2">
            <img
              src="https://images.unsplash.com/photo-1560761098-21f5722ecb14?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Global trade, digital transparency, government innovation"
              className="object-cover max-h-[32rem] w-full min-h-[24rem] rounded-md"
            />
          </div>
        </motion.div>
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full text-center md:text-left flex flex-col justify-center"
        >
          <h2 
            className="text-4xl md:text-5xl font-light mb-10 text-[#0d7377] tracking-tight leading-tight"
            style={{ 
              fontFamily: '"Playfair Display", "Georgia", serif', 
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: '1.1'
            }}
          >
            A Global Standard-Bearer for Ethical Commerce
          </h2>
          
          <p
            className="text-lg md:text-xl leading-relaxed text-[#4a5568] mb-10"
            style={{ 
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', 
              fontWeight: 400,
              lineHeight: '1.7',
              letterSpacing: '0.01em'
            }}
          >
            Altibbe is the innovation brand behind transformative systems that redefine trust in trade. From health transparency to AI-driven policy intelligence, our mission is to empower nations and producers to achieve uncompromising product integrity.
            <br /><br />
            Our work spans UAE, USA, KSA, India, and beyond — aligning with national milestones, trade agreements, and sustainability goals.
          </p>
          
          <a
            href="/about"
            className="group bg-transparent border-2 border-[#0d7377] hover:bg-[#38a169] transition-all duration-300 px-8 py-4 relative overflow-hidden inline-flex items-center text-[#0d7377] hover:text-white text-lg shadow-lg rounded-sm self-start"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '20px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
          >
            <span className="flex items-center space-x-3 w-full">
              <span className="transform transition-transform duration-300 group-hover:translate-x-72">
                →
              </span>
              <span className="transform transition-transform duration-300 group-hover:-translate-x-16">
                Discover Health EcoSystem
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}