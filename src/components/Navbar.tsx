import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

// Smooth scroll function for anchor links
const scrollToSection = (href: string) => {
  const hash = href.split('#')[1];
  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const navData = [
  {
    label: 'Our Work',
    href: '/our-work',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Innovation/health technology
    links: [
      { label: 'Innovation Roadmap', href: '/our-work#innovation-roadmap' },
      { label: 'AI Health Solutions', href: '/our-work#ai-health-solutions' },
      { label: 'Natural Supplements', href: '/our-work#natural-supplements' },
      { label: 'Sustainable Fashion', href: '/our-work#sustainable-fashion' },
    ],
  },
  {
    label: 'Hedamo',
    href: '/hedamo',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Laboratory/analysis
    links: [
      { label: 'Hedamo System', href: '/hedamo#hedamo-system' },
      { label: 'Four Pillars of Hedamo System', href: '/hedamo#hedamo-report' },
      { label: 'Global Alignment', href: '/hedamo#global-alignment' },
      { label: 'On-Site Verification', href: '/hedamo#on-site-verification' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&h=300&q=80', // Organic farm/mission
    links: [
      { label: 'Mission & Ethos', href: '/about#mission-ethos' },
      { label: 'Timeline & Legacy', href: '/about#timeline-legacy' },
      { label: 'Global Presence', href: '/about#global-presence' },
    ],
  },
  {
    label: 'Blog & Media',
    href: '/blog-media',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Blog/media content
    links: [
      { label: 'Blog Posts', href: '/blog-media#blog-posts' },
      { label: 'Social Media', href: '/blog-media#social-media' },
    ],
  },
  {
    label: 'Collaborate',
    href: '/collaborate',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&h=300&q=80', // Partnership/collaboration
    links: [
      { label: 'Partnership Opportunities', href: '/collaborate#partnership-opportunities' },
      { label: 'Strategic Partnerships', href: '/collaborate#partnership-opportunities' },
      { label: 'Government Alliances', href: '/collaborate#partnership-opportunities' },
      { label: 'Producer Engagement', href: '/collaborate#partnership-opportunities' },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];

function useScrollHide(threshold = 60) {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setShow(y < lastY || y <= threshold);
      setLastY(y);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [lastY, threshold]);

  return show;
}

export default function Navbar({
  className = 'bg-[#131619]',
  mobileClassName = 'bg-white',
}) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const show = useScrollHide();

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

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className={`
          text-accent-mint fixed top-0 left-0 right-0 z-40 h-20 mb-8
          transition-opacity duration-300
          ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          <Link to="/" className="flex items-center">
            <img src="/altibbeLogo.png" alt="Altibbe Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navData.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.links && setSubOpen(item.label)}
                onMouseLeave={() => setSubOpen(null)}
              >
                <Link 
                  to={item.href} 
                  className="flex items-center gap-1 font-medium py-2 hover:text-black hover:drop-shadow-lg transition-all duration-300"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                  {item.links && <ChevronDown size={16} />}
                </Link>

                {item.links && subOpen === item.label && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-96 z-50"
                    onMouseEnter={() => setSubOpen(item.label)}
                    onMouseLeave={() => setSubOpen(null)}
                  >
                    <div className="bg-white text-[#131619] rounded-lg shadow-2xl p-5 flex gap-5 mt-2">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-48 h-32 object-cover rounded"
                      />
                      <ul className="flex-1 space-y-0">
                        {item.links?.map((l, idx) => {
                          const isExternal = l.href.startsWith('http') || l.href.startsWith('mailto:');
                          return (
                            <li
                              key={l.label}
                              className={`border-b border-[#131619]/20 ${
                                idx === item.links!.length - 1 ? 'border-b-0' : ''
                              }`}
                            >
                              {isExternal ? (
                                <a
                                  href={l.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-2 text-sm hover:underline"
                                >
                                  {l.label}
                                </a>
                              ) : (
                                <Link
                                  to={l.href}
                                  className="block py-2 text-sm hover:underline"
                                  onClick={() => scrollToSection(l.href)}
                                >
                                  {l.label}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`
          fixed inset-0 z-50 text-[#131619] transform transition-transform md:hidden
          ${open ? 'translate-x-0' : '-translate-x-full'}
          ${mobileClassName}
        `}
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src="/altibbeLogo.png" alt="Altibbe Logo" className="h-10 w-auto" />
          <button onClick={() => setOpen(false)}><X size={24} /></button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          {navData.map((item) => (
            <div key={item.label}>
              <div className="flex">
                <Link
                  to={item.href}
                  className="flex-1 font-semibold py-2"
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </Link>
                <button
                  className="px-2"
                  onClick={() =>
                    setSubOpen(subOpen === item.label ? null : item.label)
                  }
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${subOpen === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
              {subOpen === item.label && (
                <ul className="pl-4 mt-2 space-y-0">
                  {item.links?.map((l, idx) => {
                    const isExternal = l.href.startsWith('http') || l.href.startsWith('mailto:');
                    return (
                      <li key={l.label} className="border-b border-[#131619]/20">
                        {isExternal ? (
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2"
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link
                            to={l.href}
                            className="block py-2"
                            onClick={() => {
                              setOpen(false);
                              scrollToSection(l.href);
                            }}
                          >
                            {l.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
