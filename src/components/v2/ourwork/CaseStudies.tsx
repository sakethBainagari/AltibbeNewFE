import React, { useState, useRef, useEffect } from "react";

// Add CSS variables to the component
const styles = `
  :root {
    --primary-teal: #0d7377;
    --primary-teal-dark: #0a5d61;
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --text-muted: #a0aec0;
    --bg-white: #ffffff;
    --bg-off-white: #f9fafb;
    --bg-light: #f7fafc;
    --accent-green: #38a169;
    --accent-blue: #3182ce;
    --accent-amber: #d69e2e;
    --border-gray: #e2e8f0;
  }

  .text-primary { color: var(--text-primary); }
  .text-secondary { color: var(--text-secondary); }
  .text-muted { color: var(--text-muted); }
  .text-teal { color: var(--primary-teal); }
  .text-green { color: var(--accent-green); }
  .bg-white-custom { background-color: var(--bg-white); }
  .bg-light { background-color: var(--bg-light); }
  .border-custom { border-color: var(--border-gray); }
  .border-teal { border-color: var(--primary-teal); }
  .hover\\:border-teal:hover { border-color: var(--primary-teal); }
  .hover\\:border-custom:hover { border-color: var(--border-gray); }
`;

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

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCase, setSelectedCase] = useState(0);
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
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section 
        id="case-studies"
        ref={sectionRef}
        className="py-20 md:py-28 bg-white-custom"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className={`inline-block mb-4 transform transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
            </div>
            
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 max-w-4xl mx-auto leading-tight transform transition-all duration-800 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Case Studies
            </h2>
            
            <p 
              className={`text-lg text-secondary max-w-3xl mx-auto leading-relaxed italic transform transition-all duration-800 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              We're not alone in this mission. Leading countries are joining forces to make supply chains ethical, transparent, and sustainable.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, idx) => (
              <div
                key={study.title}
                className={`group cursor-pointer transform transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${selectedCase === idx ? 'scale-105' : ''}`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
                onClick={() => setSelectedCase(idx)}
              >
                <div className={`h-full bg-white-custom rounded-lg border-2 p-8 transition-all duration-300 ${
                  selectedCase === idx 
                    ? 'border-teal shadow-lg' 
                    : 'border-custom hover:border-teal hover:shadow-md'
                }`}>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-secondary leading-relaxed">
                    {study.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

    {/* ...existing code... */}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;