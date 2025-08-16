// src/components/v2/hedamopage/StakeholderUseCases.tsx
import { motion } from 'framer-motion';

const stakeholders = [
  {
    id: 'agencies',
    title: 'Government Agencies',
    subtitle: 'Regulatory Excellence',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: 'Streamline regulatory processes with verified data, automated compliance monitoring, and comprehensive oversight tools.',
    benefits: [
      'Risk-based inspection prioritization',
      'Automated compliance monitoring', 
      'Real-time market surveillance',
      'Policy impact assessment'
    ],
    keyFeatures: ['Regulatory Dashboard', 'Compliance Analytics', 'Risk Scoring'],
    gradient: 'from-[#3182ce] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]',
    textColor: 'text-[#3182ce]',
    cta: 'Explore Gov Solutions'
  },
  {
    id: 'buyers',
    title: 'Institutional Buyers',
    subtitle: 'Procurement Intelligence',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    description: 'Make confident procurement decisions with transparent sourcing data, supplier verification, and quality assurance.',
    benefits: [
      'Supplier due diligence automation',
      'Quality assurance verification',
      'ESG compliance tracking',
      'Cost-benefit optimization'
    ],
    keyFeatures: ['Supplier Scorecards', 'Quality Metrics', 'ESG Reporting'],
    gradient: 'from-[#38a169] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]',
    textColor: 'text-[#38a169]',
    cta: 'View Procurement Tools'
  },
  {
    id: 'producers',
    title: 'Producers & Manufacturers',
    subtitle: 'Market Access & Growth',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: 'Accelerate market entry with digital credentials, compliance verification, and direct access to global buyers.',
    benefits: [
      'Digital product passports',
      'Compliance pre-validation',
      'Market requirement mapping',
      'Buyer network access'
    ],
    keyFeatures: ['Product Certification', 'Market Analytics', 'Export Readiness'],
    gradient: 'from-[#d69e2e] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]',
    textColor: 'text-[#d69e2e]',
    cta: 'Start Digital Journey'
  },
  {
    id: 'tech-providers',
    title: 'Technology Partners',
    subtitle: 'Integration & Innovation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description: 'Build on our platform with comprehensive APIs, developer tools, and collaborative innovation opportunities.',
    benefits: [
      'RESTful API integration',
      'Webhook notifications',
      'White-label solutions',
      'Revenue sharing programs'
    ],
    keyFeatures: ['API Gateway', 'Developer Portal', 'Integration Support'],
    gradient: 'from-[#3182ce] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]',
    textColor: 'text-[#3182ce]',
    cta: 'Access Developer Hub'
  },
  {
    id: 'consumers',
    title: 'End Consumers',
    subtitle: 'Trust & Transparency',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Access complete product transparency through easy-to-use interfaces and instant QR code scanning capabilities.',
    benefits: [
      'Instant product verification',
      'Ingredient transparency',
      'Sustainability insights',
      'Safety information'
    ],
    keyFeatures: ['QR Scanning', 'Product Insights', 'Health Alerts'],
    gradient: 'from-[#0d7377] to-[#38a169]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]',
    textColor: 'text-[#0d7377]',
    cta: 'Try Consumer App'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function StakeholderUseCases() {
  return (
  <section id="stakeholder-solution" className="relative py-32 bg-gradient-to-b from-[#f7fafc] to-[#ffffff] overflow-hidden" style={{ scrollMarginTop: '6rem' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,161,105,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(13,115,119,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#f7fafc] to-[#f9fafb] rounded-full text-[#0d7377] font-semibold text-sm mb-6 border border-[#e2e8f0]">
            Stakeholder Solutions
          </div>
          <h2 className="font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#2d3748] mb-6 tracking-tight">
            Built for <span className="bg-gradient-to-r from-[#0d7377] to-[#3182ce] bg-clip-text text-transparent">Every Stakeholder</span><br />
            in the Supply Chain
          </h2>
          <p className="text-xl text-[#4a5568] max-w-4xl mx-auto leading-relaxed">
            From regulatory agencies to end consumers, our platform provides tailored solutions 
            that address the unique needs and challenges of each stakeholder group.
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 lg:gap-8"
        >
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className={`relative h-full bg-[#ffffff]/80 backdrop-blur-sm rounded-3xl p-8 border ${stakeholder.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stakeholder.bgGradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon and header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${stakeholder.bgGradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className={`${stakeholder.textColor}`}>
                        {stakeholder.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl text-[#2d3748] mb-1">
                      {stakeholder.title}
                    </h3>
                    <p className={`font-medium text-sm uppercase tracking-wider ${stakeholder.textColor}`}>
                      {stakeholder.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#4a5568] leading-relaxed mb-6 text-sm">
                    {stakeholder.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-[#2d3748] mb-3 text-sm">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {stakeholder.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stakeholder.gradient} flex-shrink-0 mt-1.5`}></div>
                          <span className="text-[#4a5568]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {stakeholder.keyFeatures.map((feature, i) => (
                        <span key={i} className={`px-2 py-1 ${stakeholder.bgGradient} ${stakeholder.textColor} text-xs font-medium rounded-full border ${stakeholder.borderColor}`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={`#${stakeholder.id}`}
                    className={`group/cta inline-flex items-center space-x-2 font-semibold text-sm ${stakeholder.textColor} hover:opacity-80 transition-all duration-300 mt-auto`}
                    whileHover={{ x: 4 }}
                  >
                    <span>{stakeholder.cta}</span>
                    <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ecosystem visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-[#f7fafc] to-[#ffffff] rounded-3xl p-8 shadow-lg border border-[#e2e8f0] max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl text-[#2d3748] mb-4">
              Connected Ecosystem Benefits
            </h3>
            <p className="text-[#4a5568] mb-6 leading-relaxed">
              When all stakeholders use Hedamo, the entire supply chain becomes more transparent, 
              efficient, and trustworthy. Data flows seamlessly, reducing friction and enabling 
              better decision-making at every level.
            </p>
            
            {/* Ecosystem flow */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              {['Producers', 'Agencies', 'Tech Partners', 'Buyers', 'Consumers'].map((stakeholder, i, arr) => (
                <div key={i} className="flex items-center">
                  <div className="px-4 py-2 bg-gradient-to-r from-[#f7fafc] to-[#f9fafb] text-[#4a5568] font-medium rounded-full border border-[#e2e8f0]">
                    {stakeholder}
                  </div>
                  {i < arr.length - 1 && (
                    <svg className="w-4 h-4 text-[#a0aec0] mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}