import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipNote() {
  return (
    <section id="leadership-note" className="py-32 px-6 bg-gradient-to-b from-slate-50 to-gray-50 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-300 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-300 to-gray-200 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-20 w-32 h-32 border border-amber-200 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border border-gray-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-amber-100 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
                A Note from Our
                <span className="block font-extralight bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Founder
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 md:p-16 shadow-sm border border-gray-200/50 relative overflow-hidden">
              {/* Quote mark decoration */}
              <div className="absolute top-6 left-8 text-6xl text-amber-200 font-serif leading-none">"</div>
              <div className="absolute bottom-6 right-8 text-6xl text-amber-200 font-serif leading-none transform rotate-180">"</div>
              
              <blockquote className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed italic max-w-3xl mx-auto relative z-10">
                Altibbe began with a simple belief: truth should be effortless to find. Our task is to make good data usable—by ministries, by buyers, by families—so decisions are sound and dignity is preserved. We build with care, so others can lead with confidence.
              </blockquote>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Elegant signature line */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            
            {/* Name */}
            <div className="text-xl font-light text-gray-700 tracking-wide">
              Shams Ahmed
            </div>
            
            {/* Title line */}
            <div className="text-sm font-light text-gray-500 uppercase tracking-widest">
              Founder & CEO
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-30"></div>
    </section>
  );
}