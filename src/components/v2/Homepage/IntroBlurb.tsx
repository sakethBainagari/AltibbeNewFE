// IntroBlurb.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function IntroBlurb() {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-[#F8F9FA] via-white to-[#E3E6EA] z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <div className="rounded-2xl shadow-2xl   ">
                  <img
                    src="https://images.unsplash.com/photo-1560761098-21f5722ecb14?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Global trade, digital transparency, government innovation"
                    className="object-cover max-h-[32rem] w-full min-h-[24rem] mix-blend-multiply"
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
          <h2 className="font-poppins text-4xl md:text-5xl font-semibold mb-8 text-[#0B5345] drop-shadow-lg tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            A Global Standard-Bearer for Ethical Commerce
          </h2>
          <p
            className="font-poppins text-lg md:text-xl leading-relaxed text-gray-700 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Altibbe is the innovation brand behind transformative systems that redefine trust in trade. From health transparency to AI-driven policy intelligence, our mission is to empower nations and producers to achieve uncompromising product integrity.
            <br /><br />
            Our work spans UAE, USA, KSA, India, and beyond — aligning with national milestones, trade agreements, and sustainability goals.
          </p>
          <a
            href="/about"
            className="font-poppins group bg-transparent border-2 border-[#D4AF37] hover:bg-[#0B5345] transition-all duration-300 px-8 py-4 relative overflow-hidden inline-flex items-center font-bold text-[#D4AF37] hover:text-white text-lg shadow-xl rounded-md"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '21px',
              lineHeight: '21px',
              fontStyle: 'normal'
            }}
          >
            <span className="font-poppins flex items-center space-x-3 w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="font-poppins transform transition-transform duration-300 group-hover:translate-x-72" style={{ fontFamily: 'Poppins, sans-serif' }}>
                →
              </span>
              <span className="font-poppins transform transition-transform duration-300 group-hover:-translate-x-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Discover Health EcoSystem
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
