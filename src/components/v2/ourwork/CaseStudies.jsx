import React from "react";

const caseStudies = [
  {
    country: "UAE",
    flag: "🇦🇪",
    title: "UAE",
    description: "CEPA-aligned transparency for food imports; live agency dashboards.",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    title: "USA",
    description: "USDA/FDA pilots; AI-driven compliance signals for producers.",
  },
  {
    country: "India",
    flag: "🇮🇳",
    title: "India",
    description: "Export enablement; multilingual QR-linked reports for producers.",
  },
  {
    country: "KSA",
    flag: "🇸🇦",
    title: "KSA",
    description: "Vision 2030 pilots; market access and consumer trust programs.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.country}
              className="bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center border-t-4 border-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4" aria-label={study.country + ' flag'}>{study.flag}</div>
              <div className="text-xl font-bold mb-2 text-gray-800">{study.title}</div>
              <div className="text-gray-600 text-center text-base">{study.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
