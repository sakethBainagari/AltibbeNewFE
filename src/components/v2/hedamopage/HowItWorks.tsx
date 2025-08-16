// src/components/v2/hedamopage/HowItWorks.tsx
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Ingest',
    subtitle: 'Data Collection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    desc: 'Accept structured inputs from producers, laboratories, certification bodies, and market data sources through secure API endpoints.',
    features: ['API Integration', 'Batch Upload', 'Real-time Sync', 'Multi-format Support'],
    gradient: 'from-[#0d7377] to-[#3182ce]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]'
  },
  {
    number: '02',
    title: 'Normalize',
    subtitle: 'Data Harmonization',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    desc: 'Harmonize disparate data into a unified model aligned with national regulatory frameworks and international trade requirements.',
    features: ['Standard Mapping', 'Quality Validation', 'Compliance Check', 'Data Enrichment'],
    gradient: 'from-[#38a169] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]'
  },
  {
    number: '03',
    title: 'Enrich',
    subtitle: 'AI Processing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    desc: 'Apply Hedamo AI models to generate intelligent risk signals, policy insights, and consumer-friendly summaries automatically.',
    features: ['Risk Assessment', 'Policy Analysis', 'Content Generation', 'Predictive Insights'],
    gradient: 'from-[#d69e2e] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]'
  },
  {
    number: '04',
    title: 'Publish',
    subtitle: 'Multi-channel Output',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    desc: 'Deliver insights through comprehensive reports, interactive dashboards, and QR-linked Hedamo Codes for instant access.',
    features: ['PDF Reports', 'Live Dashboards', 'QR Integration', 'API Access'],
    gradient: 'from-[#3182ce] to-[#0d7377]',
    bgGradient: 'from-[#f7fafc] to-[#f9fafb]',
    borderColor: 'border-[#e2e8f0]'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 bg-gradient-to-b from-[#ffffff] to-[#f7fafc] overflow-hidden" style={{ scrollMarginTop: '6rem' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(13,115,119,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(56,161,105,0.05),transparent_50%)]"></div>
      
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
            System Architecture
          </div>
          <h2 className="font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#2d3748] mb-6 tracking-tight">
            One System. <span className="bg-gradient-to-r from-[#0d7377] to-[#3182ce] bg-clip-text text-transparent">Clean Data.</span><br />
            Many Decisions.
          </h2>
          <p className="text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Our streamlined four-step process transforms raw product data into actionable intelligence 
            for governments, institutions, and industry stakeholders.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d7377] via-[#38a169] via-[#d69e2e] to-[#3182ce] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="group relative"
              >
                {/* Step Card */}
                <div className={`relative bg-[#ffffff]/80 backdrop-blur-sm rounded-3xl p-8 border ${step.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.gradient} text-white font-bold text-lg rounded-2xl shadow-lg`}>
                        {step.number}
                      </span>
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.bgGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title and subtitle */}
                    <div className="mb-4">
                      <h3 className="font-bold text-2xl text-[#2d3748] mb-1">
                        {step.title}
                      </h3>
                      <p className={`font-medium text-sm uppercase tracking-wider bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#4a5568] leading-relaxed mb-6 text-base">
                      {step.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                          <span className="text-sm text-[#4a5568] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress indicator for mobile */}
                    <div className="lg:hidden flex justify-center">
                      <div className="flex space-x-2">
                        {steps.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              idx === i 
                                ? `bg-gradient-to-r ${step.gradient}` 
                                : 'bg-[#a0aec0]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection arrow for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                      viewport={{ once: true }}
                      className={`w-6 h-6 bg-[#ffffff] rounded-full shadow-lg border-2 ${steps[i + 1].borderColor} flex items-center justify-center`}
                    >
                      <svg className="w-3 h-3 text-[#4a5568]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-[#ffffff]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#e2e8f0] shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-[#38a169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="font-bold text-lg text-[#2d3748]">Enterprise Security & Compliance</h4>
            </div>
            <p className="text-[#4a5568] leading-relaxed mb-4">
              Built with enterprise-grade security featuring encrypted storage, role-based access controls, 
              audit trails, and SOC 2 compliance. Supports interoperable data exports in multiple formats 
              including JSON, CSV, PDF, and XML.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['End-to-End Encryption', 'GDPR Compliant', 'ISO 27001', 'Role-Based Access', 'Audit Logging'].map((feature, i) => (
                <span key={i} className="px-3 py-1 bg-[#f7fafc] text-[#38a169] rounded-full font-medium border border-[#e2e8f0]">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}