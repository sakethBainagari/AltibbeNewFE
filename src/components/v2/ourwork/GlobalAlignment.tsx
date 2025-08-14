import React from "react";

const countries = [
  { name: "United States", flag: "🇺🇸", desc: "Tech innovation & policy framework support" },
  { name: "United Kingdom", flag: "🇬🇧", desc: "Consumer protection & regulatory leadership" },
  { name: "India", flag: "🇮🇳", desc: "Agricultural transformation & digital public infrastructure" },
  { name: "Japan", flag: "🇯🇵", desc: "Sustainable technology integration" },
  { name: "Germany", flag: "🇩🇪", desc: "Green industry adoption & certification standards" },
  { name: "Australia", flag: "🇦🇺", desc: "Clean supply chain initiatives" }
];

const GlobalAlignment: React.FC = () => (
  <section className="relative py-20 bg-gradient-to-br from-blue-50/60 to-white overflow-hidden">
    {/* Subtle animated map background (SVG or image) */}
    <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0 flex items-center justify-center">
      <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
        <ellipse cx="300" cy="150" rx="270" ry="110" fill="#e0e7ef" />
        <ellipse cx="300" cy="150" rx="200" ry="80" fill="#b6d0f7" fillOpacity="0.3" />
      </svg>
    </div>
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
  <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
        A Vision Shared Across Borders
      </h2>
      <p className="text-lg md:text-xl font-poppins mb-10 text-yellow-700">
        We’re not alone in this mission. Leading countries are joining forces to make supply chains ethical, transparent, and sustainable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {countries.map(c => (
          <div
            key={c.name}
            className="group bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-yellow-300 hover:border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform drop-shadow">{c.flag}</div>
            <div className="font-poppins text-xl font-bold mb-1 text-yellow-800 group-hover:text-yellow-600 transition-colors">{c.name}</div>
            <div className="text-base font-poppins text-neutral-700 group-hover:text-yellow-700 transition-colors text-center">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes pulse-slow { 0%,100%{opacity:0.2;} 50%{opacity:0.4;} }
      .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
    `}</style>
  </section>
);

export default GlobalAlignment;
