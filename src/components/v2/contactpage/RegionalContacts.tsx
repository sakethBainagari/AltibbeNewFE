import React, { useState } from "react";

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

// Enhanced color mapping with professional green palette
const enhancedColors = {
  "UAE": {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    border: "border-green-200",
    text: "text-green-800",
    accent: "bg-green-600",
    hover: "hover:from-green-100 hover:to-green-150"
  },
  "USA": {
    bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    border: "border-emerald-200", 
    text: "text-emerald-800",
    accent: "bg-emerald-600",
    hover: "hover:from-emerald-100 hover:to-emerald-150"
  },
  "KSA": {
    bg: "bg-gradient-to-br from-teal-50 to-teal-100",
    border: "border-teal-200",
    text: "text-teal-800", 
    accent: "bg-teal-600",
    hover: "hover:from-teal-100 hover:to-teal-150"
  },
  "India": {
    bg: "bg-gradient-to-br from-lime-50 to-lime-100",
    border: "border-lime-200",
    text: "text-lime-800",
    accent: "bg-lime-600", 
    hover: "hover:from-lime-100 hover:to-lime-150"
  }
};

export default function RegionalContacts() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-32 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-2xl text-center mt-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-24 h-24 bg-green-600 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-300 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Regional Points of Contact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our specialized regional teams for tailored solutions and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, idx) => {
            const colors = enhancedColors[contact.region as keyof typeof enhancedColors];
            const isHovered = hoveredCard === idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative flex flex-col items-center p-8 border-2 rounded-2xl 
                  ${colors.bg} ${colors.border} ${colors.hover}
                  transition-all duration-300 ease-out cursor-pointer
                  ${isHovered ? 'transform -translate-y-2 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
                `}
              >
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent} rounded-t-2xl`}></div>
                
                {/* Region Badge */}
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full 
                  ${colors.accent} text-white font-bold text-lg shadow-lg
                  ${isHovered ? 'transform scale-110' : ''}
                  transition-transform duration-300 ease-out
                `}>
                  {contact.region.slice(0, 3)}
                </div>

                {/* Region Name */}
                <div className={`text-2xl font-bold mb-4 ${colors.text} tracking-wide`}>
                  {contact.region}
                </div>

                {/* Title */}
                <div className={`text-base font-semibold mb-6 text-center leading-relaxed ${colors.text} opacity-90`}>
                  {contact.title}
                </div>

                {/* Email */}
                <div className="mt-auto">
                  <a 
                    href={`mailto:${contact.email}`} 
                    className={`
                      inline-flex items-center px-6 py-3 rounded-xl font-medium text-sm
                      bg-white ${colors.text} border-2 ${colors.border}
                      hover:bg-gray-50 hover:shadow-md
                      transition-all duration-200 ease-out
                      ${isHovered ? 'transform scale-105' : ''}
                    `}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {contact.email}
                  </a>
                </div>

                {/* Hover Glow Effect */}
                {isHovered && (
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-20 
                    ${colors.accent} blur-xl -z-10
                    transition-opacity duration-300
                  `}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl border border-green-200 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Need General Assistance?</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            For general inquiries or if you're unsure which region to contact, reach out to our main office
          </p>
          <a 
            href="mailto:info@altibbe.com"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 
                     text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 
                     transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Main Office
          </a>
        </div>
      </div>
    </section>
  );
}