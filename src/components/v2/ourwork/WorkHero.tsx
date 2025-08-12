import { motion } from 'framer-motion';

const WorkHero = () => (
  <section id="work-hero" className="relative w-full min-h-[420px] flex items-center justify-center bg-white text-[#0E0E0E] overflow-hidden mt-16" style={{ scrollMarginTop: '6rem' }}>
    {/* Prestige white background, gold accent */}
    <img
      src="/images/ourwork/hero_montage.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-20"
      style={{ zIndex: 0 }}
    />
    {/* Animated gold accent (simple shimmer bar) */}
    <motion.div
      className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-70"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      style={{ zIndex: 2 }}
    />
    <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-2 text-yellow-500">Altibbe in Action</h1>
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-[#0E0E0E]">Building Trust, Delivering Clarity</h2>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
        From national transparency programs to AI-driven policy tools, our work advances health integrity and market confidence worldwide.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <a
          href="/hedamo"
          className="px-8 py-3 rounded-full font-semibold text-lg bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 transition"
        >
          See Hedamo System &rarr;
        </a>
        <a
          href="/contact?type=collaboration"
          className="px-8 py-3 rounded-full font-semibold text-lg bg-white text-yellow-700 border border-yellow-400 shadow hover:bg-yellow-50 transition"
        >
          Contact for Collaboration
        </a>
      </div>
    </div>
  </section>
);

export default WorkHero;
