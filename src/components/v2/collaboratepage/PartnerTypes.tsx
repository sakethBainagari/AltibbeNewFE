// src/components/v2/collaboratepage/PartnerTypes.tsx
import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    title: "Governments & Trade Authorities",
    icon: "🏛️",
    background: "bg-white",
    borderColor: "border-slate-200/30",
    description: "Implement policy-aligned transparency for imports and exports."
  },
  {
    title: "National Food Security Agencies",
    icon: "🛡️",
    background: "bg-slate-50/30",
    borderColor: "border-slate-200/40",
    description: "Ensure trusted origin and safety data for domestic supply."
  },
  {
    title: "Large Producers & Exporters",
    icon: "🌾",
    background: "bg-white",
    borderColor: "border-slate-200/50",
    description: "Open premium markets with compliance-ready digital reports."
  },
  {
    title: "Retail & Distribution Chains",
    icon: "🏬",
    background: "bg-slate-50/20",
    borderColor: "border-slate-200/30",
    description: "Offer consumers clarity and confidence with Hedamo Code."
  },
  {
    title: "Institutional Buyers",
    icon: "💼",
    background: "bg-white",
    borderColor: "border-slate-200/60",
    description: "Use verified transparency to drive procurement decisions."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function PartnerTypes() {
  return (
    <section 
      id="strategic-partners" 
      className="py-24 px-6 bg-white relative overflow-hidden" 
      style={{ scrollMarginTop: '6rem' }}
    >


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-8 leading-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              textShadow: '0 1px 3px rgba(0,0,0,0.03)'
            }}
          >
            <span className="block mb-2">A Global Network of</span>
            <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent font-medium">
              Strategic Partners
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light"
            style={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
            }}
          >
            We work with partners across the value chain, ensuring our solutions bring measurable impact where it matters most.
          </motion.p>
        </motion.div>

        {/* Partner Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className={`group ${partner.background} ${partner.borderColor} p-8 lg:p-10 border-2 rounded-2xl backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/8`}
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              {/* Hover subtle overlay */}
              <div className="absolute inset-0 bg-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-block text-5xl lg:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {partner.icon}
                  </motion.div>
                  <h3 
                    className="text-xl lg:text-2xl font-medium text-slate-800 mb-4 leading-tight group-hover:text-emerald-800 transition-colors duration-300"
                    style={{
                      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
                    }}
                  >
                    {partner.title}
                  </h3>
                </div>

                {/* Description */}
                <p 
                  className="text-slate-600 leading-relaxed text-center font-light group-hover:text-slate-700 transition-colors duration-300"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}
                >
                  {partner.description}
                </p>

                {/* Decorative bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}