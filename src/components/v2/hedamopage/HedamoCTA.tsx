// src/components/v2/hedamopage/HedamoCTA.tsx
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "How much does Hedamo certification cost?",
    answer: "Hedamo certification costs vary based on product complexity and market requirements. We offer transparent pricing with no hidden fees. Contact us for a personalized quote based on your specific needs."
  },
  {
    question: "How is Hedamo different from organic certification?",
    answer: "While organic certification focuses on farming practices, Hedamo provides comprehensive transparency including nutritional analysis, supply chain tracing, AI-powered insights, and ongoing advisory support. We go beyond certification to build lasting trust."
  },
  {
    question: "How long does the certification process take?",
    answer: "The complete Hedamo certification process typically takes 4-8 weeks, including on-site verification, laboratory testing, and report generation. We provide regular updates throughout the process."
  },
  {
    question: "Do you provide ongoing support after certification?",
    answer: "Yes! Hedamo Advisory provides continuous support, helping you maintain standards, improve processes, and adapt to changing market requirements. We're partners in your long-term success."
  }
];

export default function HedamoCTA() {
  return (
    <section id="hedamo-cta" className="py-24 bg-green-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-green-800 mb-6">
            Ready to differentiate your product <br />
            with a Hedamo Review?
          </h2>
          
          <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Join the transparency revolution and build trust with your customers through 
            comprehensive Hedamo certification and ongoing support.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="/join-waitlist"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-semibold"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Join the Waitlist
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Join the Waitlist
                </span>
              </span>
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-green-800 text-green-800 px-8 py-4 rounded-lg hover:bg-green-800 hover:text-white transition-colors font-semibold text-lg"
            >
              Contact Us to Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Consumer Information */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 mb-12"
        >
          <h3 className="font-serif text-2xl font-bold text-green-800 mb-6 text-center">
            For Consumers: Look for Hedamo Labels
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥇</span>
              </div>
              <h4 className="font-bold text-gray-600 mb-2">Platinum</h4>
              <p className="text-sm text-gray-600">Highest level of transparency and quality assurance</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥇</span>
              </div>
              <h4 className="font-bold text-yellow-600 mb-2">Gold</h4>
              <p className="text-sm text-gray-600">Excellent standards with comprehensive reporting</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥇</span>
              </div>
              <h4 className="font-bold text-green-600 mb-2">Green</h4>
              <p className="text-sm text-gray-600">Good practices with verified transparency</p>
            </div>
          </div>
          
          <p className="text-center text-gray-700">
            Scan the QR code on Hedamo-certified products for complete transparency about your health choices.
          </p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8"
        >
          <h3 className="font-serif text-2xl font-bold text-green-800 mb-6 text-center">
            Why Hedamo? Frequently Asked Questions
          </h3>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Preemptively answering common questions to build confidence and trust in the Hedamo system.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-green-800 mb-2">{item.question}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="font-serif text-xl font-bold text-green-800 mb-4">
            Anchoring the Future
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Altibbe's innovation roadmap is our anchor point for industry leadership. By continuously setting higher 
            standards and venturing into new domains of wellness, we reinforce our promise – to remain the trusted 
            anchor in an evolving global health landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 