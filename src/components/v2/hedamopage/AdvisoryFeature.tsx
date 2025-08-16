import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function AdvisoryFeature() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Data-driven program planning with predictive insights"
    },
    {
      icon: Shield,
      title: "Risk Assessment", 
      description: "Advanced risk prioritization and mitigation strategies"
    },
    {
      icon: Target,
      title: "Market Readiness",
      description: "Comprehensive market entry analysis and preparation"
    },
    {
      icon: Zap,
      title: "AI-Powered Efficiency",
      description: "Scale operations with intelligent automation"
    }
  ];

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

  return (
  <section id="hedamo-advisory" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#0B5345] to-[#176655] rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#0B5345]/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#0B5345]" />
            <span className="text-sm font-medium text-[#0B5345]">Advisory Excellence</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold bg-gradient-to-r from-[#0B5345] to-[#176655] bg-clip-text text-transparent mb-6 leading-tight"
          >
            Hedamo Advisory
            <br />
            <span className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-gray-700">
              Precision Insights for Decision-Makers
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Powered by <strong className="text-[#0B5345]">Hedamo AI</strong>, our advisory support helps ministries, 
            agencies, and producers plan programs, prioritize risk, and ready products for market entry—efficiently and at scale.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <motion.div
                animate={{ 
                  scale: hoveredFeature === index ? 1.1 : 1,
                  rotate: hoveredFeature === index ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B5345] to-[#176655] flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0B5345]/5 to-[#176655]/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="inline-block relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.a
              href="/contact?type=advisory"
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[#0B5345] to-[#176655] text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#176655] to-[#0B5345]"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10">Talk to an Advisor</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0B5345] to-[#176655] opacity-30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 mt-4"
          >
            Ready to transform your decision-making process?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}