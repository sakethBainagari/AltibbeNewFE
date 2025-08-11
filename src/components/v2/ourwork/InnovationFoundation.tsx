// InnovationFoundation.tsx
import ArrowButton from "../../common/ArrowButton";
import { motion } from 'framer-motion';

const InnovationFoundation = () => (
  <section id="natural-supplements" className="relative py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
    {/* top border */}
    <span className="absolute top-0 left-[12.5%] h-px w-[75%] bg-gray-200" />
    {/* bottom border */}
    <span className="absolute bottom-0 left-[12.5%] h-px w-[75%] bg-gray-200" />

    <div className="max-w-7xl mx-auto px-6">
      {/* Section Header with Icon */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="text-yellow-600">Natural Supplements</span> & Functional Foods
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Building on the concept of "Food as Medicine," we plan to highlight and develop natural supplements and herbal products validated through Hedamo.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Ancient Wisdom</h3>
            <p className="text-gray-700 leading-relaxed">
              Our future products focus on harnessing ancient wisdom – from herbal supplements to functional foods – and validating their benefits with modern science.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Next Wave of Wellness</h3>
            <p className="text-gray-700 leading-relaxed">
          We believe the next wave of wellness will be powered by nature's time-tested ingredients, be it bael fruit for digestion or turmeric for immunity, all reviewed and trusted under Hedamo's standards.
        </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Hedamo Validation</h3>
            <p className="text-gray-700 leading-relaxed">
              Perhaps Altibbe might curate a line of Hedamo-reviewed superfoods or partner with brands making ancient remedies, ensuring they meet high standards since many consumers worry about the credibility of supplements.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-4"
          >
        <ArrowButton
          href="/hedamo"
          classname="mt-4"
        >
          Explore Natural Products
        </ArrowButton>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=600&q=80"
          alt="Organic herbs and natural supplements"
          className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
        />
        </motion.div>
      </div>
    </div>
  </section>
);

export default InnovationFoundation; 