// components/Hero.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // Array of background images - updated to darker vintage style
  const backgroundImages = [
    "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&h=1080&q=80')", // Dark organic farm
    "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1080&q=80')", // Dark nature
    "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&h=1080&q=80')", // Dark health food
    "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1920&h=1080&q=80')", // Dark sunrise
    "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&h=1080&q=80')", // Dark wheat field
  ];

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  // Auto slideshow effect
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [autoSlide, backgroundImages.length]);

  // Mobile-safe 100vh
  useEffect(() => {
    const setVh = () =>
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1) - adjust for mobile
      const progress = Math.min(scrollTop / (documentHeight * (isMobile ? 0.4 : 0.6)), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Calculate the reveal height based on scroll progress
  const revealHeight = Math.min(scrollProgress * 100, 100);
  
  // Calculate the clip-path for the reveal effect - different for mobile
  const baseRadius = isMobile ? 3 : 5;
  const multiplier = isMobile ? 2.5 : 1.8;
  const clipPath = `circle(${baseRadius + revealHeight * multiplier}% at 50% 100%)`;

  return (
    <section className={`relative ${isMobile ? 'h-[100vh]' : 'h-[150vh]'} overflow-hidden`}>
      {/* Fixed container for the parallax effect - hide when scroll is complete */}
      {scrollProgress < 0.95 && (
        <div className="fixed bottom-0 left-0 w-full h-screen z-0">
          {/* Sun image with reveal effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-100 ease-out"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1727534089819-4b4a72bb11b0?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              clipPath: clipPath,
              transform: `translateY(${(1 - scrollProgress) * (isMobile ? 10 : 20)}px) scale(${1 + scrollProgress * (isMobile ? 0.05 : 0.1)})`
            }}
          >
            {/* Overlay to blend with the theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-300/40 to-yellow-200/30"></div>
          </div>
        </div>
      )}

      {/* Main hero content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        {/* Background image carousel */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: backgroundImages[currentImageIndex],
          }}
        />
        
        {/* Dark overlay for vintage look */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Pioneering Health Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto"
          >
            Leadership in the health industry through innovation, partnerships, and sustainability, 
            empowering virtuous producers to achieve global recognition and quality.
          </motion.p>
          
          <motion.a
            href="#discover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300 group"
          >
            Discover Health Ecosystem
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          onMouseEnter={() => setAutoSlide(false)}
          onMouseLeave={() => setAutoSlide(true)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          onMouseEnter={() => setAutoSlide(false)}
          onMouseLeave={() => setAutoSlide(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              onMouseEnter={() => setAutoSlide(false)}
              onMouseLeave={() => setAutoSlide(true)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Spacer to create scroll distance */}
      <div className="h-full"></div>
    </section>
  );
}