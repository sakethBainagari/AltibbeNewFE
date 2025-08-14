import React from "react";

const caseStudies = [
  {
    title: "Government Trade Policy Transformation",
    desc: "AI-driven food safety compliance"
  },
  {
    title: "Retail Chain Supply Verification",
    desc: "10M+ SKUs verified via QR codes"
  },
  {
    title: "Farmer-to-Fork Traceability",
    desc: "Boosting smallholder farmer income by 40%"
  }
];


const CaseStudies: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-yellow-50/60 to-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-8 drop-shadow-sm bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-center">
        Case Studies
      </h2>
      <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
        {caseStudies.map((c) => (
          <div
            key={c.title}
            className="min-w-[300px] max-w-xs bg-white rounded-2xl shadow-lg p-8 snap-center cursor-grab active:cursor-grabbing border-t-4 border-yellow-300 hover:border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="text-xl font-bold font-montserrat mb-2 text-yellow-800 group-hover:text-yellow-600 transition-colors text-center">{c.title}</div>
            <div className="text-base font-poppins text-yellow-700 mb-2 text-center">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
