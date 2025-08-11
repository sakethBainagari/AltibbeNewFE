// src/components/v2/aboutpage/Timeline.tsx
import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2020',
    title: 'The Beginning: Recognizing a Need for Transparency',
    description: 'Altibbe (and its service Hedamo) was conceived in the wake of global health challenges, when a lack of trust in health products became evident. This year marked the realization that innovative solutions were needed to bring trust and clarity to consumers.',
    icon: '💡',
    color: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    side: 'left'
  },
  {
    year: '2021',
    title: 'Revival of "Food as Medicine"',
    description: 'Drawing inspiration from ancient healing wisdom, Altibbe started promoting the concept of food as medicine. This era focused on empowering healthier lifestyles by reintroducing natural, sustainable practices into modern life.',
    icon: '🌿',
    color: 'bg-green-100 border-green-500 text-green-700',
    side: 'right'
  },
  {
    year: '2023',
    title: 'Setting Standards for Health Transparency',
    description: 'Altibbe piloted groundbreaking systems to ensure accountability and transparency in health products. By leveraging technologies like blockchain and advanced analytics, Hedamo established benchmarks for evaluating products\' health benefits and sustainability, directly confronting public mistrust.',
    icon: '🛡️',
    color: 'bg-blue-100 border-blue-500 text-blue-700',
    side: 'left'
  },
  {
    year: '2024',
    title: 'Empowering Consumers with Informed Choices',
    description: 'A milestone year where Altibbe rolled out QR-enabled labels and in-depth Hedamo Reports, giving consumers full visibility into each product\'s origin, quality, and health benefits. This empowered individuals to make confident, informed decisions and fostered a new level of trust in the marketplace.',
    icon: '📱',
    color: 'bg-purple-100 border-purple-500 text-purple-700',
    side: 'right'
  },
  {
    year: '2025+',
    title: 'A Vision for Global Health Independence',
    description: 'Altibbe\'s journey continues with an unwavering mission to create a transparent, health-driven ecosystem. The vision ahead is of a world where health independence is accessible to all – where people everywhere have the knowledge, tools, and transparency to manage their well-being confidently.',
    icon: '🌍',
    color: 'bg-indigo-100 border-indigo-500 text-indigo-700',
    side: 'left'
  }
];

export default function Timeline() {
  return (
    <section id="timeline-legacy" className="py-20 px-6 bg-gray-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Timeline & Legacy
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Our journey from vision to global impact, marked by key milestones that shaped 
            our commitment to health transparency and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
          
          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  event.side === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${event.side === 'left' ? 'md:text-right' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${event.color} border-2`}>
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                    <div className={`mb-4 ${event.side === 'left' ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{event.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-700">{event.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${event.color.split(' ')[0]}`}></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legacy Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-primary-900 text-accent-mint rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">
              Our Legacy Continues
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Each milestone represents our unwavering commitment to building a world where transparency 
              and health go hand in hand. From recognizing the need for change to empowering global 
              communities, Altibbe's legacy is one of innovation, integrity, and hope for a healthier future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 