import { motion } from 'framer-motion';

export default function AdvisoryFeature() {
  return (
    <section id="advisory" className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#e8f0fe]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B5345] mb-6"
        >
          Hedamo Advisory — Precision Insights for Decision-Makers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Powered by Hedamo AI, our advisory support helps ministries, agencies, and producers plan programs, prioritize risk, and ready products for market entry—efficiently and at scale.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          href="/contact?type=advisory"
          className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-[#0B5345] text-white shadow-lg hover:bg-[#176655] transition"
        >
          Talk to an Advisor &rarr;
        </motion.a>
      </div>
    </section>
  );
}
