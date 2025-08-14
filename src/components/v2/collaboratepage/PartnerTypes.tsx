// src/components/v2/collaboratepage/PartnerTypes.tsx
import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    title: "Governments & Trade Authorities",
    icon: "🏛️",
    background: "bg-blue-50",
    description: "Implement policy-aligned transparency for imports and exports."
  },
  {
    title: "National Food Security Agencies",
    icon: "🛡️",
    background: "bg-green-50",
    description: "Ensure trusted origin and safety data for domestic supply."
  },
  {
    title: "Large Producers & Exporters",
    icon: "🌾",
    background: "bg-amber-50",
    description: "Open premium markets with compliance-ready digital reports."
  },
  {
    title: "Retail & Distribution Chains",
    icon: "🏬",
    background: "bg-purple-50",
    description: "Offer consumers clarity and confidence with Hedamo Code."
  },
  {
    title: "Institutional Buyers",
    icon: "💼",
    background: "bg-gray-50",
    description: "Use verified transparency to drive procurement decisions."
  }
];

export default function PartnerTypes() {
  return (
    <section id="partner-types" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          A Global Network of Strategic Partners
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          We work with partners across the value chain, ensuring our solutions bring measurable impact where it matters most.
        </p>
      </motion.div>

      {/* Partner Cards - PartnershipOpportunities UI */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {partners.map((partner, idx) => (
          <motion.div
            key={partner.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
            viewport={{ once: true }}
            className={`${partner.background} p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 rounded-xl`}
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{partner.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {partner.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">
              {partner.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
