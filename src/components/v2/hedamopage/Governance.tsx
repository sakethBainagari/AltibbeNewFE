import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Neutral by Design',
    desc: 'Structured reporting—no advocacy, no promotional language.'
  },
  {
    title: 'Data Minimalism',
    desc: 'Collect only what informs the decision; clear retention policies.'
  },
  {
    title: 'Interoperability',
    desc: 'Import/export with standard formats; integrate to national systems.'
  },
  {
    title: 'Accessibility',
    desc: 'Multilingual, device-agnostic, and inclusive UI patterns.'
  }
];

export default function Governance() {
  return (
    <section id="governance" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B5345] mb-12"
        >
          Governance You Can Trust
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 flex flex-col items-start border-l-4 border-[#0B5345]"
            >
              <h3 className="font-semibold text-xl mb-2 text-[#0B5345]">{pillar.title}</h3>
              <p className="text-gray-700 text-base">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
