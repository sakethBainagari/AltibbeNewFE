import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Table, Eye, Download, ArrowRight, Sparkles, Monitor, Smartphone, FileCheck } from 'lucide-react';

const samples = [
  {
    title: 'Policy View',
    subtitle: 'Executive Brief',
    desc: 'One-page brief for ministries covering risk assessment, provenance tracking, and policy alignment analysis.',
    icon: FileText,
    format: 'PDF',
    color: 'from-[#3182ce] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Risk Assessment', 'Provenance Tracking', 'Policy Alignment', 'Executive Summary'],
    audience: 'Government Officials',
    preview: '📊 Executive Dashboard',
    tag: 'PDF Brief'
  },
  {
    title: 'Buyer View',
    subtitle: 'Procurement Dashboard',
    desc: 'Interactive supplier comparison table with detailed drill-downs for procurement decisions.',
    icon: Table,
    format: 'Web',
    color: 'from-[#38a169] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Supplier Comparison', 'Cost Analysis', 'Quality Metrics', 'Interactive Filters'],
    audience: 'Procurement Teams',
    preview: '📈 Comparison Matrix',
    tag: 'Web Table'
  },
  {
    title: 'Consumer View',
    subtitle: 'Public Access',
    desc: 'Plain-language summary accessible via Hedamo Code for transparent public information.',
    icon: Eye,
    format: 'Web',
    color: 'from-[#d69e2e] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    features: ['Plain Language', 'QR Code Access', 'Mobile Friendly', 'Transparency Focus'],
    audience: 'General Public',
    preview: '📱 Consumer Portal',
    tag: 'Web Summary'
  }
];

const additionalFeatures = [
  { icon: Monitor, text: 'Responsive Design' },
  { icon: Smartphone, text: 'Mobile Optimized' },
  { icon: FileCheck, text: 'Version Control' },
  { icon: Download, text: 'Export Ready' }
];

export default function Samples() {
  const [hoveredSample, setHoveredSample] = useState(null);
  const [activePreview, setActivePreview] = useState(0);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="hedamo-report" className="relative py-32 bg-gradient-to-br from-[#f7fafc] via-[#f9fafb] to-[#ffffff] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-[#3182ce]/20 to-[#0d7377]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-[#38a169]/20 to-[#0d7377]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#d69e2e]/20 to-[#0d7377]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-r ${i % 3 === 0 ? 'from-[#3182ce] to-[#0d7377]' : i % 3 === 1 ? 'from-[#38a169] to-[#0d7377]' : 'from-[#d69e2e] to-[#0d7377]'} rounded-full opacity-20`}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
            }}
          />
        ))}
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
            <Sparkles className="w-5 h-5 text-[#0d7377]" />
            <span className="text-sm font-semibold text-[#0d7377]">Sample Reports</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold bg-gradient-to-r from-[#2d3748] via-[#0d7377] to-[#2d3748] bg-clip-text text-transparent mb-6 leading-tight"
          >
            What a Hedamo Report
            <br />
            <span className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold bg-gradient-to-r from-[#3182ce] via-[#38a169] to-[#d69e2e] bg-clip-text text-transparent">
              Looks Like
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-[#4a5568] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Tailored reporting formats for different stakeholders—from executive summaries 
            to detailed procurement analysis and public transparency.
          </motion.p>

          {/* Additional Features */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 px-4 py-2 bg-[#ffffff]/70 backdrop-blur-sm rounded-full border border-[#e2e8f0] shadow-sm"
              >
                <feature.icon className="w-4 h-4 text-[#0d7377]" />
                <span className="text-sm font-medium text-[#2d3748]">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sample Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {samples.map((sample, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSample(i)}
              onHoverEnd={() => setHoveredSample(null)}
              className="group relative cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br ${sample.bgColor} rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-[#ffffff]/50 transition-all duration-500 overflow-hidden h-full`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    animate={{ 
                      scale: hoveredSample === i ? 1.1 : 1,
                      rotate: hoveredSample === i ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sample.color} flex items-center justify-center shadow-lg`}
                  >
                    <sample.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${sample.color} text-xs font-bold text-white shadow-sm`}>
                      {sample.tag}
                    </span>
                    <span className="text-xs text-[#a0aec0] font-medium">{sample.format}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="font-bold text-2xl mb-2 text-[#2d3748]">{sample.title}</h3>
                  <p className="text-sm font-semibold text-[#4a5568] mb-3">{sample.subtitle}</p>
                  <p className="text-[#4a5568] text-base leading-relaxed mb-4">{sample.desc}</p>
                  
                  {/* Preview Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/80 backdrop-blur-sm rounded-full border border-[#e2e8f0] text-sm text-[#4a5568]">
                    <Eye className="w-4 h-4" />
                    {sample.preview}
                  </div>
                </div>

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredSample === i ? 1 : 0,
                    height: hoveredSample === i ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-[#ffffff]/30">
                    <div className="grid grid-cols-2 gap-2">
                      {sample.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: hoveredSample === i ? 1 : 0,
                            scale: hoveredSample === i ? 1 : 0.8
                          }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-center gap-2 text-xs text-[#4a5568]"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sample.color}`}></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#ffffff]/20">
                      <p className="text-xs text-[#4a5568]">
                        <span className="font-semibold">Target:</span> {sample.audience}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${sample.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
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
              Ready to See These Reports in Action?
            </h3>
            <p className="text-[#4a5568] mb-8 max-w-2xl mx-auto">
              Experience how Hedamo transforms complex data into clear, actionable insights for every stakeholder.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0d7377] to-[#38a169] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Request Sample Reports
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}