// InnovationStats.tsx
import { motion } from 'framer-motion';

const InnovationStats = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-6xl mx-auto px-6">
      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Innovation Metrics
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our commitment to continuous innovation is reflected in our ongoing research and development efforts.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { number: '4+', label: 'Innovation Pillars', color: 'text-green-600' },
          { number: '100%', label: 'Future-Focused', color: 'text-blue-600' },
          { number: '∞', label: 'Growth Potential', color: 'text-purple-600' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className={`text-4xl md:text-6xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-lg text-gray-600 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Anchoring the Future Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-12 rounded-2xl border border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Anchoring the Future
          </h3>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Altibbe's innovation roadmap is our anchor point for industry leadership. By continuously setting higher standards and venturing into new domains of wellness, we reinforce our promise – to remain the trusted anchor in an evolving global health landscape.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Industry Leadership
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Higher Standards
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Global Impact
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InnovationStats; 