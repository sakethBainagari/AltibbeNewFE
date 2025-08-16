// src/components/v2/blogmediapage/FeaturedPost.tsx
import React from "react";
import { motion } from "framer-motion";

export default function FeaturedPost() {
  return (
    <section id="featured-article" className="mb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Featured label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <span className="text-sm font-medium text-[#0d7377] bg-[#f9fafb] px-4 py-2 rounded-full border border-[#e2e8f0] font-['Inter','Helvetica_Neue',Arial,sans-serif]">
              FEATURED ARTICLE
            </span>
          </div>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="group"
        >
          <div className="bg-white rounded-3xl shadow-sm border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 w-full relative overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-[#f7fafc] to-[#f9fafb] relative">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Modern business meeting with technology presentation"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* UAE flag accent */}
                  <div className="absolute top-6 left-6 w-12 h-8 bg-gradient-to-r from-red-500 via-white to-green-500 rounded-sm shadow-sm opacity-80"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full p-12 flex flex-col justify-center">
                <div className="space-y-6">


                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-light text-[#2d3748] leading-tight group-hover:text-[#0d7377] transition-colors duration-300 font-['Playfair_Display',Georgia,serif]">
                    UAE and Altibbe Announce Joint 
                    <span className="block font-medium bg-gradient-to-r from-[#0d7377] to-[#38a169] bg-clip-text text-transparent">
                      Transparency Pilot
                    </span>
                  </h2>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-[#4a5568] leading-relaxed font-normal font-['Inter','Helvetica_Neue',Arial,sans-serif]">
                    Altibbe, through its Hedamo system, has partnered with leading UAE trade authorities to launch a national pilot for AI-powered product transparency. The initiative is designed to align seamlessly with CEPA objectives and Vision 2030 priorities, positioning the UAE as a global benchmark for digital trade trust.
                  </p>


                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}