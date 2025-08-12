import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#e8f0fe] to-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B5345] mb-6"
        >
          Bring Hedamo to Your Nation or Network
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          Request a confidential briefing or a focused pilot for your agency or procurement program.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            href="/contact?type=strategic-briefing"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-[#0B5345] text-white shadow-lg hover:bg-[#176655] transition"
          >
            Request Strategic Briefing &rarr;
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            href="#regions"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg border border-[#0B5345] text-[#0B5345] bg-white shadow hover:bg-[#e8f0fe] transition"
          >
            Explore Country Strategies &rarr;
          </motion.a>
        </div>
      </div>
    </section>
  );
}
