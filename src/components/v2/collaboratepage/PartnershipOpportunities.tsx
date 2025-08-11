// src/components/v2/collaboratepage/PartnershipOpportunities.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

const partnerships = [
  {
    title: 'Strategic Partnerships',
    icon: '🤝',
    background: 'bg-green-50',
    description: 'Altibbe partners with like-minded organizations – from health food distributors to sustainable agtech startups – to extend the reach of transparency. Through strategic partnerships, we integrate Hedamo\'s insights into new channels and share resources to champion clean, honest products worldwide.',
    benefits: [
      'Co-branding opportunities with Hedamo-rated products',
      'Research collaborations and joint initiatives',
      'Integration into e-commerce and distribution platforms'
    ],
    action: 'Explore Strategic Partnership',
    href: '/partnerships/strategic'
  },
  {
    title: 'Institutional & Government Alliances',
    icon: '🏛️',
    background: 'bg-blue-50',
    description: 'We collaborate with institutions, regulators, and government initiatives to support public health goals. Altibbe\'s expertise in transparency and data can assist national programs – from advising on food safety frameworks to contributing to sustainable agriculture policies.',
    benefits: [
      'Support for national food security agendas',
      'Assistance with regulatory compliance frameworks',
      'Low-cost, in-depth systems for wider impact'
    ],
    action: 'Government Collaboration',
    href: '/partnerships/government'
  },
  {
    title: 'Producer & Brand Engagement',
    icon: '🌱',
    background: 'bg-amber-50',
    description: 'Are you a producer of organic or natural products? Altibbe wants to work with you. Through our Hedamo review and advisory services, we guide brands to improve their products and gain the recognition they deserve on a global stage.',
    benefits: [
      'Pilot programs and workshops for new producers',
      'One-on-one support to meet international standards',
      'Join a network of virtuous producers celebrated for quality'
    ],
    action: 'Join Producer Network',
    href: '/partnerships/producers'
  }
];

export default function PartnershipOpportunities() {
  return (
    <section id="partnership-opportunities" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '6rem' }}>
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Partnership Opportunities
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Together, we can amplify trust and drive innovation in the health ecosystem. 
          Explore how we can collaborate to make a meaningful impact.
        </p>
      </motion.div>

      {/* Partnership Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {partnerships.map((partnership, idx) => (
          <motion.div
            key={partnership.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
            viewport={{ once: true }}
            className={`${partnership.background} p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 rounded-xl`}
          >
            {/* Icon and Title */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{partnership.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {partnership.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {partnership.description}
            </p>

            {/* Benefits List */}
            <ul className="space-y-2 mb-8">
              {partnership.benefits.map((benefit, benefitIdx) => (
                <li key={benefitIdx} className="flex items-start text-sm text-gray-600">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <ArrowButton href={partnership.href} classname="w-full text-center">
              {partnership.action}
            </ArrowButton>
          </motion.div>
        ))}
      </div>

      {/* Additional Support Note */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-accent-sage p-8 max-w-4xl mx-auto rounded-2xl">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            Small Farms & Startups Welcome
          </h3>
          <p className="text-lg text-organic-text-light leading-relaxed">
            Even if you're a small farm or startup brand, we're here to help you meet international 
            best practices and shine in the marketplace. We offer pilot programs, workshops, and 
            one-on-one support to onboard new producers into the Hedamo system.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 