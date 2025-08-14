// ...existing code...
import React from 'react';
import { motion } from 'framer-motion';

// Accepts primary and secondary country arrays and a baseHref for links
export type MarketTilesProps = {
  primary: string[];
  secondary: string[];
  baseHref?: string;
};

const countryMeta: Record<string, { name: string; flag: string; description: string }> = {
  uae: { name: 'UAE', flag: '🇦🇪', description: 'CEPA-aligned, pioneering health transparency and digital trade.' },
  usa: { name: 'USA', flag: '🇺🇸', description: 'USDA-backed, advancing organic standards and market access.' },
  ksa: { name: 'KSA', flag: '🇸🇦', description: 'Vision 2030, driving innovation in food and wellness.' },
  india: { name: 'India', flag: '🇮🇳', description: 'Major producer, global leader in sustainable agriculture.' },
  singapore: { name: 'Singapore', flag: '🇸🇬', description: 'Gateway to Asia, high standards for food safety.' },
  japan: { name: 'Japan', flag: '🇯🇵', description: 'Innovation in food tech and quality standards.' },
  uk: { name: 'United Kingdom', flag: '🇬🇧', description: 'Emphasizing traceability and consumer trust.' },
  germany: { name: 'Germany', flag: '🇩🇪', description: 'Leader in food safety and sustainability.' },
};

export default function MarketTiles({ primary, secondary, baseHref = '/hedamo/services/' }: MarketTilesProps) {
  return (
    <section id="regions" className="bg-[#F8F9FA] py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-poppins text-4xl md:text-5xl font-bold mb-10 text-[#0B5345]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Services by Region
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...primary, ...secondary].map((code, idx) => {
            const c = countryMeta[code];
            if (!c) return null;
            return (
              <motion.div
                key={code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`rounded-xl p-7 shadow-md flex flex-col items-center border-2 ${primary.includes(code) ? 'border-[#D4AF37] bg-white' : 'border-[#0B5345] bg-[#F8F9FA]'}`}
              >
                <span className="text-5xl mb-3">{c.flag}</span>
                <h3 className="font-poppins text-xl md:text-2xl font-bold mb-1 text-[#0B5345]" style={{ fontFamily: 'Poppins, sans-serif' }}>{c.name}</h3>
                <p className="font-poppins text-base md:text-lg text-gray-700 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{c.description}</p>
                <a
                  href={`${baseHref.replace(/\/$/, '')}/${code}`}
                  className="font-poppins mt-auto inline-block px-5 py-2 rounded-full bg-[#0B5345] text-white font-semibold shadow hover:bg-[#176655] transition"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Explore {c.name} Strategy &rarr;
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
