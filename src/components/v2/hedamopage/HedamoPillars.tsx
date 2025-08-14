// src/components/v2/hedamopage/HedamoPillars.tsx
import ArrowButton from "../../common/ArrowButton";
import { motion } from 'framer-motion';

const pillars = [
  {
    id: "report",
    title: "Hedamo Report",
    subtitle: "Structured Reports for Confident Decisions",
    body: "Multilingual, policy-ready transparency reports: ingredients, sourcing, processing context, and market claims—organized for ministries and buyers.",
    bullets: [
      "Clear Provenance",
      "Health Context",
      "Market Claims",
      "ESG Signals"
    ],
    cta: { label: "View Report Format →", href: "#samples" },
    color: "text-yellow-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: "ai",
    title: "Hedamo AI",
    subtitle: "Intelligence for Policy & Market Access",
    body: "Models that transform product and trade data into signals for import programs, risk prioritization, and national goals.",
    bullets: [
      "Risk Signals",
      "Standards Alignment",
      "Program Planning",
      "Impact Tracking"
    ],
    cta: { label: "See AI Use Cases →", href: "#use-cases" },
    color: "text-green-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "code",
    title: "Hedamo Code",
    subtitle: "Clarity at Every Scan",
    body: "A QR-linked gateway that brings reliable product information to consumers, retailers, and inspectors—instantly and securely.",
    bullets: [
      "Scan Anywhere",
      "Multilingual",
      "Offline Caching",
      "Accessible UI"
    ],
    cta: { label: "Experience a Live Demo →", href: "/demo" },
    color: "text-blue-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    id: "advisory",
    title: "Hedamo Advisory",
    subtitle: "Expert Guidance for Global Trade Success",
    body: "Advisory services that combine data insights with policy expertise—helping governments, exporters, and industry leaders navigate market requirements and seize growth opportunities.",
    bullets: [
      "Trade Strategy",
      "Compliance Roadmaps",
      "Market Intelligence",
      "Capacity Building"
    ],
    cta: { label: "Explore Advisory Services →", href: "#advisory-details" },
    color: "text-purple-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "ecosystem",
    title: "Hedamo Ecosystem",
    subtitle: "A Connected Network for Sustainable Growth",
    body: "A collaborative platform linking producers, regulators, buyers, and technology partners—driving transparency, trust, and innovation across the entire supply chain.",
    bullets: [
      "Stakeholder Network",
      "Shared Data Standards",
      "Sustainable Practices",
      "Innovation Exchange"
    ],
    cta: { label: "Join the Ecosystem →", href: "#join-ecosystem" },
    color: "text-teal-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v7c0 2.21-3.582 4-8 4z" />
      </svg>
    )
  },
];

export default function HedamoPillars() {
  return (
    <section className="py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-primary-800 mb-4">
            Five Pillars of Hedamo System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines advanced technology, rigorous analysis, and ongoing support 
            to deliver unparalleled transparency in health and wellness products.
          </p>
        </motion.div>

        {/* Five Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              id={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600 rounded-lg flex flex-col justify-between"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${pillar.color.replace('text-', 'bg-').replace('-700', '-100')} rounded-xl flex items-center justify-center`}>
                    <div className={pillar.color}>
                      {pillar.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className={`font-poppins text-xl font-bold mb-1 ${pillar.color}`}>{pillar.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{pillar.subtitle}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">{pillar.body}</p>
                <ul className="mb-3 space-y-1">
                  {pillar.bullets.map((b, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: 'currentColor', color: pillar.color.replace('text-', '').replace('-700', '') }}></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-2">
                <a href={pillar.cta.href} className={`inline-block font-semibold text-base underline ${pillar.color} hover:opacity-80 transition`}>
                  {pillar.cta.label}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 