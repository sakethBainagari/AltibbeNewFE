'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dividerVariants = {
    hidden: { 
      width: 0,
      opacity: 0
    },
    visible: {
      width: '6rem',
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1.2
      }
    }
  };

  return (
    <section 
      id="about-altibbe" 
      className="relative w-full min-h-screen overflow-hidden" 
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Enhanced Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
          filter: 'brightness(0.4) contrast(1.1) saturate(1.2)',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: 'linear' }}
      />
      
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d7377]/90 via-black/80 to-[#2d3748]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex items-center min-h-screen">
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left max-w-5xl"
        >
          {/* Company Name */}
          <motion.h1
            variants={itemVariants}
            className="relative font-['Playfair_Display',Georgia,serif]"
          >
            <span className="block text-6xl md:text-8xl lg:text-9xl font-light text-white mb-4 tracking-tight">
              <em className="not-italic text-[#38a169] font-extralight relative">
                Altibbe
                {/* Professional glow effect */}
                <span className="absolute inset-0 text-[#38a169]/20 blur-sm">Altibbe</span>
              </em>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#38a169]/80 mb-6 tracking-wide leading-tight font-['Playfair_Display',Georgia,serif]">
              Innovation for Global Health Integrity
            </h2>
            
            {/* Animated Divider - Professional */}
            <motion.div 
              variants={dividerVariants}
              className="h-0.5 bg-gradient-to-r from-[#38a169] to-[#0d7377] shadow-lg shadow-[#38a169]/20"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed font-normal tracking-wide max-w-4xl font-['Inter','Helvetica_Neue',Arial,sans-serif]"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.6'
            }}
          >
            We build systems that make trade truthful. From transparency reporting to AI policy intelligence, 
            Altibbe partners with nations and producers to raise standards—quietly, rigorously, globally.
          </motion.p>
        </motion.div>
      </div>

      {/* Elegant Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      {/* Floating Particles Effect - Professional Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#38a169]/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  );
}