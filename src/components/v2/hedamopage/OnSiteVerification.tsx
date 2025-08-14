// src/components/v2/hedamopage/OnSiteVerification.tsx
import ArrowButton from "../../common/ArrowButton";
import { motion } from 'framer-motion';

export default function OnSiteVerification() {
  return (
    <section id="on-site-verification" className="bg-green-800 text-white" style={{ scrollMarginTop: '6rem' }}>
      {/* 🔲 full-width flex row */}
      <div className="flex flex-col lg:flex-row">
        {/* 📸 LEFT — 50%, farm verification image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[auto] bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&h=1080&q=80')", // Sheep on farm for on-site verification
          }}
        >
          <div className="absolute inset-0 bg-green-800/20"></div>
          <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg">
            <p className="text-sm text-green-800 font-medium">On-Site Verification Process</p>
            <p className="text-xs text-green-600">Altibbe's experts conducting field audits at organic farms</p>
          </div>
        </motion.div>

        {/* ✍️ RIGHT — 50%, vertically centered */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col justify-center py-16 px-[clamp(1rem,6vw,4rem)]"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-[clamp(1.75rem,3vw,2.5rem)] leading-tight mb-6"
          >
            On-Site Verification & <em className="not-italic text-green-300">Field Audits</em>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 mb-8"
          >
            <p className="body-text text-[1rem] leading-[1.6] text-white/90">
              Altibbe's experts conducting on-site verifications ensure that farms and producers meet the highest 
              standards of health and sustainability. The Hedamo System includes field audits, laboratory tests, 
              and supply chain tracing to create a <strong>360° view of product integrity</strong>.
            </p>
            <p className="body-text text-[1rem] leading-[1.6] text-white/90">
              By pairing such real-world inspections with digital transparency, Hedamo builds trust from the ground up. 
              Our comprehensive approach ensures authenticity and maintains the natural focus of our audit process.
            </p>
            
            <p className="body-text text-[1rem] leading-[1.6] text-white/90">
              By pairing real-world inspections with digital transparency, Hedamo builds trust from the ground up. 
              Our comprehensive approach ensures authenticity and maintains the natural focus of our audit process.
            </p>

            {/* Verification Process Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-700/20 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Field Audits</h4>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Farm practice verification</li>
                  <li>• Soil quality assessment</li>
                  <li>• Organic certification checks</li>
                  <li>• Sustainability practices</li>
                </ul>
              </div>
              <div className="bg-green-700/20 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Laboratory Tests</h4>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Nutritional analysis</li>
                  <li>• Contaminant screening</li>
                  <li>• Purity verification</li>
                  <li>• Quality assurance</li>
                </ul>
              </div>
              <div className="bg-green-700/20 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Supply Chain Tracing</h4>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Ingredient sourcing</li>
                  <li>• Processing verification</li>
                  <li>• Transportation tracking</li>
                  <li>• Storage conditions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <ArrowButton href="/verification-process">
              Learn About Our Verification Process
            </ArrowButton>
            <ArrowButton href="/field-audits">
              Field Audit Standards
            </ArrowButton>
            <ArrowButton href="/laboratory-testing">
              Laboratory Testing Protocols
            </ArrowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 