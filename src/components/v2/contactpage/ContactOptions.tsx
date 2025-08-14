import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const options = [
  {
    icon: <FaEnvelope className="text-blue-600 text-3xl mb-2" />,
    title: "Email Us",
    detail: "contact@altibbe.com",
    description: "For general inquiries, partnerships, and media."
  },
  {
    icon: <FaPhone className="text-green-600 text-3xl mb-2" />,
    title: "Call Us",
    detail: (
      <span>
        UAE Office: +971-XXX-XXXXXX<br />
        International: +XX-XXX-XXXXXXX
      </span>
    ),
    description: "For direct communication with our team."
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-600 text-3xl mb-2" />,
    title: "Visit Us",
    detail: "Registered HQ or regional office address here.",
    description: "Schedule a visit to our headquarters or regional office."
  },
  {
    icon: <FaLinkedin className="text-blue-800 text-3xl mb-2" />,
    title: "LinkedIn",
    detail: (
      <a href="https://linkedin.com/company/altibbe" target="_blank" rel="noopener noreferrer" className="underline text-blue-800">linkedin.com/company/altibbe</a>
    ),
    description: "Connect with us for updates and networking."
  }
];

export default function ContactOptions() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-white rounded-xl shadow-lg text-center mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Reach Us Through Your Preferred Channel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {options.map((opt, idx) => (
          <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            {opt.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{opt.title}</h3>
            <div className="text-base text-gray-700 mb-1">{opt.detail}</div>
            <div className="text-sm text-gray-500">{opt.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
