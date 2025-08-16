// src/components/v2/hedamopage/HedamoPillars.tsx
import { motion } from 'framer-motion';

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
  .text-blue { color: var(--accent-blue); }
  .text-amber { color: var(--accent-amber); }
  .bg-white-custom { background-color: var(--bg-white); }
  .bg-light { background-color: var(--bg-light); }
  .bg-off-white { background-color: var(--bg-off-white); }
  .border-custom { border-color: var(--border-gray); }
  .border-teal { border-color: var(--primary-teal); }
  .bg-teal { background-color: var(--primary-teal); }
  .bg-green { background-color: var(--accent-green); }
  .bg-amber { background-color: var(--accent-amber); }
  .bg-blue { background-color: var(--accent-blue); }

  /* Professional pillar-specific backgrounds */
  .bg-amber-light { background: linear-gradient(135deg, rgba(214, 158, 46, 0.1), rgba(237, 137, 54, 0.1)); }
  .bg-teal-light { background: linear-gradient(135deg, rgba(13, 115, 119, 0.1), rgba(56, 161, 105, 0.1)); }
  .bg-blue-light { background: linear-gradient(135deg, rgba(49, 130, 206, 0.1), rgba(37, 99, 235, 0.1)); }
  .bg-purple-light { background: linear-gradient(135deg, rgba(128, 90, 213, 0.1), rgba(159, 122, 234, 0.1)); }
  .bg-cyan-light { background: linear-gradient(135deg, rgba(13, 115, 119, 0.1), rgba(6, 182, 212, 0.1)); }

  .border-teal-light { border-color: rgba(13, 115, 119, 0.3); }
  .border-amber-light { border-color: rgba(214, 158, 46, 0.3); }
  .border-blue-light { border-color: rgba(49, 130, 206, 0.3); }
  .border-purple-light { border-color: rgba(128, 90, 213, 0.3); }
  .border-cyan-light { border-color: rgba(6, 182, 212, 0.3); }
`;

const pillars = [
  {
    id: "report",
    title: "Hedamo Report",
    subtitle: "Structured Reports for Confident Decisions",
    body: "Multilingual, policy-ready transparency reports: ingredients, sourcing, processing context, and market claims—organized for ministries and buyers.",
    bullets: [
      "Clear Provenance",
      "Health Context", 
      "Market Claims",
      "ESG Signals"
    ],
    cta: { label: "View Report Format", href: "#samples" },
    gradient: "linear-gradient(135deg, #d69e2e, #ed8936)",
    iconBg: "bg-amber-light",
    textColor: "text-amber",
    borderColor: "border-amber-light",
    hoverShadow: "hover:shadow-orange-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: "ai",
    title: "Hedamo AI",
    subtitle: "Intelligence for Policy & Market Access",
    body: "Models that transform product and trade data into signals for import programs, risk prioritization, and national goals.",
    bullets: [
      "Risk Signals",
      "Standards Alignment",
      "Program Planning",
      "Impact Tracking"
    ],
    cta: { label: "See AI Use Cases", href: "#use-cases" },
    gradient: "linear-gradient(135deg, #0d7377, #38a169)",
    iconBg: "bg-teal-light",
    textColor: "text-teal",
    borderColor: "border-teal-light",
    hoverShadow: "hover:shadow-teal-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "code",
    title: "Hedamo Code",
    subtitle: "Clarity at Every Scan",
    body: "A QR-linked gateway that brings reliable product information to consumers, retailers, and inspectors—instantly and securely.",
    bullets: [
      "Scan Anywhere",
      "Multilingual",
      "Offline Caching",
      "Accessible UI"
    ],
    cta: { label: "Experience Live Demo", href: "/demo" },
    gradient: "linear-gradient(135deg, #3182ce, #2563eb)",
    iconBg: "bg-blue-light",
    textColor: "text-blue",
    borderColor: "border-blue-light",
    hoverShadow: "hover:shadow-blue-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    id: "advisory",
    title: "Hedamo Advisory",
    subtitle: "Expert Guidance for Global Trade Success",
    body: "Advisory services that combine data insights with policy expertise—helping governments, exporters, and industry leaders navigate market requirements and seize growth opportunities.",
    bullets: [
      "Trade Strategy",
      "Compliance Roadmaps",
      "Market Intelligence", 
      "Capacity Building"
    ],
    cta: { label: "Explore Advisory Services", href: "#advisory-details" },
    gradient: "linear-gradient(135deg, #805ad5, #9f7aea)",
    iconBg: "bg-purple-light",
    textColor: "text-purple-600",
    borderColor: "border-purple-light",
    hoverShadow: "hover:shadow-purple-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "ecosystem",
    title: "Hedamo Ecosystem",
    subtitle: "A Connected Network for Sustainable Growth",
    body: "A collaborative platform linking producers, regulators, buyers, and technology partners—driving transparency, trust, and innovation across the entire supply chain.",
    bullets: [
      "Stakeholder Network",
      "Shared Data Standards",
      "Sustainable Practices",
      "Innovation Exchange"
    ],
    cta: { label: "Join the Ecosystem", href: "#join-ecosystem" },
    gradient: "linear-gradient(135deg, #0d7377, #06b6d4)",
    iconBg: "bg-cyan-light",
    textColor: "text-teal",
    borderColor: "border-cyan-light",
    hoverShadow: "hover:shadow-teal-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function HedamoPillars() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section id="pillars-of-hedamo" className="relative py-32 overflow-hidden" style={{ 
        scrollMarginTop: '6rem',
        background: `linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%)`
      }}>
        {/* Background decorations */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 20% 20%, rgba(13, 115, 119, 0.1), transparent 50%)`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-2 rounded-full font-semibold text-sm mb-6 border" style={{
              background: `linear-gradient(45deg, rgba(13, 115, 119, 0.1), rgba(56, 161, 105, 0.1))`,
              color: 'var(--primary-teal)',
              borderColor: 'var(--border-gray)'
            }}>
              Comprehensive Solutions
            </div>
            <h2 className="font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-primary mb-6 tracking-tight">
              Five Pillars of <br />
              <span style={{
                background: `linear-gradient(45deg, var(--primary-teal), var(--accent-blue))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Hedamo System
              </span>
            </h2>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed font-medium">
              Our comprehensive approach combines advanced technology, rigorous analysis, and ongoing support 
              to deliver unparalleled transparency in health and wellness products.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className={`group relative backdrop-blur-sm p-8 rounded-2xl border shadow-lg transition-all duration-500 ease-out overflow-hidden ${pillar.borderColor} ${pillar.hoverShadow}/20 hover:shadow-xl hover:-translate-y-2 ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 25px -5px rgba(45, 55, 72, 0.05), 0 4px 6px -2px rgba(45, 55, 72, 0.05)'
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                  style={{ background: pillar.gradient }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${pillar.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`${pillar.textColor} group-hover:scale-110 transition-transform duration-300`}>
                        {pillar.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-2xl text-primary mb-2 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className={`font-medium text-sm ${pillar.textColor} uppercase tracking-wider`}>
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-secondary leading-relaxed mb-6 text-base">
                    {pillar.body}
                  </p>

                  {/* Feature bullets */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {pillar.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: pillar.gradient }}
                        ></div>
                        <span className="text-sm text-secondary font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a 
                    href={pillar.cta.href}
                    className={`group/cta inline-flex items-center space-x-2 font-semibold text-base ${pillar.textColor} hover:opacity-80 transition-all duration-300`}
                    whileHover={{ x: 4 }}
                  >
                    <span>{pillar.cta.label}</span>
                    <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-secondary mb-6 text-lg">
              Ready to transform your product transparency strategy?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: `linear-gradient(45deg, var(--primary-teal), var(--accent-blue))`
              }}
              onMouseEnter={(e) => {
                e.target.style.background = `linear-gradient(45deg, var(--primary-teal-dark), var(--accent-blue))`;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = `linear-gradient(45deg, var(--primary-teal), var(--accent-blue))`;
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}