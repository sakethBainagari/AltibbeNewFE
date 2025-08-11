// SustainableFashionBeauty.tsx
import ArrowButton from '../../common/ArrowButton';
import { motion } from 'framer-motion';

const SustainableFashionBeauty = () => {
  return (
    <>
      {/* invisible SVG for the double-bubble clip-path */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="frame-a" clipPathUnits="objectBoundingBox">
            <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
          </clipPath>
        </defs>
      </svg>

      <section id="sustainable-fashion" className="relative py-24 bg-white w-full" style={{ scrollMarginTop: '6rem' }}>
        {/* ¾-width top & bottom borders */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gray-200" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gray-200" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header with Icon */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-blue-600">Sustainable Fashion</span> & Beauty Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Altibbe's mission extends beyond edibles; we're working on frameworks to verify and celebrate products that care for both consumers and the environment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* LEFT — clipped image + buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-start space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-sm h-[500px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Organic cosmetics and sustainable fashion"
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'url(#frame-a)', WebkitClipPath: 'url(#frame-a)' }}
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 w-full"
              >
                <ArrowButton href="/hedamo" classname="w-full">
                  Explore Beauty & Fashion Reviews
                </ArrowButton>
                <ArrowButton href="/contact">Join Our Innovation Journey</ArrowButton>
              </motion.div>
            </motion.div>

            {/* RIGHT — animated paragraphs */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-start space-y-6"
            >
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Upcoming Initiatives</h3>
                <p className="text-gray-700 leading-relaxed">
                  Through upcoming initiatives, Altibbe will shine a light on sustainable fashion and clean beauty – areas where health and ethics intersect. From natural fabric dyes to organic skincare, we are working on frameworks to verify and celebrate products that care for both consumers and the environment.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Future Hedamo Reviews</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the future, Altibbe might have a Hedamo-style review for textiles or cosmetics, focusing on things like non-toxic ingredients or ethical sourcing. We believe transparency extends beyond food to everything that touches our bodies and lives.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Health & Ethics Intersection</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is hinted by Altibbe's inclusion of fashion and beauty categories and aligns with global trends of ethical fashion. We suggest that in the future, Altibbe might have a Hedamo-style review for textiles or cosmetics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SustainableFashionBeauty; 