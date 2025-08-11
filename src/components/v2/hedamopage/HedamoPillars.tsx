// src/components/v2/hedamopage/HedamoPillars.tsx
import ArrowButton from "../../common/ArrowButton";
import { motion } from 'framer-motion';

const pillars = [
  { 
    id: "hedamo-report",
    title: "Hedamo Report", 
    subtitle: "Transparency Reporting",
    desc: "Multi-dimensional analysis covering nutritional benefits to sourcing practices. Each report links to a unique QR code, providing consumers full transparency into product integrity and earning Platinum, Gold, or Green labels for excellence.",
    detailedDesc: "The Hedamo Report is a comprehensive in-depth review that products undergo, based on voluntary disclosures by the producer, on-site verifications, and data analysis. Each report is linked to a unique QR code on the product's label, which consumers can scan to see the full details.",
    features: [
      "Ingredients & Nutrition Analysis",
      "Sourcing & Farm Practices",
      "Sustainability & ESG Factors", 
      "Health Benefits & Certifications",
      "Supply Chain Transparency",
      "Quality Assurance Metrics"
    ],
    labels: [
      { name: "Platinum", color: "text-gray-600", bgColor: "bg-gray-100" },
      { name: "Gold", color: "text-yellow-600", bgColor: "bg-yellow-100" },
      { name: "Green", color: "text-green-600", bgColor: "bg-green-100" }
    ],
    link: "/hedamo#hedamo-report",
    color: "text-yellow-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  { 
    id: "hedamo-ai",
    title: "Hedamo AI", 
    subtitle: "Intelligent Analysis",
    desc: "Advanced algorithms enhance traceability and insights, tracking ingredient journeys from farm to shelf while flagging anomalies. AI enables personalized health solutions and actionable feedback for continuous improvement.",
    detailedDesc: "Hedamo AI leverages advanced algorithms to enhance traceability and insight. AI helps track each ingredient's journey from farm to shelf, flagging any anomalies and ensuring data integrity. It can also learn from health data to suggest product improvements or consumer recommendations.",
    features: [
      "Ingredient Journey Tracking",
      "Anomaly Detection & Flagging",
      "Predictive Health Insights",
      "Personalized Recommendations",
      "Continuous Learning Algorithms",
      "Real-time Data Analysis"
    ],
    benefits: "This AI-driven approach means producers get actionable feedback (e.g., how to improve their health profile or sustainability), and consumers get up-to-date, reliable information.",
    link: "/hedamo#hedamo-ai",
    color: "text-green-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  { 
    id: "hedamo-code",
    title: "Hedamo Code", 
    subtitle: "Technology & Traceability",
    desc: "Cutting-edge technology from secure blockchain ledgers to IoT-enabled QR codes ensures every data point is verifiable and tamper-proof, creating an immutable trail of transparency consumers can trust.",
    detailedDesc: "Hedamo employs cutting-edge technology – from secure blockchain ledgers to IoT-enabled QR codes – to ensure every data point is verifiable and tamper-proof. The QR code on each Hedamo label connects to a stored record of the product's review, creating an immutable trail of transparency.",
    scenario: "Imagine picking up a jar with a Hedamo label, scanning its QR code, and instantly seeing where its ingredients came from, how it was processed, and why it's good for you – that's the power of Hedamo Code.",
    features: [
      "Blockchain Security",
      "IoT-Enabled QR Codes",
      "Immutable Data Records",
      "Real-time Verification",
      "Tamper-Proof System",
      "Consumer-Friendly Interface"
    ],
    link: "/hedamo#hedamo-code",
    color: "text-blue-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  { 
    id: "hedamo-advisory",
    title: "Hedamo Advisory", 
    subtitle: "Consulting & Ongoing Support",
    desc: "Strategic consulting and ongoing support helping organic farms and producers overcome challenges, adopt best practices, maintain standards, and achieve regulatory compliance across global markets.",
    detailedDesc: "Through Hedamo Advisory, Altibbe works hand-in-hand with organic farms, food producers, and even institutions to continually raise the bar. This includes strategic consulting – helping producers overcome challenges and adopt best practices – and on-site training for maintaining standards.",
    regionalExpertise: [
      { region: "UAE", focus: "Food security metrics and AI-driven oversight" },
      { region: "India", focus: "FSSAI compliance and natural farming techniques" },
      { region: "USA", focus: "USDA Organic and FDA wellness guidelines" },
      { region: "KSA", focus: "Halal traceability and Vision 2030 targets" }
    ],
    features: [
      "Strategic Consulting",
      "On-Site Training",
      "Regulatory Compliance",
      "Certification Guidance",
      "Ongoing Support",
      "Regional Expertise"
    ],
    link: "/hedamo#hedamo-advisory",
    color: "text-purple-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
];

export default function HedamoPillars() {
  return (
    <section className="py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-primary-800 mb-4">
            Four Pillars of Hedamo System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines advanced technology, rigorous analysis, and ongoing support 
            to deliver unparalleled transparency in health and wellness products.
          </p>
        </motion.div>

        {/* 2x2 Matrix of Enhanced Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              id={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600 rounded-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${pillar.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-xl flex items-center justify-center`}>
                    <div className={pillar.color}>
                      {pillar.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className={`font-serif text-2xl font-bold mb-1 ${pillar.color}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{pillar.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {pillar.detailedDesc}
                </p>

                {/* Special content for each pillar */}
                {pillar.id === "hedamo-report" && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      <strong>Key Analysis Areas:</strong>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Hedamo issues</strong> 
                        {pillar.labels.map((label, i) => (
                          <span key={i} className={`mx-1 px-2 py-1 rounded text-xs font-medium ${label.bgColor} ${label.color}`}>
                            {label.name}
                          </span>
                        ))}
                        <span className="ml-1">labels to top-performing products, signifying excellence in health practices, sustainability, and uniqueness.</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Each label is more than a stamp – it's backed by the full Hedamo Report, so consumers can trust what they see.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Altibbe's flagship output</strong> is this report, which supports producers in differentiating their products with <strong>credible information</strong>.
                      </p>
                    </div>
                  </div>
                )}

                {pillar.id === "hedamo-ai" && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      <strong>AI Capabilities:</strong>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Benefit:</strong> {pillar.benefits}
                      </p>
                      <p className="text-sm text-green-800 mt-2">
                        <strong>Hedamo AI is exploring personalized health solutions</strong> – indicating Altibbe's vision of an AI companion that guides consumers toward better choices. This shows Hedamo is not static; it's intelligent and evolving.
                      </p>
                    </div>
                  </div>
                )}

                {pillar.id === "hedamo-code" && (
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 italic">
                        "{pillar.scenario}"
                      </p>
                      <p className="text-sm text-blue-800 mt-2">
                        <strong>Using blockchain</strong>, once a product's data is recorded, it cannot be altered without leaving a trace, adding an extra layer of trust to the Hedamo system.
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Technology Features:</strong>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pillar.id === "hedamo-advisory" && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      <strong>Advisory Services:</strong>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Regional Expertise:</strong>
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {pillar.regionalExpertise.map((expertise, i) => (
                          <div key={i} className="text-xs">
                            <span className="font-medium text-purple-600">{expertise.region}:</span>
                            <span className="text-gray-600 ml-1">{expertise.focus}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        <strong>Our partnerships for health standards</strong> mean we don't just certify and leave – we foster enduring relationships, offering ongoing recommendations to help producers enhance quality and sustainability over time.
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <ArrowButton href={pillar.link}>Learn More →</ArrowButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 