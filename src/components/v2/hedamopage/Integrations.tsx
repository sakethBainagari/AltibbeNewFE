import { motion } from 'framer-motion';

const integrations = [
  {
    label: 'Inputs',
    desc: 'JSON/API feeds, CSV uploads, partner integrations',
    icon: (
      <svg className="w-9 h-9 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
    )
  },
  {
    label: 'Outputs',
    desc: 'Live dashboards, API feeds, Hedamo Code for public scans',
    icon: (
      <svg className="w-9 h-9 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    )
  },
  {
    label: 'Security',
    desc: 'SSO, Role-based access, Scoped permissions',
    icon: (
      <svg className="w-9 h-9 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0-4h.01" /></svg>
    )
  }
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B5345] mb-12"
        >
          Easy to Integrate. Simple to Scale.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-primary-600 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-primary-800">{item.label}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/docs"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-[#0B5345] text-white shadow-lg hover:bg-[#176655] transition"
          >
            View Integration Guide &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
