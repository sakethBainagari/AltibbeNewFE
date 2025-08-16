import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const options = [
  {
    icon: <FaEnvelope className="text-emerald-600 text-3xl mb-2" />,
    title: "Email Us",
    detail: "contact@altibbe.com",
    description: "For general inquiries, partnerships, and media."
  },
  {
    icon: <FaPhone className="text-emerald-600 text-3xl mb-2" />,
    title: "Call Us",
    detail: (
      <span>
        UAE Office: +971-XXX-XXXXXX<br />
        International: +XX-XXX-XXXXXXX
      </span>
    ),
    description: "For direct communication with our team."
  },
  {
    icon: <FaMapMarkerAlt className="text-emerald-600 text-3xl mb-2" />,
    title: "Visit Us",
    detail: "Registered HQ or regional office address here.",
    description: "Schedule a visit to our headquarters or regional office."
  },
  {
    icon: <FaLinkedin className="text-emerald-600 text-3xl mb-2" />,
    title: "LinkedIn",
    detail: (
      <a href="https://linkedin.com/company/altibbe" target="_blank" rel="noopener noreferrer" className="underline text-emerald-700 hover:text-emerald-800 transition-colors">linkedin.com/company/altibbe</a>
    ),
    description: "Connect with us for updates and networking."
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
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function ContactOptions() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-32 bg-white text-center mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-16 leading-tight"
          style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
          }}
        >
          <span className="text-emerald-700">Reach Us Through</span>
          <span className="block mt-1">Your Preferred Channel</span>
        </motion.h2>

        {/* Contact Options Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="group flex flex-col items-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: '0 2px 15px rgba(0,0,0,0.04)',
              }}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-slate-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div 
                  className="inline-block mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {opt.icon}
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-xl font-medium text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {opt.title}
                </h3>

                {/* Detail */}
                <div 
                  className="text-base text-slate-600 mb-3 font-light group-hover:text-slate-700 transition-colors duration-300"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  {opt.detail}
                </div>

                {/* Description */}
                <div 
                  className="text-sm text-slate-500 font-light group-hover:text-slate-600 transition-colors duration-300"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                    lineHeight: '1.4'
                  }}
                >
                  {opt.description}
                </div>

                {/* Decorative bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}