import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, ArrowRightLeft, Globe, CheckCircle, Lock, Users, FileText } from 'lucide-react';

const pillars = [
  {
    title: 'Neutral by Design',
    desc: 'Structured reporting—no advocacy, no promotional language.',
    icon: Shield,
    color: 'from-[#0d7377] to-[#38a169]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Objective reporting', 'Bias-free algorithms', 'Transparent methodology']
  },
  {
    title: 'Data Minimalism',
    desc: 'Collect only what informs the decision; clear retention policies.',
    icon: Database,
    color: 'from-[#3182ce] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Purpose-limited collection', 'Automatic data expiry', 'Privacy by design']
  },
  {
    title: 'Interoperability',
    desc: 'Import/export with standard formats; integrate to national systems.',
    icon: ArrowRightLeft,
    color: 'from-[#0d7377] to-[#3182ce]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Standard API protocols', 'Universal data formats', 'Seamless integration']
  },
  {
    title: 'Accessibility',
    desc: 'Multilingual, device-agnostic, and inclusive UI patterns.',
    icon: Globe,
    color: 'from-[#38a169] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Multi-language support', 'WCAG compliance', 'Cross-platform compatibility']
  }
];

const trustIndicators = [
  { icon: Lock, text: 'End-to-end encryption' },
  { icon: Users, text: 'Multi-stakeholder governance' },
  { icon: FileText, text: 'Open source transparency' },
  { icon: CheckCircle, text: 'Regular security audits' }
];

export default function Governance() {
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pillarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="governance" className="relative py-32 bg-gradient-to-br from-[#f7fafc] via-[#ffffff] to-[#f9fafb] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0d7377]/20 to-[#38a169]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#3182ce]/20 to-[#0d7377]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffffff]/80 backdrop-blur-sm border border-[#e2e8f0] shadow-lg mb-6"
          >
            <Shield className="w-5 h-5 text-[#0d7377]" />
            <span className="text-sm font-semibold text-[#0d7377]">Trusted Governance</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold bg-gradient-to-r from-[#0d7377] via-[#3182ce] to-[#38a169] bg-clip-text text-transparent mb-6 leading-tight"
          >
            Governance You Can Trust
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-[#4a5568] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Built on principles of transparency, security, and ethical AI practices that ensure 
            your data and decisions remain protected and unbiased.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 px-4 py-2 bg-[#ffffff]/70 backdrop-blur-sm rounded-full border border-[#e2e8f0] shadow-sm"
              >
                <indicator.icon className="w-4 h-4 text-[#0d7377]" />
                <span className="text-sm font-medium text-[#2d3748]">{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Governance Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={pillarVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredPillar(i)}
              onHoverEnd={() => setHoveredPillar(null)}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${pillar.bgColor} rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-[#ffffff]/50 transition-all duration-500 overflow-hidden`}>
                {/* Icon and Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    animate={{ 
                      scale: hoveredPillar === i ? 1.1 : 1,
                      rotate: hoveredPillar === i ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
                  >
                    <pillar.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-[#2d3748]">{pillar.title}</h3>
                    <p className="text-[#4a5568] text-base leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>

                {/* Feature List */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredPillar === i ? 1 : 0,
                    height: hoveredPillar === i ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-[#ffffff]/30">
                    <ul className="space-y-2">
                      {pillar.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: hoveredPillar === i ? 1 : 0,
                            x: hoveredPillar === i ? 0 : -20
                          }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-[#0d7377] flex-shrink-0" />
                          <span className="text-sm text-[#4a5568]">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Border Accent */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} 
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#ffffff] to-[#f9fafb] rounded-3xl shadow-xl border border-[#e2e8f0] p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
              Ready to Experience Trustworthy AI Governance?
            </h3>
            <p className="text-[#4a5568] mb-8 max-w-2xl mx-auto">
              Join organizations worldwide who trust Hedamo's commitment to ethical AI practices and transparent governance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0d7377] to-[#38a169] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Shield className="w-5 h-5" />
              Learn More About Our Standards
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}