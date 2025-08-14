

import Navbar from "../../components/Navbar";
import OurWorkHero from "../../components/v2/ourwork/OurWorkHero.tsx";
import ImpactAreas from "../../components/v2/ourwork/ImpactAreas.tsx";
import LiveReports from "../../components/v2/ourwork/LiveReports.tsx";
import GlobalAlignment from "../../components/v2/ourwork/GlobalAlignment.tsx";
import CaseStudies from "../../components/v2/ourwork/CaseStudies.tsx";

export default function OurWorkPage() {
  return (
  <div className="font-poppins bg-gradient-to-b from-[#f8fafc] via-[#e0e7ef] to-[#f8fafc] min-h-screen text-[#222]">
      <Navbar className="bg-white/90 backdrop-blur text-black pt-2 shadow-sm sticky top-0 z-30" />
      <main>
        <section className="relative">
          <OurWorkHero />
        </section>
        <section className="relative z-10 py-16 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
          <ImpactAreas />
        </section>
        <section className="relative z-10 py-16 bg-gradient-to-b from-blue-50/60 to-white/80 border-b border-neutral-200">
          <LiveReports />
        </section>
        <section className="relative z-10 py-16 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
          <GlobalAlignment />
        </section>
        <section className="relative z-10 py-16 bg-gradient-to-b from-white/80 to-blue-50/60">
          <CaseStudies />
        </section>
      </main>
    </div>
  );
}