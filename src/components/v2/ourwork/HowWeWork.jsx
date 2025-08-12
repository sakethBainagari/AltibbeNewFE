import React from "react";

const bullets = [
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    text: "Policy-Ready Reporting",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
    text: "AI-Driven Insights",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    text: "Multilingual Access",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" /></svg>
    ),
    text: "Secure, Scalable Infrastructure",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <div className="space-y-6">
            {bullets.map((b, i) => (
              <div key={b.text} className="flex items-center gap-4">
                <span>{b.icon}</span>
                <span className="text-lg text-gray-800 font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l-4 border-yellow-400 pl-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            We partner with ministries, agencies, and producers to localize solutions for national priorities—delivering clarity, efficiency, and trust at every step.
          </p>
        </div>
      </div>
    </section>
  );
}
