// src/components/v2/hedamopage/HedamoHero.tsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


export default function HedamoHero() {
  // Animated data dots
  const dots = Array.from({ length: 18 });

  return (
    <section id="overview" className="relative py-24 bg-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="text-left mb-16">
          <h1 className="text-[clamp(4rem,6vw,6rem)] leading-none tracking-tight text-green-700 font-bold">
            Hedamo by Altibbe <br />
            <span className="text-[clamp(2.5rem,4vw,4rem)] font-semibold">The Transparency Engine</span>
          </h1>
          <p className="mt-4 text-[clamp(1.5rem,2vw,2rem)] text-green-600 font-medium">
            An AI-powered system for structured product clarity—designed for governments, institutions, and producers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-14">
          <a
            href="#report"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-yellow-400 text-black shadow-lg hover:bg-yellow-300 transition"
          >
            Explore the Pillars &rarr;
          </a>
          <a
            href="/contact?type=strategic-briefing"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            Request Strategic Briefing &rarr;
          </a>
        </div>

        {/* Keep the previous hero image and grid if needed, or remove for pure content */}
      </div>
    </section>
  );
}