// DigitalPlatformBlock.tsx
import ArrowButton from "../../common/ArrowButton";
import { motion } from 'framer-motion';

const DigitalPlatformBlock = () => (
  <section className="bg-accent-sage py-24">
    {/* invisible SVG clip-path definition for this section */}
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="frame-digital" clipPathUnits="objectBoundingBox">
          <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
        </clipPath>
      </defs>
    </svg>

    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header with Icon */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-purple-600">Digital Platform</span> & Community
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We're innovating how our audience interacts with transparency data, creating a more interactive and community-driven experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="aspect-square rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&h=800&q=80"
            alt="Organic product digital platform interface"
            className="w-full h-full object-cover"
            style={{ clipPath: 'url(#frame-digital)' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Interactive Platform</h3>
              <p className="text-gray-700 leading-relaxed">
                Expect a more interactive Altibbe platform – where consumers can scan products on-the-go, share their experiences, and where producers can update their sustainability progress in real-time.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Community Building</h3>
              <p className="text-gray-700 leading-relaxed">
                This suggests an app with QR scanning or a social aspect around Hedamo reviews. It indicates Altibbe's commitment to not just produce reports, but also to build a community of informed users.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Real-Time Updates</h3>
              <p className="text-gray-700 leading-relaxed">
                Producers can update their sustainability progress in real-time, creating a dynamic ecosystem where transparency is always current and accessible.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <ArrowButton href="/hedamo">Explore Hedamo Platform</ArrowButton>
              <ArrowButton href="/community">
                Join Our Community
              </ArrowButton>
              <ArrowButton href="/contact">Get Early Access</ArrowButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DigitalPlatformBlock; 