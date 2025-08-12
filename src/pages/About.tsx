import Navbar from "../components/Navbar";
import AboutHero from "../components/v2/aboutpage/AboutHero";
import MissionEthos from "../components/v2/aboutpage/MissionEthos";
import Timeline from "../components/v2/aboutpage/Timeline";
import GlobalPresence from "../components/v2/aboutpage/GlobalPresence";
import WhatWeBuild from "../components/v2/aboutpage/WhatWeBuild";
import GovernanceEthics from "../components/v2/aboutpage/GovernanceEthics";
import LeadershipNote from "../components/v2/aboutpage/LeadershipNote";
import Alliances from "../components/v2/aboutpage/Alliances";
import CTASection from "../components/v2/aboutpage/CTASection";

export default function AboutPage() {
  return (
    <>
      <Navbar className="bg-white text-black"/>
      <main className="bg-white text-brand-text">
  <AboutHero />
  <MissionEthos />
  <GlobalPresence />
  <WhatWeBuild />
  <GovernanceEthics />
  <Timeline />
  <LeadershipNote />
  <Alliances />
  <CTASection />
      </main>
    </>
  );
}