

import Navbar from "../../components/Navbar";
import OurWorkHero from "../../components/v2/ourwork/OurWorkHero.tsx";
import ImpactAreas from "../../components/v2/ourwork/ImpactAreas.tsx";
import LiveReports from "../../components/v2/ourwork/LiveReports.tsx";
import GlobalAlignment from "../../components/v2/ourwork/GlobalAlignment.tsx";
import CaseStudies from "../../components/v2/ourwork/CaseStudies.tsx";

export default function OurWorkPage() {
  return (
  <div className="font-poppins bg-white min-h-screen text-[#222]">
      <Navbar className="bg-white/90 backdrop-blur text-black pt-2 shadow-sm sticky top-0 z-30" />
      <main>
        {/* Hero Section with fade-in animation */}
  <section className="relative animate-fade-in bg-white">
          <OurWorkHero />
        </section>
        {/* Impact Areas with elegant spacing and divider */}
  <section className="relative z-10 py-20 bg-white shadow-lg animate-fade-in delay-100">
          <ImpactAreas />
        </section>
        {/* Live Reports with premium gradient and divider */}
  <section className="relative z-10 py-20 bg-white shadow-lg animate-fade-in delay-200">
          <LiveReports />
        </section>
        {/* Global Alignment with elegant spacing and divider */}
  <section className="relative z-10 py-20 bg-white shadow-lg animate-fade-in delay-300">
          <GlobalAlignment />
        </section>
        {/* Case Studies with premium gradient */}
  <section className="relative z-10 py-20 bg-white shadow-lg animate-fade-in delay-400">
          <CaseStudies />
        </section>
      </main>
    </div>
  );
}