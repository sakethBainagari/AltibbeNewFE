import { useEffect, useState, useRef } from "react";

const ParallaxReveal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const windowHeight = window.innerHeight;
      // Start as soon as user scrolls from the top (after Hero)
      const scrollY = window.scrollY;
      // Parallax section is immediately after Hero, so progress is based on scrollY from 0 to windowHeight
      let progress = Math.min(Math.max(scrollY / windowHeight, 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Use an ellipse/arc for the reveal instead of a circle
  // Limit the reveal so after first scroll, only part of the sun is visible
  const maxReveal = 40; // percent, adjust for how much of the sun is revealed after first scroll
  const revealHeight = Math.min(scrollProgress * maxReveal, maxReveal);
  const baseWidth = isMobile ? 40 : 60;
  const baseHeight = isMobile ? 10 : 18;
  const widthMultiplier = isMobile ? 2.5 : 4.5;
  const heightMultiplier = isMobile ? 1.2 : 2.2;
  const ellipseWidth = baseWidth + revealHeight * widthMultiplier;
  const ellipseHeight = baseHeight + revealHeight * heightMultiplier;
  const clipPath = `ellipse(${ellipseWidth}% ${ellipseHeight}% at 50% 100%)`;

  return (
  <section ref={sectionRef} className={`relative w-full h-screen max-h-[500px] md:max-h-[600px] overflow-hidden p-0 m-0`} style={{marginTop: 0, paddingTop: 0}}>
      {scrollProgress < 0.95 && (
        <div className="fixed bottom-0 left-0 w-full h-screen z-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-100 ease-out"
            style={{
              backgroundImage: `url('/lovable-uploads/668aff21-9655-4d2e-9359-444b60b36d46.png')`,
              clipPath: clipPath,
              transform: `translateY(${(1 - scrollProgress) * (isMobile ? 10 : 20)}px) scale(${1 + scrollProgress * (isMobile ? 0.05 : 0.1)})`,
              zIndex: 1
            }}
          >
            <div className="absolute inset-0 bg-background/20"></div>
          </div>
          {/* Foreground image with parallax and reveal */}
          <img
          //https://images.unsplash.com/photo-1613103756285-48a0c7ee6674?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          
        
            src="/sunrise1.png"
            alt="Sun Parallax"
            className="absolute left-0 bottom-0 w-full h-auto max-w-none z-20 pointer-events-none select-none transition-all duration-200"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 120}px) scale(${1 + scrollProgress * 0.15})`,
              opacity: scrollProgress > 0.01 ? 1 : 0,
              clipPath: clipPath,
              objectFit: 'cover'
            }}
          />
          {scrollProgress < 0.05 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div 
                className={`${isMobile ? 'w-20 h-10' : 'w-32 h-16'} bg-primary/10 rounded-t-full border-t-2 border-primary/30`}
                style={{
                  clipPath: "ellipse(40% 100% at 50% 100%)"
                }}
              ></div>
            </div>
          )}
        </div>
      )}
  {/* No extra spacer, section height is fixed to fit the parallax effect */}
    </section>
  );
};

export default ParallaxReveal;
