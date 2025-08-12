import { motion } from 'framer-motion';

const samples = [
  {
    title: 'Policy View (PDF)',
    desc: 'One-page brief for ministries (risk, provenance, alignment).',
    icon: (
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v14l4-4z" /></svg>
    ),
    tag: 'PDF Brief'
  },
  {
    title: 'Buyer View (Web)',
    desc: 'Supplier comparison table + drill-downs.',
    icon: (
      <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
    ),
    tag: 'Web Table'
  },
  {
    title: 'Consumer View (Web)',
    desc: 'Plain-language summary accessible via Hedamo Code.',
    icon: (
      <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v7c0 2.21-3.582 4-8 4z" /></svg>
    ),
    tag: 'Web Summary'
  }
];

export default function Samples() {
  return (
    <section id="samples" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B5345] mb-12"
        >
          What a Hedamo Report Looks Like
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {samples.map((sample, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-primary-600 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{sample.icon}</div>
              <span className="inline-block px-3 py-1 mb-2 rounded-full bg-[#e8f0fe] text-xs font-semibold text-[#0B5345]">{sample.tag}</span>
              <h3 className="font-semibold text-xl mb-2 text-primary-800">{sample.title}</h3>
              <p className="text-gray-600 text-base">{sample.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/contact?type=samples"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-[#0B5345] text-white shadow-lg hover:bg-[#176655] transition"
          >
            Request Redacted Samples &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
