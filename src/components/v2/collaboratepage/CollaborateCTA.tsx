// src/components/v2/collaboratepage/CollaborateCTA.tsx
import { motion } from 'framer-motion';

export default function CollaborateCTA() {
  return (
    <section id="collaborate-cta" className="py-20 bg-primary-900 text-accent-mint" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-accent-mint mb-6"
        >
          Ready to Build a <br />
          Healthier Future Together?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl mb-8 text-accent-mint/90 leading-relaxed"
        >
          Interested in collaborating? We'd love to hear from you! Whether you're interested in strategic partnerships, 
          government collaborations, or producer engagement opportunities – let's explore 
          how we can work together.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 button-text text-lg text-accent-mint bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors font-semibold"
          >
            <span className="relative overflow-hidden">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Contact Us
              </span>
              <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Contact Us
              </span>
            </span>
          </a>
          <a
            href="mailto:corp@altibbe.com"
            className="bg-transparent border-2 border-accent-mint text-accent-mint px-8 py-4 rounded-lg hover:bg-accent-mint hover:text-primary-900 transition-colors font-semibold text-lg"
          >
            corp@altibbe.com
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-accent-mint/20"
        >
          <h3 className="text-xl font-bold text-accent-mint mb-4">
            Additional Collaboration Opportunities
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-lg p-6"
            >
              <h4 className="font-semibold text-accent-mint mb-2">Media & Speaking</h4>
              <p className="text-accent-mint/80 text-sm">
                We welcome inquiries for media collaborations, speaking engagements, 
                and thought leadership opportunities related to health transparency.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-lg p-6"
            >
              <h4 className="font-semibold text-accent-mint mb-2">Research Initiatives</h4>
              <p className="text-accent-mint/80 text-sm">
                Partner with us on research projects focused on transparency, 
                sustainability, and health innovation across global markets.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 