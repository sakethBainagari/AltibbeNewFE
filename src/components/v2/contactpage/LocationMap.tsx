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
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-xl shadow-lg text-center mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-8">Our Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border-2 ${active === idx ? 'border-emerald-500 bg-emerald-50' : 'border-green-200 bg-white'} cursor-pointer transition-all shadow-md w-full`}
            onClick={() => setActive(idx)}
          >
            <div className="font-bold text-xl mb-1 text-emerald-700">{office.name}</div>
            <div className="text-gray-700">{office.address}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
