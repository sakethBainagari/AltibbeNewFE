import React from "react";

const features = [
  "AI-generated multilingual reports",
  "Supply chain risk alerts",
  "QR-enabled instant product lookups"
];

const LiveReports: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-yellow-50/60 to-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
  <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
        Always On. Always Up-to-Date.
      </h2>
      <p className="text-lg md:text-xl font-poppins mb-10 text-yellow-800">
        Every stakeholder in our ecosystem gets live, real-time transparency reports — no PDFs, no delays. Our Hedamo platform ensures you have instant access to trustworthy data for every decision you make.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {features.map(f => (
          <div key={f} className="flex-1 min-w-[220px] bg-white rounded-xl shadow-lg px-6 py-6 mb-4 md:mb-0 border-t-4 border-yellow-300 hover:border-yellow-500 transition-all duration-300">
            <span className="font-poppins text-lg text-yellow-700 font-semibold block mb-2">{f}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LiveReports;
