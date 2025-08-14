import React, { useState } from "react";

const offices = [
  {
    name: "HQ (UAE)",
    lat: 25.2048,
    lng: 55.2708,
    address: "Dubai, UAE"
  },
  {
    name: "USA Office",
    lat: 38.9072,
    lng: -77.0369,
    address: "Washington, DC, USA"
  },
  {
    name: "KSA Office",
    lat: 24.7136,
    lng: 46.6753,
    address: "Riyadh, KSA"
  },
  {
    name: "India Office",
    lat: 28.6139,
    lng: 77.2090,
    address: "New Delhi, India"
  }
];

export default function LocationMap() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-white rounded-xl shadow-lg text-center mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Locations</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="w-full md:w-2/3 h-96 bg-gray-100 rounded-lg relative flex items-center justify-center">
          {/* Placeholder for interactive map. Replace with actual map embed if available. */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 text-lg">[Interactive Map Placeholder]</span>
          </div>
          {offices.map((office, idx) => (
            <div
              key={idx}
              className={`absolute z-10 transition-all duration-200 cursor-pointer ${active === idx ? 'bg-yellow-400 border-yellow-600' : 'bg-gray-300 border-gray-500'} border-2 rounded-full w-6 h-6 flex items-center justify-center`}
              style={{
                left: `${20 + idx * 20}%`,
                top: `${40 + idx * 10}%`,
                boxShadow: active === idx ? '0 0 10px 2px gold' : 'none'
              }}
              onClick={() => setActive(idx)}
              title={office.name}
            >
              <span className="sr-only">{office.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${active === idx ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 bg-white'} cursor-pointer transition-all`}
              onClick={() => setActive(idx)}
            >
              <div className="font-bold text-lg mb-1">{office.name}</div>
              <div className="text-gray-700">{office.address}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
