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
    --bg-light: #f7fafc;
    --border-gray: #e2e8f0;
    --accent-green: #38a169;
  }
  
  .text-primary { color: var(--text-primary); }
  .text-secondary { color: var(--text-secondary); }
  .text-muted { color: var(--text-muted); }
  .text-teal { color: var(--primary-teal); }
  .text-green { color: var(--accent-green); }
  .bg-light { background-color: var(--bg-light); }
  .bg-white-custom { background-color: var(--bg-white); }
  .border-custom { border-color: var(--border-gray); }
  .border-teal { border-color: var(--primary-teal); }
  .bg-teal-light { background-color: rgba(13, 115, 119, 0.1); }
`;

const features = [
  { 
    title: "AI-Generated Multilingual Reports",
    description: "Automated reporting in 25+ languages with advanced analytics and customizable insights for global stakeholders.",
    icon: "📊"
  },
  { 
    title: "Supply Chain Risk Alerts", 
    description: "Real-time monitoring and predictive alerts for disruptions, compliance issues, and quality concerns across your network.",
    icon: "⚠️"
  },
  { 
    title: "QR-Enabled Instant Lookups",
    description: "Instant access to comprehensive product data, certifications, and traceability information via mobile scanning.",
    icon: "📱"
  }
];

const stats = [
  { number: "99.9%", label: "Platform Uptime" },
  { number: "<2s", label: "Report Generation" },
  { number: "24/7", label: "Real-Time Monitoring" }
];

const LiveReports = () => {
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
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section 
        id="live-reports"
        ref={sectionRef}
        className="py-20 md:py-28"
        style={{ backgroundColor: 'var(--bg-light)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div 
              className={`inline-block mb-4 transform transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <span className="text-sm font-semibold text-muted uppercase tracking-wider">
                Real-Time Intelligence
              </span>
            </div>
            
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 max-w-4xl mx-auto leading-tight transform transition-all duration-800 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Always On. Always Up-to-Date.
            </h2>
            
            <p 
              className={`text-lg text-secondary max-w-3xl mx-auto leading-relaxed mb-8 transform transition-all duration-800 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Every stakeholder in our ecosystem gets live, real-time transparency reports — no PDFs, no delays. 
              Our Hedamo platform ensures instant access to trustworthy data for every decision you make.
            </p>

            {/* Key Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 transform transition-all duration-800 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group transform transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + idx * 150}ms` }}
              >
                <div className="h-full bg-white-custom rounded-lg border border-custom p-8 hover:border-teal hover:shadow-md transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center group-hover:bg-teal-light transition-colors duration-300">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary leading-relaxed text-sm mb-4">
                    {feature.description}
                  </p>

                  {/* Action Link */}
                  <button className="inline-flex items-center text-sm font-medium text-teal hover:text-green transition-colors duration-200 group/link">
                    Learn more
                    <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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

export default LiveReports;