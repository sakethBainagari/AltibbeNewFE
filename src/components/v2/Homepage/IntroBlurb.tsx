// IntroBlurb.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function IntroBlurb() {
  return (
    <section className="bg-white pt-0 pb-12 md:pt-0 md:pb-20 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Premium black-and-gold composite of global landmarks with subtle AI data overlays"
            className="rounded-2xl shadow-xl object-cover max-h-80 w-full"
            style={{ background: 'linear-gradient(135deg, #000 60%, #D4AF37 100%)' }}
          />
        </motion.div>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0B5345]">
            A Global Standard-Bearer for Ethical Commerce
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            Altibbe is the innovation brand behind transformative systems that redefine trust in trade. From health transparency to AI-driven policy intelligence, our mission is to empower nations and producers to achieve uncompromising product integrity.
            <br /><br />
            Our work spans UAE, USA, KSA, India, and beyond — aligning with national milestones, trade agreements, and sustainability goals.
          </p>
          <a
            href="/about"
            className="group bg-transparent border-2 border-[#D4AF37] hover:bg-[#0B5345] transition-all duration-300 px-8 py-4 relative overflow-hidden inline-flex items-center font-bold text-[#D4AF37] hover:text-white text-base md:text-lg shadow-lg rounded-none"
            style={{
              fontFamily: '"Editorial New","Untitled Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 400,
              fontSize: '21px',
              lineHeight: '21px',
              fontStyle: 'normal'
            }}
          >
            <span className="flex items-center space-x-3 w-full">
              <span className="transform transition-transform duration-300 group-hover:translate-x-64">
                →
              </span>
              <span className="transform transition-transform duration-300 group-hover:-translate-x-8">
                Discover Health EcoSystem
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
