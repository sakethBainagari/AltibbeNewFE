// AIHealthSolutions.tsx
import ArrowButton from "../../common/ArrowButton";
import { motion } from 'framer-motion';

const AIHealthSolutions = () => (
  <section id="ai-health-solutions" className="py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header with Icon */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="text-green-600">AI-Powered</span> Personal Health Solutions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Altibbe is exploring AI (Artificial Intelligence) to provide personalized health insights.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-start">
        {/* Left column ----------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-800 mb-3">AI-Driven Tools</h3>
            <p className="text-gray-700 leading-relaxed">
              Hedamo's data and reviews feed into <strong>AI-driven tools</strong> that help consumers choose products tailored to their health needs. This could be an app or platform that offers recommendations or risk assessments for products like an AI nutrition coach.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Personalized Insights</h3>
            <p className="text-gray-700 leading-relaxed">
              Using Altibbe's database, our AI provides personalized wellness recommendations and predictive health insights while upholding privacy and scientific rigor.
            </p>
          </div>
        </motion.div>

        {/* Right column ---------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology Meets Health</h3>
            <p className="text-gray-700 leading-relaxed">
              Leveraging AI, Altibbe aims to translate its transparency data into actionable guidance – think personalized wellness recommendations and predictive health insights – all while upholding privacy and scientific rigor.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Future Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              This shows Altibbe's commitment to marrying technology with user-centric health benefits, creating a smarter, more personalized health ecosystem.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <ArrowButton href="/hedamo">
              Learn More About AI Health Solutions
            </ArrowButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AIHealthSolutions; 