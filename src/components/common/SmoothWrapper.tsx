// components/SmoothWrapper.tsx
import React, { useEffect, useState } from 'react';

export default function SmoothWrapper() {
  const [scrollY, setScrollY] = useState(0);

  /* keep the vh helper */
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

  /* scroll tracking for paper effect */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const paperCurlTransform = `perspective(1000px) rotateX(${Math.min(scrollY * 0.05, 15)}deg)`;

  return (
    <section
      style={{ height: 'calc(var(--vh, 1vh) * 120)' }}
      className="
        relative
        z-10
        w-full
        flex
        items-center
        justify-center
        bg-[rgb(19,22,25)]
        overflow-hidden
      "
    >
      {/* Paper furling effect at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-8 bg-white shadow-lg"
        style={{
          transform: paperCurlTransform,
          transformOrigin: 'top center',
          borderRadius: '0 0 50% 50%',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      />
      
      {/* Additional paper curl shadow */}
      <div 
        className="absolute top-2 left-0 right-0 h-6 bg-gray-100 opacity-60"
        style={{
          transform: `${paperCurlTransform} translateZ(-10px)`,
          transformOrigin: 'top center',
          borderRadius: '0 0 40% 40%',
        }}
      />



      {/* subtle overlay so text above remains readable */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}