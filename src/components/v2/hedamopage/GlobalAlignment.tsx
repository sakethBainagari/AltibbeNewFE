// src/components/v2/hedamopage/GlobalAlignment.tsx
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

const markets = [
  { 
    title: 'UAE Market Adaptation', 
    subtitle: 'Food Security & AI-Driven Oversight',
    desc: 'Incorporates UAE\'s focus on food security and AI-driven oversight, helping products meet local expectations and regulatory requirements for this import-reliant nation.',
    details: [
      '90% import dependency addressed',
      'AI-driven oversight integration',
      'Food security metrics alignment',
      'Halal compliance standards'
    ],
    stats: '90% imports',
    link: '/uae-compliance' 
  },
  { 
    title: 'USA & EU Standards', 
    subtitle: 'FDA & USDA Compliance',
    desc: 'Aligns with FDA wellness guidelines, USDA Organic standards, and EU regulations, ensuring products speak the language of Western health and wellness markets.',
    details: [
      'FDA wellness guidelines',
      'USDA Organic certification',
      'EU regulatory compliance',
      'Transparency reporting standards'
    ],
    stats: 'Strict compliance',
    link: '/usa-eu-compliance' 
  },
  { 
    title: 'KSA & India Compliance', 
    subtitle: 'Vision 2030 & Natural Farming',
    desc: 'Addresses KSA\'s halal traceability and Vision 2030 sustainability targets, plus India\'s emphasis on natural farming and millet-based nutrition standards.',
    details: [
      'KSA Vision 2030 targets',
      'Halal traceability systems',
      'Natural farming techniques',
      'Millet-based nutrition focus'
    ],
    stats: 'Local production focus',
    link: '/ksa-india-compliance' 
  },
];

export default function GlobalAlignment() {
  return (
    <>
      {/* ¾-width top border */}
      <div className="flex justify-center">
        <div className="w-3/4 h-px bg-primary-800/20" />
      </div>

      <section id="global-alignment" className="py-24 bg-green-800 text-white" style={{ scrollMarginTop: '6rem' }}>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white mb-4">
              Global Market Adaptation
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
              One size does not fit all in global markets. Hedamo's certification adapts to different regional standards, 
              ensuring products meet local expectations and regulations whether entering the UAE, USA, KSA, or India.
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              By tuning our reviews to these nuances, Hedamo helps products speak the language of each market – making them 
              welcome everywhere.
            </p>
          </motion.div>
        
          {/* Enhanced Market Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {markets.map((market, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-8 flex flex-col border border-green-200 hover:bg-green-100 transition-colors"
              >
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-green-800">{market.title}</h3>
                  <p className="text-sm font-medium text-green-600 mb-3">{market.subtitle}</p>
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {market.stats}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{market.desc}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-green-800">Key Focus Areas:</p>
                  <ul className="space-y-1">
                    {market.details.map((detail, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <ArrowButton href={market.link}>Learn More</ArrowButton>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Global Leverage Note */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto border-l-4 border-green-600"
          >
            <h3 className="font-serif text-2xl font-bold text-green-800 mb-4">Import-Reliant Nations Leverage</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This also means import-reliant nations can confidently leverage their buyer power to demand Hedamo-level 
              transparency on incoming goods, knowing the system will uphold their national standards and food security goals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              By tuning our reviews to these nuances, Hedamo helps products speak the language of each market – making them 
              welcome everywhere.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-primary-800 mb-2">For Import-Reliant Nations:</h4>
                <ul className="text-sm text-organic-text-light space-y-1">
                  <li>• Leverage buyer power for transparency</li>
                  <li>• Ensure national standards compliance</li>
                  <li>• Protect food security interests</li>
                  <li>• Demand verifiable product claims</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-primary-800 mb-2">For Exporting Nations:</h4>
                <ul className="text-sm text-organic-text-light space-y-1">
                  <li>• Meet diverse market requirements</li>
                  <li>• Access multiple regional markets</li>
                  <li>• Build trust through transparency</li>
                  <li>• Differentiate with Hedamo certification</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Regional Expertise Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-serif text-xl font-bold text-accent-mint mb-4">
              Hedamo's Regional Expertise
            </h3>
            <p className="text-accent-mint/80 max-w-2xl mx-auto">
              Our localized expertise makes Hedamo Advisory invaluable across the globe, ensuring products meet 
              the specific requirements and cultural expectations of each market.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
} 