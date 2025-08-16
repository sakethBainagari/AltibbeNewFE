import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

// Add CSS variables to the component
const styles = `
  :root {
    --primary-teal: #0d7377;
    --primary-teal-dark: #0a5d61;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --text-muted: #a0aec0;
    --bg-white: #ffffff;
    --bg-light: #f7fafc;
    --border-gray: #e2e8f0;
    --accent-green: #38a169;
    --accent-blue: #3182ce;
  }
  
  .text-primary { color: var(--text-primary); }
  .text-secondary { color: var(--text-secondary); }
  .text-muted { color: var(--text-muted); }
  .text-teal { color: var(--primary-teal); }
  .text-green { color: var(--accent-green); }
  .bg-white-custom { background-color: var(--bg-white); }
  .bg-teal-gradient { 
    background: linear-gradient(to right, var(--primary-teal), var(--accent-green), var(--accent-blue)); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @keyframes pulse-slow { 
    0%, 100% { opacity: 0.2; } 
    50% { opacity: 0.4; } 
  }
  .animate-pulse-slow { 
    animation: pulse-slow 6s ease-in-out infinite; 
  }
`;

const countries = [
  {
    name: 'UAE',
    code: 'AE',
    type: 'Primary',
    description: 'CEPA-aligned, pioneering health transparency and digital trade.',
    flag: '🇦🇪',
  },
  {
    name: 'USA',
    code: 'US',
    type: 'Primary',
    description: 'USDA-backed, advancing organic standards and market access.',
    flag: '🇺🇸',
  },
  {
    name: 'KSA',
    code: 'SA',
    type: 'Primary',
    description: 'Vision 2030, driving innovation in food and wellness.',
    flag: '🇸🇦',
  },
  {
    name: 'India',
    code: 'IN',
    type: 'Primary',
    description: 'Major producer, global leader in sustainable agriculture.',
    flag: '🇮🇳',
  },
  {
    name: 'Singapore',
    code: 'SG',
    type: 'Secondary',
    description: 'Gateway to Asia, high standards for food safety.',
    flag: '🇸🇬',
  },
  {
    name: 'UK',
    code: 'GB',
    type: 'Secondary',
    description: 'Emphasizing traceability and consumer trust.',
    flag: '🇬🇧',
  },
];

const GlobalAlignment: React.FC = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <section id="global-alignment" className="relative py-20 bg-white-custom overflow-hidden">
      {/* Subtle animated map background (SVG or image) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0 flex items-center justify-center">
        <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
          <ellipse cx="300" cy="150" rx="270" ry="110" fill="#0d7377" fillOpacity="0.3" />
          <ellipse cx="300" cy="150" rx="200" ry="80" fill="#38a169" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm bg-teal-gradient">
          A Vision Shared Across Borders
        </h2>
        <p
          className="text-lg md:text-xl mb-10 text-center text-secondary"
          style={{ fontFamily: 'Editorial New, serif', fontWeight: 100, fontStyle: 'italic' }}
        >
          We're not alone in this mission. Leading countries are joining forces to make supply chains ethical, transparent, and sustainable.
        </p>
        <InfiniteMovingCards
          items={countries.map((country) => ({
            name: country.name,
            code: country.code,
            description: country.description,
            flag: country.flag,
          }))}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="mt-8"
        />
      </div>
    </section>
  </>
);

export default GlobalAlignment;