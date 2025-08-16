// src/components/v2/hedamopage/HedamoHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Add CSS variables to the component
const styles = `
  :root {
    --primary-teal: #0d7377;
    --primary-teal-dark: #0a5d61;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --text-muted: #a0aec0;
    --bg-white: #ffffff;
    --bg-off-white: #f9fafb;
    --bg-light: #f7fafc;
    --accent-green: #38a169;
    --accent-blue: #3182ce;
    --accent-amber: #d69e2e;
    --border-gray: #e2e8f0;
  }

  .text-primary { color: var(--text-primary); }
  .text-secondary { color: var(--text-secondary); }
  .text-muted { color: var(--text-muted); }
  .text-teal { color: var(--primary-teal); }
  .text-green { color: var(--accent-green); }
  .bg-white-custom { background-color: var(--bg-white); }
  .bg-light { background-color: var(--bg-light); }
  .bg-off-white { background-color: var(--bg-off-white); }
  .border-custom { border-color: var(--border-gray); }
  .border-teal { border-color: var(--primary-teal); }
  .bg-teal { background-color: var(--primary-teal); }
  .bg-green { background-color: var(--accent-green); }
`;

export default function HedamoHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="overview" className="relative min-h-[55vh] flex items-center overflow-hidden pt-12" style={{ 
        scrollMarginTop: '6rem',
        background: `linear-gradient(135deg, var(--bg-light) 0%, var(--bg-white) 50%, var(--bg-off-white) 100%)`
      }}>
        {/* Background decorations */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 20% 20%, rgba(13, 115, 119, 0.1), transparent 50%)`
        }}></div>
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 80% 80%, rgba(56, 161, 105, 0.08), transparent 50%)`
        }}></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, var(--primary-teal), var(--accent-green))`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full font-semibold text-sm shadow-lg border" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderColor: 'var(--border-gray)',
                  color: 'var(--primary-teal)'
                }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                  <span>AI-Powered Transparency System</span>
                </div>
              </motion.div>

              {/* Main heading */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-tight font-bold"
                >
                  <span className="text-primary">Hedamo by</span><br />
                  <span style={{
                    background: `linear-gradient(45deg, var(--primary-teal), var(--accent-green), var(--accent-blue))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Altibbe
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-secondary mb-6">
                    The Transparency Engine
                  </h2>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-secondary leading-relaxed max-w-2xl"
              >
                An AI-powered system for structured product clarity—designed for governments, 
                institutions, and producers seeking unprecedented transparency in health and wellness products.
              </motion.p>

              {/* Key features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {['Structured Reports', 'AI Intelligence', 'QR Integration', 'Expert Advisory', 'Global Ecosystem'].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 backdrop-blur-sm px-3 py-2 rounded-full border" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderColor: 'var(--border-gray)'
                  }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                    <span className="text-sm font-medium text-secondary">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="#report"
                  className="group inline-flex items-center justify-center space-x-3 px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(45deg, var(--primary-teal), var(--accent-green))`,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `linear-gradient(45deg, var(--primary-teal-dark), var(--accent-green))`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = `linear-gradient(45deg, var(--primary-teal), var(--accent-green))`;
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore the Pillars</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="/contact?type=strategic-briefing"
                  className="group inline-flex items-center justify-center space-x-3 px-8 py-4 backdrop-blur-sm border-2 font-semibold rounded-full transition-all duration-300 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderColor: 'var(--primary-teal)',
                    color: 'var(--primary-teal)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--primary-teal)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.color = 'var(--primary-teal)';
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Strategic Briefing</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Visual element */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative lg:block hidden"
            >
              {/* Main graphic */}
              <div className="relative w-full h-[350px] flex items-center justify-center">
                {/* Central hub */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-teal), var(--accent-blue))`
                  }}
                >
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>

                {/* Orbiting elements */}
                {[
                  { label: 'Report', angle: 0, gradient: 'linear-gradient(135deg, #d69e2e, #ed8936)' },
                  { label: 'AI', angle: 72, gradient: 'linear-gradient(135deg, #38a169, #0d7377)' },
                  { label: 'Code', angle: 144, gradient: 'linear-gradient(135deg, #3182ce, #2563eb)' },
                  { label: 'Advisory', angle: 216, gradient: 'linear-gradient(135deg, #805ad5, #9f7aea)' },
                  { label: 'Ecosystem', angle: 288, gradient: 'linear-gradient(135deg, #0d7377, #38a169)' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: item.angle + 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center"
                      style={{
                        background: item.gradient,
                        transform: `translate(200px, -40px)`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -(item.angle + 360) }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.2,
                        }}
                        className="w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-xs"
                        style={{ background: item.gradient }}
                      >
                        {item.label}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const angle = (i * 72) * (Math.PI / 180);
                    const x = 200 * Math.cos(angle);
                    const y = 200 * Math.sin(angle);
                    return (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="url(#professional-gradient)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="professional-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d7377" />
                      <stop offset="100%" stopColor="#38a169" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}