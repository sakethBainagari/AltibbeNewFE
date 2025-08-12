// src/components/v2/aboutpage/Timeline.tsx
import React from 'react';
import { motion } from 'framer-motion';
  
const timelineEvents = [
  {
    year: '2020',
    blurb: 'Concept—clarity in product information as a public good.',
    icon: '💡',
    color: 'bg-white border-[#E6C77B] text-[#E6C77B]',
    side: 'left',
  },
  {
    year: '2021',
    blurb: 'Early frameworks—structured reporting, multilingual access.',
    icon: '🗂️',
    color: 'bg-white border-[#E6C77B] text-[#E6C77B]',
    side: 'right',
  },
  {
    year: '2023',
    blurb: 'Hedamo System—Report, AI, Code defined as one stack.',
    icon: '�️',
    color: 'bg-white border-[#E6C77B] text-[#E6C77B]',
    side: 'left',
  },
  {
    year: '2024',
    blurb: 'Pilot deployments—importer/agency use-cases; consumer QR experiences.',
    icon: '📱',
    color: 'bg-white border-[#E6C77B] text-[#E6C77B]',
    side: 'right',
  },
  {
    year: '2025',
    blurb: 'Expansion—country pages, CEPA-aligned pathways, market-ready playbooks.',
    icon: '🌍',
    color: 'bg-white border-[#E6C77B] text-[#E6C77B]',
    side: 'left',
  },
];


export default function Timeline() {
  return (
    <section id="timeline-milestones" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Measured Journey
          </h2>
        </motion.div>

        {/* Gold Timeline */}
        <div className="relative">
          {/* Gold Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#E6C77B] to-[#bfa14a] rounded-full"></div>
          <div className="space-y-16">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${event.side === 'left' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${event.side === 'left' ? 'md:text-right' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E6C77B]">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${event.color} border-2`}>
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.year}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {event.blurb}
                    </p>
                  </div>
                </div>
                {/* Center Circle */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-[#E6C77B]"></div>
                </div>
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}