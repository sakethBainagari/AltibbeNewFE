// LiveMainnetBanner.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LiveMainnetBanner() {
  return (
    <section
      className="relative w-full min-h-[calc(var(--vh,1vh)*70)] md:min-h-[calc(var(--vh,1vh)*80)] bg-cover bg-center z-10"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&h=1080&q=80')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* text block – top-left */}
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start p-[clamp(1rem,5vw,3rem)]">
        <div className="flex flex-col items-start gap-2 md:gap-3 font-serif text-accent-mint">
          {/* stacked headlines */}
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter"
          >
            Our Journey in
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter"
          >
            Health &
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter"
          >
            Transparency
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter"
          >
            Innovation
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="font-sans text-base md:text-lg mt-2"
          >
            "Altibbe is redefining health and transparency in the post-pandemic world, empowering consumers to make informed choices."
          </motion.p>

          <h3 className="font-serif text-xl md:text-2xl mt-4">
            2020 – The Vision | 2024 – Empowering Consumers
          </h3>
        </div>

        {/* button – bottom-left */}
        <a
          href="/about"
          className="absolute bottom-0 left-0 mb-4 ml-[clamp(1rem,5vw,3rem)] inline-flex items-center button-text text-accent-mint text-lg border-b border-accent-mint pb-1 hover:border-b-2 hover:pb-[2px] transition-all"
        >
          OUR STORY
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}