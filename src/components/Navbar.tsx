import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    img: 'https://plus.unsplash.com/premium_photo-1714510332132-b3074b75a312?q=80&w=1107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Innovation/health technology (replace with a more specific image if desired)
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
    img: 'https://organicabiotech.com/wp-content/uploads/2021/10/organic-farming-min.jpg', // Laboratory/analysis
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
    img: 'https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=', // Organic farm/mission
    links: [
      { label: 'Mission & Ethos', href: '/about#mission-ethos' },
      { label: 'Timeline & Legacy', href: '/about#timeline-legacy' },
      { label: 'Global Presence', href: '/about#global-presence' },
    ],
  },
  {
    label: 'Blog & Media',
    href: '/blog-media',
    img: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Blog/media content
    links: [
      { label: 'Blog Posts', href: '/blog-media#blog-posts' },
      { label: 'Social Media', href: '/blog-media#social-media' },
    ],
  },
  {
    label: 'Collaborate',
    href: '/collaborate',
    img: 'https://plus.unsplash.com/premium_photo-1723881617781-3251feea260c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Partnership/collaboration
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
  className = '',
  mobileClassName = 'bg-white',
}) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Only allow transparency on homepage
  const [isTransparent, setIsTransparent] = useState(isHome);

  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const show = useScrollHide();

  // Listen for scroll to toggle navbar background, but only on homepage
  useEffect(() => {
    if (!isHome) {
      setIsTransparent(false);
      return;
    }
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

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
          fixed top-0 left-0 right-0 z-40 h-20 mb-8
          transition-opacity duration-300
          ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          ${isTransparent ? 'bg-transparent' : 'bg-white shadow'}
          ${isTransparent ? 'text-white' : 'text-black'}
        `}
        style={{
          transition: 'background 0.3s, box-shadow 0.3s',
          boxShadow: isTransparent ? 'none' : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          <Link to="/" className="flex items-center">
            <img
              src={isTransparent ? "/altibbeLogoForNavBar.png" : "/altibbeLogo.png"}
              alt="Altibbe Logo"
              className={isTransparent ? "h-36 w-auto transition-all duration-300" : "h-12 w-auto transition-all duration-300"}
            />
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
                  className={`flex items-center gap-1 font-medium py-2 transition-all duration-300
                    ${isTransparent ? 'text-white' : 'text-black'}
                    group
                  `}
                  style={{
                    // No text-shadow by default
                  }}
                  onClick={() => scrollToSection(item.href)}
                >
                  <span
                    className={``}
                    style={{
                      transition: 'text-shadow 0.3s',
                    }}
                  >
                    {item.label}
                  </span>
                  {item.links && <ChevronDown size={16} color={isTransparent ? 'white' : 'black'} />}
                  <style>{`
                    .group:hover > span {
                      text-shadow: ${isTransparent ? '0 0 3px #fff, 0 1px 3px #fff' : 'none'};
                    }
                  `}</style>
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
                                  className="block py-2 text-sm hover:underline text-[#131619]"
                                >
                                  {l.label}
                                </a>
                              ) : (
                                <Link
                                  to={l.href}
                                  className="block py-2 text-sm hover:underline text-[#131619]"
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

          <button className={`md:hidden ${isTransparent ? 'text-white' : 'text-black'}`} onClick={() => setOpen(!open)} aria-label="toggle menu">
            {open ? <X size={24} color={isTransparent ? 'white' : 'black'} /> : <Menu size={24} color={isTransparent ? 'white' : 'black'} />}
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
