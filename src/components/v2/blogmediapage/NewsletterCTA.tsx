// src/components/v2/blogmediapage/NewsletterCTA.tsx
import React from "react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-yellow-50 via-white to-blue-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-3xl mx-auto text-center rounded-2xl shadow-lg bg-white p-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary-800 mb-6"
        >
          Stay Ahead with Trusted Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-8"
        >
          Subscribe to receive strategic updates, product releases, and market intelligence direct to your inbox — curated for policymakers, industry leaders, and transparency advocates.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          href="/subscribe"
          className="inline-block px-8 py-4 rounded-lg bg-primary-700 text-white font-semibold shadow hover:bg-primary-800 transition text-lg"
        >
          Subscribe →
        </motion.a>
      </div>
    </section>
  );
}
