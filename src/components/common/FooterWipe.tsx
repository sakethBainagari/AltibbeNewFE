import { useState } from 'react';

export default function FooterWithHoverWipe() {
  const [hovering, setHovering] = useState(false);

  return (
    <footer
      // 1️⃣ group class for descendant group-hover utilities
      className="group relative bg-[#DBE6EB] text-[#131619] overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* 2️⃣ black overlay (same as before) */}
      <div
        className="absolute inset-0 bg-black transition-transform duration-700 ease-out"
        style={{ transform: hovering ? 'translateY(0)' : 'translateY(100%)' }}
      />

      {/* 3️⃣ content layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-[clamp(1rem,5vw,3rem)] py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">ABOUT ALTIBBE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="group-hover:text-white transition-colors">About Us →</a>
              </li>
              <li>
                <span className="group-hover:text-white transition-colors">hedamo</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/ourwork" className="group-hover:text-white transition-colors">Our Work →</a>
              </li>
              <li>
                <a href="/blog" className="group-hover:text-white transition-colors">Blog & Media →</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">USE HEDAMO</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/hedamo" className="group-hover:text-white transition-colors">Hedamo System →</a>
              </li>
              <li>
                <a href="/collaborate" className="group-hover:text-white transition-colors">Collaborate →</a>
              </li>
              <li>
                <a href="/contact" className="group-hover:text-white transition-colors">Contact Us →</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">GET IN TOUCH</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="group-hover:text-white transition-colors">Email: contact@altibbe.com</span>
              </li>
              <li>
                <a href="https://linkedin.com/company/altibbe" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors">LinkedIn →</a>
              </li>
              <li>
                <a href="https://instagram.com/altibbe" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors">Instagram →</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom band */}
      <div className="relative z-10 bg-[#131619] text-[#9FF3FF] py-4 text-sm">
        <div className="max-w-7xl mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col sm:flex-row justify-between items-center">
          <span className="group-hover:text-white transition-colors">
            © {new Date().getFullYear()} Altibbe
          </span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="/" className="group-hover:text-white transition-colors">
            </a>
            <a href="/explore" className="group-hover:text-white transition-colors">
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
