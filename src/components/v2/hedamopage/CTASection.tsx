import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Enhanced gradient background with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0fe] via-[#f0f7ff] to-[#f8fafc]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0B5345" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#0B5345] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-16 w-40 h-40 bg-[#176655] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#0B5345] rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Enhanced badge/label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-white/70 backdrop-blur-sm border border-[#0B5345]/20 shadow-sm"
        >
          <div className="w-2 h-2 bg-[#0B5345] rounded-full mr-3 animate-pulse" />
          <span className="text-sm font-medium text-[#0B5345] tracking-wide">STRATEGIC PARTNERSHIPS</span>
        </motion.div>

        {/* Enhanced headline with better typography */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#0B5345] mb-6 leading-tight"
        >
          Bring Hedamo to Your{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Nation</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-2 left-0 right-0 h-3 bg-[#0B5345]/20 -z-0"
            />
          </span>{' '}
          or Network
        </motion.h2>

        {/* Enhanced description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Request a confidential briefing or deploy a focused pilot program 
          tailored for your agency's strategic objectives.
        </motion.p>

        {/* Enhanced CTA buttons with better animations */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <motion.a
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.5,
              hover: { duration: 0.2 },
              tap: { duration: 0.1 }
            }}
            viewport={{ once: true }}
            href="/contact?type=strategic-briefing"
            className="group relative inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[#0B5345] to-[#176655] text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Request Strategic Briefing
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.6,
              hover: { duration: 0.2 },
              tap: { duration: 0.1 }
            }}
            viewport={{ once: true }}
            href="#regions"
            className="group relative inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg border-2 border-[#0B5345] text-[#0B5345] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0B5345] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Explore Country Strategies
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="text-xl"
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </div>

        {/* Enhanced trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="font-medium">Confidential Processing</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="font-medium">Strategic Grade Security</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="font-medium">Rapid Deployment Ready</span>
          </div>
        </motion.div>

        {/* Subtle call-to-action footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 font-light">
            Trusted by defense agencies and strategic partners worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}