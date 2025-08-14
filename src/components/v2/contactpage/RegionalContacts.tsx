import React from "react";

const contacts = [
  {
    region: "UAE",
    title: "Government & Institutional Partnerships",
    email: "uae@altibbe.com",
    color: "bg-blue-50 border-blue-200 text-blue-900"
  },
  {
    region: "USA",
    title: "Trade & Compliance Inquiries",
    email: "usa@altibbe.com",
    color: "bg-green-50 border-green-200 text-green-900"
  },
  {
    region: "KSA",
    title: "Food Security & Market Expansion",
    email: "ksa@altibbe.com",
    color: "bg-yellow-50 border-yellow-200 text-yellow-900"
  },
  {
    region: "India",
    title: "Producer & Export Solutions",
    email: "india@altibbe.com",
    color: "bg-red-50 border-red-200 text-red-900"
  }
];

export default function RegionalContacts() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-white rounded-xl shadow-lg text-center mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Regional Points of Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contacts.map((c, idx) => (
          <div key={idx} className={`flex flex-col items-center p-6 border rounded-lg shadow ${c.color}`}>
            <div className="text-xl font-bold mb-2">{c.region}</div>
            <div className="text-base font-semibold mb-1">{c.title}</div>
            <a href={`mailto:${c.email}`} className="text-sm underline text-blue-700 hover:text-blue-900">{c.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
