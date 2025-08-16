import React, { useState, useEffect } from "react";

const OurWorkHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
  <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7fafc] via-[#f9fafb] to-[#ffffff] pt-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-[#0d7377]/10 to-[#38a169]/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-[#3182ce]/8 to-[#0d7377]/8 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '15%',
            bottom: '30%',
          }}
        />
      </div>

      {/* Video Background with Enhanced Overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/farm-to-table.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Enhanced Text Content */}
          <div className="space-y-8">
            {/* Decorative Element */}
            <div 
              className={`w-20 h-1 bg-gradient-to-r from-[#0d7377] to-[#38a169] rounded-full transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            />
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transform transition-all duration-1000 delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <span className="block bg-gradient-to-r from-[#2d3748] via-[#4a5568] to-[#2d3748] bg-clip-text text-transparent">
                  Turning
                </span>
                <span className="block bg-gradient-to-r from-[#0d7377] via-[#38a169] to-[#0d7377] bg-clip-text text-transparent animate-pulse">
                  Transparency
                </span>
                <span className="block bg-gradient-to-r from-[#2d3748] via-[#4a5568] to-[#2d3748] bg-clip-text text-transparent">
                  into Trust
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p 
              className={`text-lg md:text-xl text-[#4a5568] font-light leading-relaxed max-w-2xl transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              We are redefining how the world sees{' '}
              <span className="text-[#0d7377] font-medium">food</span>,{' '}
              <span className="text-[#38a169] font-medium">wellness</span>, and{' '}
              <span className="text-[#3182ce] font-medium">supply chain integrity</span>.
            </p>

            {/* Description */}
            <p 
              className={`text-base text-[#4a5568] leading-relaxed max-w-lg transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              We work at the intersection of sustainability, technology, and trust — delivering 
              AI-powered transparency solutions for governments, industries, and consumers across the globe.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#0d7377] to-[#38a169] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                Explore Our Work
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button className="px-8 py-4 border-2 border-[#e2e8f0] text-[#4a5568] font-semibold rounded-full hover:border-[#0d7377] hover:text-[#0d7377] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Enhanced Image with Effects */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d7377]/10 to-[#38a169]/10 rounded-3xl blur-2xl transform rotate-6 scale-110" />
            
            {/* Main image container */}
            <div 
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-2'
              }`}
            >
              <div className="relative group">
                {/* Image with enhanced styling */}
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                  alt="Altibbe Our Work - Sustainable Agriculture"
                  className="w-full max-w-xs aspect-[3/4] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#0d7377] to-[#38a169] rounded-full opacity-80 blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#3182ce] to-[#0d7377] rounded-full opacity-60 blur-lg" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-2 text-[#a0aec0]">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#e2e8f0] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#0d7377] rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkHero;