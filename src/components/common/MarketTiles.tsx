// ...existing code...
import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect, Card, CardTitle, CardDescription } from "../ui/HoverEffect";

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
  const items: { title: string; description: string; link: string; isPrimary?: boolean }[] = [];
  [...primary, ...secondary].forEach((code) => {
    const c = countryMeta[code];
    if (c) {
      items.push({
        title: c.name,
        description: c.description,
        link: `${baseHref.replace(/\/$/, '')}/${code}`,
        isPrimary: primary.includes(code)
      });
    }
  });
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
  <HoverEffect items={items.filter(Boolean)} />
      </div>
    </section>
  );
}
