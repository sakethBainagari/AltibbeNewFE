// InnovationHero.tsx
import { motion } from 'framer-motion';

const InnovationHero = () => (
  <section id="innovation-roadmap" className="w-full mt-24" style={{ scrollMarginTop: '6rem' }}>
    {/* invisible SVG clip-path definition */}
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="frame-a" clipPathUnits="objectBoundingBox">
          <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
        </clipPath>
      </defs>
    </svg>

    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Main Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-8"
        >
          <span className="block">Our Work</span>
          <em className="block italic">Innovation Roadmap & Future Products</em>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700"
        >
          Innovation is at the heart of Altibbe. We don't just stop at our current solutions – we continuously research and develop new ways to advance health transparency and wellness.
        </motion.p>
      </motion.div>

      {/* Innovation Roadmap Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Innovation Roadmap
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our forward-looking projects and upcoming offerings establish Altibbe as an evolving innovator in the health and wellness space.
        </p>
      </motion.div>

      {/* Roadmap Visual Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="relative mb-20"
      >
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Roadmap line */}
            <div className="w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 via-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
            
            {/* Roadmap stops with better positioning */}
            <div className="absolute -top-3 left-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
            <div className="absolute -top-3 left-1/4 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
            <div className="absolute -top-3 left-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
            <div className="absolute -top-3 left-3/4 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
            <div className="absolute -top-3 right-0 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-lg transform translate-x-1/2"></div>
            
            {/* Labels with better positioning and visibility */}
            <div className="absolute top-8 left-0 transform -translate-x-1/2 text-sm font-bold text-green-600 bg-white px-2 py-1 rounded shadow-sm">AI Health</div>
            <div className="absolute top-8 left-1/4 transform -translate-x-1/2 text-sm font-bold text-yellow-600 bg-white px-2 py-1 rounded shadow-sm">Supplements</div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-600 bg-white px-2 py-1 rounded shadow-sm">Fashion</div>
            <div className="absolute top-8 left-3/4 transform -translate-x-1/2 text-sm font-bold text-purple-600 bg-white px-2 py-1 rounded shadow-sm">Digital</div>
            <div className="absolute top-8 right-0 transform translate-x-1/2 text-sm font-bold text-indigo-600 bg-white px-2 py-1 rounded shadow-sm">Future</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InnovationHero; 