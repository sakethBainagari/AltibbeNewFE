import React from "react";

const OurWorkHero: React.FC = () => (
  <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-28 bg-white">
    <video
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      src="/videos/farm-to-table.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90 z-10" />
    <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
        Our Work – Turning Transparency into Trust
      </h1>
      <h2 className="text-xl md:text-2xl font-montserrat mb-4 text-yellow-700 font-semibold">
        At Altibbe, we are redefining how the world sees food, wellness, and supply chain integrity.
      </h2>
      <p className="text-lg md:text-xl font-poppins text-yellow-800">
        We work at the intersection of sustainability, technology, and trust — delivering AI-powered transparency solutions for governments, industries, and consumers across the globe.
      </p>
    </div>
  </section>
);

export default OurWorkHero;
