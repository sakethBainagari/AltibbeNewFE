import React, { useState, useRef, useEffect } from "react";

const impactData = [
  {
    icon: "🌐",
    title: "Global Policy Enablement",
    desc: "Assisting governments with compliance-ready, real-time trade and food security intelligence.",
    features: ["Regulatory Compliance", "Trade Intelligence", "Policy Analytics"]
  },
  {
    icon: "🌱",
    title: "Sustainable Industry Practices",
    desc: "Empowering producers and retailers with data-backed sourcing and ethical process tracking.",
    features: ["Supply Chain Mapping", "ESG Reporting", "Sustainability Metrics"]
  },
  {
    icon: "🔎",
    title: "Consumer Empowerment",
    desc: "Giving end-users access to verifiable origin, ingredient, and impact data instantly.",
    features: ["Product Transparency", "Origin Verification", "Impact Assessment"]
  }
];

const ImpactAreas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="impact-areas"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block mb-4 transform transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="text-sm font-semibold text-[#a0aec0] uppercase tracking-wider">
              Impact Areas
            </span>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d3748] mb-6 max-w-4xl mx-auto leading-tight transform transition-all duration-800 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Driving Transparency Across Key Industries
          </h2>
          
          <p 
            className={`text-lg text-[#4a5568] max-w-3xl mx-auto leading-relaxed transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            We deliver comprehensive solutions that enable organizations to build trust, 
            ensure compliance, and create meaningful impact across their value chains.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((area, idx) => (
            <div
              key={area.title}
              className={`group transform transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + idx * 150}ms` }}
            >
              <div className="h-full bg-[#ffffff] border border-[#e2e8f0] rounded-lg p-8 hover:border-[#0d7377] hover:shadow-lg transition-all duration-300">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#f7fafc] rounded-lg flex items-center justify-center group-hover:bg-[#0d7377]/10 transition-colors duration-300">
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#2d3748] mb-3">
                    {area.title}
                  </h3>
                  
                  <p className="text-[#4a5568] leading-relaxed mb-6">
                    {area.desc}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[#2d3748] mb-3">Key Capabilities:</p>
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center text-sm text-[#4a5568]">
                          <div className="w-1.5 h-1.5 bg-[#0d7377] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-[#e2e8f0]">
                  <button className="inline-flex items-center text-sm font-medium text-[#0d7377] hover:text-[#38a169] transition-colors duration-200 group/link">
                    Learn more
                    <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

  {/* ...existing code... */}
      </div>
    </section>
  );
};

export default ImpactAreas;