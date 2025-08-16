import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Upload, 
  Shield, 
  Database, 
  Monitor, 
  Key, 
  Users, 
  Code, 
  FileJson,
  BarChart3,
  Lock,
  Zap,
  Globe,
  CheckCircle
} from 'lucide-react';

const integrations = [
  {
    label: 'Inputs',
    desc: 'JSON/API feeds, CSV uploads, partner integrations',
    icon: Upload,
    color: 'from-[#3182ce] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    details: [
      { icon: FileJson, text: 'REST API endpoints' },
      { icon: Database, text: 'CSV/Excel uploads' },
      { icon: Globe, text: 'Partner integrations' },
      { icon: Code, text: 'Webhook support' }
    ],
    stats: '50+ data sources'
  },
  {
    label: 'Outputs', 
    desc: 'Live dashboards, API feeds, Hedamo Code for public scans',
    icon: Download,
    color: 'from-[#38a169] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    details: [
      { icon: Monitor, text: 'Live dashboards' },
      { icon: BarChart3, text: 'API endpoints' },
      { icon: Code, text: 'Hedamo Code' },
      { icon: FileJson, text: 'Export formats' }
    ],
    stats: '15+ output formats'
  },
  {
    label: 'Security',
    desc: 'SSO, Role-based access, Scoped permissions',
    icon: Shield,
    color: 'from-[#d69e2e] to-[#0d7377]',
    bgColor: 'from-[#f9fafb] to-[#f7fafc]',
    details: [
      { icon: Key, text: 'Single Sign-On' },
      { icon: Users, text: 'Role-based access' },
      { icon: Lock, text: 'Scoped permissions' },
      { icon: CheckCircle, text: 'Audit logging' }
    ],
    stats: 'Enterprise-grade'
  }
];

const techSpecs = [
  { label: 'API Response Time', value: '<100ms', icon: Zap },
  { label: 'Uptime SLA', value: '99.9%', icon: CheckCircle },
  { label: 'Data Processing', value: 'Real-time', icon: Database },
  { label: 'Compliance', value: 'SOC 2', icon: Shield }
];

const integrationFlow = [
  { step: 1, title: 'Connect', desc: 'Link your data sources' },
  { step: 2, title: 'Configure', desc: 'Set up processing rules' },
  { step: 3, title: 'Deploy', desc: 'Go live in minutes' }
];

export default function Integrations() {
  const [hoveredIntegration, setHoveredIntegration] = useState(null);
  const [activeFlow, setActiveFlow] = useState(0);

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
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="integration" className="relative py-32 bg-gradient-to-br from-[#ffffff] via-[#f9fafb] to-[#f7fafc] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-radial from-[#3182ce]/20 to-[#0d7377]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-[#38a169]/20 to-[#0d7377]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#d69e2e]/15 to-[#0d7377]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated connection lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3182ce" />
              <stop offset="50%" stopColor="#38a169" />
              <stop offset="100%" stopColor="#d69e2e" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 100,200 Q 400,100 700,200 Q 1000,300 1300,200"
            fill="none"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#e2e8f0] shadow-lg mb-6"
          >
            <Zap className="w-5 h-5 text-[#0d7377]" />
            <span className="text-sm font-semibold text-[#0d7377]">Developer Friendly</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold bg-gradient-to-r from-[#2d3748] via-[#4a5568] to-[#2d3748] bg-clip-text text-transparent mb-6 leading-tight"
          >
            Easy to Integrate.
            <br />
            <span className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold bg-gradient-to-r from-[#3182ce] via-[#38a169] to-[#d69e2e] bg-clip-text text-transparent">
              Simple to Scale.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-[#4a5568] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Connect your existing systems seamlessly with our robust API infrastructure 
            and comprehensive integration toolkit.
          </motion.p>

          {/* Tech Specs */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
          >
            {techSpecs.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e2e8f0] shadow-sm"
              >
                <spec.icon className="w-6 h-6 text-[#0d7377]" />
                <div className="text-center">
                  <div className="text-lg font-bold text-[#2d3748]">{spec.value}</div>
                  <div className="text-sm text-[#4a5568]">{spec.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Integration Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIntegration(i)}
              onHoverEnd={() => setHoveredIntegration(null)}
              className="group relative cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-white/50 transition-all duration-500 overflow-hidden h-full`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    animate={{ 
                      scale: hoveredIntegration === i ? 1.1 : 1,
                      rotate: hoveredIntegration === i ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#a0aec0] uppercase tracking-wider">
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="font-bold text-2xl mb-3 text-[#2d3748]">{item.label}</h3>
                  <p className="text-[#4a5568] text-base leading-relaxed mb-4">{item.desc}</p>
                </div>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIntegration === i ? 1 : 0,
                    height: hoveredIntegration === i ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/30">
                    <div className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: hoveredIntegration === i ? 1 : 0,
                            x: hoveredIntegration === i ? 0 : -20
                          }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <detail.icon className="w-4 h-4 text-[#4a5568] flex-shrink-0" />
                          <span className="text-sm text-[#4a5568]">{detail.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-[#2d3748] mb-8">
            Get Started in 3 Simple Steps
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {integrationFlow.map((flow, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-1">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-[#3182ce] to-[#0d7377]' :
                    index === 1 ? 'from-[#38a169] to-[#0d7377]' :
                    'from-[#d69e2e] to-[#0d7377]'
                  } flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {flow.step}
                </motion.div>
                <h4 className="font-semibold text-lg text-[#2d3748] mb-2">{flow.title}</h4>
                <p className="text-[#4a5568] text-sm">{flow.desc}</p>
                {index < integrationFlow.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-[#a0aec0] mt-4 hidden md:block absolute transform translate-x-20" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

  {/* ...existing code... */}
      </div>
    </section>
  );
}