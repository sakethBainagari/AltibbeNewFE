// IntroBlurb.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Typewriter component
const Typewriter = ({ text, speed = 50, delay = 1000, onComplete }: { text: string; speed?: number; delay?: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gray-900">
      {displayText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < displayText.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
      {isTyping && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default function IntroBlurb() {
  const [showMainText, setShowMainText] = useState(false);
  const missionText = "Health for Humanity\nOur core mission motto drives everything we do at Altibbe.";
  const mainText = "Altibbe Inc. is redefining health and transparency in the post-pandemic world, empowering consumers to make informed choices by ensuring complete transparency in food and wellness products. Rooted in innovation and timeless wisdom, we connect health-focused producers with people seeking quality and trust.";

  const handleTypewriterComplete = () => {
    setTimeout(() => {
      setShowMainText(true);
    }, 500); // Add a small delay to ensure smooth transition
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typewriter text={missionText} speed={15} delay={300} onComplete={handleTypewriterComplete} />
        </motion.div>
        
        {showMainText && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 px-2 sm:px-0">
              {mainText}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
} 