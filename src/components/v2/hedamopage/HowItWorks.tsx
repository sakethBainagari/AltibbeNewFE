// src/components/v2/hedamopage/HowItWorks.tsx
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Ingest',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
    ),
    desc: 'Accept structured inputs from producers, labs, and market data sources.'
  },
  {
    title: 'Normalize',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M4 12a8 8 0 0116 0" /></svg>
    ),
    desc: 'Harmonize into a common model aligned to national goals and trade requirements.'
  },
  {
    title: 'Enrich',
    icon: (
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
    ),
    desc: 'Apply Hedamo AI to generate risk signals, policy views, and consumer-facing summaries.'
  },
  {
    title: 'Publish',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    desc: 'Output to Reports, Dashboards, and the Hedamo Code for scanning.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 mb-8"
        >
          One System. Clean Data. Many Decisions.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm max-w-2xl mx-auto">
          <strong>Note:</strong> Uses secure storage, role-based access, and interoperable exports (JSON/CSV/PDF).
        </div>
      </div>
    </section>
  );
}
