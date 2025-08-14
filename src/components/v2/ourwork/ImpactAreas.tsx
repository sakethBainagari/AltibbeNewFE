import React from "react";

const impactData = [
  {
    icon: "🌐",
    title: "Global Policy Enablement",
    desc: "Assisting governments with compliance-ready, real-time trade and food security intelligence."
  },
  {
    icon: "🌱",
    title: "Sustainable Industry Practices",
    desc: "Empowering producers and retailers with data-backed sourcing and ethical process tracking."
  },
  {
    icon: "🔎",
    title: "Consumer Empowerment",
    desc: "Giving end-users access to verifiable origin, ingredient, and impact data instantly."
  }
];

const ImpactAreas: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {impactData.map((area) => (
          <div
            key={area.title}
            className="group bg-neutral-50 rounded-xl shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-8 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{area.icon}</div>
            <h3 className="font-poppins text-xl font-bold mb-2">{area.title}</h3>
            <p className="text-base font-poppins text-neutral-700">{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactAreas;
