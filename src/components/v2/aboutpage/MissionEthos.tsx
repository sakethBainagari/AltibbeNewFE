import React from 'react';
import { motion } from 'framer-motion';

function MissionEthos() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
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

  const values = [
    {
      icon: "🔎",
      title: "Clarity",
      description: "We make product information clear and accessible for all.",
      color: "emerald"
    },
    {
      icon: "🌱",
      title: "Stewardship",
      description: "We act as responsible caretakers of health, trust, and the environment.",
      color: "emerald"
    },
    {
      icon: "🤝",
      title: "Dignity",
      description: "We honor the dignity of every person in our ecosystem.",
      color: "emerald"
    },
    {
      icon: "📏",
      title: "Rigor",
      description: "We uphold the highest standards in our data and systems.",
      color: "emerald"
    },
    {
      icon: "🛠️",
      title: "Practicality",
      description: "We focus on solutions that work in the real world.",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          text: 'text-emerald-600',
          bg: 'bg-emerald-50',
          border: 'border-emerald-100',
          shadow: 'shadow-emerald-500/10'
        };
      default:
        return {
          text: 'text-slate-700',
          bg: 'bg-slate-50',
          border: 'border-slate-100',
          shadow: 'shadow-slate-500/10'
        };
    }
  };

  return (
    <section 
      id="mission-ethos" 
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden" 
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #374151 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-8 tracking-tight">
              Mission & Ethos
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-300 mx-auto shadow-lg shadow-emerald-400/20" />
          </motion.div>

          {/* Mission Statements */}
          <div className="max-w-5xl mx-auto space-y-10">
            <motion.div variants={itemVariants} className="group">
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 leading-relaxed font-light tracking-wide">
                <span className="font-medium text-emerald-600">Why we exist.</span>{' '}
                <span className="text-slate-700">Health, trade, and trust are inseparable. Altibbe creates clarity in product information so citizens, agencies, and markets can act with confidence.</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed font-light tracking-wide">
                <span className="font-medium text-emerald-600">How we work.</span>{' '}
                <span className="text-slate-600">We blend modern science with practical wisdom—translating complex supply chains into clear, accessible data for decision-makers and consumers.</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed font-light tracking-wide">
                <span className="font-medium text-emerald-600">What we uphold.</span>{' '}
                <span className="text-slate-600">Integrity over noise; service over spectacle. Our systems are designed to be unbiased, efficient, and globally adaptable.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {values.map((value, index) => {
            const colorClasses = getColorClasses(value.color);
            
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative ${colorClasses.bg} ${colorClasses.border} 
                  border rounded-3xl p-8 lg:p-10 text-center
                  hover:shadow-xl hover:${colorClasses.shadow} 
                  hover:-translate-y-2 hover:scale-[1.02]
                  transition-all duration-500 ease-out
                  backdrop-blur-sm
                `}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-6 filter drop-shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h3 className={`text-2xl lg:text-3xl font-semibold mb-4 ${colorClasses.text} tracking-tight`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-lg font-light tracking-wide">
                    {value.description}
                  </p>
                </div>

                {/* Subtle Border Animation */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-emerald-200/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    </section>
  );
}

export default MissionEthos;