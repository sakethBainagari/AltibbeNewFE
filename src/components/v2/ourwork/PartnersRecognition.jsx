import React from "react";

const logos = [
  // Placeholder SVGs for logos
  (
    <svg key="1" className="h-10" viewBox="0 0 120 40" fill="none"><rect width="120" height="40" rx="8" fill="#E5E7EB" /><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="18" fill="#A3A3A3">LOGO</text></svg>
  ),
  (
    <svg key="2" className="h-10" viewBox="0 0 120 40" fill="none"><rect width="120" height="40" rx="8" fill="#E5E7EB" /><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="18" fill="#A3A3A3">LOGO</text></svg>
  ),
  (
    <svg key="3" className="h-10" viewBox="0 0 120 40" fill="none"><rect width="120" height="40" rx="8" fill="#E5E7EB" /><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="18" fill="#A3A3A3">LOGO</text></svg>
  ),
  (
    <svg key="4" className="h-10" viewBox="0 0 120 40" fill="none"><rect width="120" height="40" rx="8" fill="#E5E7EB" /><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="18" fill="#A3A3A3">LOGO</text></svg>
  ),
  (
    <svg key="5" className="h-10" viewBox="0 0 120 40" fill="none"><rect width="120" height="40" rx="8" fill="#E5E7EB" /><text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="18" fill="#A3A3A3">LOGO</text></svg>
  ),
];

export default function PartnersRecognition() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partners & Recognition</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />
        <p className="text-lg text-gray-700 mb-10">Trusted by ministries, standards bodies, and leading producers worldwide.</p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
