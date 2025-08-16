// src/components/v2/blogmediapage/NewsletterCTA.tsx
import React from "react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-100 to-emerald-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-100 to-slate-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Card Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/60 p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-gray-100 to-slate-100 rounded-full opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight leading-tight">
                  Stay Ahead with
                  <span className="block font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Trusted Insights
                  </span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Subscribe to receive strategic updates, product releases, and market intelligence direct to your inbox — curated for policymakers, industry leaders, and transparency advocates.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="/subscribe"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-xl text-lg shadow-lg transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Button background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Subscribe</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </motion.div>

              {/* ...existing code... */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}