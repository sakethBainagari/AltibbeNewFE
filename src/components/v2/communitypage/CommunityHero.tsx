// src/components/v2/communitypage/CommunityHero.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function CommunityHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [headingRef.current, taglineRef.current].filter(Boolean) as HTMLElement[];

    // initial state
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    });

    // reveal with stagger
    els.forEach((el, idx) =>
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + idx * 150)
    );
  }, []);

  return (
    <section className="w-full min-h-[80vh] mb-2">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* LEFT-ALIGNED TEXT */}
        <div className="text-left mb-24 p-2">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold text-gray-900"
          >
            Join a thriving and diverse{' '}
            <em className="not-italic text-cyan-600">Community</em>
          </h1>
          <p
            ref={taglineRef}
            className="mt-6 max-w-3xl text-lg md:text-xl text-gray-700"
          >
            Embark on a journey with the XDC Network's enthusiastic early adopters,
            passionate developers, and the global community, who play an everyday role
            in the network's usage and adoption.
          </p>
        </div>

        {/* FULL-WIDTH HERO IMAGE with wavy top */}
        <div className="w-full max-h-[60vh] overflow-hidden">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <clipPath id="wavyCorners" clipPathUnits="userSpaceOnUse">
                <path d="
                  M0,100 
                  C40,90 60,60 100,50 
                  C140,40 160,10 200,0 
                  L600,0 
                  C640,10 660,40 700,50 
                  C740,60 760,90 800,100 
                  L800,400 
                  L0,400 
                  Z
                " />
              </clipPath>
            </defs>

            <image
              href="/image.png"
              width="800"
              height="400"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#wavyCorners)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}