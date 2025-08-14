import React from "react";
import { motion } from "framer-motion";

export default function CollaborationCTA() {
  return (
    <section id="collaborate-cta" className="py-20 bg-primary-900 text-accent-mint" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-accent-mint mb-6"
        >
          Let’s Build the Future of Transparency Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl mb-8 text-accent-mint/90 leading-relaxed"
        >
          Whether you represent a government, an industry body, or a market-leading producer, our team is ready to co-create a transparency roadmap tailored to your objectives.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 button-text text-lg text-accent-mint bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors font-semibold"
          >
            <span className="relative overflow-hidden">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Book an Introductory Meeting
              </span>
              <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Book an Introductory Meeting
              </span>
            </span>
          </a>
          <a
            href="/contact?type=pilot"
            className="bg-transparent border-2 border-accent-mint text-accent-mint px-8 py-4 rounded-lg hover:bg-accent-mint hover:text-primary-900 transition-colors font-semibold text-lg"
          >
            Request a Pilot Program
          </a>
        </motion.div>
      </div>
    </section>
  );
}
